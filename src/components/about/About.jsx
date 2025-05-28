import React from "react";
import image from "../../assets/kkk.jpg";

const About = () => {
  return (
    <div>
      <section id="about" className="py-0 md:py-20">
        <div className="mx-auto px-0">
          <div className="border border-black flex flex-col lg:flex-row items-stretch w-full min-h-[650px]">
            {/* Left Side */}
            <div className="lg:w-1/2 w-full bg-black flex justify-center items-center p-6">
              <img
                src={image}
                alt="About me"
                className="max-w-full max-h-[600px] object-contain rounded-md shadow-lg"
              />
            </div>

            {/* Vertical Divider */}
            <div className="hidden lg:block w-px bg-black" />

            {/* Right Side */}
            <div className="lg:w-1/2 w-full px-8 md:px-16 py-12 flex flex-col justify-center">
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl mb-6 text-start text-gray-900 font-medium">
                  About Me
                </h2>
                <p className="text-gray-600 mb-8 text-lg">
                  An aspiring tech individual.
                </p>
              </div>

              <div className="relative border-l-2 border-gray-200 ml-4 space-y-8">
                <div className="flex flex-col md:flex-row relative pl-8 group">
                  <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#22a094] border-4 border-white shadow-md transition-all duration-300 group-hover:scale-125"></span>
                  <div className="font-medium md:w-1/4 mb-2 md:mb-0 text-gray-500">
                    2023 - Present
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="font-bold text-xl text-gray-800">
                      Junior Developer
                    </h3>
                    <p className="italic text-gray-600">
                      Alternative Technology
                    </p>
                    <p className="mt-2 text-gray-700 leading-relaxed">
                      Leading frontend projects, building responsive React
                      websites and Flutter apps, collaborating with UX
                      designers, and optimizing performance.
                    </p>
                  </div>
                </div>

                {/* Timeline Item */}
                <div className="flex flex-col md:flex-row relative pl-8 group">
                  <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#22a094] border-4 border-white shadow-md transition-all duration-300 group-hover:scale-125"></span>
                  <div className="font-medium md:w-1/4 mb-2 md:mb-0 text-gray-500">
                    Aug 2022 - Nov 2022
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="font-bold text-xl text-gray-800">
                      Frontend Developer
                    </h3>
                    <p className="italic text-gray-600">BrandAd Inc.</p>
                    <p className="mt-2 text-gray-700 leading-relaxed">
                      Built responsive websites with React, collaborated with UX
                      designers, and optimized performance.
                    </p>
                  </div>
                </div>

                {/* Timeline Item
                <div className="flex flex-col md:flex-row relative pl-8 group">
                  <span className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#c22e1a] border-4 border-white shadow-md transition-all duration-300 group-hover:scale-125"></span>
                  <div className="font-medium md:w-1/4 mb-2 md:mb-0 text-gray-500">
                    2017 - 2019
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="font-bold text-xl text-gray-800">
                      Junior Developer
                    </h3>
                    <p className="italic text-gray-600">Startup Labs</p>
                    <p className="mt-2 text-gray-700 leading-relaxed">
                      Implemented features, fixed bugs, and learned modern web
                      development practices.
                    </p>
                  </div>
                </div> */}
              </div>

              <div className="mt-12">
                <a
                  href="/Karuna.pdf"
                  download
                  className="inline-flex items-center gap-2 bg-[#ff90e8] hover:bg-gray-900 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
