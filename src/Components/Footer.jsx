const Footer = () => {
  return (
    <footer className="bg-base-300 text-base-content relative overflow-hidden pt-16 pb-8 border-t border-base-200">
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-base-content/10">
          
          {/* Brand Info (2 Columns) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="text-2xl font-black text-base-content tracking-tight">
              Abu<span className="text-primary">Saleh</span>
            </a>
            <p className="text-sm text-base-content/70 leading-relaxed max-w-sm">
              Passionate UI/UX Designer crafting clean, intuitive, and user-centered digital experiences for web and mobile platforms.
            </p>

            {/* Social Links (Dribbble, Behance, LinkedIn) */}
            <div className="flex items-center gap-3 pt-2">
              {/* Dribbble */}
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-square btn-sm btn-outline border-base-content/20 hover:btn-primary"
                aria-label="Dribbble"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm9.849 10.912c-2.316-.363-4.688-.173-6.914.549 1.135 2.87 1.83 5.922 2.052 9.034 2.859-1.921 4.717-5.187 4.862-9.583zm-6.281 10.428c-.237-2.825-.877-5.597-1.908-8.209-3.21 1.296-6.098 3.32-8.396 5.885 2.193 2.181 5.182 3.524 8.483 3.524.622 0 1.233-.047 1.821-.12v-.08zm-11.838-3.41c2.148-2.395 4.84-4.288 7.848-5.503-1.002-2.167-2.327-4.148-3.921-5.88-3.323 1.87-5.568 5.417-5.568 9.483 0 .66.06 1.305.174 1.93l1.467-.03zm-.812-9.288c.032-.08.067-.159.102-.238 1.493-3.224 4.394-5.598 7.91-6.208 1.455 1.632 2.664 3.486 3.585 5.492-3.134.786-6.177 2.083-8.995 3.834l-2.602-2.88zm13.111-4.801c3.151 1.267 5.449 4.025 6.069 7.42-2.12-.596-4.331-.79-6.522-.573-.846-1.854-1.942-3.567-3.262-5.078 1.272-.731 2.529-1.326 3.715-1.769zm-5.029 1.16c1.236 1.42 2.268 3.031 3.064 4.779-2.664-.176-5.32.188-7.838 1.077-.852-1.86-1.968-3.583-3.32-5.111 2.685-.929 5.626-.988 8.094-.745z" />
                </svg>
              </a>
              {/* Behance */}
              <a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-square btn-sm btn-outline border-base-content/20 hover:btn-primary"
                aria-label="Behance"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-4.813 3-3.203 0-5.337-2.085-5.337-5.352 0-3.289 2.21-5.398 5.163-5.398 2.923 0 4.887 1.957 4.887 5.093 0 .524-.055 1.026-.11 1.257h-7.054c.121 1.401 1.23 2.112 2.508 2.112 1.272 0 2.012-.562 2.308-1.712h2.448zm-4.995-5.836c-1.12 0-1.879.629-2.062 1.836h4.081c-.068-1.218-.841-1.836-2.019-1.836zm-10.731-1.164h-3v3h3c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5zm-3 7h3.5c.966 0 1.75-.784 1.75-1.75s-.784-1.75-1.75-1.75h-3.5v3.5zm7.481-2.222c.866-.828 1.519-2.026 1.519-3.278 0-2.481-2.019-4.5-4.5-4.5h-7v14h7c2.757 0 5-2.243 5-5 0-1.229-.444-2.353-1.019-3.222z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-square btn-sm btn-outline border-base-content/20 hover:btn-primary"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-base-content/90 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-base-content/70">
              <li><a href="#about" className="hover:text-primary transition-colors">About Me</a></li>
              <li><a href="#portfolio" className="hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="#process" className="hover:text-primary transition-colors">Design Process</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Reviews</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* UI/UX Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-base-content/90 mb-4">
              Specialties
            </h4>
            <ul className="space-y-2.5 text-sm text-base-content/70">
              <li><a href="#" className="hover:text-primary transition-colors">Mobile App Design</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Web App UI/UX</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Wireframing & Prototyping</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Design Systems</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-base-content/90 mb-4">
              Stay Connected
            </h4>
            <p className="text-xs text-base-content/70 mb-3">
              Subscribe to get latest design articles and updates.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="form-control">
              <div className="join w-full">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="input input-sm input-bordered join-item w-full bg-base-100 focus:outline-none"
                  required
                />
                <button type="submit" className="btn btn-sm btn-primary join-item">
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-base-content/60">
          <p>© {new Date().getFullYear()} Abu Saleh. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Crafted for UI/UX Design Portfolio
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;