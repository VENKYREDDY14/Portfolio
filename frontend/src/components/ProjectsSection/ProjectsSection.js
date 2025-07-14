import { useState, useEffect } from "react";
import { Github, ExternalLink } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "NxtTrendz - E-Commerce",
    image: "/images/NxtTrendz.png",
    description:
      "Built Login, Products, and Product Details pages with React Router and event handlers; implemented secure authentication using JWT and REST API calls.",
    github: "https://github.com/VENKYREDDY14/nxtTrendz",
    live: "https://venkynxttrendz.ccbp.tech/",
  },
  {
    title: "Dental Care",
    image: "/images/dentalCare.png",
    description:
      "Allows patients to schedule, view appointments; provides secure login and registration for patients, doctors.",
    github: "https://github.com/VENKYREDDY14/Dental-Care",
    live: "https://oral-vis-venkys-projects-6be83651.vercel.app/",
  },
  {
    title: "Fruit Mart",
    image: "/images/FruitMart.png",
    description:
      "Developed a full-stack bulk order management web application using React.js, Node.js, Express.js, and MongoDB.",
    github: "https://github.com/VENKYREDDY14/Fruit-Mart",
    live: "https://agro-assignment.vercel.app/",
  },
  {
    title: "Prescripto",
    image: "/images/prescripto.png",
    description:
      "A healthcare platform for patients to register, login, book, and manage appointments with doctors.",
    github: "https://github.com/VENKYREDDY14/doctor-appointment",
    live: "https://doctor-appointment-three-pi.vercel.app/",
  },
  {
    title: "NxtWatch",
    image: "/images/nxtwatch.png",
    description:
      "YouTube clone with dark/light mode, login, trending, saved, and gaming video features.",
    github: "https://github.com/VENKYREDDY14/nxtWatch",
    live: "https://venkynxtwatch.ccbp.tech/",
  },
  {
    title: "Jobby",
    image: "/images/jobby.png",
    description:
      "A job search platform where users can apply for jobs and manage applications.",
    github: "https://github.com/VENKYREDDY14/Jobby-App",
    live: "https://vrjobby.ccbp.tech/",
  },
];

const certificates = [
  { title: "SQL Completion", image: "/images/sql.jpeg", link: "/pdf/SQL.pdf" },
  {
    title: "Ornate 2K25 Participation",
    image: "/images/TechExcel.jpeg",
    link: "/images/TechExcel.jpeg",
  },
  {
    title: "Ornate 2K25 Winner",
    image: "/images/TechZeon.jpeg",
    link: "/images/TechZeon.jpeg",
  },
  {
    title: "Python Completion",
    image: "/images/python.jpeg",
    link: "/pdf/python_certificate.pdf",
  },
  {
    title: "React JS Completion",
    image: "/images/react.jpeg",
    link: "/pdf/Reactjs.pdf",
  },
  {
    title: "Node JS Completion",
    image: "/images/node.jpeg",
    link: "/pdf/nodejs.pdf",
  },
];

const techStack = [
  { name: "HTML5", image: "/images/html5.webp" },
  { name: "CSS3", image: "/images/css3.png" },
  { name: "JavaScript", image: "/images/javascript.png" },
  { name: "React", image: "/images/reactjs.png" },
  { name: "Node.js", image: "/images/nodejs.png" },
  { name: "Express.js", image: "/images/expressjs.png" },
  { name: "MongoDB", image: "/images/mongodb.png" },
  { name: "Tailwind CSS", image: "/images/tailwindcss.png" },
  { name: "GitHub", image: "/images/git.png" },
  { name: "Python", image: "/images/python3.jpg" },
];

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("Projects");
  const [isFading, setIsFading] = useState(false);
  const [displayedTab, setDisplayedTab] = useState("Projects");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleTabChange = (tab) => {
    if (tab === activeTab) return;
    setIsFading(true);
    setTimeout(() => {
      setDisplayedTab(tab);
      setActiveTab(tab);
      setIsFading(false);
    }, 300);
  };

  const renderTabContent = () => {
    switch (displayedTab) {
      case "Projects":
        return (
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-[#2e2e48] p-4 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-purple-600"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-lg mb-4 group-hover:opacity-90 transition duration-300"
                />
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 group-hover:text-gray-200 transition">
                  {project.description}
                </p>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-purple-400 transition"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-purple-400 transition"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        );
      case "Certificates":
        return (
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10">
            {certificates.map((cert, idx) => (
              <div
                key={idx}
                className="relative group overflow-hidden rounded-xl shadow-lg border border-gray-700 bg-[#2e2e48]"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-60 object-cover rounded-lg transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-800"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            ))}
          </div>
        );
      case "Tech Stack":
        return (
          <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 mt-10">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-[#2e2e48] p-5 rounded-xl shadow-lg hover:scale-105 hover:shadow-purple-700 transition-all duration-300 group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img
                  src={tech.image}
                  alt={`${tech.name} logo`}
                  className="w-16 h-16 mb-3 rounded-lg group-hover:rotate-6 transition-transform duration-300"
                />
                <span className="text-sm font-medium text-gray-200 group-hover:text-white transition">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-3"
          data-aos="fade-down"
        >
          Portfolio Showcase
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto" data-aos="fade-up">
          Explore my journey through projects, certifications, and technical
          expertise. Each section represents a milestone in my continuous
          learning path.
        </p>

        <div className="flex justify-center gap-6 mb-6" data-aos="fade-up">
          {["Projects", "Certificates", "Tech Stack"].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`flex items-center gap-2 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeTab === tab
                  ? "bg-purple-700 text-white border-transparent"
                  : "bg-[#2e2e48] text-gray-300 border-gray-600 hover:bg-purple-600 hover:text-white"
              }`}
            >
              {tab === "Projects" && <span>💻</span>}
              {tab === "Certificates" && <span>📄</span>}
              {tab === "Tech Stack" && <span>🛠️</span>}
              {tab}
            </button>
          ))}
        </div>

        <div
          className={`transition-opacity duration-300 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >
          {renderTabContent()}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
