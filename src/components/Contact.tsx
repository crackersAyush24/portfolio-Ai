import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle2, XCircle } from "lucide-react";
import emailjs from "emailjs-com";

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs
      .send("service_hwd0o6o", "template_zyqtmoq", formData, "ixi0_VHit6A0HL5Jq")
      .then(
        () => {
          setStatus({ type: "success", message: "✅ Message sent successfully! I’ll reply soon." });
          setFormData({ name: "", email: "", subject: "", message: "" });
          setTimeout(() => setStatus(null), 4000);
        },
        () => {
          setStatus({ type: "error", message: "❌ Oops! Something went wrong. Please try again." });
          setTimeout(() => setStatus(null), 4000);
        }
      );
  };

  const contactInfo = [
    { icon: <Mail size={24} />, title: "Email", value: "chaubeyayush04@gmail.com", href: "mailto:chaubeyayush04@gmail.com" },
    { icon: <Phone size={24} />, title: "Phone", value: "+91 70288 81954", href: "tel:+917028881954" },
    { icon: <MapPin size={24} />, title: "Location", value: "Mumbai, India", href: "#" },
  ];

  const socialLinks = [
    { icon: <Github size={28} />, name: "GitHub", href: "https://github.com/crackersAyush24?", color: "hover:text-gray-900" },
    { icon: <Linkedin size={28} />, name: "LinkedIn", href: "https://www.linkedin.com/in/ayush-chaubey-90751422b", color: "hover:text-blue-600" },
  ];

  const bgClass = darkMode
    ? "bg-gray-900 text-gray-100"
    : "bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-900";
  const cardBg = darkMode ? "bg-gray-800 border-gray-700 text-gray-100" : "bg-white border-gray-100 text-gray-900";
  const inputBg = darkMode
    ? "bg-gray-700 text-gray-100 placeholder-gray-300 border-gray-600"
    : "bg-white text-gray-900 placeholder-gray-500 border-gray-300";

  return (
    <section id="contact" className={`${bgClass} min-h-screen transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Connect</h2>
          <p className={`text-xl max-w-3xl mx-auto ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            Ready to discuss your next AI project or collaboration? I'm always excited to work on innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
            {contactInfo.map((info, i) => (
              <a
                key={i}
                href={info.href}
                className={`flex items-center gap-4 p-4 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 ${cardBg}`}
              >
                {info.icon}
                <div>
                  <div className="font-semibold">{info.title}</div>
                  <div className="text-sm">{info.value}</div>
                </div>
              </a>
            ))}

            <div>
              <h4 className="text-xl font-bold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className={`transition transform hover:scale-110 ${social.color}`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className={`${cardBg} p-8 rounded-2xl shadow-lg`}>
              <h3 className="text-2xl font-bold mb-6">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 ${inputBg}`}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 ${inputBg}`}
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject *"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 ${inputBg}`}
                />
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Message *"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 ${inputBg}`}
                />
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  <Send size={20} /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* 🔔 Fancy Top-Right Toast */}
      {status && (
        <div
          className={`fixed top-6 right-6 px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 text-lg font-semibold backdrop-blur-md animate-slideIn z-50
            ${status.type === "success"
              ? "bg-green-500/90 text-white border border-green-300"
              : "bg-red-500/90 text-white border border-red-300"
            }`}
        >
          {status.type === "success" ? <CheckCircle2 size={26} /> : <XCircle size={26} />}
          <span>{status.message}</span>
        </div>
      )}

      <style>
        {`
          @keyframes slideIn {
            0% { opacity: 0; transform: translateX(40px) scale(0.95); }
            100% { opacity: 1; transform: translateX(0) scale(1); }
          }
          .animate-slideIn {
            animation: slideIn 0.4s ease-out;
          }
        `}
      </style>
    </section>
  );
};

export default Contact;
