import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { Menu, X, Phone, MapPin, ChevronDown } from "lucide-react";
import Portlogo from "../assets/Portlogo.svg";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 80;
      setIsScrolled(scrolled);

      gsap.to(navRef.current, {
        backgroundColor: scrolled
          ? "rgba(255,255,255,1)"
          : "rgba(255,255,255,0)",
        boxShadow: scrolled
          ? "0 4px 20px rgba(0,0,0,0.12)"
          : "0 0 0 rgba(0,0,0,0)",
        duration: 0.35,
        ease: "power2.out",
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMenuOpen((p) => !p);
    gsap.to(mobileMenuRef.current, {
      x: isMenuOpen ? "100%" : "0%",
      duration: 0.35,
      ease: "power2.out",
    });
  };

  const menuItems = [
    { name: "Home", href: "/" },
    {
      name: "Portfolio",
      dropdown: [
        { name: "Devtide", href: "https://devtide-frontend.vercel.app/" },
        {
          name: "Torii Gate",
          href: "https://torri-gate-frontend-ten.vercel.app/",
        },
        {
          name: "Pinkerton Construction",
          href: "https://www.pinkertoncontruction.com/",
        },
        { name: "Clion", href: "https://clion-eta.vercel.app/" },
      ],
    },
    {
      name: "Github",
      href: "https://github.com/Boygonecrypto",
      external: true,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/uthman-ajanaku",
      external: true,
    },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/#contact" },
  ];

  const linkClass = (scrolled) =>
    scrolled
      ? "text-gray-900 hover:text-blue-600"
      : "text-white hover:text-blue-300";

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{ backgroundColor: "rgba(255,255,255,0)" }} // start transparent
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img
              src={Portlogo}
              alt="logo"
              className="h-16 w-auto pt-3 transition-transform hover:scale-105"
            />
          </Link>

          <div
            className={`hidden lg:flex items-center space-x-8 text-sm transition-colors duration-300 ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
          >
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>070 377 30858</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Lagos, Nigeria</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  // wrapper covers trigger + dropdown to avoid gap
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <span
                      className={`flex items-center space-x-1 font-medium cursor-pointer ${linkClass(
                        isScrolled
                      )}`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </span>

                    {/* hover bridge to prevent accidental mouseout */}
                    {activeDropdown === item.name && (
                      <div
                        className="absolute top-full left-0 h-2 w-56"
                        aria-hidden
                      />
                    )}

                    {/* dropdown */}
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-gray-100 py-2 z-50">
                        {item.dropdown.map((sub, i) => (
                          <a
                            key={sub.name}
                            href={sub.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setActiveDropdown(null)} //  closes dropdown immediately
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                            style={{ animationDelay: `${i * 0.03}s` }}
                          >
                            {sub.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-medium ${linkClass(isScrolled)}`}
                  >
                    {item.name}
                  </a>
                ) : item.href.startsWith("/#") ? (
                  <a
                    href={item.href}
                    className={`font-medium ${linkClass(isScrolled)}`}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    to={item.href}
                    className={`font-medium ${linkClass(isScrolled)}`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={toggleMobileMenu}
            className={`lg:hidden p-2 rounded-md transition-colors ${
              isScrolled
                ? "text-gray-900 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 w-full h-screen bg-white z-40 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="px-6 py-8 space-y-6">
          <div className="flex justify-between items-center mb-8">
            <img src={Portlogo} alt="logo" className="h-8" />
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {menuItems.map((item) => (
            <div key={item.name}>
              {item.dropdown ? (
                <>
                  <span className="block text-xl font-medium py-3 border-b border-gray-100">
                    {item.name}
                  </span>
                  <div className="ml-4 mt-2 space-y-2">
                    {item.dropdown.map((sub) => (
                      <a
                        key={sub.name}
                        href={sub.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-gray-600 hover:text-blue-600 py-2"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                </>
              ) : item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-xl font-medium text-gray-900 hover:text-blue-600 py-3 border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ) : item.href.startsWith("/#") ? (
                <a
                  href={item.href}
                  className="block text-xl font-medium text-gray-900 hover:text-blue-600 py-3 border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  to={item.href}
                  className="block text-xl font-medium text-gray-900 hover:text-blue-600 py-3 border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleMobileMenu}
        />
      )}
    </nav>
  );
};

export default Navigation;
