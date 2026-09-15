import { NavLink } from "react-router";

const navItems = (
  <>
    <li>
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          `text-base py-3 px-4 rounded-lg transition-colors ${
            isActive ? "text-primary font-semibold bg-primary/10" : ""
          }`
        }
      >
        Home
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `text-base py-3 px-4 rounded-lg transition-colors ${
            isActive ? "text-primary font-semibold bg-primary/10" : ""
          }`
        }
      >
        About
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/services"
        className={({ isActive }) =>
          `text-base py-3 px-4 rounded-lg transition-colors ${
            isActive ? "text-primary font-semibold bg-primary/10" : ""
          }`
        }
      >
        Services
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/portfolio"
        className={({ isActive }) =>
          `text-base py-3 px-4 rounded-lg transition-colors ${
            isActive ? "text-primary font-semibold bg-primary/10" : ""
          }`
        }
      >
        Portfolio
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/pricing"
        className={({ isActive }) =>
          `text-base py-3 px-4 rounded-lg transition-colors ${
            isActive ? "text-primary font-semibold bg-primary/10" : ""
          }`
        }
      >
        Pricing
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `text-base py-3 px-4 rounded-lg transition-colors ${
            isActive ? "text-primary font-semibold bg-primary/10" : ""
          }`
        }
      >
        Contact
      </NavLink>
    </li>
  </>
);

const Navbar = () => {
  return (
    <div className="navbar sticky top-0 z-50 border-b border-base-300 bg-base-100/90 shadow-sm backdrop-blur-md px-4 sm:px-8">

      {/* Navbar Start */}
      <div className="navbar-start">

        {/* Mobile Dropdown */}
        <div className="dropdown">

          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden p-2"
          >
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </div>

          {/* Full Width Dropdown Menu for Mobile */}
          <ul
            tabIndex={-1}
            className="menu dropdown-content z-[1] mt-3 fixed left-4 right-4 w-[calc(100vw-2rem)] rounded-2xl border border-base-300 bg-base-100 p-4 shadow-2xl space-y-1"
          >
            {navItems}
          </ul>
        </div>

        {/* Logo */}
        <NavLink
          to="/"
          className="btn btn-ghost text-xl font-bold text-primary"
        >
          ABU SALEH<span className="text-base-content">.</span>
        </NavLink>
      </div>

      {/* Desktop Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-1 px-1">
          {navItems}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <NavLink
          to="/contact"
          className="btn btn-primary rounded-full px-6 text-primary-content shadow-md hover:shadow-primary/30 transition-all text-sm font-semibold"
        >
          Let's Talk
        </NavLink>
      </div>

    </div>
  );
};

export default Navbar;