import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

import Clion from "../assets/Clion.jpeg";
import Devtide from "../assets/Devtide.jpeg";
import Pinkerton from "../assets/Pinkerton.jpeg";
import Toriigate from "../assets/Toriigate.jpeg";

gsap.registerPlugin(ScrollTrigger);

const FeaturedProjects = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const projects = [
    {
      title: "DevTide",
      image: Devtide,
      description:
        "DevTide is a fully functional fullstack personal blogging platform designed to document my growth in tech. Readers can engage by dropping comments after reading each blog post.",
      tech: [FaReact, SiTailwindcss, FaNodeJs],
      liveLink: "https://devtide-frontend.vercel.app/",
    },
    {
      title: "Clion",
      image: Clion,
      description:
        "Clion is a modern frontend website that focuses on sleek UI design, responsiveness, and high performance, crafted to deliver a clean and engaging user experience.",
      tech: [FaReact, SiTailwindcss],
      liveLink: "https://clion-eta.vercel.app/",
    },
    {
      title: "Torii Gate",
      image: Toriigate,
      description:
        "Torii Gate is a fully functional fullstack real estate platform designed to simplify property management. It connects House Owners & House Hunters directly, enabling smooth communication, pricing, and vetting.",
      tech: [FaReact, SiTailwindcss, FaNodeJs],
      liveLink: "https://torri-gate-frontend-ten.vercel.app/",
    },
    {
      title: "Pinkerton Construction",
      image: Pinkerton,
      description:
        "Pinkerton Remodeling LLC is a remodeling and construction company based in Dumas, Texas. It provides premium home and commercial renovation services across Texas and beyond.",
      tech: [FaReact, SiTailwindcss],
      liveLink: "https://www.pinkertoncontruction.com/",
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".section-title, .section-subtitle"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, scale: 0.9, y: 40 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-6 text-white text-center bg-black overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1568952433726-3896e3881c65?w=1600&auto=format&fit=crop&q=80')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/90"></div>

      {/* Section Header */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Featured Projects
        </h2>

        <p className="section-subtitle text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
          Explore a curated selection of my most recent projects, a showcase of
          creativity, craftsmanship, and cutting-edge technology. Each project
          embodies a thoughtful blend of clean design, seamless functionality,
          and high performance, reflecting my passion for turning ideas into
          impactful digital experiences.
        </p>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 z-10 relative">
          {projects.map((project, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="group bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image container */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* Hover overlay (desktop) */}
                <div className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center text-center px-6 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Always visible description (mobile/tablet) */}
              <div className="lg:hidden mt-4 px-4 text-gray-300 text-sm text-center">
                {project.description}
              </div>

              {/* Details */}
              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>

                {/* Tech icons */}
                <div className="flex gap-3 mb-4">
                  {project.tech.map((IconComponent, index) => (
                    <IconComponent
                      key={index}
                      className="w-6 h-6 text-blue-400"
                    />
                  ))}
                </div>

                {/* Live link */}
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" /> Live Site
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
