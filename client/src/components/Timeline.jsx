import { motion } from "framer-motion";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { FaGraduationCap } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { timeline } from "../data/portfolioData";
import { fadeInUp } from "../utils/animations";

const Timeline = () => {
  const getIcon = (index) => {
    if (index === 0) return <HiOutlineAcademicCap className="text-xl text-cyan-300" />;
    if (index === 1) return <HiOutlineAcademicCap className="text-xl text-orange-300" />;
    return <FaGraduationCap className="text-lg text-cyan-300" />;
  };

  return (
    <section id="timeline" className="py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Education Journey"
          title="Academic Milestones"
          subtitle="From secondary education to engineering, building a strong technical foundation."
        />

        <div className="relative mx-auto max-w-3xl border-l-2 border-gradient-to-b border-cyan-400/30 pl-8 sm:pl-12 lg:pl-16">
          {timeline.map((item, index) => (
            <motion.article
              key={item.year}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.15 }}
              className="relative mb-10 last:mb-0"
            >
              <motion.div
                className="absolute -left-12 top-0 flex h-10 w-10 items-center justify-center rounded-full border-4 border-slate-950 bg-slate-900 sm:-left-[66px]"
                whileInView={{ scale: [0.8, 1.1, 1], boxShadow: ["0 0 0 0 rgba(34, 211, 238, 0.4)", "0 0 0 8px rgba(34, 211, 238, 0)"] }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {getIcon(index)}
              </motion.div>

              <div className="glass-card rounded-xl p-5">
                <p className="inline-block rounded-full border border-cyan-400/40 bg-cyan-400/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  {item.year}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-slate-100">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
