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
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    { icon: <Code2 className="text-blue-400" />, text: "Clean Code" },
    { icon: <Globe className="text-purple-400" />, text: "Scalable" },
    { icon: <Cpu className="text-pink-400" />, text: "Performant" },
    { icon: <Layers className="text-teal-400" />, text: "Modern Stack" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 bg-[#030014] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text */}
          <div className="about-content space-y-8 order-2 lg:order-1">
            <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
              Designing with purpose, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                building for impact.
              </span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
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
                  className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl"
                >
                  {feature.icon}
                  <span className="text-gray-200 font-medium">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="about-content order-1 lg:order-2 flex justify-center lg:justify-end relative">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
              <img
                src={ProfilePic}
                alt="Profile"
                className="relative w-full h-full object-cover rounded-3xl border-2 border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
