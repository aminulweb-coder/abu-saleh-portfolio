import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Zap, Sparkles, ShieldCheck } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    description: "Ideal for startups & small businesses needing basic design solutions.",
    monthlyPrice: 499,
    yearlyPrice: 399,
    icon: Zap,
    popular: false,
    features: [
      "Up to 5 Pages UI/UX Design",
      "Mobile Responsive Layouts",
      "Figma Source Files",
      "2 Rounds of Revisions",
      "3-5 Days Delivery",
      "Basic Support",
    ],
  },
  {
    name: "Professional",
    description: "Perfect for growing companies requiring comprehensive design systems.",
    monthlyPrice: 999,
    yearlyPrice: 799,
    icon: Sparkles,
    popular: true,
    features: [
      "Up to 15 Pages UI/UX Design",
      "Complete Design System & Style Guide",
      "Interactive Figma Prototypes",
      "Unlimited Revisions",
      "Priority Delivery",
      "Dedicated Project Manager",
      "Full Web Development Support",
    ],
  },
  {
    name: "Enterprise",
    description: "Custom tailored solutions for complex web apps and enterprise brands.",
    monthlyPrice: 1999,
    yearlyPrice: 1599,
    icon: ShieldCheck,
    popular: false,
    features: [
      "Unlimited Pages / Custom Features",
      "Complete Product Strategy & Testing",
      "Design System + React/Next.js Code",
      "24/7 VIP Support & Maintenance",
      "Dedicated Designer & Developer Team",
      "Conversion Rate Optimization (CRO)",
    ],
  },
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="py-20 bg-base-200 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold tracking-widest text-primary uppercase">
            Flexible Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-base-content mt-2">
            Simple, Transparent Pricing
          </h2>
          <p className="text-base-content/70 mt-3 text-sm sm:text-base">
            Choose a plan that fits your business needs. No hidden fees or surprise charges.
          </p>

          {/* Monthly / Yearly Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm font-semibold ${!isYearly ? "text-base-content" : "text-base-content/60"}`}>
              Monthly
            </span>
            <input
              type="checkbox"
              className="toggle toggle-primary"
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
            />
            <span className={`text-sm font-semibold ${isYearly ? "text-base-content" : "text-base-content/60"}`}>
              Yearly <span className="badge badge-primary badge-sm ml-1">Save 20%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon;
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col justify-between rounded-3xl bg-base-100 p-8 shadow-xl transition-all duration-300 border ${
                  plan.popular
                    ? "border-primary shadow-primary/20 lg:-translate-y-4"
                    : "border-base-300 hover:border-primary/50"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-content text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md">
                    Most Popular
                  </div>
                )}

                <div>
                  {/* Top Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-base-content">{plan.name}</h3>
                    </div>
                  </div>

                  <p className="text-xs text-base-content/70 leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-4xl font-extrabold text-base-content">${price}</span>
                    <span className="text-sm font-medium text-base-content/60">/ month</span>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3.5 mb-8 border-t border-base-300 pt-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-base-content/80">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  className={`btn w-full rounded-2xl ${
                    plan.popular
                      ? "btn-primary shadow-lg shadow-primary/30"
                      : "btn-outline border-base-300 hover:btn-primary"
                  }`}
                >
                  Get Started Now
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Pricing;