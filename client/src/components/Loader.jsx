import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950">
      <motion.div
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{ scale: [0.85, 1.08, 0.85], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.4, repeat: Infinity }}
        className="h-16 w-16 rounded-full border-4 border-cyan-300 border-t-transparent"
      />
    </div>
  );
};

export default Loader;
