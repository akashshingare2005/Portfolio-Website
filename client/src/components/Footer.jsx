import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 py-8">
      <div className="section-shell flex flex-col items-center justify-between gap-4 text-center text-sm text-slate-400 md:flex-row">
        <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>

        <div className="flex items-center gap-4">
          <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="transition hover:text-cyan-300">
            <FaGithub size={20} />
          </a>
          <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-cyan-300">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
