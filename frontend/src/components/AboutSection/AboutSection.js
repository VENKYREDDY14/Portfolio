import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { BadgeCheck, Code2, Globe2, ArrowUpRight } from "lucide-react";

const AboutSection = () => {
  const [countKey, setCountKey] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: false });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (inView) {
      setCountKey((prev) => prev + 1);
    }
  }, [inView]);

  const stats = [
    {
      icon: <Code2 className="w-5 h-5" />,
      label: "Total Projects",
      value: 4,
      desc: "Innovative web solutions crafted",
      delay: 100,
    },
    {
      icon: <BadgeCheck className="w-5 h-5" />,
      label: "Certificates",
      value: 5,
      desc: "Professional skills validated",
      delay: 200,
    },
    {
      icon: <Globe2 className="w-5 h-5" />,
      label: "Years of Experience",
      value: 0,
      desc: "Continuous learning journey",
      delay: 300,
    },
  ];

  return (
    <section id="about" className="py-20 px-6  text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-6" data-aos="fade-down">
          About Me
        </h2>
        <p className="text-gray-300 mb-12 text-sm" data-aos="fade-up">
          ✨ Driven by curiosity, delivered with code ✨
        </p>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-left md:w-1/2" data-aos="fade-right">
            <h3 className="text-4xl font-bold mb-4 text-white">
              Hello, I’m <span className="text-fuchsia-500">Venkateswara Reddy</span>
            </h3>
            <p className="text-gray-300 mb-4">
              MERN Stack Developer with a passion for full-stack web apps. Hackathon winner with a knack for rapid problem-solving. Fast learner who adapts quickly to new technologies. Driven by curiosity, creativity, and clean code.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="/pdf/venkateswarareddyResume.pdf"
                download
                className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white py-2 px-4 rounded-md font-medium"
              >
                📄 Download CV
              </a>
              <a
                href="#projects"
                className="border border-fuchsia-500 text-fuchsia-500 hover:bg-fuchsia-700 hover:text-white py-2 px-4 rounded-md font-medium"
              >
                {"</>"} View Projects
              </a>
            </div>
          </div>

          <div className="relative" data-aos="fade-left">
            <img
              src="/images/Profile.jpeg"
              alt="Venkateswara Reddy"
              className="w-60 h-60 rounded-full border-4 border-purple-500 shadow-lg object-cover"
            />
          </div>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-white">
          {stats.map((item) => (
            <div
              key={item.label}
              data-aos="fade-up"
              data-aos-delay={item.delay}
              className="group bg-gradient-to-br from-[#1f1b2e] to-[#141824] border border-[#482e97] p-6 rounded-xl hover:shadow-xl hover:shadow-fuchsia-700/30 transition-all duration-300 relative"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-700/20 text-purple-400 flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="text-2xl font-bold text-white">
                  <CountUp key={`${item.label}-${countKey}`} end={item.value} duration={4} />
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-300 uppercase tracking-wide">
                  {item.label}
                </p>
                <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
              </div>
              <ArrowUpRight className="absolute bottom-4 right-4 w-4 h-4 text-gray-500 group-hover:text-purple-400 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
