import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certificates = [
  /* {
    title: "AI Professional Specialization",
    issuer: "Coursera",
    date: "Ongoing (2025)",
    image: "/certificates/ai_professional.jpg",
    link: "#",
  },*/
  {
    title: "Machine Learning with Python",
    issuer: "IBM",
    date: "2025",
    image: "/certificates/ml_python.jpg",
    link: "#/home/crackersAyush24/portfolio-Ai/public/certificates/ml_python.jpg",
  },
  {
    title: "Deep Learning Fundamentals",
    issuer: "Coursera",
    date: "2025",
    image: "/certificates/DL_Keras.PNG",
    link: "#",
  },
  /*{
    title: "Python for Data Science",
    issuer: "IBM",
    date: "2023",
    image: "/certificates/python_ds.jpg",
    link: "#",
  },*/
  /*{
    title: "Prompt Engineering Mastery",
    issuer: "DeepLearning.AI",
    date: "2025",
    image: "/certificates/prompt_engineering.jpg",
    link: "#",
  },*/
];

const Certificates: React.FC = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);

  // Auto-scroll effect
  useEffect(() => {
    const scrollElement = scrollContainer.current;
    if (!scrollElement) return;

    let scrollSpeed = 1; // px per frame
    let animationFrame: number;

    const scroll = () => {
      if (scrollElement.scrollLeft + scrollElement.clientWidth >= scrollElement.scrollWidth) {
        scrollElement.scrollLeft = 0; // reset to start
      } else {
        scrollElement.scrollLeft += scrollSpeed;
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    // Pause on hover
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
    <section
      id="certificates"
      className="py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 flex justify-center items-center gap-3">
            <Award className="text-blue-600" size={36} /> Certificates & Achievements
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A visual timeline of my professional growth and learning in AI, ML, and Data Science.
          </p>
        </div>

        {/* Auto-Scrolling Carousel */}
        <div
          ref={scrollContainer}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
          style={{
            scrollSnapType: "x mandatory",
            whiteSpace: "nowrap",
          }}
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.07 }}
              className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100"
              style={{ scrollSnapAlign: "center" }}
              onClick={() => window.open(cert.link, "_blank")}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900">{cert.title}</h3>
                <p className="text-gray-600 text-sm">{cert.issuer}</p>
                <p className="text-gray-500 text-xs mt-1">{cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Glowing gradient background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-100/10 via-purple-100/10 to-transparent pointer-events-none animate-pulse" />
    </section>
  );
};

export default Certificates;
