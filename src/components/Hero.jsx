import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-text",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.2,
        }
      );

      gsap.fromTo(
        ".hero-btn",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          delay: 1,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center items-center text-center text-white bg-[#030014] overflow-hidden px-4"
    >
      {/* Modern Background */}
      <div className="absolute inset-0 w-full h-full bg-[#030014]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] opacity-50 mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] opacity-30"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-5xl mx-auto flex flex-col items-center"
      >
        <div className="hero-text mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-blue-300 font-medium inline-flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Available for new projects
        </div>

        <h1 className="hero-text text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/60">
          Crafting Digital <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Experiences
          </span>
        </h1>

        <p className="hero-text text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed mb-10">
          I'm Uthman Ajanaku, a Fullstack Developer building accessible,
          pixel-perfect, and performant web applications that solve real-world
          problems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4">
          <a
            href="#projects"
            className="hero-btn group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              View Work{" "}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </span>
          </a>

          <a
            href="#contact"
            className="hero-btn px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
