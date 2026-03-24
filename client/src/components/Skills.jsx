import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skills } from "../data/portfolioData";
import { fadeInUp, staggerContainer } from "../utils/animations";

const skillCategories = {
  "Programming Languages": ["C", "C++", "Python", "Java", "JavaScript", "Swing"],
  "Web Development": ["HTML", "CSS", "React.js", "Node.js", "Express.js", "Tailwind CSS", "REST APIs"],
  "Databases": ["MySQL", "MongoDB"],
  "Core CS": ["DSA", "OOP", "DBMS", "Operating System", "Computer Networks", "Cloud Basics"],
  "Tools & IDE": ["Git & GitHub", "VS Code", "Eclipse IDE", "AutoCAD", "ZWCAD", "Scilab", "Canva", "MS Office"],
  "Soft Skills": ["Communication", "Teamwork", "Leadership", "Adaptability", "Time Management"],
};

const Skills = () => {
  const getSkillLevel = (skillName) => {
    const skill = skills.find((s) => s.name === skillName);
    return skill?.level || 0;
  };

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
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {categorySkills.map((skillName) => {
                  const level = getSkillLevel(skillName);
                  return (
                    <motion.article
                      key={skillName}
                      variants={fadeInUp}
                      whileHover={{ scale: 1.05 }}
                      className="glass-card rounded-xl p-4"
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <h4 className="font-medium text-slate-100">{skillName}</h4>
                        <span className="text-xs text-cyan-300">{level}%</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-orange-400"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                        />
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
