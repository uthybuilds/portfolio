import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github } from "lucide-react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

import Clion from "../assets/Clion.jpeg";
import Devtide from "../assets/Devtide.jpeg";
import Pinkerton from "../assets/Pinkerton.jpeg";
import Toriigate from "../assets/Toriigate.jpeg";
import KanFlowWeb from "../assets/KanFlow Web.png";
import KanFlowApp from "../assets/KanFlow App.jpeg";
import ResumeAi from "../assets/ResumeAi.png";

gsap.registerPlugin(ScrollTrigger);

const FeaturedProjects = () => {
  const sectionRef = useRef(null);

  const projects = [
    {
      title: "KanFlow",
      image: KanFlowWeb,
      secondaryImage: KanFlowApp,
      isComposite: true,
      description:
        "A cross-platform productivity ecosystem that seamlessly syncs tasks between a mobile app and web dashboard in real-time. Features offline support and integrations with GitHub and Slack.",
      tech: [FaReact, SiTailwindcss, FaNodeJs],
      liveLink: "https://kanflow-indol.vercel.app/",
      repoLink: "https://github.com/uthybuilds/Kanflow",
    },
    {
      title: "ResumeAI",
      image: ResumeAi,
      description:
        "An AI-powered resume creation platform that uses Google Gemini to enhance professional summaries and job descriptions. Features multiple ATS-friendly templates, real-time preview, and PDF export.",
      tech: [FaReact, SiTailwindcss, FaNodeJs],
      liveLink: "https://resumebuilderbyuthy.vercel.app/",
      repoLink: "https://github.com/uthybuilds/Resumebuilder-Backend",
    },
    {
      title: "DevTide",
      image: Devtide,
      description:
        "A fullstack personal blogging platform designed to document my growth in tech. Features user engagement via comments and a clean reading experience.",
      tech: [FaReact, SiTailwindcss, FaNodeJs],
      liveLink: "https://devtide-frontend.vercel.app/",
      repoLink: "https://github.com/uthybuilds/BlogSphere-Backend",
    },
    {
      title: "Clion",
      image: Clion,
      description:
        "A modern frontend website focused on sleek UI design, responsiveness, and high performance, delivering a clean and engaging user experience.",
      tech: [FaReact, SiTailwindcss],
      liveLink: "https://clion-eta.vercel.app/",
      repoLink: "https://github.com/uthybuilds/Clion",
    },
    {
      title: "Torii Gate",
      image: Toriigate,
      description:
        "Real estate platform simplifying property management. Connects owners and hunters directly with smooth communication and vetting tools.",
      tech: [FaReact, SiTailwindcss, FaNodeJs],
      liveLink: "https://torri-gate-frontend-ten.vercel.app/",
      repoLink: "https://github.com/uthybuilds/torii-gate-backend",
    },
    {
      title: "Pinkerton Construction",
      image: Pinkerton,
      description:
        "Premium renovation services website for a construction company based in Dumas, Texas. Showcases services and portfolio.",
      tech: [FaReact, SiTailwindcss],
      liveLink: "https://www.pinkertoncontruction.com/",
      repoLink: "https://github.com/uthybuilds/Pinkerton",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-32 px-4 bg-[#000000] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 flex flex-col items-start">
          <span className="text-blue-500 font-bold tracking-widest text-sm uppercase mb-2">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Selected Web & Mobile Work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card ios-card group relative bg-[#1c1c1e] rounded-[32px] overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/50 border border-white/5 flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-[400px] w-full overflow-hidden bg-gray-900">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1c1c1e] opacity-60 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Composite Logic for Kanflow */}
                {project.isComposite && project.secondaryImage && (
                  <img
                    src={project.secondaryImage}
                    alt={`${project.title} Mobile App`}
                    className="absolute -bottom-[15%] -right-[5%] w-[45%] h-auto object-contain shadow-2xl border-[4px] border-[#1c1c1e] rounded-[24px] z-20 group-hover:scale-105 group-hover:-bottom-[10%] transition-all duration-500 ease-out rotate-[-5deg] group-hover:rotate-0"
                  />
                )}
              </div>

              {/* Content - iOS App Store Style */}
              <div className="p-8 flex flex-col flex-grow relative z-20 -mt-20 bg-gradient-to-t from-[#1c1c1e] via-[#1c1c1e] to-transparent pt-20">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-blue-400 text-xs font-bold tracking-wider uppercase mb-1 block">Featured App</span>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-400 text-lg leading-relaxed mb-8 font-medium line-clamp-3">
                  {project.description}
                </p>

                <div className="mt-auto flex items-center gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3.5 bg-white/10 hover:bg-white text-white hover:text-black rounded-full font-bold text-center transition-all backdrop-blur-md"
                  >
                    View App
                  </a>
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 bg-[#2c2c2e] hover:bg-[#3a3a3c] rounded-full text-white transition-all"
                  >
                    <Github size={24} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
