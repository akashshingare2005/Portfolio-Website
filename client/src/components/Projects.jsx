import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/portfolioData";
import { fadeInUp } from "../utils/animations";

const categories = ["All", ...new Set(projects.map((p) => p.category))];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Projects"
          subtitle="8 full-stack and specialized projects showcasing expertise in web development, AI, and systems design."
        />

        <motion.div
          className="mb-10 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition duration-300 ${
                activeCategory === category
                  ? "border-cyan-300 bg-cyan-300/20 text-cyan-200 shadow-lg shadow-cyan-300/20"
                  : "border-slate-700 text-slate-300 hover:border-slate-500 hover:text-slate-100"
              }`}
            >
              {category}
              {category !== "All" && (
                <span className="ml-2 inline-block h-2 w-2 rounded-full bg-slate-500" />
              )}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2"
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProjects.map((project, idx) => (
            <motion.article
              key={project.id}
              layout
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ y: -12, boxShadow: "0 20px 40px rgba(34, 211, 238, 0.15)" }}
              className="group glass-card overflow-hidden rounded-2xl transition duration-300"
            >
              <div className="relative h-56 overflow-hidden bg-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-3 right-3">
                  <span className="inline-block rounded-full border border-cyan-300/60 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-700/60 bg-slate-900/40 px-3 py-1 text-xs font-medium text-slate-300 hover:border-cyan-400/60 hover:text-cyan-300 transition"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4 border-t border-slate-800/50 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-300 hover:text-cyan-200 transition"
                  >
                    <FaGithub size={16} /> GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-orange-300 hover:text-orange-200 transition"
                  >
                    <HiOutlineExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 rounded-xl border border-slate-800 bg-slate-900/40 p-5 text-center text-sm text-slate-400"
        >
          Total Projects: <span className="font-semibold text-cyan-300">{projects.length}</span> | Showing:{" "}
          <span className="font-semibold text-cyan-300">{filteredProjects.length}</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
