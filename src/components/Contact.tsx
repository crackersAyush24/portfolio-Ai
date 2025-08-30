import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // UI success/error message

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .send(
        "service_hwd0o6o",       // Your Service ID
        "template_zyqtmoq",       // Your Template ID
        formData,                // Form data
        "ixi0_VHit6A0HL5Jq"     // Your Public Key
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setStatus("✅ Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });

          // Hide message after 3 seconds
          setTimeout(() => setStatus(""), 3000);
        },
        (error) => {
          console.error("Email send error:", error.text);
          setStatus("❌ Failed to send message. Please try again.");
          setTimeout(() => setStatus(""), 3000);
        }
      );
  };

  const contactInfo = [
    {
      icon: <Mail className="text-blue-600" size={24} />,
      title: "Email",
      value: "chaubeyayush04@gmail.com",
      href: "mailto:chaubeyayush04@gmail.com",
    },
    {
      icon: <Phone className="text-purple-600" size={24} />,
      title: "Phone",
      value: "+91 70288 81954",
      href: "tel:+917028881954",
    },
    {
      icon: <MapPin className="text-teal-600" size={24} />,
      title: "Location",
      value: "Mumbai, India",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={28} />,
      name: "GitHub",
      href: "https://github.com/crackersAyush24?",
      color: "hover:text-gray-900",
    },
    {
      icon: <Linkedin size={28} />,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/ayush-chaubey-90751422b",
      color: "hover:text-blue-600",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your next AI project or collaboration? I'm always
            excited to work on innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Get In Touch
            </h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                >
                  {info.icon}
                  <div>
                    <div className="font-semibold text-gray-900">{info.title}</div>
                    <div className="text-gray-600">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`text-gray-600 ${social.color} transform hover:scale-110 transition-all duration-200`}
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
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Success/Error Message at Bottom */}
      {status && (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-slide-up z-50">
          {status}
        </div>
      )}

      {/* Animation CSS */}
      <style>
        {`
          @keyframes slide-up {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-slide-up {
            animation: slide-up 0.5s ease-out;
          }
        `}
      </style>
    </section>
  );
};

export default Contact;
