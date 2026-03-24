import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiArrowDown, HiOutlineDownload } from "react-icons/hi";
import { personalInfo } from "../data/portfolioData";

const typeWords = ["Web Developer", "AI Enthusiast", "Engineering Student"];

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = typeWords[wordIndex % typeWords.length];
    const typingSpeed = isDeleting ? 50 : 95;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentWord.substring(0, letterIndex + 1);
        setTypedText(nextText);
        setLetterIndex((prev) => prev + 1);

        if (nextText === currentWord) {
          setTimeout(() => setIsDeleting(true), 900);
        }
      } else {
        const nextText = currentWord.substring(0, letterIndex - 1);
        setTypedText(nextText);
        setLetterIndex((prev) => prev - 1);

        if (nextText.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % typeWords.length);
          setLetterIndex(0);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [letterIndex, wordIndex, isDeleting]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative flex min-h-screen items-center pt-20">
      <div className="section-shell grid items-center gap-12 py-20 lg:grid-cols-[1.2fr_1fr]">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="mb-3 inline-block rounded-full border border-cyan-400/40 px-4 py-1 text-xs uppercase tracking-[0.28em] text-cyan-300">
            Hello, I am
          </p>
          <h1 className="text-4xl font-extrabold leading-tight text-slate-100 sm:text-5xl lg:text-6xl">{personalInfo.name}</h1>
          <h2 className="mt-4 text-xl font-semibold text-slate-300 sm:text-2xl">{personalInfo.role}</h2>
          <p className="mt-2 text-lg text-cyan-300">
            {typedText}
            <span className="ml-1 animate-pulse">|</span>
          </p>
          <p className="mt-6 max-w-xl text-slate-400">{personalInfo.bio}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button onClick={scrollToProjects} className="btn-primary">
              View Projects <HiArrowDown className="ml-2" />
            </button>
            <a href="/Akash_Shingare_Resume.pdf" download className="btn-secondary">
              Download Resume <HiOutlineDownload className="ml-2" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="glass-card rounded-3xl p-6 shadow-glow">
            <div className="rounded-2xl border border-slate-700 bg-slate-950/70 p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Current Focus</p>
              <h3 className="mt-3 text-2xl font-bold text-slate-100">Building Modern Products</h3>
              <p className="mt-4 text-slate-400">
                MERN applications with thoughtful UI, strong API architecture, and AI-enhanced experiences.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <span className="rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-center text-slate-300">
                  React + Tailwind
                </span>
                <span className="rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-center text-slate-300">
                  Node + Express
                </span>
                <span className="rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-center text-slate-300">
                  MongoDB
                </span>
                <span className="rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-center text-slate-300">
                  Framer Motion
                </span>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-8 -left-6 h-24 w-24 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute -right-4 -top-8 h-20 w-20 rounded-full bg-orange-400/20 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
