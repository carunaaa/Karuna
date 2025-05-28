import React, { useState } from "react";
import react from "../../assets/science.png";
import flutter from "../../assets/flutter.png";
import python from "../../assets/python.png";
import tailwind from "../../assets/tailwind.svg";

import { HiXMark } from "react-icons/hi2";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Galaincha Mobile",
      description:
        "Flutter-based companion app to the renowned Galaincha carpet design software.",
      tags: ["Flutter", "Dart", "Provider"],
      bgColor: "bg-[#22a094]",
      logo: flutter,
      images: [flutter, flutter],
      link: "#",
    },
    {
      id: 2,
      title: "RamroDesigns",
      description:
        "React-Redux website with real-time API data and optimized performance.",
      tags: ["React", "JavaScript", "Tailwind", "Redux"],
      bgColor: "bg-[#dc331e]",
      logo: react,
      features: [
        "Real-time API integration",
        "Redux state management",
        "Responsive design",
        "Performance optimizations",
      ],
      link: "#",
    },
    {
      id: 3,
      title: "Only 1Dollar Design Website",
      description:
        "Website featuring a sleek, responsive UI focused on usability and modern aesthetics.",
      tags: ["React", "JavaScript", "CSS"],
      bgColor: "bg-[#22a094]",
      logo: react,
      features: [
        "Responsive layout",
        "CSS animations",
        "Modern UI design",
        "Contact form integration",
      ],
      link: "#",
    },
    {
      id: 4,
      title: "Only 1Dollar Design Mobile App",
      description:
        "Flutter-based app with responsive design and user-friendly interface.",
      tags: ["Flutter", "Dart", "Provider", "Figma"],
      bgColor: "bg-[#f1f332]",
      logo: flutter,
      features: [
        "Cross-platform development",
        "State management with Provider",
        "UI designed in Figma",
        "Offline capabilities",
      ],
      link: "#",
    },
    {
      id: 5,
      title: "GoldSage",
      description:
        "Undergraduate project predicting gold prices using a hybrid LSTM-CNN model.",
      tags: ["Python", "Streamlit"],
      bgColor: "bg-[#ffc901]",
      logo: python,
      features: [
        "Hybrid LSTM-CNN model",
        "Time-series forecasting",
        "Data visualization",
        "Streamlit dashboard",
      ],
      link: "#",
    },
    {
      id: 6,
      title: "Coffee Shop Website",
      description:
        "Responsive, mobile-friendly coffee shop site built with Tailwind CSS and clean UI.",
      tags: ["HTML", "Tailwind", "JavaScript"],
      bgColor: "bg-[#91a8ed]",
      logo: tailwind,
      features: [
        "Mobile-first design",
        "Tailwind CSS utility classes",
        "Interactive menu",
        "Online ordering system",
      ],
      link: "#",
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  return (
    <div>
      <section id="work" className="py-24 bg-gray-50">
        <div className="mx-auto px-12">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`${project.bgColor} rounded-lg px-6 py-10 hover:shadow-lg transition-all border border-black`}
              >
                {project.logo && (
                  <img
                    src={project.logo}
                    alt={`${project.title} logo`}
                    className="w-16 h-16 mb-4 object-contain"
                  />
                )}
                <h3
                  className="text-4xl mb-3 text-black cursor-pointer hover:underline"
                  onClick={() => openModal(project)}
                >
                  {project.title}
                </h3>
                <p className="text-black text-xl mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white text-black px-3 py-1 rounded-full text-sm border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  className="mt-6 text-black cursor-pointer hover:underline font-medium"
                  onClick={() => openModal(project)}
                >
                  View Project →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
          {/* Background overlay with higher z-index */}
          <div
            className="fixed inset-0 transition-opacity"
            aria-hidden="true"
            onClick={closeModal}
          >
            <div className="absolute inset-0 bg-black opacity-70"></div>
          </div>

          {/* Modal content with higher z-index */}
          <div className="relative z-50 inline-block w-full max-w-3xl mx-4 my-8 text-left align-middle transform bg-white rounded-lg shadow-2xl overflow-hidden">
            {/* Modal header with project color */}
            <div
              className={`${selectedProject.bgColor} px-6 py-4 flex justify-between items-center`}
            >
              <div className="flex items-center space-x-4">
                {selectedProject.logo && (
                  <img
                    src={selectedProject.logo}
                    alt={`${selectedProject.title} logo`}
                    className="w-12 h-12 object-contain"
                  />
                )}
                <h3 className="text-3xl font-bold text-black">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={closeModal}
                className="text-black hover:text-gray-800 focus:outline-none"
              >
                <HiXMark className="h-8 w-8" />
              </button>
            </div>

            {/* Modal body */}
            <div className="bg-white px-6 py-4">
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-4">
                  Project Screenshots
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {selectedProject.images?.slice(0, 4).map((image, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={image}
                        alt={`${selectedProject.title} screenshot ${index + 1}`}
                        className="w-full h-auto rounded-lg border border-gray-200 object-cover "
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-2">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-black text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Visit Project
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
