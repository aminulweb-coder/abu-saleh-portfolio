import saleh from "../../../assets/saleh.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero bg-base-200 min-h-screen relative overflow-hidden py-12 lg:py-0">
      {/* Optional Background Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="hero-content max-w-6xl w-full mx-auto flex-col lg:flex-row-reverse justify-between gap-12 lg:gap-16 relative z-10">

        {/* Hero Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex justify-center items-center relative"
        >
          {/* Decorative backdrop ring */}
          <div className="absolute -z-10 w-72 h-72 lg:w-96 lg:h-96 rounded-full bg-gradient-to-tr from-primary to-secondary blur-2xl opacity-30" />

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <img
              src={saleh}
              alt="Abu Saleh"
              className="w-full max-w-xs sm:max-w-sm lg:max-w-md rounded-3xl shadow-2xl border-4 border-base-100 object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left"
        >
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 mb-4 text-xs sm:text-sm font-semibold tracking-wide uppercase bg-primary/10 text-primary rounded-full">
            Welcome to Abu Saleh
          </span>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-base-content">
            Best <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">UI/UX Design</span> Services
          </h1>

          {/* Subheading / Description */}
          <p className="py-6 text-base sm:text-lg text-base-content/70 max-w-xl mx-auto lg:mx-0">
            We partner directly with founders, CEOs, and decision-makers to transform complex ideas into intuitive, high-converting digital products.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary btn-lg shadow-lg shadow-primary/30 w-full sm:w-auto"
            >
              Get Started
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-outline btn-lg w-full sm:w-auto"
            >
              View Work
            </motion.button>
          </div>

          {/* Social Proof / Stats */}
          <div className="grid grid-cols-3 gap-4 pt-10 mt-8 border-t border-base-300 max-w-md mx-auto lg:mx-0">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-primary">10+</h3>
              <p className="text-xs sm:text-sm text-base-content/60">Years Exp.</p>
            </div>
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-primary">1000+</h3>
              <p className="text-xs sm:text-sm text-base-content/60">Projects</p>
            </div>
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-primary">100%</h3>
              <p className="text-xs sm:text-sm text-base-content/60">Satisfaction</p>
            </div>
          </div>

        </motion.div>

      </div>
    </div>
  );
};

export default Hero;


// import saleh from "../../../assets/saleh.jpg";
// import { motion } from "framer-motion";

// const Hero = () => {
//   return (
//     <div className="hero bg-base-200 min-h-screen overflow-hidden">
//       <div className="hero-content max-w-6xl w-full mx-auto flex-col lg:flex-row-reverse justify-between gap-12">

//         {/* Image */}
//         <motion.div
//           initial={{ x: 300, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{
//             duration: 1,
//             ease: "easeOut",
//           }}
//           className="flex-1 flex justify-center"
//         >
//           <img
//             src={saleh}
//             alt="Abu Saleh"
//             className="w-full max-w-sm rounded-2xl shadow-2xl"
//           />
//         </motion.div>

//         {/* Content */}
//         <motion.div
//           initial={{ x: -100, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{
//             duration: 0.8,
//             delay: 0.2,
//             ease: "easeOut",
//           }}
//           className="flex-1"
//         >
//          <div className="mb-2 py-4">

//            <h1 className="text-xl md:text-2xl lg:text-2xl">
//             Welcome to Abu Saleh
//           </h1>

//           <h2 className="text-4xl md:text-4xl font-medium py-2">
//             Best UI/UX Design Services
//           </h2>

//           <p className="">
//             We work with founders, CEOs, and directly with decision-makers.
//           </p>
//          </div>

//           <button className="btn btn-primary">
//             Get Started
//           </button>
//         </motion.div>

//       </div>
//     </div>
//   );
// };

// export default Hero;