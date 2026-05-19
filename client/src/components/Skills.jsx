import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { fadeInUp, staggerContainer } from "../utils/animations";

const skillCategories = {
  "Programming Languages": ["C", "C++", "Python", "Java", "JavaScript", "Swing"],
  "Web Development": ["HTML", "CSS", "React.js", "Node.js", "Express.js", "Tailwind CSS", "REST APIs"],
  "Databases": ["MySQL", "MongoDB"],
  "Core CS": ["DSA", "OOP", "DBMS", "Operating System", "Computer Networks", "Cloud Basics"],
  "Tools & IDE": [
    "Git & GitHub",
    "VS Code",
    "Eclipse IDE",
    "AutoCAD",
    "ZWCAD",
    "Scilab",
    "Canva",
    "MS Office",
    "Power BI",
    "Tableau",
    "UiPath",
    "YoloLabel",
  ],
  "Soft Skills": ["Communication", "Teamwork", "Leadership", "Adaptability", "Time Management"],
};

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Skills & Expertise"
          title="Technical & Soft Skills"
          subtitle="A comprehensive toolkit for full-stack development, cloud computing, and team collaboration."
        />

        <div className="space-y-8">
          {Object.entries(skillCategories).map(([category, categorySkills]) => (
            <motion.div
              key={category}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="mb-5 text-lg font-semibold text-cyan-300">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {categorySkills.map((skillName) => (
                  <motion.span
                    key={skillName}
                    variants={fadeInUp}
                    whileHover={{ y: -2 }}
                    className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-slate-100"
                  >
                    {skillName}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
