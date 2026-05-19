import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { personalInfo } from "../data/portfolioData";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formatPhone = (phone) => {
    const digits = phone.replace(/\D/g, "");
    if (digits.length === 12 && digits.startsWith("91")) {
      const local = digits.slice(2);
      return `+91 ${local.slice(0, 5)} ${local.slice(5)}`;
    }
    if (digits.length === 10) {
      return `+91 ${digits.slice(0, 5)} ${digits.slice(5)}`;
    }
    return phone;
  };

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

        <div className="mx-auto mb-6 grid max-w-3xl gap-4 md:grid-cols-3">
          <div className="md:col-span-1 flex flex-col gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="glass-card flex items-center gap-3 rounded-2xl p-4 text-slate-200 transition hover:scale-[1.02] hover:border-cyan-300"
              aria-label="Send email"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-cyan-300">
                <FaEnvelope />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium">Email</div>
                <div className="text-sm text-slate-300 break-all">{personalInfo.email}</div>
              </div>
            </a>

            <a
              href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
              className="glass-card flex items-center gap-3 rounded-2xl p-4 text-slate-200 transition hover:scale-[1.02] hover:border-cyan-300"
              aria-label="Call phone"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-cyan-300">
                <FaPhoneAlt />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium">Phone</div>
                <div className="text-sm text-slate-300">{formatPhone(personalInfo.phone)}</div>
              </div>
            </a>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            className="glass-card rounded-2xl p-6 sm:p-8 md:col-span-2"
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
      </div>
    </section>
  );
};

export default Contact;
