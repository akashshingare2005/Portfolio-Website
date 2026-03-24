import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post(`${API_BASE_URL}/api/contact`, formData);
      toast.success("Your message has been sent successfully.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      const message = error.response?.data?.message || "Unable to send message. Try again later.";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Let us Build Something Great"
          subtitle="Have an idea, internship, or collaboration? Send a message and I will get back to you."
        />

        <motion.form
          onSubmit={handleSubmit}
          className="glass-card mx-auto max-w-3xl rounded-2xl p-6 sm:p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300"
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            placeholder="Your Message"
            className="mt-4 w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300"
          />

          <button type="submit" disabled={isSubmitting} className="btn-primary mt-5 w-full sm:w-auto">
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
