import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import AIParticleBackground from "./AIParticleBackground";

interface CertificatesProps {
  darkMode: boolean;
}

const certificates = [
  {
    title: "Machine Learning with Python",
    issuer: "IBM",
    date: "2025",
    image: "/certificates/ml_python.jpg",
    link: "https://www.coursera.org/account/accomplishments/records/38XZQDL3L042",
    description: "Comprehensive hands-on training in ML algorithms and Python.",
    skills: ["Machine Learning", "Python", "Data Science"],
  },
  {
    title: "Introduction to Deep Learning & Neural Networks with Keras",
    issuer: "IBM",
    date: "2025",
    image: "/certificates/DL_KERAS.jpg",
    link: "https://coursera.org/verify/7GK7XJN5RYJS",
    description: "Learned advanced neural architectures using Keras.",
    skills: ["Deep Learning", "Neural Networks", "Keras"],
  },
  {
    title: "Deloitte Australia's Data Analytics on Forage",
    issuer: "Forage:Deloitte",
    date: "2025",
    image: "/certificates/Deloite.jpg",
    link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_68ed27764173ee1ef791b1dc_1760507596800_completion_certificate.pdf",
    description:
      "Completed a Deloitte job simulation involving data analysis, forensic technology, Tableau dashboards, and Excel-based data classification.",
    skills: ["Data Analysis", "Data Modeling", "Visualization Tools", "Excel"],
  },
  {
    title: "The Joy of Computing using Python",
    issuer: "NPTEL | IIT Madras",
    date: "Apr 2023",
    image: "/certificates/nptel.jpg",
    link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS20S1448056604078404",
    description: "12-week course completed with 71%, covering foundational Python, logic, and programming constructs.",
    skills: ["Python", "Problem Solving", "Programming Fundamentals"],
  },
  
];

const Certificates: React.FC<CertificatesProps> = ({ darkMode }) => {
  const [selectedCert, setSelectedCert] = useState<null | typeof certificates[0]>(null);
  const [centerIndex, setCenterIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const updateCenter = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const scrollLeft = carousel.scrollLeft;
    let closestIndex = 0;
    let minDiff = Infinity;
    Array.from(carousel.children).forEach((child, idx) => {
      const el = child as HTMLElement;
      const diff = Math.abs(
        el.offsetLeft - scrollLeft - carousel.offsetWidth / 2 + el.offsetWidth / 2
      );
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = idx;
      }
    });
    setCenterIndex(closestIndex);
  };

  useEffect(() => {
    updateCenter();
  }, []);

  return (
    <section
      id="certificates"
      className="relative z-0 py-20 px-4 sm:px-8 lg:px-20 overflow-hidden scroll-smooth"
    >
      {/* ✅ Particle Background */}
      <AIParticleBackground darkMode={darkMode} />

      {/* Overlay for contrast */}
      <div
        className={`absolute inset-0 ${
          darkMode ? "bg-gray-900/80" : "bg-white/20"
        } pointer-events-none z-0`}
      />

      <div className="relative z-10">
        {/* Header with entry animation */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`text-4xl md:text-5xl font-bold text-center mb-12 drop-shadow-md ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          Certificates & Achievements
        </motion.h2>

        {/* ✅ Carousel with parallax scroll */}
        <motion.div
          ref={carouselRef}
          onScroll={updateCenter}
          className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth pb-8 perspective-1000 snap-x snap-mandatory"
          style={{
            WebkitOverflowScrolling: "touch",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {certificates.map((cert, index) => {
            const isCenter = index === centerIndex;
            const cardBg = darkMode
              ? "bg-gray-800/90 border-gray-700 text-gray-100"
              : "bg-white/80 border-gray-200 text-gray-900";

            return (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                  rotateY: isCenter ? 0 : index < centerIndex ? 10 : -10,
                  y: -4,
                  transition: { type: "spring", stiffness: 200, damping: 15 },
                }}
                whileTap={{ scale: 0.98, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`snap-center flex-shrink-0 w-72 sm:w-80 md:w-96 rounded-2xl shadow-lg border overflow-hidden cursor-pointer ${cardBg} ${
                  isCenter ? "border-blue-500 dark:border-blue-400 shadow-xl" : ""
                }`}
                style={{
                  transform: `perspective(1000px) rotateY(${
                    isCenter ? 0 : index < centerIndex ? 10 : -10
                  }deg)`,
                }}
                onClick={() => setSelectedCert(cert)}
              >
                <motion.img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-56 sm:h-60 md:h-64 object-cover"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                />

                <div className="p-4 flex flex-col gap-2">
                  <h3 className="font-bold text-lg">{cert.title}</h3>
                  <p className="text-sm">{cert.issuer}</p>
                  <p className="text-xs">{cert.date}</p>
                  <p className={`text-sm ${darkMode ? "text-blue-400" : "text-blue-700"}`}>
                    {cert.description}
                  </p>
                  <div className="flex gap-2 flex-wrap mt-1">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`text-xs py-1 px-2 rounded ${
                          darkMode
                            ? "bg-gray-700 text-gray-300"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(cert.link, "_blank");
                    }}
                    className="mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 px-3 rounded-md shadow hover:scale-105 hover:shadow-lg transition"
                  >
                    <ExternalLink size={16} /> View
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ✅ Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center z-50 px-4 sm:px-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                className={`relative rounded-2xl shadow-2xl w-full max-w-2xl md:max-w-3xl overflow-hidden border flex flex-col items-center ${
                  darkMode ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"
                }`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 14 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-3 right-3 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-900 transition"
                >
                  <X size={18} />
                </button>

                <motion.img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-auto object-contain rounded-xl max-h-[60vh] p-3"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                />

                <div className="p-5 sm:p-6 w-full text-center">
                  <motion.h3
                    className={`font-bold text-xl sm:text-2xl mb-2 ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {selectedCert.title}
                  </motion.h3>

                  <p className="text-blue-600 font-semibold mb-2">
                    {selectedCert.issuer}
                  </p>
                  <p
                    className={`text-sm mb-2 ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {selectedCert.date}
                  </p>
                  <p
                    className={`text-sm sm:text-base mb-3 ${
                      darkMode ? "text-blue-400" : "text-blue-700"
                    }`}
                  >
                    {selectedCert.description}
                  </p>

                  <div className="flex flex-wrap justify-center gap-2 mt-3 mb-4">
                    {selectedCert.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        className={`text-xs sm:text-sm py-1 px-2 rounded ${
                          darkMode
                            ? "bg-gray-700 text-gray-300"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  <motion.button
                    onClick={() => window.open(selectedCert.link, "_blank")}
                    whileHover={{ scale: 1.05 }}
                    className="mt-2 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 px-5 sm:px-6 rounded-xl shadow-lg hover:shadow-xl transition"
                  >
                    <ExternalLink size={16} /> View Certificate
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certificates;
