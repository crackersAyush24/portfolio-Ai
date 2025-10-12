import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import emailjs from "emailjs-com";

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs
      .send("service_hwd0o6o", "template_zyqtmoq", formData, "ixi0_VHit6A0HL5Jq")
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
          setTimeout(() => setStatus(""), 3000);
        },
        () => {
          setStatus("❌ Failed to send message. Please try again.");
          setTimeout(() => setStatus(""), 3000);
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

  const bgClass = darkMode ? "bg-gray-900 text-gray-100" : "bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-900";
  const cardBg = darkMode ? "bg-gray-800 border-gray-700 text-gray-100" : "bg-white border-gray-100 text-gray-900";
  const inputBg = darkMode ? "bg-gray-700 text-gray-100 placeholder-gray-300 border-gray-600" : "bg-white text-gray-900 placeholder-gray-500 border-gray-300";

  return (
    // ✅ ID added, z-index increased, and pointer-events fixed
    <section
      id="contact"
      className={`${bgClass} relative z-20 min-h-screen transition-colors duration-500`}
      style={{ pointerEvents: "auto" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Let's Connect
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Ready to discuss your next AI project or collaboration? I'm always
            excited to work on innovative solutions.
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
                    target="_blank"
                    rel="noopener noreferrer"
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

      {/* Status message */}
      {status && (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-slide-up z-[9999]">
          {status}
        </div>
      )}

      <style>
        {`
          @keyframes slide-up {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-slide-up { animation: slide-up 0.5s ease-out; }
        `}
      </style>
    </section>
  );
};

export default Contact;
