import { motion } from "framer-motion";
import { Layout, Palette, Smartphone, Code, Rocket, Sparkles, ArrowRight } from "lucide-react";

const services = [
  {
    title: "UI/UX Design",
    description: "Creating intuitive, aesthetically pleasing, and user-centered interface designs.",
    details: "Wireframing, interactive prototyping, design systems, user research, and usability testing.",
    icon: Layout,
  },
  {
    title: "Web Development",
    description: "Building fast, responsive, and modern websites optimized for performance.",
    details: "React, Next.js, Tailwind CSS, DaisyUI, API integration, and clean component architecture.",
    icon: Code,
  },
  {
    title: "Brand Identity",
    description: "Crafting distinct visual brand assets that make your business stand out.",
    details: "Logo design, color systems, typography, social media kits, and brand style guides.",
    icon: Palette,
  },
  {
    title: "Mobile App Design",
    description: "Designing seamless mobile interfaces for both iOS and Android platforms.",
    details: "Mobile-first layouts, gesture controls, dark mode design, and native component design.",
    icon: Smartphone,
  },
  {
    title: "Design Systems",
    description: "Scalable UI kit components for enterprise applications and fast team handoffs.",
    details: "Figma tokens, reusable React components, theme customization, and full documentation.",
    icon: Sparkles,
  },
  {
    title: "Conversion Optimization",
    description: "Refining user flows and CTAs to maximize user retention and sales conversions.",
    details: "A/B testing layouts, funnel design, speed optimization, and landing page redesigns.",
    icon: Rocket,
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-base-200 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-widest text-primary uppercase">
            Our Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-base-content mt-2">
            Services We Provide
          </h2>
          <p className="text-base-content/70 mt-3 text-sm sm:text-base">
            Hover over any card to explore detailed capabilities and deliverables.
          </p>
        </div>

        {/* Flip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group h-[280px] [perspective:1000px]"
              >
                {/* Card Container */}
                <div className="relative h-full w-full rounded-2xl shadow-lg transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] cursor-pointer">
                  
                  {/* FRONT SIDE */}
                  <div className="absolute inset-0 h-full w-full rounded-2xl bg-base-100 p-8 [backface-visibility:hidden] border border-base-300 flex flex-col justify-between">
                    <div>
                      <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold text-base-content mb-3">
                        {service.title}
                      </h3>
                      <p className="text-base-content/70 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="flex items-center text-xs font-semibold text-primary">
                      <span>Hover for details</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>

                  {/* BACK SIDE (Flipped State) */}
                  <div className="absolute inset-0 h-full w-full rounded-2xl bg-black p-8 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] border border-primary flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-primary text-primary-content flex items-center justify-center">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h4 className="text-lg font-bold text-white">
                          {service.title}
                        </h4>
                      </div>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {service.details}
                      </p>
                    </div>

                    <button className="btn btn-primary btn-sm w-full mt-4 font-semibold">
                      Get Started
                    </button>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;