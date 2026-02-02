import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaJsSquare,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiVite } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  const sectionRef = useRef(null);
  const iconsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      ".tech-icon",
      { opacity: 0, scale: 0.5, y: 20 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  const techStack = [
    { icon: FaReact, name: "React", color: "#61DAFB", bg: "bg-[#1c1c1e]" },
    { icon: SiTailwindcss, name: "Tailwind", color: "#38BDF8", bg: "bg-[#1c1c1e]" },
    { icon: FaNodeJs, name: "Node.js", color: "#3C873A", bg: "bg-[#1c1c1e]" },
    { icon: SiExpress, name: "Express", color: "#FFFFFF", bg: "bg-[#1c1c1e]" },
    { icon: FaHtml5, name: "HTML5", color: "#E34F26", bg: "bg-[#1c1c1e]" },
    { icon: FaJsSquare, name: "JavaScript", color: "#F7DF1E", bg: "bg-[#1c1c1e]" },
    { icon: FaGitAlt, name: "Git", color: "#F05033", bg: "bg-[#1c1c1e]" },
    { icon: SiVite, name: "Vite", color: "#646CFF", bg: "bg-[#1c1c1e]" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-32 bg-black text-white overflow-hidden font-sf"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Tech Stack
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-normal">
            My digital toolbox.
            </p>
        </div>

        {/* App Icon Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-10 max-w-4xl mx-auto">
          {techStack.map(({ icon: Icon, color, name, bg }, i) => (
            <div
              key={i}
              className="tech-icon flex flex-col items-center gap-3 group"
            >
                {/* App Icon Shape */}
              <div 
                className={`w-20 h-20 sm:w-24 sm:h-24 ${bg} rounded-[22px] flex items-center justify-center shadow-lg border border-white/5 transition-transform duration-300 group-hover:scale-110 active:scale-95`}
              >
                <Icon className="text-4xl sm:text-5xl" style={{ color }} />
              </div>
              {/* App Label */}
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                  {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
