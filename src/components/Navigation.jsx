import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { Menu, X, ChevronDown, Github, Linkedin, ExternalLink } from "lucide-react";

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
        { name: "KanFlow", href: "https://kanflow-indol.vercel.app/" },
        {
          name: "ResumeAI",
          href: "https://resumebuilderbyuthy.vercel.app/",
        },
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
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "px-4" : "px-6"
      }`}
    >
      <div 
        className={`max-w-7xl mx-auto transition-all duration-300 ${
          isScrolled 
            ? "bg-[#1c1c1e]/80 backdrop-blur-2xl border border-white/10 rounded-full py-3 px-6 shadow-2xl shadow-black/50" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 bg-white/10 rounded-full overflow-hidden transition-all duration-300 group-hover:bg-white/20">
              <span className="font-sf font-bold text-white text-lg">
                UA
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-2">
            <div className="flex items-center bg-[#2c2c2e]/50 backdrop-blur-xl rounded-full p-1 border border-white/5">
              {menuItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button className="flex items-center space-x-1 px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-all">
                        <span>{item.name}</span>
                        <ChevronDown size={12} className={`opacity-50 transition-transform duration-300 ${activeDropdown === item.name ? "rotate-180" : ""}`} />
                      </button>
                      
                      {/* Dropdown */}
                      <div 
                        className={`absolute top-full right-0 mt-4 w-64 p-2 rounded-[24px] bg-[#1c1c1e]/90 backdrop-blur-2xl border border-white/10 shadow-2xl transition-all duration-300 origin-top-right ${
                          activeDropdown === item.name 
                            ? "opacity-100 scale-100 visible translate-y-0" 
                            : "opacity-0 scale-95 invisible -translate-y-2"
                        }`}
                      >
                        <div className="flex flex-col gap-1">
                          {item.dropdown.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between px-4 py-3 rounded-xl text-sm text-gray-200 hover:bg-white/10 hover:text-white transition-all group/item"
                            >
                              {subItem.name}
                              <ExternalLink size={12} className="opacity-0 group-hover/item:opacity-50 transition-opacity" />
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:bg-white/10 hover:text-white transition-all"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </div>
            
            <a 
              href="/MyResume.pdf" 
              download="MyResume.pdf"
              className="px-6 py-2.5 bg-[#007AFF] hover:bg-[#0062cc] active:scale-95 text-white text-sm font-semibold rounded-full transition-all shadow-lg shadow-blue-500/20"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-white bg-white/10 rounded-full hover:bg-white/20 transition-colors backdrop-blur-md"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        ref={mobileMenuRef}
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xl lg:hidden transform translate-x-full"
      >
        <div className="flex flex-col h-full pt-24 px-8 pb-10">
          <div className="flex flex-col space-y-6">
            {menuItems.map((item) => (
              <div key={item.name} className="border-b border-white/10 pb-4">
                {item.dropdown ? (
                  <div className="space-y-4">
                    <span className="text-2xl font-medium text-white/50">{item.name}</span>
                    <div className="pl-4 flex flex-col space-y-3 border-l border-white/10">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={closeMobileMenu}
                          className="text-lg text-gray-300 hover:text-white"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    onClick={closeMobileMenu}
                    className="text-3xl font-bold text-white hover:text-gray-300 transition-colors"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            <a 
              href="/MyResume.pdf" 
              download="MyResume.pdf"
              className="text-3xl font-bold text-[#c25e48] hover:text-[#884030] transition-colors pt-2"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-auto flex gap-6">
            <a href="https://github.com/uthybuilds" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/uthman-ajanaku" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
