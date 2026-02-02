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
      link: "https://www.linkedin.com/in/uthman-ajanaku/",
      newTab: true,
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/uthmanlifts",
      newTab: true,
    },
    {
      icon: <FaTwitter />,
      link: "https://twitter.com/uthybuilds",
      newTab: true,
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/uthybuilds",
      newTab: true,
    },
    {
      icon: <FaEnvelope />,
      link: "mailto:uthmanajanaku@gmail.com",
      newTab: false,
    },
  ];

  return (
    <footer className="py-12 text-center text-white bg-black border-t border-white/10 font-sf">
      <div className="flex flex-col items-center justify-center space-y-8">
        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-8">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              {...(social.newTab && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              className="text-2xl text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 bg-[#1c1c1e] p-4 rounded-full border border-white/5 hover:bg-[#2c2c2e]"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          © 2025 Uthman Ajanaku. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
