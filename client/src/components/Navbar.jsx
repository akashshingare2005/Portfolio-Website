import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { navLinks, personalInfo } from "../data/portfolioData";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navLinks.map((link) => document.getElementById(link.href)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.55 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur-md">
      <nav className="section-shell flex h-16 items-center justify-between">
        <button
          className="font-heading text-lg font-bold tracking-wide text-slate-100"
          onClick={() => handleScrollTo("hero")}
          aria-label="Go to hero"
        >
          {personalInfo.name}
        </button>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleScrollTo(link.href)}
                className={`text-sm font-medium transition ${
                  activeSection === link.href ? "text-cyan-300" : "text-slate-300 hover:text-slate-100"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button className="md:hidden" onClick={() => setMenuOpen((prev) => !prev)} aria-label="Toggle menu">
          {menuOpen ? <HiX size={24} /> : <HiOutlineMenuAlt3 size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="border-t border-slate-800 bg-slate-950/95 px-4 py-4 md:hidden"
          >
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleScrollTo(link.href)}
                    className={`w-full rounded-md px-3 py-2 text-left text-sm ${
                      activeSection === link.href ? "bg-slate-800 text-cyan-300" : "text-slate-300"
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
