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
    <section className="relative z-10 py-20 px-4 sm:px-8 lg:px-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12 drop-shadow-md">
        Certificates & Achievements
      </h2>

      {/* Scrollable 3D Carousel */}
      <div
        ref={scrollContainer}
        className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth pb-8"
        style={{ scrollSnapType: "x mandatory", whiteSpace: "nowrap" }}
      >
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.07, rotateY: 5, rotateX: -3 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="flex-shrink-0 w-72 sm:w-80 md:w-96 bg-white/20 backdrop-blur-2xl border border-white/30 shadow-xl rounded-3xl overflow-hidden cursor-pointer transform-gpu hover:shadow-2xl hover:-translate-y-2"
            style={{
              scrollSnapAlign: "center",
              transformStyle: "preserve-3d",
            }}
            onClick={() => setSelectedCert(cert)}
          >
            {/* Certificate Image */}
            <motion.img
              src={cert.image}
              alt={cert.title}
              className="w-full h-56 sm:h-64 object-cover rounded-t-3xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />

            {/* Card Info */}
            <div className="p-6 flex flex-col justify-between h-auto bg-gradient-to-b from-white/70 to-white/30 backdrop-blur-md">
              <div>
                <h3 className="font-bold text-lg text-gray-900 leading-snug mb-1">
                  {cert.title}
                </h3>
                <p className="text-gray-700 text-sm">{cert.issuer}</p>
                <p className="text-gray-500 text-xs mt-1">{cert.date}</p>
              </div>

              {/* View Certificate button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(cert.link, "_blank");
                }}
                className="mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-xl shadow-md hover:shadow-lg transition"
              >
                <ExternalLink size={16} /> View Certificate
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 3D Modal View */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="relative bg-white/90 rounded-2xl shadow-2xl max-w-3xl w-full flex flex-col max-h-[90vh] overflow-hidden border border-white/50"
              initial={{ scale: 0.8, rotateY: -15, opacity: 0 }}
              animate={{ scale: 1, rotateY: 0, opacity: 1 }}
              exit={{ scale: 0.8, rotateY: 10, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
              onClick={(e) => e.stopPropagation()}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-3 right-3 bg-gray-800/80 text-white p-2 rounded-full hover:bg-gray-900 transition"
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
                transition={{ duration: 0.6 }}
              />

              {/* Modal Info */}
              <div className="p-6 text-center flex flex-col items-center overflow-y-auto max-h-[35vh] bg-gradient-to-t from-white/70 to-transparent">
                <h3 className="font-bold text-xl text-gray-900 mb-2">
                  {selectedCert.title}
                </h3>
                <p className="text-gray-700">{selectedCert.issuer}</p>
                <p className="text-gray-500 text-sm mt-1">{selectedCert.date}</p>
                <button
                  onClick={() => window.open(selectedCert.link, "_blank")}
                  className="mt-4 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-5 rounded-xl shadow-lg hover:shadow-xl transition"
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
