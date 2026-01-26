import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Globe, Cpu, Layers } from "lucide-react";
import ProfilePic from "../assets/profile.jpg";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-content",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    { icon: <Code2 className="text-white" />, text: "Clean Code" },
    { icon: <Globe className="text-gray-400" />, text: "Scalable" },
    { icon: <Cpu className="text-white" />, text: "Performant" },
    { icon: <Layers className="text-gray-400" />, text: "Modern Stack" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 bg-[#0a0a0a] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text */}
          <div className="about-content space-y-10 order-2 lg:order-1">
            <h2 className="text-4xl sm:text-6xl font-bold text-white leading-tight font-serif">
              Designing with purpose, <br />
              <span className="italic text-gray-400">building for impact.</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed font-light">
              I focus on turning complex ideas into intuitive digital
              experiences that feel effortless to use. My work blends creativity
              with precision, balancing clean design with powerful
              functionality. Every line of code I write is guided by intention
              to solve real problems and bring value to users.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 border-l border-[#884030]/30 pl-4 hover:border-[#c25e48] transition-colors py-2"
                >
                  {feature.icon}
                  <span className="text-gray-200 font-medium tracking-wide uppercase text-sm">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="about-content order-1 lg:order-2 flex justify-center lg:justify-end relative">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96">
              <div className="absolute inset-0 bg-[#884030]/10 rounded-none blur-3xl opacity-20"></div>
              <img
                src={ProfilePic}
                alt="Profile"
                className="relative w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
