import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const nameRef = useRef(null);
  const bioRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const name = nameRef.current;
    const bio = bioRef.current;

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });

    // Step 1: Fade + type the name slowly
    tl.fromTo(
      name,
      { opacity: 0, text: "" },
      {
        opacity: 1,
        duration: 4,
        text: "Hi, I'm Uthman Ajanaku",
        ease: "power2.out",
      }
    );

    // Step 2: Wait, then erase slowly
    tl.to(name, {
      duration: 2,
      text: "",
      ease: "none",
      delay: 1,
    });

    // Step 3: Fade in the bio gently
    tl.fromTo(
      bio,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 2, ease: "power2.out" },
      ">-0.5"
    );

    // Step 4: Fade bio out before restarting
    tl.to(bio, {
      opacity: 0,
      duration: 1.5,
      ease: "power1.inOut",
      delay: 2.5,
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen flex flex-col justify-center items-center text-center text-white bg-black overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1568952433726-3896e3881c65?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHRlY2h8ZW58MHx8MHx8fDA%3D')",
        }}
      ></div>

      {/* Dark overlay to make text readable */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/90"></div>

      {/* Name */}
      <h1
        ref={nameRef}
        className="relative text-4xl sm:text-6xl font-bold mb-6 text-blue-400 tracking-wide z-10"
      ></h1>

      {/* Bio */}
      <p
        ref={bioRef}
        className="relative text-3xl sm:text-3xl text-gray-300 max-w-2xl leading-relaxed px-4 z-10"
      >
        I’m a Fullstack Developer passionate about building clean, efficient,
        and scalable web applications that connect ideas with real-world impact.
      </p>
    </section>
  );
};

export default Hero;
