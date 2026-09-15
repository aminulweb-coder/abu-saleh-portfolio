import { motion } from "framer-motion";
import saleh from "../../assets/saleh.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-base-100 relative overflow-hidden">
      {/* Background Animated Subtle Radial Glows */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/15 rounded-full blur-[130px] pointer-events-none"
      />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual / Unique Image Frame & Floating Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              
              {/* Unique Outer Glow Border Container */}
              <div className="p-2 rounded-[2.5rem] bg-gradient-to-b from-primary/30 via-base-300 to-transparent shadow-2xl">
                {/* Profile Image Container */}
                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-[2rem] overflow-hidden bg-base-200 aspect-[4/5] relative group"
                >
                  <img
                    src={saleh}
                    alt="Abu Saleh - UI/UX Designer"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-base-900/80 via-base-900/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                </motion.div>
              </div>

              {/* Floating Unique Experience Badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -right-2 sm:right-2 bg-base-100/80 backdrop-blur-xl border border-primary/20 p-4 sm:p-5 rounded-3xl shadow-2xl flex items-center gap-4 max-w-[240px]"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-primary-content flex items-center justify-center font-black text-2xl shadow-lg shadow-primary/20">
                  10+
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-base-content leading-tight">
                    Years Experience
                  </h4>
                  <p className="text-[11px] text-base-content/70 mt-1 font-medium">
                    UI/UX & Product Design
                  </p>
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* Right Content Block */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6"
          >
            
            {/* Subtitle & Title */}
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold text-primary bg-primary/10 tracking-widest uppercase mb-2">
                About Abu Saleh
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-base-content leading-[1.15]">
                Crafting Meaningful & Intuitive Digital Experiences
              </h2>
            </div>

            {/* Description */}
            <p className="text-base-content/80 text-sm sm:text-base leading-relaxed">
              Hello! I'm <span className="font-semibold text-base-content">Abu Saleh</span>, a passionate UI/UX Designer. I specialize in transforming complex user problems into simple, functional, and visually compelling interfaces. My approach combines human-centered research with pixel-perfect visual design.
            </p>

            {/* Unique Glassmorphic Stats Cards Grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2">
              {[
                { count: "1000+", label: "Projects Completed" },
                { count: "100+", label: "Global Clients" },
                { count: "100%", label: "Satisfaction Rate" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="p-4 sm:p-5 bg-gradient-to-b from-base-200/80 to-base-200/30 backdrop-blur-md rounded-2xl border border-base-content/10 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all group"
                >
                  <h3 className="text-2xl sm:text-3xl font-black text-primary group-hover:scale-105 transition-transform origin-left">
                    {stat.count}
                  </h3>
                  <p className="text-[11px] sm:text-xs font-medium text-base-content/70 mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Tech Skills Badges */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-base-content/70">
                Key Design Skills & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Figma",
                  "User Research",
                  "Wireframing",
                  "Prototyping",
                  "Design Systems",
                  "Mobile Apps",
                  "Web App UI",
                  "Usability Testing"
                ].map((skill, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="badge badge-lg bg-base-200/70 border-base-content/10 hover:bg-primary hover:text-primary-content hover:border-primary text-base-content text-xs font-semibold py-3.5 px-4 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="btn btn-primary rounded-2xl gap-2 font-bold px-7 shadow-lg shadow-primary/25"
              >
                <span>Let's Work Together</span>
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#resume"
                className="btn btn-outline border-base-content/20 hover:border-primary rounded-2xl font-bold px-7"
              >
                Download Resume
              </motion.a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;