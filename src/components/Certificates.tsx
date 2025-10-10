import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

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
    <section className="relative z-10 py-20 px-6 sm:px-10 lg:px-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
        Certificates & Achievements
      </h2>

      {/* Carousel */}
      <div
        ref={scrollContainer}
        className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth pb-6"
        style={{ scrollSnapType: "x mandatory", whiteSpace: "nowrap" }}
      >
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 w-96 bg-white/70 backdrop-blur-lg rounded-3xl shadow-lg border border-white/30 cursor-pointer overflow-hidden"
            style={{ scrollSnapAlign: "center" }}
            onClick={() => setSelectedCert(cert)}
          >
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-64 object-cover rounded-t-3xl"
            />
            <div className="p-6 flex flex-col justify-between h-auto">
              <div>
                <h3 className="font-bold text-lg text-gray-900 break-words leading-snug line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-gray-600 text-sm">{cert.issuer}</p>
                <p className="text-gray-500 text-xs mt-1">{cert.date}</p>
              </div>

              {/* View Certificate button on card */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(cert.link, "_blank");
                }}
                className="mt-4 flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition w-full"
              >
                <ExternalLink size={16} /> View Certificate
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="relative bg-white/90 rounded-2xl shadow-2xl max-w-3xl w-full flex flex-col max-h-[90vh] overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-3 right-3 bg-gray-800/80 text-white p-2 rounded-full hover:bg-gray-900 transition"
              >
                <X size={18} />
              </button>

              {/* Image */}
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-auto object-contain max-h-[50vh]"
              />

              {/* Bottom info (scrollable if content too long) */}
              <div className="p-6 text-center flex flex-col items-center overflow-y-auto max-h-[40vh]">
                <h3 className="font-bold text-xl text-gray-900 break-words mb-2">
                  {selectedCert.title}
                </h3>
                <p className="text-gray-600">{selectedCert.issuer}</p>
                <p className="text-gray-500 text-sm mt-1">{selectedCert.date}</p>
                <button
                  onClick={() => window.open(selectedCert.link, "_blank")}
                  className="mt-4 inline-flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition"
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
