import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines depend on the scope. A landing page usually takes 3-5 days, while full web applications or custom dashboards take 2-4 weeks.",
  },
  {
    question: "How do you handle project revisions?",
    answer: "We offer unlimited minor revisions during the design phase and up to 2 rounds of structural revisions post-development to ensure complete satisfaction.",
  },
  {
    question: "Will the code be fully responsive and SEO optimized?",
    answer: "Yes, every component is built with a mobile-first approach using Tailwind CSS/DaisyUI and follows clean semantic HTML for optimal SEO performance.",
  },
  {
    question: "What technology stack do you use?",
    answer: "We specialize in React, Next.js, PHP, WooCommerce, Tailwind CSS, DaisyUI, and custom WordPress setups depending on client requirements.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-base-100 relative">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-primary tracking-widest uppercase">Got Questions?</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-base-content mt-2">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-base-300 rounded-2xl bg-base-200/50 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex justify-between items-center gap-4 font-semibold text-lg text-base-content hover:text-primary transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-base-content/70 text-sm leading-relaxed border-t border-base-300/50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;