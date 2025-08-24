import React from 'react';
import { MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Data Analyst",
      company: "Jobclassify",
      location: "Mumbai, India",
      period: "Aug 2024 - February 2025",
      description: [
        "Processed candidate and job data to improve job matching and support decision-making processes",
        "Improved matching accuracy by 30% using machine learning models and predictive analytics",
        "Built interactive dashboards with Excel & Power BI, reducing reporting time by 40%",
        "Automated candidate screening with predictive models, saving 200+ hours monthly",
        "Collaborated across HR, recruitment, and sales teams, impacting 5 departments"
      ],
      technologies: ["Python", "Machine Learning", "Power BI", "Excel", "Automation"]
    },
    {
      title: "Computer Engineering Student",
      company: "University of Mumbai",
      location: "Mumbai, India",
      period: "2020 - 2024",
      description: [
        "Achieved CGPA of 8.67 in Computer Engineering with Rev. 2016 curriculum",
        "Strong foundation in Mathematics & Algorithms (graph theory, set theory, automata)",
        "Specialized in Machine Learning, Artificial Intelligence, and Distributed Systems",
        "Completed projects in AI-powered applications and data analytics",
        "Developed expertise in Project Management & Analytics"
      ],
      technologies: ["Python", "Java", "C++", "Machine Learning", "AI", "Mathematics"]
    },
    {
      title: "AI/ML Research & Development",
      company: "Personal Projects",
      location: "Mumbai, India",
      period: "2022 - Present",
      description: [
        "Researched Deep Learning Architectures including CNNs, RNNs, LSTMs, and GANs",
        "Built AI-powered applications for HR-tech, real estate analysis, and social media analytics",
        "Developed end-to-end AI systems from data collection to deployment",
        "Focused on applied AI for business automation and process optimization"
      ],
      technologies: ["TensorFlow", "PyTorch", "Streamlit", "React Native", "Research"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A journey through innovative companies, pushing the boundaries of 
            AI technology and delivering impactful solutions.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 0 ? '' : 'lg:text-right'
              }`}>
                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-1/2 top-8 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                <div className={index % 2 === 0 ? '' : 'lg:order-2'}>
                  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:rotateY-6 hover:scale-105 hover:-translate-y-2 perspective-1000">
                    <div className="flex items-start justify-between mb-4">
                      <div className={index % 2 === 0 ? '' : 'lg:text-right lg:ml-auto'}>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                        <h4 className="text-xl font-semibold text-blue-600 mb-2">{exp.company}</h4>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 mb-6 text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-700 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} ${
                  index % 2 === 0 ? 'lg:pl-12' : 'lg:pr-12 lg:text-right'
                }`}>
                  <div className="lg:max-w-md">
                    <div className="text-4xl font-bold text-gray-300 mb-4">
                      0{index + 1}
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {index === 0 && "Currently analyzing data and building ML models to improve business processes and decision-making."}
                      {index === 1 && "Built strong academic foundation in computer engineering with focus on AI and distributed systems."}
                      {index === 2 && "Passionate about research and development of practical AI applications for real-world problems."}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;