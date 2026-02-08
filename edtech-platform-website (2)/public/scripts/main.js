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
