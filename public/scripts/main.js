// ============================================
// Restaurant Business Academy - Vanilla JS
// ============================================

document.addEventListener("DOMContentLoaded", () => {
  // ---- Navigation Scroll Effect ----
  const nav = document.getElementById("main-nav");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.classList.add("nav-scrolled");
    } else {
      nav.classList.remove("nav-scrolled");
    }
  });

  // ---- Mobile Menu Toggle ----
  const mobileToggle = document.getElementById("mobile-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const bars = mobileToggle.querySelectorAll("span");
  let mobileOpen = false;

  mobileToggle.addEventListener("click", () => {
    mobileOpen = !mobileOpen;
    if (mobileOpen) {
      mobileMenu.classList.add("mobile-open");
      bars[0].classList.add("bar-top-open");
      bars[1].classList.add("bar-mid-open");
      bars[2].classList.add("bar-bot-open");
    } else {
      mobileMenu.classList.remove("mobile-open");
      bars[0].classList.remove("bar-top-open");
      bars[1].classList.remove("bar-mid-open");
      bars[2].classList.remove("bar-bot-open");
    }
  });

  // Close mobile menu on link click
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileOpen = false;
      mobileMenu.classList.remove("mobile-open");
      bars[0].classList.remove("bar-top-open");
      bars[1].classList.remove("bar-mid-open");
      bars[2].classList.remove("bar-bot-open");
    });
  });

  // ---- Hero Parallax Mouse Effect ----
  const hero = document.getElementById("hero");
  const heroBg = document.getElementById("hero-bg");
  if (hero && heroBg) {
    hero.addEventListener("mousemove", (e) => {
      const rect = hero.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      heroBg.style.transform = `scale(1.1) translate(${x * -20}px, ${y * -20}px)`;
    });
  }

  // ---- Hero Load Animation ----
  const heroElements = document.querySelectorAll(".hero-animate");
  setTimeout(() => {
    heroElements.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add("hero-visible");
      }, i * 200);
    });
  }, 300);

  // ---- Scroll Reveal (Intersection Observer) ----
  const revealElements = document.querySelectorAll("[data-reveal]");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.revealDelay || 0;
          setTimeout(() => {
            entry.target.classList.add("revealed");
          }, parseInt(delay));
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );
  revealElements.forEach((el) => revealObserver.observe(el));

  // ---- Course Carousel Scroll ----
  const carouselTrack = document.getElementById("carousel-track");
  const btnLeft = document.getElementById("carousel-left");
  const btnRight = document.getElementById("carousel-right");

  if (btnLeft && btnRight && carouselTrack) {
    btnLeft.addEventListener("click", () => {
      carouselTrack.scrollBy({ left: -640, behavior: "smooth" });
    });
    btnRight.addEventListener("click", () => {
      carouselTrack.scrollBy({ left: 640, behavior: "smooth" });
    });
  }

  // ---- Testimonial Auto-Rotate ----
  const testimonials = document.querySelectorAll(".testimonial-item");
  const testimonialAuthors = document.querySelectorAll(".testimonial-author");
  const testimonialDots = document.querySelectorAll(".testimonial-dot");
  let activeTestimonial = 0;

  function showTestimonial(index) {
    testimonials.forEach((t, i) => {
      t.classList.toggle("testimonial-active", i === index);
    });
    testimonialAuthors.forEach((a, i) => {
      a.classList.toggle("testimonial-author-active", i === index);
    });
    testimonialDots.forEach((d, i) => {
      if (i === index) {
        d.classList.add("dot-active");
      } else {
        d.classList.remove("dot-active");
      }
    });
    activeTestimonial = index;
  }

  testimonialDots.forEach((dot, i) => {
    dot.addEventListener("click", () => showTestimonial(i));
  });

  setInterval(() => {
    showTestimonial((activeTestimonial + 1) % testimonials.length);
  }, 5000);

  // ---- Floating Particles in Hero ----
  const particleContainer = document.getElementById("particles");
  if (particleContainer) {
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.top = Math.random() * 100 + "%";
      particle.style.animationDuration = 3 + Math.random() * 4 + "s";
      particle.style.animationDelay = Math.random() * 2 + "s";
      particleContainer.appendChild(particle);
    }
  }

  // ---- Smooth scroll for anchor links ----
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});



