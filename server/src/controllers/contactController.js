import ContactMessage from "../models/ContactMessage.js";
import nodemailer from "nodemailer";

const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const getMailTransport = () => {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    const error = new Error("Email service is not configured.");
    error.statusCode = 503;
    throw error;
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
};

export const submitContactForm = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    const ownerEmail = process.env.OWNER_EMAIL || "akashshingare217@gmail.com";
    const mailFrom = process.env.MAIL_FROM || process.env.SMTP_USER;
    const transport = getMailTransport();

    await Promise.all([
      transport.sendMail({
        from: mailFrom,
        to: ownerEmail,
        replyTo: email,
        subject: `New portfolio message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      }),
      transport.sendMail({
        from: mailFrom,
        to: email,
        replyTo: ownerEmail,
        subject: "Thank you for contacting Akash",
        text: `Hi ${name},\n\nThank you for contacting me. I have received your message and will get back to you soon.\n\nBest regards,\nAkash Shingare`,
      }),
    ]);

    const savedMessage = await ContactMessage.create({
      name,
      email,
      message,
    });

    return res.status(201).json({
      success: true,
      message: "Message sent successfully.",
      data: {
        id: savedMessage._id,
        name: savedMessage.name,
        email: savedMessage.email,
        message: savedMessage.message,
      },
    });
  } catch (error) {
    next(error);
  }
};
