import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const AyushChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hey there! 👋 I'm Ayush's AI assistant. I can chat about his work, answer questions about AI, solve basic math, or just have a friendly conversation. What's on your mind today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const ayushKnowledgeBase = {
    // Personal Info
    name: "Ayush Chaubey",
    passport: "Y5915567",
    nationality: "Indian",
    dob: "20/02/2004",
    placeOfBirth: "India",
    gender: "Male",
    location: "Mumbai, India",
    phone: "+91 70288 81954",
    email: "chaubeyayush04@gmail.com",
    linkedin: "linkedin.com/in/ayush-chaubey",
    github: "github.com/crackersAyush24",
    website: "ayushchaubey.com",
    home: "Mumbai (India)",

    // About
    about: "Data Analyst with a Bachelor’s in Computer Engineering and hands-on experience in data analysis, visualization, and reporting. Skilled in Python, SQL, Tableau, and Excel, with a strong foundation in algorithm development and machine learning. Experienced in developing predictive models and generating insights that enhanced decision-making by up to 20%. Currently preparing for M.Sc. programs in AI/Data Science or Computer Science to deepen research and technical expertise in data-driven technologies.",

    // Work Experience
    experience: [
      {
        role: "Data Analyst Intern",
        company: "Jobclassify – Mumbai, India",
        duration: "10/08/2024 – 24/02/2025",
        achievements: [
          "Developed and optimized ML models improving candidate–job matching accuracy by 30%",
          "Automated data processing workflows using Python, reducing manual effort and turnaround time by 25%",
          "Built interactive dashboards in Excel and Power BI, cutting reporting time by 40%",
          "Collaborated with HR, recruitment, and sales teams to define data requirements and deliver actionable insights"
        ]
      }
    ],

    // Education
    education: [
      {
        degree: "B.E. in Computer Engineering",
        institution: "Shree L.R. Tiwari College of Engineering (Mumbai University)",
        duration: "10/10/2021 – 30/06/2025",
        cgpa: 8.67,
        courses: ["AI", "ML", "Algorithms", "Database Systems", "Computer Vision", "Software Engineering", "Mathematics I-IV", "C, Python, Java"]
      },
      {
        degree: "Higher Secondary Education",
        institution: "Adarsh Education Society",
        duration: "21/06/2019 – 21/08/2021",
        field: "Computer Science"
      }
    ],

    // Publications
    publications: [
      {
        title: "Foresight Realty: A Comprehensive AI-Powered Framework for Real Estate Investment Analysis",
        year: 2025,
        description: "Researched AI integration in real estate to enhance decision-making, applying predictive analytics for forecasting trends and risk management.",
        authors: ["Pathak, P. K.", "Verma, P. A.", "Chaubey, A. V.", "Pathak, S. A."],
        journal: "International Journal of Electrical, Electronics and Computer System, vol. 14, no. 1, pp. 44–55"
      }
    ],

    // Projects
    projects: [
      {
        name: "Deep Fake Detection",
        duration: "25/09/2025 – Current",
        description: "Pipeline for real-time detection of deepfake videos using CNNs, MTCNN, Streamlit UI, and Flask API."
      },
      {
        name: "Foresight Realty Price Prediction (Project Lead)",
        duration: "24/07/2024 – 26/04/2025",
        description: "Regression models predicting property prices based on geographic and physical features, deployed with Flask."
      },
      {
        name: "Handwritten Digit Classification (MNIST)",
        duration: "01/09/2025 – 10/09/2025",
        description: "Built multi-layer neural network with Keras, achieving ~98% accuracy."
      },
      {
        name: "Movie Revenue Prediction",
        duration: "14/08/2025 – 26/08/2025",
        description: "ML model and Streamlit app predicting box-office revenue using regression algorithms (Linear Regression, Random Forest, XGBoost)."
      }
    ],

    // Skills
    skills: ["Python", "Pandas", "NumPy", "Deep Learning", "TensorFlow", "Keras", "Java", "NLP", "Git", "Seaborn", "SQL", "Matplotlib", "Jupyter Notebook", "OpenCV", "Machine Learning", "PyTorch", "Data Visualization", "AI", "Flask", "Predictive Models", "Algorithms"],

    // Ongoing Courses
    ongoingCourses: [
      {
        name: "IBM AI Engineering Professional Certificate",
        platform: "Coursera",
        duration: "16/08/2025 – Current",
        description: "Full AI/ML lifecycle, supervised/unsupervised learning, deep learning, model deployment."
      },
      {
        name: "A1 Deutsch Training",
        platform: "Goethe-Institut Kolkata (Online)",
        duration: "13/08/2025 – Current",
        description: "Beginner-level German course focused on communication skills."
      }
    ],

    // Personal Relationships
    mehek: "Mehek is Ayush’s girlfriend, whom he loves most. She is a data scientist."
  };

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase().trim();

    // Greetings
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      const greetings = [
        "Hello! Great to meet you! I'm Ayush's AI assistant. How are you doing today?",
        "Hey there! 👋 I'm here to chat about Ayush or just have a friendly conversation. What's on your mind?",
        "Hi! Nice to see you here. I'm Ayush's digital twin - ready to chat about anything!"
      ];
      return greetings[Math.floor(Math.random() * greetings.length)];
    }

    // About Ayush
    if (message.includes('about ayush') || message.includes('about him') || message.includes('who is ayush') || message === 'ayush') {
      return ayushKnowledgeBase.about;
    }

    // Mehek
    if (message.includes('mehek') || message.includes('girlfriend')) {
      return ayushKnowledgeBase.mehek;
    }

    // Personal Info
    if (message.includes('passport') || message.includes('dob') || message.includes('date of birth') || message.includes('nationality') || message.includes('place of birth') || message.includes('phone') || message.includes('email')) {
      return `Here are Ayush's personal details:\n• Passport: ${ayushKnowledgeBase.passport}\n• Date of Birth: ${ayushKnowledgeBase.dob}\n• Nationality: ${ayushKnowledgeBase.nationality}\n• Place of Birth: ${ayushKnowledgeBase.placeOfBirth}\n• Phone: ${ayushKnowledgeBase.phone}\n• Email: ${ayushKnowledgeBase.email}`;
    }

    // Education
    if (message.includes('education') || message.includes('study') || message.includes('university')) {
      return ayushKnowledgeBase.education.map(edu => 
        `${edu.degree} from ${edu.institution} (${edu.duration}), CGPA: ${edu.cgpa || 'N/A'}\nCourses: ${edu.courses?.join(', ') || edu.field || ''}`
      ).join('\n\n');
    }

    // Publications / Research papers
    if (message.includes('publication') || message.includes('paper') || message.includes('research')) {
      return ayushKnowledgeBase.publications.map(pub =>
        `${pub.title} (${pub.year})\nAuthors: ${pub.authors.join(', ')}\nJournal: ${pub.journal}\nSummary: ${pub.description}`
      ).join('\n\n');
    }

    // Projects
    if (message.includes('project') || message.includes('portfolio') || message.includes('built')) {
      return ayushKnowledgeBase.projects.map(proj =>
        `${proj.name} (${proj.duration})\n• ${proj.description}`
      ).join('\n\n');
    }

    // Ongoing Courses
    if (message.includes('course') || message.includes('learning') || message.includes('training')) {
      return ayushKnowledgeBase.ongoingCourses.map(course =>
        `${course.name} - ${course.platform} (${course.duration})\n${course.description}`
      ).join('\n\n');
    }

    // Skills
    if (message.includes('skill') || message.includes('technology') || message.includes('programming')) {
      return `Ayush is highly skilled in: ${ayushKnowledgeBase.skills.join(', ')}`;
    }

    // Experience
    if (message.includes('experience') || message.includes('work') || message.includes('job')) {
      return ayushKnowledgeBase.experience.map(exp =>
        `${exp.role} at ${exp.company} (${exp.duration})\n• ${exp.achievements.join('\n• ')}`
      ).join('\n\n');
    }

    // Basic Math (+, -, *, /)
    if (/^\d+[\+\-\*\/]\d+$/.test(message.replace(/\s/g, ''))) {
      try {
        // Evaluate safely
        const result = Function(`"use strict"; return (${message})`)();
        return `The answer is: ${result}`;
      } catch {
        return "I couldn't solve that math problem. Please enter a valid one like 2+2 or 5*3.";
      }
    }

    // Default fallback
    return "I'm here to chat about Ayush, AI, projects, math, or anything else you'd like to know. Ask me anything!";
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(inputText),
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center ${
          isOpen ? 'rotate-180' : ''
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-ping opacity-20"></div>
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 h-[500px] bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-200/50 flex flex-col overflow-hidden transform hover:scale-105 transition-all duration-300 perspective-1000">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Bot size={20} />
            </div>
            <div>
              <h3 className="font-bold">Ayush AI Assistant</h3>
              <p className="text-sm opacity-90">Let's chat about anything! 💬</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  } transform hover:scale-105 transition-all duration-200`}
                >
                  <div className="flex items-start gap-2">
                    {message.isBot && <Bot size={16} className="text-blue-600 mt-1 flex-shrink-0" />}
                    {!message.isBot && <User size={16} className="text-white mt-1 flex-shrink-0" />}
                    <div className="whitespace-pre-line text-sm leading-relaxed">
                      {message.text}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-2xl flex items-center gap-2">
                  <Bot size={16} className="text-blue-600" />
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce animation-delay-200"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce animation-delay-400"></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-gray-200 flex items-center gap-3">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type a message..."
              className="flex-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none h-12"
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-600 hover:bg-blue-700 p-3 rounded-xl text-white transition-all duration-200"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AyushChatbot;