// ============================================
// Added: Multi-page prototype flow (frontend only)
// ============================================

const store = {
  get(key, fallback=null){
    try{ const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }catch(e){ return fallback; }
  },
  set(key, value){
    try{ localStorage.setItem(key, JSON.stringify(value)); }catch(e){}
  },
  del(key){
    try{ localStorage.removeItem(key); }catch(e){}
  }
};

async function loadCourses(){
  try{
    const res = await fetch("./data/courses.json", {cache:"no-store"});
    if(!res.ok) throw new Error("courses load failed");
    return await res.json();
  }catch(e){
    return [];
  }
}

function qs(sel){ return document.querySelector(sel); }
function qsa(sel){ return Array.from(document.querySelectorAll(sel)); }

function getQuery(){
  const p = new URLSearchParams(location.search);
  const obj = {};
  for(const [k,v] of p.entries()) obj[k]=v;
  return obj;
}

function requireAuth(nextUrl){
  const user = store.get("rba_user");
  if(!user){
    const to = nextUrl || location.pathname.replace(/^\//,"");
    location.href = `./login.html?next=${encodeURIComponent(to)}`;
    return null;
  }
  return user;
}

function setNavAuthUI(){
  const user = store.get("rba_user");
  // swap the "Sign In" button label if present
  qsa('a.btn-ghost[href="./login.html"]').forEach(a=>{
    if(user){
      a.textContent = "Account";
      a.setAttribute("href","./account.html");
    }else{
      a.textContent = "Sign In";
      a.setAttribute("href","./login.html");
    }
  });
  // also for mobile
  qsa('a.btn-ghost[href="./account.html"]').forEach(()=>{});
}

function cardHTML(c){
  return `
    <article class="card" style="cursor:pointer" data-course="${c.id}">
      <div class="card-media">
        <img src="${c.thumb}" alt="${c.title}">
      </div>
      <div class="card-body">
        <h3 class="card-title">${c.title}</h3>
        <p class="muted">${c.desc}</p>
        <div class="chips" style="margin-top:10px">
          <span class="chip-pill">${c.category}</span>
          <span class="chip-pill">${c.level}</span>
          <span class="chip-pill">${c.minutes} min</span>
        </div>
      </div>
    </article>
  `;
}

function mountBrowse(){
  // prefill from URL

  const grid = qs("#courseGrid");
  if(!grid) return;

  loadCourses().then((courses)=>{
    const q = qs("#q");
    const cat = qs("#cat");
    const level = qs("#level");

    // prefill from URL
    const qp = getQuery();
    if(q && qp.q) q.value = String(qp.q);
    if(cat && qp.cat) cat.value = String(qp.cat);
    if(level && qp.level) level.value = String(qp.level);

    const apply = ()=>{
      const qv = (q?.value||"").trim().toLowerCase();
      const cv = cat?.value || "All";
      const lv = level?.value || "All";
      let list = courses;

      if(cv !== "All") list = list.filter(x=>x.category===cv);
      if(lv !== "All") list = list.filter(x=>x.level===lv);
      if(qv) list = list.filter(x =>
        x.title.toLowerCase().includes(qv) ||
        x.desc.toLowerCase().includes(qv) ||
        x.category.toLowerCase().includes(qv)
      );

      grid.innerHTML = list.map(cardHTML).join("");
    };

    [q,cat,level].forEach(el=> el && el.addEventListener("input", apply));
    apply();

    // if URL has id, open first matching


    grid.addEventListener("click",(e)=>{
      const card = e.target.closest("[data-course]");
      if(!card) return;
      const id = card.dataset.course;
      location.href = `./course.html?id=${encodeURIComponent(id)}`;
    });
  });
}

function mountCourse(){
  const hero = qs("#courseHero");
  if(!hero) return;

  const {id} = getQuery();
  loadCourses().then((courses)=>{
    const c = courses.find(x=>x.id===id) || courses[0];
    if(!c){
      location.href="./browse.html";
      return;
    }
    qs("#courseTitle").textContent = c.title;
    qs("#courseDesc").textContent = c.desc;
    qs("#courseImg").src = c.thumb;

    const meta = qs("#courseMeta");
    if(meta){
      meta.innerHTML = `
        <a class="chip-pill chip-link" href="./browse.html?cat=${encodeURIComponent(c.category)}">${c.category}</a>
        <a class="chip-pill chip-link" href="./browse.html?level=${encodeURIComponent(c.level)}">${c.level}</a>
        <span class="chip-pill">${c.minutes} min</span>
      `;
    }

    const list = qs("#lessonList");
    if(list){
      list.innerHTML = c.lessons.map((t, idx)=>`
        <div class="lesson-item">
          <div>
            <div style="font-weight:800">Lesson ${idx+1}</div>
            <div class="muted">${t}</div>
          </div>
          <a class="btn-ghost" href="./account.html" style="padding:10px 14px;border-radius:999px;text-decoration:none;">Mark done</a>
        </div>
      `).join("");
    }

    const start = qs("#startBtn");
    if(start){
      start.addEventListener("click", ()=>{
        // require auth for "start"
        const user = requireAuth(`course.html?id=${encodeURIComponent(c.id)}`);
        if(!user) return;
        store.set("rba_continue", {courseId:c.id, at: Date.now()});
        location.href = "./account.html";
      });
    }
  });
}

function mountLogin(){
  const form = qs("#loginForm");
  if(!form) return;

  const demo = qs("#loginDemo");
  const q = getQuery();
  const next = q.next ? decodeURIComponent(q.next) : "browse.html";

  form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const fd = new FormData(form);
    const email = String(fd.get("email")||"").trim();
    const user = {name: email.split("@")[0] || "Learner", email};
    store.set("rba_user", user);
    location.href = `./${next.replace(/^\.\//,"")}`;
  });

  demo && demo.addEventListener("click", ()=>{
    const user = {name:"Demo", email:"demo@rba.local"};
    store.set("rba_user", user);
    location.href = `./${next.replace(/^\.\//,"")}`;
  });
}

