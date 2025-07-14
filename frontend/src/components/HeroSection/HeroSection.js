import { useEffect, useRef } from "react";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { FolderGit2, Mail, Github, Linkedin, Instagram } from "lucide-react";
import LottieDisplay from "../LottieDisplay/LottieDisplay";

const HeroSection = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const typed = new Typed(typedRef.current, {
      strings: [
        "Driven by code, power, and purpose",
        "Passionate about UI & UX",
        "Fuelled by curiosity and creativity",
        "Crafting full-stack solutions",
      ],
      typeSpeed: 50,
      backSpeed: 20,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  const techStack = [
    "React",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "MongoDB",
    "Express.js",
    "SQL",
    "Bootstrap",
  ];

  return (
    <section
      id="hero"
      className="relative max-h-[100vh] py-10 md:py-16 lg:py-20 flex items-center justify-center px-4 md:px-8 lg:px-16 text-white">
      <div className="absolute inset-0 opacity-10 z-0" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-10 py-12" data-aos="fade-right">
        <div className="text-center md:text-left w-full md:w-1/2">
          <h2 className="inline-block bg-purple-900/20 text-pink-400 border border-purple-500 px-4 py-1 text-xs md:text-sm font-medium uppercase tracking-wide rounded-full mb-4">
            Ready to Innovate
          </h2>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 leading-tight">
            MERN stack <span className="text-purple-500">Developer</span>
          </h1>
          <h2 className="text-lg md:text-xl mt-2 font-medium text-white min-h-[30px]">
            <span ref={typedRef} />
          </h2>
          <p className="text-base md:text-lg mt-6 text-gray-300">
            I'm a MERN Stack Developer and Hackathon winner passionate about
            building impactful web applications.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-6">
            {techStack.map((tech, i) => (
              <span
                key={i}
                className="bg-[#1f2937] text-gray-200 px-4 py-1 rounded-full text-sm shadow hover:bg-purple-700 transition"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center md:justify-start gap-5 text-gray-400 text-xl">
            <a
              href="https://github.com/VENKYREDDY14"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-gray-600 rounded-full hover:border-purple-500 hover:text-white transition"
            >
              <Github />
            </a>
            <a
              href="https://linkedin.com/in/venkateswara-reddy-yarramreddy-3b252925a"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-gray-600 rounded-full hover:border-purple-500 hover:text-white transition"
            >
              <Linkedin />
            </a>
            <a
              href="https://instagram.com/venkyreddy18"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-gray-600 rounded-full hover:border-purple-500 hover:text-white transition"
            >
              <Instagram />
            </a>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4" data-aos="zoom-in" data-aos-delay="200">
            <a
              href="#projects"
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 py-3 px-6 rounded-lg font-semibold transition"
            >
              <FolderGit2 className="w-5 h-5" />
              Projects
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 border border-purple-500 hover:bg-purple-500 hover:text-white py-3 px-6 rounded-lg font-semibold transition"
            >
              <Mail className="w-5 h-5" />
              Contact
            </a>
          </div>
        </div>

        <LottieDisplay />
      </div>
    </section>
  );
};

export default HeroSection;
