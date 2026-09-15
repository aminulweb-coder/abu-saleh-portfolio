import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Compass, Palette, Code2, Rocket, CheckCircle } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Discovery & Strategy",
    shortDesc: "Understanding business goals, target audience, and project scope.",
    icon: Search,
    detailHeading: "Deep Dive Research & Alignment",
    detailText: "We start by analyzing your brand requirements, user personas, and competitor landscapes to build a bulletproof product strategy.",
    deliverables: ["User Research Report", "Competitor Analysis", "Project Roadmap"],
    accentColor: "from-blue-500/20 to-primary/20",
  },
  {
    id: "02",
    title: "Wireframing & UX Flow",
    shortDesc: "Mapping out smooth user journeys and screen layouts.",
    icon: Compass,
    detailHeading: "Architecting the Experience",
    detailText: "Low-fidelity wireframes and interactive user flows ensure intuitive navigation before moving into detailed visual design.",
    deliverables: ["User Flow Diagrams", "Low-Fi Wireframes", "Information Architecture"],
    accentColor: "from-purple-500/20 to-primary/20",
  },
  {
    id: "03",
    title: "UI & Visual Design",
    shortDesc: "Crafting modern, high-converting interfaces and style guides.",
    icon: Palette,
    detailHeading: "Pixel-Perfect Visual Crafting",
    detailText: "We transform wireframes into stunning UI designs, creating scalable design systems, typography guidelines, and color palettes.",
    deliverables: ["High-Fi Figma Designs", "Design System / Tokens", "Interactive Prototype"],
    accentColor: "from-emerald-500/20 to-primary/20",
  },
  {
    id: "04",
    title: "Development & Handoff",
    shortDesc: "Translating designs into clean React/Next.js code.",
    icon: Code2,
    detailHeading: "Bringing Designs to Life",
    detailText: "Clean, responsive, and performance-optimized code implementation using React, Next.js, and modern CSS frameworks like Tailwind & DaisyUI.",
    deliverables: ["Clean React/Next.js Code", "Responsive Layouts", "Developer Handoff Docs"],
    accentColor: "from-amber-500/20 to-primary/20",
  },
  {
    id: "05",
    title: "Testing & Launch",
    shortDesc: "Quality assurance, cross-device testing, and final launch.",
    icon: Rocket,
    detailHeading: "Ready for the World",
    detailText: "Rigorous usability testing, speed optimization, and seamless deployment to ensure a flawless user experience at scale.",
    deliverables: ["Cross-Device Testing", "Speed Optimization", "Post-Launch Support"],
    accentColor: "from-primary/30 to-emerald-500/20",
  },
];

const Process = () => {
  const [activeStep, setActiveStep] = useState(0);

  const currentStep = steps[activeStep];
  const IconComponent = currentStep.icon;

  return (
    <section className="py-24 bg-base-200 relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-widest text-primary uppercase">
            Work Methodology
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-base-content mt-2">
            How We Bring Ideas to Life
          </h2>
          <p className="text-base-content/70 mt-3 text-sm sm:text-base">
            A structured, 5-step collaborative process designed for predictable, high-quality results.
          </p>
        </div>

        {/* Unique Process Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Steps Menu */}
          <div className="lg:col-span-5 space-y-3">
            {steps.map((step, index) => {
              const isActive = index === activeStep;
              const StepIcon = step.icon;

              return (
                <div
                  key={step.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveStep(index)}
                  onKeyDown={(e) => e.key === "Enter" && setActiveStep(index)}
                  className={`relative p-5 rounded-2xl cursor-pointer transition-all duration-300 border flex items-center gap-4 outline-none ${
                    isActive
                      ? "bg-base-100 border-primary shadow-xl shadow-primary/10 translate-x-2"
                      : "bg-base-100/40 border-base-300 hover:bg-base-100/80"
                  }`}
                >
                  {/* Step Icon / Number Badge */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm transition-colors ${
                      isActive
                        ? "bg-primary text-primary-content"
                        : "bg-base-300/60 text-base-content/70"
                    }`}
                  >
                    <StepIcon className="w-5 h-5" />
                  </div>

                  {/* Title & Short Description */}
                  <div className="flex-1">
                    <h3 className={`font-bold text-base ${isActive ? "text-primary" : "text-base-content"}`}>
                      {step.title}
                    </h3>
                    <p className="text-xs text-base-content/60 line-clamp-1 mt-0.5">
                      {step.shortDesc}
                    </p>
                  </div>

                  {/* Active Indicator Bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeProcessIndicator"
                      className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-primary rounded-l-full"
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Step Detail Interactive Showcase */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className={`relative rounded-3xl bg-gradient-to-br ${currentStep.accentColor} p-1 border border-primary/20 shadow-2xl backdrop-blur-xl`}
              >
                <div className="bg-base-100/90 rounded-[22px] p-8 sm:p-10">
                  
                  {/* Top Header */}
                  <div className="flex items-center justify-between mb-8 pb-6 border-b border-base-300">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-primary">
                          Step {currentStep.id}
                        </span>
                        <h3 className="text-2xl font-bold text-base-content">
                          {currentStep.detailHeading}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Body Explanation */}
                  <p className="text-base text-base-content/80 leading-relaxed mb-8">
                    {currentStep.detailText}
                  </p>

                  {/* Key Deliverables */}
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-base-content/60 mb-4">
                      Key Deliverables
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {currentStep.deliverables.map((item, idx) => (
                        <div
                          key={`${currentStep.id}-deliv-${idx}`}
                          className="flex items-center gap-2 p-3 rounded-xl bg-base-200/70 border border-base-300 text-xs font-semibold text-base-content"
                        >
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Step Progress Dots */}
                  <div className="flex items-center justify-between mt-10 pt-6 border-t border-base-300 text-xs font-medium text-base-content/60">
                    <span>Progress: {activeStep + 1} of {steps.length}</span>
                    <div className="flex gap-1.5">
                      {steps.map((s, i) => (
                        <button
                          key={`dot-${s.id}`}
                          onClick={() => setActiveStep(i)}
                          aria-label={`Go to step ${s.id}`}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            i === activeStep ? "w-6 bg-primary" : "w-2 bg-base-300 hover:bg-base-content/40"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Process;