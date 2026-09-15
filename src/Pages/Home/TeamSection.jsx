import { motion } from "framer-motion";

const reviews = [
  {
    id: 1,
    text: "They understood our complex web app needs and exceeded expectations with his creativity and attention to detail.",
    name: "Brandon",
    role: "CTO of 1 Earth Solar",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    row: "top",
  },
  {
    id: 2,
    text: "I like working with them because they are very fast and friendly, and every time I need something, they try to help me quickly.",
    name: "Karlos",
    role: "Founder of klug-digital",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    row: "top",
  },
  {
    id: 3,
    text: "We received exceptional service from them from start to finish. He was able to easily understand our needs and met our expectations.",
    name: "Isaac",
    role: "Founder of Texttorrent",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    row: "top",
  },
  {
    id: 4,
    text: "They were extremely attentive and completed the job within a tight deadline. The site looked great, and the client was very happy.",
    name: "Lewis",
    role: "Co-Founder of Comma",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop",
    row: "bottom",
  },
  {
    id: 5,
    text: "I have been impressed with Scaler's creativity, attention to detail, and ability to deliver high-quality designs that meet our needs.",
    name: "Lukas",
    role: "Co-Founder of Meetovo.de",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=200&auto=format&fit=crop",
    row: "bottom",
  },
  {
    id: 6,
    text: "We loved their attention to detail. We look forward to working with them for many future projects.",
    name: "Ahmad",
    role: "Founder of WebScale",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
    row: "bottom",
  },
];

const topRow = reviews.filter((r) => r.row === "top");
const bottomRow = reviews.filter((r) => r.row === "bottom");

const TeamSection = () => {
  return (
    <section className="py-20 bg-base-100 overflow-hidden relative">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-base-200/40 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 mb-14 text-center relative z-10">
        <span className="text-xs font-bold text-primary tracking-widest uppercase">
          Client Feedback
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-base-content mt-2">
          What Founders Say
        </h2>
      </div>

      <div className="space-y-6 relative z-10">
        
        {/* Row 1: Right to Left */}
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex gap-6 pr-6 flex-none"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30,
            }}
          >
            {[...topRow, ...topRow].map((review, index) => (
              <ReviewCard key={`top-${index}`} review={review} />
            ))}
          </motion.div>
        </div>

        {/* Row 2: Left to Right */}
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex gap-6 pr-6 flex-none"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30,
            }}
          >
            {[...bottomRow, ...bottomRow].map((review, index) => (
              <ReviewCard key={`bottom-${index}`} review={review} />
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

// Card Sub-component based on your Image design
const ReviewCard = ({ review }) => {
  return (
    <div className="w-[320px] sm:w-[380px] bg-base-200/60 border border-base-300 rounded-2xl p-6 flex flex-col justify-between flex-shrink-0 hover:border-primary/40 transition-colors shadow-sm">
      {/* Review Text */}
      <p className="text-sm text-base-content/80 leading-relaxed mb-6 font-normal">
        {review.text}
      </p>

      {/* Author Profile Footer */}
      <div className="flex items-center gap-3">
        <img
          src={review.image}
          alt={review.name}
          className="w-10 h-10 rounded-full object-cover border border-base-300"
        />
        <div>
          <h4 className="font-bold text-sm text-base-content leading-tight">
            {review.name}
          </h4>
          <p className="text-xs text-base-content/60 mt-0.5">
            {review.role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;