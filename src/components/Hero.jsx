import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  ArrowRight,
  MapPin,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import ProfilePic from "../assets/profile.jpg";

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".bento-item",
        { y: 20, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.2,
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center items-center bg-[#000000] px-4 pt-24 pb-12 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#007AFF]/20 rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#AF52DE]/20 rounded-full blur-[120px] opacity-20"></div>
      </div>

      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-auto md:h-[600px]">
        {/* 1. Main Profile Card (Large) */}
        <div className="bento-item col-span-1 md:col-span-2 md:row-span-3 bg-[#1c1c1e] rounded-[32px] p-8 relative overflow-hidden group border border-white/5 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
          <img
            src={ProfilePic}
            alt="Uthman Ajanaku"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
          />
          <div className="relative z-20 h-full flex flex-col justify-end">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full w-fit mb-4">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium text-white/90">
                Available for Work
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
              Uthman <br /> Ajanaku
            </h1>
            <p className="text-lg text-gray-300 font-medium">
              Fullstack Web & Mobile Developer
            </p>
          </div>
        </div>

        {/* 2. Intro / Bio Card (Wide) */}
        <div className="bento-item col-span-1 md:col-span-2 md:row-span-1 bg-[#1c1c1e] rounded-[32px] p-8 flex flex-col justify-center border border-white/5 hover:bg-[#2c2c2e] transition-colors group">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-[#007AFF] transition-colors">
            Crafting Digital Experiences
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Building accessible, pixel-perfect, and performant web and mobile
            applications with modern technologies.
          </p>
        </div>

        {/* 3. Resume Download (Square) */}
        <a
          href="/MyResume.pdf"
          download="MyResume.pdf"
          className="bento-item col-span-1 md:col-span-1 md:row-span-1 bg-[#007AFF] rounded-[32px] p-6 flex flex-col justify-between items-start hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-blue-500/20 cursor-pointer"
        >
          <div className="p-3 bg-white/20 rounded-full text-white">
            <Download size={24} />
          </div>
          <div>
            <span className="block text-white/80 text-sm font-medium">
              Download
            </span>
            <span className="block text-white text-xl font-bold">Resume</span>
          </div>
        </a>

        {/* 4. Location (Square) */}
        <div className="bento-item col-span-1 md:col-span-1 md:row-span-1 bg-[#1c1c1e] rounded-[32px] p-6 flex flex-col justify-between items-start border border-white/5 relative overflow-hidden">
          {/* Abstract Map BG */}
          <div
            className="absolute inset-0 opacity-20 grayscale"
            style={{
              backgroundImage:
                "url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/3.3792,6.5244,12,0/300x300@2x?access_token=pk.eyJ1IjoidXdoeWJ1aWxkcyIsImEiOiJjbHZ1bnZ6MmEwMXZmMmpwZnY1ZTZ6bnFqIn0.X-S5qj5z4j5z4j5z4j5z4j')",
            }}
          ></div>
          <div className="p-3 bg-[#32D74B]/20 text-[#32D74B] rounded-full z-10">
            <MapPin size={24} />
          </div>
          <div className="z-10">
            <span className="block text-gray-400 text-sm font-medium">
              Based in
            </span>
            <span className="block text-white text-xl font-bold">
              Lagos, Nigeria
            </span>
          </div>
        </div>

        {/* 5. Socials (Wide) */}
        <div className="bento-item col-span-1 md:col-span-2 md:row-span-1 bg-[#1c1c1e] rounded-[32px] p-6 flex items-center justify-between border border-white/5">
          <div className="flex gap-4">
            <a
              href="https://github.com/uthybuilds"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-[#2c2c2e] rounded-full text-white hover:bg-white hover:text-black transition-all hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/uthman-ajanaku"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-[#0A66C2] rounded-full text-white hover:brightness-110 transition-all hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:uthmanajanaku@gmail.com"
              className="p-4 bg-[#EA4335] rounded-full text-white hover:brightness-110 transition-all hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
          <a
            href="#projects"
            className="hidden sm:flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
          >
            View Projects{" "}
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
