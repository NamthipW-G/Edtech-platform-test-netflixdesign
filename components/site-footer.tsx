export default function SiteFooter() {
  const links = {
    Platform: ["All Courses", "Micro-Learning", "Live Sessions", "Articles"],
    Company: ["About Us", "Instructors", "Careers", "Contact"],
    Support: ["Help Center", "Terms of Service", "Privacy Policy", "Cookie Policy"],
    Social: ["Facebook", "Instagram", "YouTube", "Line"],
  }

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-5">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">R</span>
              </div>
              <div>
                <div className="text-sm font-bold tracking-wider text-foreground uppercase">
                  Restaurant Business
                </div>
                <div className="text-[10px] tracking-widest text-muted-foreground uppercase">
                  Academy
                </div>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              The premier learning community for restaurant entrepreneurs.
              Built by restaurant owners, for restaurant owners.
            </p>
            {/* Newsletter */}
            <div className="mt-6 flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                aria-label="Email address for newsletter"
              />
              <button
                type="button"
                className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110"
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="mb-4 text-xs font-semibold tracking-wider text-foreground uppercase">
                {heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            Restaurant Business Academy. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Terms", "Privacy", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
