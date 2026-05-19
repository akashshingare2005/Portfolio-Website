import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 py-8">
      <div className="section-shell flex flex-col items-center justify-between gap-4 text-center text-sm text-slate-400 md:flex-row">
        <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>

        <div className="flex items-center gap-3">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-2 text-slate-200 transition hover:bg-cyan-500 hover:text-white"
          >
            <FaGithub size={18} />
            <span className="hidden md:inline text-sm">GitHub</span>
          </a>

          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-2 text-slate-200 transition hover:bg-cyan-500 hover:text-white"
          >
            <FaLinkedin size={18} />
            <span className="hidden md:inline text-sm">LinkedIn</span>
          </a>

          <a
            href={personalInfo.socials.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-2 text-slate-200 transition hover:bg-cyan-500 hover:text-white"
          >
            <FaInstagram size={18} />
            <span className="hidden md:inline text-sm">Instagram</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
