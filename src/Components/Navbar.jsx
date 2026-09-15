import { NavLink } from "react-router";

const navItems = (
  <>
    <li>
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive ? "text-primary font-semibold" : ""
        }
      >
        Home
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "text-primary font-semibold" : ""
        }
      >
        About
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/services"
        className={({ isActive }) =>
          isActive ? "text-primary font-semibold" : ""
        }
      >
        Services
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/portfolio"
        className={({ isActive }) =>
          isActive ? "text-primary font-semibold" : ""
        }
      >
        Portfolio
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/pricing"
        className={({ isActive }) =>
          isActive ? "text-primary font-semibold" : ""
        }
      >
        Pricing
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "text-primary font-semibold" : ""
        }
      >
        Contact
      </NavLink>
    </li>
  </>
);

const Navbar = () => {
  return (
    <div className="navbar sticky top-0 z-50 border-b border-base-300 bg-base-100/90 shadow-sm backdrop-blur-md">

      {/* Navbar Start */}
      <div className="navbar-start">

        {/* Mobile Dropdown */}
        <div className="dropdown">

          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content z-[1] mt-3 w-52 rounded-box border border-base-300 bg-base-100 p-2 shadow-lg"
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
          className="btn btn-primary rounded-full px-6 text-primary-content shadow-md hover:shadow-primary/30 transition-all"
        >
          Let's Talk
        </NavLink>
      </div>

    </div>
  );
};

export default Navbar;