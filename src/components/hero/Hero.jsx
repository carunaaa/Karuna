import React from "react";
import image from "../../assets/IMG_0308.png";

const Hero = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-[95vh] lg:h-[95vh] flex flex-col lg:flex-row pt-20"
    >
      <div className="lg:w-1/2 bg-[#FF90E8] flex items-center border-t border-l border-b border-black p-6">
        <div className="container mx-auto px-6 py-20">
          <h1 className="leading-none text-5xl md:text-6xl font-bold mb-6 text-black">
            Hi, I'm Karuna
          </h1>
          <h2 className="text-xl md:text-3xl mb-8 text-black">
            Web Developer & UI/UX Designer | Problem Solver
          </h2>
          <p className="text-xl mb-10 text-black">
            Currently learning Python for Data Science.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => scrollToSection("work")}
              className="bg-black hover:bg-[#1d8a7f] text-white px-12 py-5 rounded-sm font-medium text-xl transition-colors"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-[#ff90e8] text-[#ff90e8] hover:bg-[#ff90e8]/10 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>

      {/* Single vertical border line between */}
      <div className="w-[1px] bg-black"></div>

      <div className="lg:w-1/2 flex justify-center items-center bg-[#ffc901] border-t border-b border-r border-black p-6">
        <div className="relative max-w-md my-20 lg:my-0">
          <img
            src={image}
            alt="k. - Web Developer"
            className="w-full relative shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
