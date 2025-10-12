import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { X, ExternalLink, Bot } from "lucide-react";
import AIParticleBackground from "./AIParticleBackground";

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
  },
  // Add more certificates as needed
];

interface CertificatesProps {
  onCenterChange?: (centerIndex: number) => void;
}

const Certificates: React.FC<CertificatesProps> = ({ onCenterChange }) => {
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
    if (onCenterChange) onCenterChange(closestIndex);
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
    <section id="certificates" className="relative z-10 py-20 px-4 sm:px-8 lg:px-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <AIParticleBackground />
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 drop-shadow-md text-gray-900 dark:text-gray-100">
        Certificates & Achievements
      </h2>
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
              className={`flex-shrink-0 w-72 sm:w-80 md:w-96 bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden cursor-pointer`}
              style={{
                transform: `perspective(1000px) rotateY(${isCenter ? 0 : index < centerIndex ? 15 : -15}deg)`,
              }}
              onClick={() => setSelectedCert(cert)}
            >
              <div className="relative">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-56 sm:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-t-3xl" />
              </div>
              <div className="p-6 flex flex-col justify-between h-auto">
                <div>
                  <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100 leading-snug mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">{cert.issuer}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">{cert.date}</p>
                  <p className="text-blue-700 dark:text-blue-400 text-sm mt-2">{cert.description}</p>
                  <div className="flex gap-2 flex-wrap mt-2">
                    {cert.skills && cert.skills.map(skill => (
                      <span key={skill} className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs py-1 px-2 rounded">
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
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-3 right-3 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-900 transition"
              >
                <X size={18} />
              </button>
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-auto object-contain max-h-[55vh]"
              />
              <div className="p-6 text-center flex flex-col items-center bg-gradient-to-t from-gray-50 dark:from-gray-800 to-transparent">
                <h3 className="font-bold text-xl text-gray-900 dark:text-gray-100 mb-2">
                  {selectedCert.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{selectedCert.issuer}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{selectedCert.date}</p>
                <p className="mt-3 text-blue-700 dark:text-blue-300">{selectedCert.description}</p>
                <div className="flex gap-2 flex-wrap mt-2 mb-2">
                  {selectedCert.skills && selectedCert.skills.map(skill => (
                    <span key={skill} className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs py-1 px-2 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
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
