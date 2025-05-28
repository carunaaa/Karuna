import React, { useState } from "react";
import react from "../../assets/science.png";
import flutter from "../../assets/flutter.png";
import python from "../../assets/python.png";
import tailwind from "../../assets/tailwind.svg";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Galaincha Mobile",
      description:
        "Flutter-based companion app to the renowned Galaincha carpet design software.",
      tags: ["Flutter", "Dart", "Provider"],
      bgColor: "bg-[#22a094]",
      logo: flutter,
      link: "https://galaincha.com.np/",
      inProgress: true,
    },
    {
      id: 2,
      title: "RamroDesigns",
      description:
        "React-Redux website with real-time API data and optimized performance.",
      tags: ["React", "JavaScript", "Tailwind", "Redux"],
      bgColor: "bg-[#dc331e]",
      logo: react,
      link: "https://ramrodesigns.com/",
      inProgress: false,
    },
    {
      id: 3,
      title: "Only 1Dollar Design Website",
      description:
        "Website featuring a sleek, responsive UI focused on usability and modern aesthetics.",
      tags: ["React", "JavaScript", "CSS"],
      bgColor: "bg-[#22a094]",
      logo: react,
      link: "https://only1dollardesign.com/",
      inProgress: false,
    },
    {
      id: 4,
      title: "Only 1Dollar Design Mobile App",
      description:
        "Flutter-based app with responsive design and user-friendly interface.",
      tags: ["Flutter", "Dart", "Provider", "Figma"],
      bgColor: "bg-[#f1f332]",
      logo: flutter,
      link: "https://apps.apple.com/sb/app/only1dollardesign/id6478212180",
      inProgress: false,
    },
    {
      id: 5,
      title: "GoldSage",
      description:
        "Undergraduate project predicting gold prices using a hybrid LSTM-CNN model.",
      tags: ["Python", "Streamlit"],
      bgColor: "bg-[#ffc901]",
      logo: python,
      link: "https://github.com/carunaaa/GoldSage",
      inProgress: false,
    },
    {
      id: 6,
      title: "Coffee Shop Website",
      description:
        "Responsive, mobile-friendly coffee shop site built with Tailwind CSS and clean UI.",
      tags: ["HTML", "Tailwind", "JavaScript"],
      bgColor: "bg-[#91a8ed]",
      logo: tailwind,
      link: "https://carunaaa.github.io/kye/",
      inProgress: false,
    },
  ];

  return (
    <div>
      <section id="work" className="py-24 bg-white text-black">
        <div className="mx-auto px-12">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`${project.bgColor} rounded-lg px-6 py-10 hover:shadow-lg transition-all border border-black relative`}
              >
                {project.inProgress && (
                  <div className="absolute top-2 right-2 bg-black text-white px-2 py-1 rounded-md text-xs font-bold">
                    Work in Progress
                  </div>
                )}
                {project.logo && (
                  <img
                    src={project.logo}
                    alt={`${project.title} logo`}
                    className="w-16 h-16 mb-4 object-contain"
                  />
                )}
                <a
                  href={project.inProgress ? "#" : project.link}
                  target={project.inProgress ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className={`text-4xl mb-3 text-black cursor-pointer ${
                    project.inProgress ? "" : "hover:underline"
                  } block`}
                >
                  {project.title}
                </a>

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
                {!project.inProgress && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 text-black cursor-pointer hover:underline font-medium inline-block"
                  >
                    View Project →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
