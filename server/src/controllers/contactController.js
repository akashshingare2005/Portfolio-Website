import ContactMessage from "../models/ContactMessage.js";

const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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
