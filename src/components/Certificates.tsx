import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import AIParticleBackground from "./AIParticleBackground";

const certificates = [
  {
    title: "Machine Learning with Python",
    issuer: "IBM",
    date: "2025",
    image: "/certificates/ml_python.jpg",
    link: "https://www.coursera.org/account/accomplishments/records/38XZQDL3L042",
  },
  {
    title: "Introduction to Deep Learning & Neural Networks with Keras",
    issuer: "IBM",
    date: "2025",
    image: "/certificates/DL_KERAS.jpg",
    link: "https://coursera.org/verify/7GK7XJN5RYJS",
  },
];

const Certificates: React.FC = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [selectedCert, setSelectedCert] = useState<null | typeof certificates[0]>(null);

  // Auto-scroll
  useEffect(() => {
    const scrollElement = scrollContainer.current;
    if (!scrollElement) return;

    let scrollSpeed = 1;
    let animationFrame: number;

    const scroll = () => {
      if (scrollElement.scrollLeft + scrollElement.clientWidth >= scrollElement.scrollWidth) {
        scrollElement.scrollLeft = 0;
      } else {
        scrollElement.scrollLeft += scrollSpeed;
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);
    const handleMouseEnter = () => (scrollSpeed = 0);
    const handleMouseLeave = () => (scrollSpeed = 1);

    scrollElement.addEventListener("mouseenter", handleMouseEnter);
    scrollElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrame);
      scrollElement.removeEventListener("mouseenter", handleMouseEnter);
      scrollElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="relative z-10 py-20 px-4 sm:px-8 lg:px-20 overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 -z-10">
        <AIParticleBackground />
      </div>

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 drop-shadow-md text-gray-900 dark:text-gray-100">
        Certificates & Achievements
      </h2>

      {/* Scrollable Carousel */}
      <div
        ref={scrollContainer}
        className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth pb-8"
        style={{ scrollSnapType: "x mandatory", whiteSpace: "nowrap" }}
      >
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.07, rotateY: 4, rotateX: -2 }}
            transition={{ type: "spring", stiffness: 180, damping: 15 }}
            className="flex-shrink-0 w-72 sm:w-80 md:w-96 bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden cursor-pointer transform-gpu hover:shadow-2xl hover:-translate-y-2"
            style={{ scrollSnapAlign: "center", transformStyle: "preserve-3d" }}
            onClick={() => setSelectedCert(cert)}
          >
            {/* Certificate Image */}
            <div className="relative">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-56 sm:h-64 object-cover"
              />
              {/* Gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-t-3xl" />
            </div>

            {/* Card Info */}
            <div className="p-6 flex flex-col justify-between h-auto">
              <div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100 leading-snug mb-1">
                  {cert.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{cert.issuer}</p>
                <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">{cert.date}</p>
              </div>

              {/* View Certificate button */}
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
        ))}
      </div>

      {/* Modal View */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-3xl w-full flex flex-col max-h-[90vh] overflow-hidden border border-gray-300 dark:border-gray-700"
              initial={{ scale: 0.85, rotateY: -10, opacity: 0 }}
              animate={{ scale: 1, rotateY: 0, opacity: 1 }}
              exit={{ scale: 0.85, rotateY: 10, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
              onClick={(e) => e.stopPropagation()}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-3 right-3 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-900 transition"
              >
                <X size={18} />
              </button>

              {/* Certificate Image */}
              <motion.img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-auto object-contain max-h-[55vh]"
                initial={{ rotateX: 10, opacity: 0 }}
                animate={{ rotateX: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              />

              {/* Modal Info */}
              <div className="p-6 text-center flex flex-col items-center bg-gradient-to-t from-gray-50 dark:from-gray-800 to-transparent">
                <h3 className="font-bold text-xl text-gray-900 dark:text-gray-100 mb-2">
                  {selectedCert.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{selectedCert.issuer}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{selectedCert.date}</p>
                <button
                  onClick={() => window.open(selectedCert.link, "_blank")}
                  className="mt-4 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 px-5 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition"
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
