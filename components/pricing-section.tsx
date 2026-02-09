"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const plans = [
  {
    name: "Free",
    price: "0",
    period: "forever",
    description: "Get started with the essentials",
    features: [
      "Access free courses",
      "Read all articles",
      "Micro-learning modules",
      "Community forum access",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Annual",
    price: "5,900",
    period: "per year",
    description: "Unlock the full experience",
    features: [
      "Everything in Free",
      "50+ expert-led courses",
      "Unlimited replay access",
      "Progress tracking dashboard",
      "Exclusive live sessions",
      "Member-only events & discounts",
    ],
    cta: "Join Now",
    popular: true,
  },
]

export default function PricingSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()

  return (
    <section id="pricing" ref={ref} className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* Header */}
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="mb-3 block text-xs font-medium tracking-widest text-primary uppercase">
            Membership
          </span>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-5xl">
            <span className="text-balance block">Invest in Your</span>
            <span className="text-gradient text-balance block">Restaurant Success</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Join thousands of restaurant owners who are transforming their businesses
            with expert knowledge and proven strategies.
          </p>
        </div>

        {/* Plans */}
        <div className="grid gap-6 md:grid-cols-2">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`group relative overflow-hidden rounded-3xl border transition-all duration-700 ${
                plan.popular
                  ? "border-primary/50 bg-card"
                  : "border-border bg-card"
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{ transitionDelay: `${i * 150 + 200}ms` }}
            >
              {/* Popular glow */}
              {plan.popular && (
                <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-primary/20 blur-3xl" aria-hidden="true" />
              )}

              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute top-6 right-6 rounded-full bg-primary px-3 py-1 text-[10px] font-bold tracking-wider text-primary-foreground uppercase">
                  Most Popular
                </div>
              )}

              <div className="relative z-10 p-8 md:p-10">
                {/* Plan name */}
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {plan.name}
                </h3>
                <p className="mb-6 text-sm text-muted-foreground">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-8 flex items-baseline gap-1">
                  <span className="text-xs text-muted-foreground">THB</span>
                  <span
                    className={`text-5xl font-bold ${
                      plan.popular ? "text-gradient" : "text-foreground"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    /{plan.period}
                  </span>
                </div>

                {/* Features */}
                <ul className="mb-8 flex flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                      <svg
                        className={`h-5 w-5 flex-shrink-0 ${
                          plan.popular ? "text-primary" : "text-muted-foreground"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  type="button"
                  className={`w-full rounded-xl py-4 text-sm font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:brightness-110 animate-pulse-glow"
                      : "border border-border text-foreground hover:border-primary/50 hover:bg-secondary"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
