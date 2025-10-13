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
      iconsRef.current,
      { opacity: 0, scale: 0.8, y: 20 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
    iconsRef.current.forEach((icon) => {
      gsap.to(icon, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "linear",
      });
    });
  }, []);

  const techStack = [
    { icon: FaReact, color: "#61DAFB" },
    { icon: SiTailwindcss, color: "#38BDF8" },
    { icon: FaNodeJs, color: "#3C873A" },
    { icon: SiExpress, color: "#FFFFFF" },
    { icon: FaHtml5, color: "#E34F26" },
    { icon: FaJsSquare, color: "#F7DF1E" },
    { icon: FaGitAlt, color: "#F05033" },
    { icon: SiVite, color: "#646CFF" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-black  text-white text-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1568952433726-3896e3881c65?w=1600&auto=format&fit=crop&q=80')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/90"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
          Tech Stack
        </h2>
        <p className="text-gray-400 sm:text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          Tools and technologies I use to design, build, and deploy exceptional
          digital experiences.
        </p>

        {/* Tech Icons */}
        <div className="flex flex-wrap justify-center gap-10 sm:gap-16">
          {techStack.map(({ icon: Icon, color }, i) => (
            <div
              key={i}
              ref={(el) => (iconsRef.current[i] = el)}
              className="text-6xl sm:text-7xl md:text-8xl"
              style={{ color }}
            >
              <Icon />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
