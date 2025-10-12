import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
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
    skills: ["Machine Learning", "Python", "Data Science"]
  },
  {
    title: "Introduction to Deep Learning & Neural Networks with Keras",
    issuer: "IBM",
    date: "2025",
    image: "/certificates/DL_KERAS.jpg",
    link: "https://coursera.org/verify/7GK7XJN5RYJS",
    description: "Learned advanced neural architectures using Keras.",
    skills: ["Deep Learning", "Neural Networks", "Keras"]
  }
];

const Certificates: React.FC<CertificatesProps> = ({ darkMode }) => {
  const [selectedCert, setSelectedCert] = useState<null | typeof certificates[0]>(null);
  const [centerIndex, setCenterIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

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

  const handleDragEnd = (_: any, info: any) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const newScroll = carousel.scrollLeft - info.offset.x;
    carousel.scrollTo({ left: newScroll, behavior: "smooth" });
    setTimeout(updateCenter, 100);
  };

  useEffect(() => {
    updateCenter();
  }, []);

  return (
    <section
      id="certificates"
      className={`relative z-10 py-20 px-4 sm:px-8 lg:px-20 overflow-hidden transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      {/* Particle Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <AIParticleBackground darkMode={darkMode} />
      </div>

      {/* Header */}
      <h2
        className={`text-4xl md:text-5xl font-bold text-center mb-12 drop-shadow-md ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        Certificates & Achievements
      </h2>

      {/* Carousel */}
      <motion.div
        ref={carouselRef}
        className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth pb-8 perspective-1000"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        style={{ x }}
        onDragEnd={handleDragEnd}
        onScroll={updateCenter}
      >
        {certificates.map((cert, index) => {
          const isCenter = index === centerIndex;
          const cardBg = darkMode
            ? "bg-gray-800 border-gray-700 text-gray-100"
            : "bg-white border-gray-200 text-gray-900";
          return (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.08,
                rotateY: isCenter ? 0 : index < centerIndex ? 15 : -15,
                y: -6,
                transition: { type: "spring", stiffness: 200, damping: 15 },
              }}
              whileTap={{ scale: 0.98, y: 0 }}
              className={`flex-shrink-0 w-72 sm:w-80 md:w-96 rounded-3xl shadow-xl border overflow-hidden cursor-pointer ${cardBg} ${
                isCenter ? "border-blue-500 dark:border-blue-400" : ""
              }`}
              style={{
                transform: `perspective(1000px) rotateY(${
                  isCenter ? 0 : index < centerIndex ? 15 : -15
                }deg)`,
              }}
              onClick={() => setSelectedCert(cert)}
            >
              <div className="relative">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-56 sm:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-t-3xl" />
              </div>

              <div className="p-6 flex flex-col justify-between h-auto">
                <div>
                  <h3
                    className={`font-bold text-lg mb-1 ${
                      darkMode ? "text-white" : "text-black"
                    }`}
                  >
                    {cert.title}
                  </h3>
                  <p className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                    {cert.issuer}
                  </p>
                  <p
                    className={`text-xs mt-1 ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {cert.date}
                  </p>
                  <p
                    className={`text-sm mt-2 ${
                      darkMode ? "text-blue-400" : "text-blue-700"
                    }`}
                  >
                    {cert.description}
                  </p>
                  <div className="flex gap-2 flex-wrap mt-2">
                    {cert.skills &&
                      cert.skills.map((skill) => (
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
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(cert.link, "_blank");
                  }}
                  className="mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 px-4 rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition"
                >
                  <ExternalLink size={16} /> View Certificate
                </button>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Modal */}
{/* Modal */}
{/* Modal */}
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
          darkMode
            ? "bg-gray-900 border-gray-700"
            : "bg-white border-gray-200"
        }`}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 14 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setSelectedCert(null)}
          className="absolute top-3 right-3 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-900 transition"
        >
          <X size={18} />
        </button>

        {/* Responsive Image */}
        <div className="w-full flex justify-center items-center bg-black/5 dark:bg-gray-800 p-3 sm:p-4">
          <img
            src={selectedCert.image}
            alt={selectedCert.title}
            className="w-full h-auto object-contain rounded-xl max-h-[55vh] sm:max-h-[60vh] md:max-h-[65vh]"
          />
        </div>

        {/* Text Content */}
        <div className="p-5 sm:p-6 w-full text-center">
          <h3
            className={`font-bold text-xl sm:text-2xl mb-2 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            {selectedCert.title}
          </h3>
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

          {/* Skills */}
          <div className="flex flex-wrap justify-center gap-2 mt-3 mb-4">
            {selectedCert.skills?.map((skill) => (
              <span
                key={skill}
                className={`text-xs sm:text-sm py-1 px-2 rounded ${
                  darkMode
                    ? "bg-gray-700 text-gray-300"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Button */}
          <button
            onClick={() => window.open(selectedCert.link, "_blank")}
            className="mt-2 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 px-5 sm:px-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition"
          >
            <ExternalLink size={16} /> View Certificate
          </button>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>


    </section>
  );
};

export default Certificates;
