import { useState, useEffect } from "react";
import ToggleMenu from "../toggle/ToggleMenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobile, setIsMobile] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      if (menuOpen) setMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <header className="fixed w-full z-50 backdrop-blur-md bg-black shadow-md">
        <div className="container-fluid mx-auto flex justify-between items-center h-20 pl-8">
          <div className="text-5xl font-black text-white">k.</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-xl items-center">
            {["home", "work", "skills", "about", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize  cursor-pointer ${
                  activeSection === item
                    ? "text-[#ff90e8] font-medium"
                    : "text-white hover:text-[#22a094]"
                }`}
              >
                {item}
              </button>
            ))}

            <a
              href="/Karuna.pdf"
              download
              className="bg-[#ff90e8] text-black px-6 h-20 hover:bg-[#e67bcf] transition w-full max-w-xs flex justify-center items-center"
            >
              Download CV
            </a>
          </nav>

          {/* Mobile Menu Button */}
          {isMobile && (
            <ToggleMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          )}
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-white py-4 shadow-md">
            <div className="container mx-auto px-6 flex flex-col space-y-4">
              {["home", "work", "skills", "about", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize text-left py-2 ${
                    activeSection === item
                      ? "text-[#ff90e8] font-medium"
                      : "text-gray-700"
                  }`}
                >
                  {item}
                </button>
              ))}

              <a
                href="/Karuna.pdf"
                download
                className="bg-[#ff90e8] text-black px-6 py-4 hover:bg-[#e67bcf] transition w-full text-center"
              >
                Download CV
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
