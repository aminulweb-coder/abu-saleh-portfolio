import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaFacebookF, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic
  };

  return (
    <section id="contact" className="py-20 bg-[#F8F8F8] text-[#1A1A1A]">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side: Short Description, Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between space-y-8"
          >
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  Contact Us
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mt-2">
                  Let’s build something great together.
                </h3>
              </div>

              {/* Short Description */}
              <p className="text-sm text-gray-500 leading-relaxed">
                Have a project in mind, need a custom design, or want to revamp your website? Send us a message and we'll get back to you within 24 hours.
              </p>

              {/* Contact Info List */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 text-sm shrink-0">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Email</p>
                    <p className="text-sm font-bold text-gray-800">contact@aminuldev.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 text-sm shrink-0">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Phone / WhatsApp</p>
                    <p className="text-sm font-bold text-gray-800">Jani Na </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 text-sm shrink-0">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Location</p>
                    <p className="text-sm font-bold text-gray-800">Sunamgonj, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons (3 Icons) */}
            <div className="pt-6 border-t border-gray-100">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Follow Us
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#333333] hover:text-white flex items-center justify-center text-gray-700 transition-colors"
                >
                  <FaGithub className="text-base" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#333333] hover:text-white flex items-center justify-center text-gray-700 transition-colors"
                >
                  <FaLinkedinIn className="text-base" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#333333] hover:text-white flex items-center justify-center text-gray-700 transition-colors"
                >
                  <FaFacebookF className="text-base" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form (Same as Image) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Full Name & WhatsApp */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-800">
                    Full Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Don Norman"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-gray-400 placeholder:text-gray-400"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-800">
                    WhatsApp <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Number"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-gray-400 placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Row 2: Email & Website URL */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-800">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="don@gmail.com"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-gray-400 placeholder:text-gray-400"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-800">
                    Website URL <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="url"
                    placeholder="www.google.com"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-gray-400 placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Row 3: Service Required & Project Investment */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-800">
                    Service Required<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Website redesign"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-gray-400 placeholder:text-gray-400"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-800">
                    Project Investment<span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      defaultValue=""
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-gray-400 text-gray-500 appearance-none cursor-pointer"
                      required
                    >
                      <option value="" disabled>Select your investment</option>
                      <option value="500-1000">$500 - $1,000</option>
                      <option value="1000-3000">$1,000 - $3,000</option>
                      <option value="3000-5000">$3,000 - $5,000</option>
                      <option value="5000+">$5,000+</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message Area */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-800">
                  How can we help you?<span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="4"
                  placeholder="Placeholder text..."
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:border-gray-400 placeholder:text-gray-400 resize-none"
                  required
                ></textarea>
              </div>

              {/* Dark Pill Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#333333] hover:bg-[#222222] text-white font-bold text-xs uppercase tracking-wider rounded-full transition-colors"
                >
                  SEND INQUIRY
                </button>
              </div>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;