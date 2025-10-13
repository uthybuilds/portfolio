import {
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const socials = [
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/uthman-ajanaku/", // LinkedIn
      color: "#0A66C2",
      newTab: true,
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/uthmanlifts", // Instagram
      color: "#E4405F",
      newTab: true,
    },
    {
      icon: <FaTwitter />,
      link: "https://twitter.com/uthybuilds", // X (Twitter)
      color: "#1DA1F2",
      newTab: true,
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/boygonecrypto", // GitHub
      color: "#FFFFFF",
      newTab: true,
    },
    {
      icon: <FaEnvelope />,
      link: "mailto:uthmanajanaku@gmail.com", // Opens mail app
      color: "#EA4335",
      newTab: false,
    },
  ];

  return (
    <footer className="relative py-10 text-center text-white bg-black overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1568952433726-3896e3881c65?w=1600&auto=format&fit=crop&q=80')",
        }}
      ></div>

      {/* Overlay for text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center space-y-6 z-10">
        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-6">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              {...(social.newTab && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              className="text-3xl transition-transform duration-300 hover:scale-125"
              style={{ color: social.color }}
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm sm:text-base">
          ©️ 2025 Uthman Ajanaku. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
