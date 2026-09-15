import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "CEO & Founder",
    company: "TechScale Inc.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
    rating: 5,
    review:
      "Abu Saleh completely transformed our digital product! The UI/UX redesign boosted our user engagement by 140% within the first month. Incredible attention to detail and pixel-perfect implementation.",
    stats: "140% Increase in Engagement",
  },
  {
    id: 2,
    name: "Sophia Reynolds",
    role: "Product Manager",
    company: "FlowLabs UK",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop",
    rating: 5,
    review:
      "Working together was an absolute breeze. He delivered scalable design components and clear React integration guides that saved our dev team weeks of effort.",
    stats: "Saved 3+ Weeks Dev Time",
  },
  {
    id: 3,
    name: "David Chen",
    role: "Head of Marketing",
    company: "Nexus E-Commerce",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    rating: 5,
    review:
      "The conversion rate optimization strategies implemented on our storefront generated a massive ROI immediately after launch. Highly recommended for any serious business!",
    stats: "2.5x Conversion Boost",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const activeTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 bg-base-100 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold tracking-widest text-primary uppercase">
            Client Feedback
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-base-content mt-2">
            What Founders Say
          </h2>
          <p className="text-base-content/70 mt-3 text-sm sm:text-base">
            Real stories from business leaders who trusted us with their vision.
          </p>
        </div>

        {/* Unique Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Side: Avatar Selector List */}
          <div className="lg:col-span-5 flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 justify-center">
            {testimonials.map((item, index) => {
              const isActive = index === currentIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isActive
                      ? "bg-base-200 border-primary shadow-lg shadow-primary/10 translate-x-2"
                      : "bg-base-100/50 border-base-300 hover:bg-base-200/50"
                  }`}
                >
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className={`w-14 h-14 rounded-full object-cover border-2 ${
                        isActive ? "border-primary" : "border-base-300"
                      }`}
                    />
                    {isActive && (
                      <span className="absolute -bottom-1 -right-1 bg-primary text-primary-content rounded-full p-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </span>
                    )}
                  </div>

                  <div className="hidden sm:block text-left">
                    <h4 className="font-bold text-base-content text-base">{item.name}</h4>
                    <p className="text-xs text-base-content/60">{item.role} • {item.company}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side: Active Highlight Review Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial.id}
                initial={{ opacity: 0, x: 40, rotateY: -10 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -40, rotateY: 10 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative rounded-3xl bg-base-200/80 backdrop-blur-xl p-8 sm:p-12 border border-primary/30 shadow-2xl [perspective:1000px]"
              >
                {/* Decorative Quote Mark */}
                <Quote className="absolute top-6 right-8 w-16 h-16 text-primary/10 pointer-events-none" />

                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-6">
                  {[...Array(activeTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-lg sm:text-2xl font-medium leading-relaxed text-base-content italic mb-8">
                  "{activeTestimonial.review}"
                </p>

                {/* Impact Badge & Author Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-base-300">
                  <div>
                    <h3 className="text-xl font-bold text-base-content">
                      {activeTestimonial.name}
                    </h3>
                    <p className="text-sm text-base-content/60">
                      {activeTestimonial.role}, <span className="text-primary font-semibold">{activeTestimonial.company}</span>
                    </p>
                  </div>

                  {/* Highlight Metric Badge */}
                  <span className="inline-flex items-center px-4 py-2 rounded-xl text-xs font-bold bg-primary/15 text-primary border border-primary/30">
                    🔥 {activeTestimonial.stats}
                  </span>
                </div>

                {/* Navigation Buttons */}
                <div className="flex items-center gap-3 mt-8 justify-end">
                  <button
                    onClick={handlePrev}
                    className="btn btn-circle btn-sm btn-outline border-base-300 hover:btn-primary"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="btn btn-circle btn-sm btn-primary"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;