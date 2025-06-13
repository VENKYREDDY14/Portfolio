import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";

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
      "Developed a full-stack bulk order management web application using React.js, Node.js, Express.js, and MongoDB, featuring product browsing, cart, and order tracking for buyers.",
    github: "https://github.com/VENKYREDDY14/Fruit-Mart",
    live: "https://agro-assignment.vercel.app/",
  },
];

const certificates = [
    {
      title: "SQL Completion",
      image: "/images/sql.jpeg",
      link: "/pdf/SQL.pdf",
    },
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

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("Projects");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Projects":
        return (
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#2e2e48] p-4 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition"
                    title="GitHub Repo"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition"
                    title="Live Site"
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
          <div className="text-center text-gray-400 mt-10">
            Tech stack overview coming soon.
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-[#1a1a2e] text-white"
      style={{
        backgroundImage: "radial-gradient(#2c2c54 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-3">
          Portfolio Showcase
        </h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Explore my journey through projects, certifications, and technical expertise.
          Each section represents a milestone in my continuous learning path.
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-6">
          {["Projects", "Certificates", "Tech Stack"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
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

        {/* Tab Content */}
        {renderTabContent()}
      </div>
    </section>
  );
};

export default ProjectsSection;
