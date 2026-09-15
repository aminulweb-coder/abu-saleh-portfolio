import { motion } from "framer-motion";

const SocialProof = () => {
  const clients = [
    "TechCorp",
    "Innovate",
    "Nexus",
    "FlowState",
    "Apex Studio",
    "DevTech",
    "BrandX",
  ];

  // Marquee-র স্মুথ লুপের জন্য অ্যারে ডুপ্লিকেট করা হয়েছে
  const marqueeClients = [...clients, ...clients];

  return (
    <section className="bg-base-100 py-8 border-y border-base-300 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 text-center mb-6">
        <p className="text-sm font-semibold tracking-widest text-base-content/50 uppercase">
          Trusted by founders & decision-makers worldwide
        </p>
      </div>

      {/* Marquee Wrapper */}
      <div className="flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
          className="flex flex-shrink-0 items-center justify-around gap-12 md:gap-20 min-w-full hover:[animation-play-state:paused]"
        >
          {marqueeClients.map((client, index) => (
            <span
              key={index}
              className="text-2xl md:text-3xl font-extrabold tracking-tight text-black hover:text-primary transition-colors duration-300 cursor-pointer whitespace-nowrap"
            >
              {client}
            </span>
          ))}
        </motion.div>

        {/* Seamless Repeat for Infinite Loop */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
          aria-hidden="true"
          className="flex flex-shrink-0 items-center justify-around gap-12 md:gap-20 min-w-full hover:[animation-play-state:paused]"
        >
          {marqueeClients.map((client, index) => (
            <span
              key={`dup-${index}`}
              className="text-2xl md:text-3xl font-extrabold tracking-tight text-black hover:text-primary transition-colors duration-300 cursor-pointer whitespace-nowrap"
            >
              {client}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;