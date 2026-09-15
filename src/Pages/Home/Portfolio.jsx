import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Eye, Layers } from "lucide-react";

const categories = ["All", "UI/UX Design", "Web App", "E-Commerce", "Branding"];

const projects = [
  {
    id: 1,
    title: "E-Commerce Mobile App",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=800&auto=format&fit=crop",
    description: "Modern shopping experience with clean checkout user flows.",
    tags: ["Figma", "Mobile App", "Prototyping"],
  },
  {
    id: 2,
    title: "SaaS Dashboard Platform",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    description: "Analytics and metrics management system for enterprise clients.",
    tags: ["React", "Tailwind CSS", "DaisyUI"],
  },
  {
    id: 3,
    title: "Luxury Fashion Store",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
    description: "High-converting online store with seamless WooCommerce integration.",
    tags: ["WordPress", "UI/UX", "WooCommerce"],
  },
  {
    id: 4,
    title: "Fintech Banking App",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
    description: "Minimalist mobile banking & money transfer dashboard.",
    tags: ["Figma", "Design System", "iOS"],
  },
  {
    id: 5,
    title: "Creative Agency Branding",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=800&auto=format&fit=crop",
    description: "Complete visual identity, logo design, and brand style guide.",
    tags: ["Branding", "Logo", "Typography"],
  },
  {
    id: 6,
    title: "Healthcare Booking Portal",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
    description: "Doctor appointment booking & patient management web portal.",
    tags: ["Next.js", "Tailwind CSS", "API"],
  },
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <section className="py-20 bg-base-100 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold tracking-widest text-primary uppercase">
            Recent Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-base-content mt-2">
            Selected Projects
          </h2>
          <p className="text-base-content/70 mt-3 text-sm sm:text-base">
            Explore our latest UI/UX designs, web applications, and brand experiences.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === category
                  ? "bg-primary text-primary-content shadow-lg shadow-primary/25"
                  : "bg-base-200 text-base-content/70 hover:bg-base-300 hover:text-base-content"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-2xl overflow-hidden bg-base-200 border border-base-300 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Image Wrapper */}
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />

                  {/* Dark Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                    <button className="w-12 h-12 rounded-full bg-primary text-primary-content flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="w-12 h-12 rounded-full bg-base-100 text-base-content flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-base-100/90 text-base-content backdrop-blur-md shadow">
                    {project.category}
                  </span>
                </div>

                {/* Content Box */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-base-content group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-base-content/70 mt-2 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-base-300">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 rounded-md bg-base-300/60 text-base-content/80 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Works CTA */}
        <div className="text-center mt-14">
          <button className="btn btn-outline btn-primary rounded-full px-8 gap-2">
            <Layers className="w-4 h-4" />
            View All Projects
          </button>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;