function mountSignup(){
  const form = qs("#signupForm");
  if(!form) return;

  form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const fd = new FormData(form);
    const name = String(fd.get("name")||"").trim() || "Learner";
    const email = String(fd.get("email")||"").trim() || "you@restaurant.com";
    store.set("rba_user",{name,email});
    location.href = "./account.html";
  });
}

function mountAccount(){
  const hello = qs("#helloLine");
  if(!hello) return;

  const user = requireAuth("account.html");
  if(!user) return;

  hello.textContent = `Hello, ${user.name}.`;

  const cont = store.get("rba_continue");
  const wrap = qs("#continueWrap");
  if(wrap){
    if(cont?.courseId){
      wrap.innerHTML = `
        <div class="lesson-item">
          <div>
            <div style="font-weight:800">Continue</div>
            <div class="muted">${cont.courseId}</div>
          </div>
          <a class="btn-primary" href="./course.html?id=${encodeURIComponent(cont.courseId)}" style="text-decoration:none;border-radius:999px;padding:10px 14px;">Open</a>
        </div>
      `;
    }else{
      wrap.innerHTML = `<div class="muted">Nothing yet. Browse and start a course.</div>`;
    }
  }

  const savedWrap = qs("#savedWrap");
  if(savedWrap){
    const saved = store.get("rba_saved", []);
    savedWrap.innerHTML = saved.length ? saved.map(id=>`
      <div class="lesson-item">
        <div style="font-weight:800">${id}</div>
        <a class="btn-ghost" href="./course.html?id=${encodeURIComponent(id)}" style="text-decoration:none;border-radius:999px;padding:10px 14px;">Open</a>
      </div>
    `).join("") : `<div class="muted">No saved courses.</div>`;
  }

  const logout = qs("#logoutBtn");
  logout && logout.addEventListener("click", ()=>{
    store.del("rba_user");
    store.del("rba_continue");
    location.href="./index.html";
  });
}

document.addEventListener("DOMContentLoaded", ()=>{
  // Home carousel cards → course detail
  document.body.addEventListener('click',(e)=>{
    const cc = e.target.closest('.course-card[data-course]');
    if(!cc) return;
    const id = cc.getAttribute('data-course');
    location.href = `./course.html?id=${encodeURIComponent(id)}`;
  });

  setNavAuthUI();
  mountBrowse();
  mountCourse();
  mountLogin();
  mountSignup();
  mountAccount();

  // Make home "Courses" CTA scroll target work even though nav now links out
  qsa('[data-link="browse"]').forEach(el=>{
    el.addEventListener("click", ()=> location.href="./browse.html");
  });
});
