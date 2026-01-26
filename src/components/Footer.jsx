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
      link: "https://github.com/uthybuilds", // GitHub
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
    <footer className="py-10 text-center text-white bg-[#030014] border-t border-[#884030]/20">
      <div className="flex flex-col items-center justify-center space-y-6">
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
              className="text-2xl text-gray-400 hover:text-white transition-colors duration-300 hover:scale-110"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          ©️ 2025 Uthman Ajanaku. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
