import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { Menu, X, ChevronDown, Github, Linkedin } from "lucide-react";
import Logo from "../assets/logo.svg";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMenuOpen((p) => !p);
    gsap.to(mobileMenuRef.current, {
      x: isMenuOpen ? "100%" : "0%",
      duration: 0.4,
      ease: "power3.inOut",
    });
  };

  const closeMobileMenu = () => {
    gsap.to(mobileMenuRef.current, {
      x: "100%",
      duration: 0.4,
      ease: "power3.inOut",
      onComplete: () => setIsMenuOpen(false),
    });
  };

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
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
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-white/10 py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all duration-300 group-hover:border-white/20 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.15)]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="font-serif text-xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-purple-500">
                U
              </span>
            </div>
            <span className="text-lg font-medium tracking-tight text-gray-200 group-hover:text-white transition-colors duration-300">
              Uthman<span className="text-purple-500">.</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center space-x-1 font-medium text-sm text-gray-300 hover:text-white transition-colors py-2">
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-[#0a0a0a] border border-white/10 rounded-xl shadow-2xl overflow-hidden transition-all duration-200 origin-top ${
                        activeDropdown === item.name
                          ? "opacity-100 scale-100 visible"
                          : "opacity-0 scale-95 invisible"
                      }`}
                    >
                      {item.dropdown.map((sub) => (
                        <a
                          key={sub.name}
                          href={sub.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-5 py-3 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                        >
                          {sub.name}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}

            <div className="flex items-center gap-4 pl-4 border-l border-white/10">
              <a
                href="https://github.com/uthybuilds"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/uthman-ajanaku"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-white hover:text-blue-400 transition-colors"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center translate-x-full lg:hidden"
      >
        <div className="flex flex-col space-y-8 text-center">
          {menuItems.map((item) => (
            <div key={item.name}>
              {item.dropdown ? (
                <div className="flex flex-col space-y-4">
                  <span className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">
                    {item.name}
                  </span>
                  {item.dropdown.map((sub) => (
                    <a
                      key={sub.name}
                      href={sub.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-lg text-white hover:text-blue-400"
                      onClick={closeMobileMenu}
                    >
                      {sub.name}
                    </a>
                  ))}
                </div>
              ) : (
                <a
                  href={item.href}
                  className="block text-3xl font-bold text-white hover:text-blue-400 transition-colors"
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
