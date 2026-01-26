import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-text",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.1,
        },
      );

      gsap.fromTo(
        ".hero-btn",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.5,
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center items-center text-center text-white bg-[#0a0a0a] overflow-hidden px-4"
    >
      {/* Premium Background */}
      <div className="absolute inset-0 w-full h-full bg-[#0a0a0a]">
        {/* Very subtle ambient light */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#884030]/20 rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-6xl mx-auto flex flex-col items-center"
      >
        <div className="hero-text mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-[#c25e48] font-medium inline-flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c25e48] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#884030]"></span>
          </span>
          Available for new projects
        </div>

        <h1 className="hero-text text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/60">
          Crafting Digital <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#884030] to-[#c25e48]">
            Experiences
          </span>
        </h1>

        <p className="hero-text text-lg sm:text-xl text-gray-400 max-w-xl leading-relaxed mb-14 font-light">
          I'm Uthman Ajanaku, a Fullstack Developer building accessible,
          pixel-perfect, and performant web applications.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto px-4 items-center justify-center">
          <a
            href="#projects"
            className="hero-btn group relative px-10 py-4 bg-white text-black font-medium rounded-full overflow-hidden transition-all hover:scale-105"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              View Work
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
          </a>

          <a
            href="#contact"
            className="hero-btn px-10 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-[#884030]/10 transition-all flex items-center justify-center"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
