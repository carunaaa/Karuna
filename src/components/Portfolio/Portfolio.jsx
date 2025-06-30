import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Hero from "../hero/Hero";
import Project from "../projects/Project";
import Skill from "../skill/Skill";
import About from "../about/About";

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero />
        <Project />
        <Skill />
        {/* <About /> */}
      </main>

      <footer id="contact" className="bg-yellow-400 py-12 shadow-inner">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h1 className="text-5xl font-extrabold text-black mb-1">k.</h1>
              <p className="text-black text-lg font-medium tracking-wide">
                Web Developer & UI/UX Designer
              </p>
            </div>

            <div className="flex space-x-8 text-3xl">
              <a
                href="https://github.com/carunaaa"
                aria-label="GitHub"
                className="text-black hover:text-pink-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/karuna101/"
                aria-label="LinkedIn"
                className="text-black hover:text-indigo-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiLinkedin />
              </a>
              <a
                href="mailto:devkotakaruna06@example.com"
                aria-label="Email"
                className="text-black hover:text-red-600 transition-colors duration-300"
              >
                <FiMail />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-black/20 text-center text-black font-semibold text-sm md:text-base w-full">
          <p>© {new Date().getFullYear()} KARUNA. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
