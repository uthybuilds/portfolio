import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

import ProfilePic from "../assets/profile.jpg";

const About = () => {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const portraitRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(leftRef.current, {
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.08,
      }).from(
        rightRef.current,
        { y: 32, opacity: 0, duration: 0.9, ease: "power3.out" },
        "-=0.45"
      );

      gsap.to(portraitRef.current, {
        y: -10,
        rotationY: 6,
        rotationX: 2,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1568952433726-3896e3881c65?w=1600&auto=format&fit=crop&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/90 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={leftRef} className="text-white z-10">
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-5">
              I focus on clarity, performance, and purpose,
            </h2>

            <p className="text-gray-300 text-lg max-w-xl mb-6">
              turning complex ideas into intuitive digital experiences that feel
              effortless to use and built to last. My work blends creativity
              with precision, balancing clean design with powerful
              functionality. Every line of code I write is guided by intention
              to solve real problems, simplify interactions, and bring value to
              users. I’m constantly exploring new technologies and refining how
              products look, feel, and perform. For me, great development is not
              just about code, it’s about crafting seamless experiences that
              inspire trust and deliver lasting impact.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-2 bg-white/6 backdrop-blur-sm rounded-full text-sm text-gray-200">
                React
              </span>
              <span className="px-4 py-2 bg-white/6 backdrop-blur-sm rounded-full text-sm text-gray-200">
                TypeScript
              </span>
              <span className="px-4 py-2 bg-white/6 backdrop-blur-sm rounded-full text-sm text-gray-200">
                Node.js
              </span>
              <span className="px-4 py-2 bg-white/6 backdrop-blur-sm rounded-full text-sm text-gray-200">
                TailwindCSS
              </span>
              <span className="px-4 py-2 bg-white/6 backdrop-blur-sm rounded-full text-sm text-gray-200">
                GSAP
              </span>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="/uthmanajanaku.pdf"
                download
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-white text-black font-semibold px-5 py-3 rounded-lg shadow-lg transition"
              >
                <ExternalLink className="w-4 h-4" />
                Download resume
              </a>

              <a
                href="#contact"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center justify-center px-5 py-3 border border-white/10 text-white rounded-lg hover:bg-white/5 transition"
              >
                Contact
              </a>
            </div>
          </div>

          <div
            ref={rightRef}
            className="z-10 flex justify-center lg:justify-end"
          >
            <div
              ref={portraitRef}
              className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden transform will-change-transform"
              style={{
                perspective: "1200px",
                boxShadow:
                  "0 20px 50px rgba(2,6,23,0.6), 0 6px 20px rgba(80,68,229,0.12)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "9999px",
                  overflow: "hidden",
                  transformStyle: "preserve-3d",
                  boxShadow:
                    "inset 0 0 80px rgba(80,68,229,0.08), 0 8px 30px rgba(0,0,0,0.6)",
                  border: "1px solid rgba(255,255,255,0.04)",
                }}
              >
                <img
                  src={ProfilePic}
                  alt="Uthman Ajanaku"
                  className="w-full h-full object-cover"
                />
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    background:
                      "radial-gradient(600px 200px at 10% 10%, rgba(80,68,229,0.12), transparent 10%), radial-gradient(400px 120px at 90% 90%, rgba(255,255,255,0.03), transparent 20%)",
                    mixBlendMode: "screen",
                  }}
                />
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    inset: 0,
                    boxShadow:
                      "0 8px 40px rgba(2,6,23,0.6), inset 0 -10px 30px rgba(0,0,0,0.3)",
                    borderRadius: "9999px",
                    pointerEvents: "none",
                  }}
                />
              </div>

              <div
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-56 h-6 rounded-full opacity-30 filter blur-2xl"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(80,68,229,0.25), rgba(255,255,255,0.05))",
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-14 text-center text-gray-400 max-w-3xl mx-auto z-10">
          <p>
            I follow a simple approach: listen carefully, plan clearly, and ship
            reliable code. If you have an idea or need a partner for a project,
            let’s connect.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
