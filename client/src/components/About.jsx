import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { personalInfo } from "../data/portfolioData";
import { fadeInUp, staggerContainer } from "../utils/animations";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="About Me"
          title="A Developer Who Blends Logic With Design"
          subtitle="I love building products that are fast, intuitive, and solve real problems."
        />

        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeInUp} className="glass-card rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-slate-100">Introduction</h3>
            <p className="mt-4 text-slate-400">{personalInfo.bio}</p>
            <p className="mt-3 text-slate-400">
              I am based in {personalInfo.location} and enjoy transforming ideas into reliable products using AI,
              modern frontend engineering, and scalable full-stack architecture.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="glass-card rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-slate-100">Highlights</h3>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li className="rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3">Hands-on MERN stack development</li>
              <li className="rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3">Strong UI implementation with modern animations</li>
              <li className="rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3">Focused on AI workflows, full-stack projects, and placement-ready solutions</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
