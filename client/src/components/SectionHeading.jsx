import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations";

const SectionHeading = ({ eyebrow, title, subtitle }) => {
  return (
    <motion.div
      className="mb-10"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">{eyebrow}</p>
      <h2 className="text-3xl font-bold text-slate-100 sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 max-w-2xl text-slate-400">{subtitle}</p> : null}
    </motion.div>
  );
};

export default SectionHeading;
