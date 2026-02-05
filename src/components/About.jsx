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
        ".about-widget",
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: <Code2 className="text-white w-6 h-6" />,
      text: "Clean Code",
      color: "bg-blue-500",
    },
    {
      icon: <Globe className="text-white w-6 h-6" />,
      text: "Scalable",
      color: "bg-green-500",
    },
    {
      icon: <Cpu className="text-white w-6 h-6" />,
      text: "Performant",
      color: "bg-orange-500",
    },
    {
      icon: <Layers className="text-white w-6 h-6" />,
      text: "Modern Stack",
      color: "bg-purple-500",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 bg-black overflow-hidden font-sf"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Text Widget */}
          <div className="about-widget lg:col-span-7 bg-[#1c1c1e] rounded-[32px] p-8 md:p-12 border border-white/5 shadow-2xl relative overflow-hidden group">
            {/* Glossy Effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Designing with purpose, <br />
              <span className="text-[#007AFF]">building for impact.</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed font-normal mb-8">
              I focus on turning complex ideas into intuitive digital
              experiences across web and mobile platforms that feel effortless
              to use. My work blends creativity with precision, balancing clean
              design with powerful functionality. Every line of code I write is
              guided by intention to solve real problems and bring value to
              users.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl hover:bg-white/10 transition-colors duration-300"
                >
                  <div className={`p-2 rounded-xl ${feature.color} shadow-lg`}>
                    {feature.icon}
                  </div>
                  <span className="text-white font-medium text-base">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Image Widget */}
          <div className="about-widget lg:col-span-5 h-full min-h-[400px] lg:min-h-0 relative">
            <div className="w-full h-full bg-[#1c1c1e] rounded-[32px] overflow-hidden border border-white/5 shadow-2xl relative group">
              <img
                src={ProfilePic}
                alt="Profile"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4">
                  <p className="text-white font-medium">Uthman Ajanaku</p>
                  <p className="text-white/60 text-sm">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
