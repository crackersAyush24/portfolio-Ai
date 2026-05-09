import { FC } from 'react';
import { ExternalLink, Github, Brain, Eye, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import translations from '../i18n/translations';
import { useLanguage } from '../contexts/LanguageContext';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: FC<ProjectsProps> = ({ darkMode }) => {
  const { lang } = useLanguage();

  const projects = [
    {
      title: "Image Denoising & Segmentation for Chemical-Peeled Images",
      description: translations.projects[lang].descriptions.denoising,
      image: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "PyTorch", "U-Net", "OpenCV", "Noise2Noise", "DnCNN", "Streamlit", "Flask", "PSNR/SSIM"],
      icon: <Eye size={24} className={darkMode ? 'text-teal-400' : 'text-teal-600'} />,
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Deep Fake Detection",
      description: translations.projects[lang].descriptions.deepfake,
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Python", "OpenCV", "Streamlit", "Flask", "TensorFlow/PyTorch"],
      icon: <Brain size={24} className={darkMode ? 'text-blue-400' : 'text-blue-600'} />,
      github: "https://github.com/crackersAyush24/deepfake-prototype",
      demo: "#",
      featured: true
    },
    {
      title: "Handwritten Digit Classification using Keras",
      description: translations.projects[lang].descriptions.mnist,
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Python", "Streamlit", "Plotly", "Deep-Learning"," TensorFlow"," Keras", "NumPy", "Matplotlib"],
      icon: <Eye size={24} className={darkMode ? 'text-teal-400' : 'text-teal-600'} />,
      github: "https://github.com/crackersAyush24/mnist_streamlit_app",
      demo: "#",
      featured: true
    },
    {
      title: "Movie Revenue Prediction",
      description: translations.projects[lang].descriptions.movie,
      image: "https://images.pexels.com/photos/3183144/pexels-photo-3183144.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Python", "Streamlit", "Machine Learning", "Regression", "Data Analysis"],
      icon: <TrendingUp size={24} className={darkMode ? 'text-purple-400' : 'text-purple-600'} />,
      github: "https://github.com/crackersAyush24/Movie_revenue_prediction",
      demo: "#",
      featured: true
    },
    {
      title: "Foresight Realty - Predicting Price",
      description: translations.projects[lang].descriptions.foresight,
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Python", "Flask", "Machine Learning", "Regression", "Real Estate Analytics"],
      icon: <TrendingUp size={24} className={darkMode ? 'text-purple-400' : 'text-purple-600'} />,
      github: "#",
      demo: "https://journals.mriindia.com/index.php/ijeecs/article/view/230",
      featured: true
    }
    ,
    
  ];

  const sectionBg = darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900';
  const cardBg = darkMode ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-gradient-to-br from-gray-50 to-blue-50';
  const subTextColor = darkMode ? 'text-gray-300' : 'text-gray-600';


  return (
    <section id="projects" className={`py-20 transition-colors duration-500 ${sectionBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 relative z-10`}>{translations.projects[lang].heading}</h2>
          <p className={`text-xl ${subTextColor} max-w-3xl mx-auto relative z-10`}>
            {translations.projectsMeta[lang].intro}
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.06 }}
              whileHover={{ scale: 1.03 }}
              className={`grid lg:grid-cols-2 gap-12 items-center relative z-10 p-8 rounded-2xl ${project.featured ? cardBg : ''}`}
            >
              <div className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                <motion.div className="relative group overflow-hidden rounded-xl shadow-lg transform transition-all duration-500 perspective-1000 hologram-effect"
                  whileHover={{ scale: 1.03 }}
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-80 object-cover transition-transform duration-300"
                    whileHover={{ scale: 1.06 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                    <div className="absolute bottom-4 left-4 text-white font-bold">AI Powered</div>
                  </div>
                </motion.div>
              </div>

              <div className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                <div className="flex items-center mb-4">
                  {project.icon}
                  {project.featured && (
                    <span className="ml-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {translations.projectsMeta[lang].featuredLabel}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold mb-4">{project.title}</h3>

                <p className={`text-lg leading-relaxed mb-6 ${subTextColor}`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                  >
                    <Github size={20} />
                    {translations.projectsMeta[lang].buttons.code}
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                  >
                    <ExternalLink size={20} />
                    {translations.projectsMeta[lang].buttons.demo}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
