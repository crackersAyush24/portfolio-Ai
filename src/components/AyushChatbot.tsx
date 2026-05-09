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
  const [lang, setLang] = useState<'en' | 'de'>('en');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [translatedMap, setTranslatedMap] = useState<Record<string, string>>({});

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Load saved language preference
  useEffect(() => {
    try {
      const saved = localStorage.getItem('ayush_chat_lang');
      if (saved === 'de' || saved === 'en') setLang(saved as 'en' | 'de');
    } catch {
      // ignore
    }
  }, []);

  // Persist language when changed
  useEffect(() => {
    try {
      localStorage.setItem('ayush_chat_lang', lang);
    } catch {
      // ignore
    }
  }, [lang]);

  // auto-scroll to bottom when messages change
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
  location: "Dresden, Germany",
  phone: "+49 15224720727",
    email: "chaubeyayush04@gmail.com",
    linkedin: "linkedin.com/in/ayush-chaubey",
    github: "github.com/crackersAyush24",
    website: "ayushchaubey.com",
    home: "Mumbai (India)",

    // About
  about: "Data Analyst and AI engineer with a B.E. in Computer Engineering. Currently pursuing an M.Sc. in Computer Science at TU Dresden (2025). I have hands-on experience in data analysis, computer vision, model deployment, and applied research. Skilled in Python, PyTorch, OpenCV, and building production-ready ML systems.",

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
        degree: "M.Sc. in Computer Science",
        institution: "TU Dresden",
  duration: "2025 – Ongoing",
        cgpa: null,
        courses: ["Advanced Algorithms", "Computer Vision", "Deep Learning", "Systems for ML"]
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
        description: "Researched AI integration in real estate to enhance decision-making, applying predictive analytics for forecasting trends and risk management. Artificial Intelligence is changing the real estate investment industry by improving decision making and increasing business efficiency. Real estate investment was previously dependent on the traditional way, a combination of experience and partial information. Artificial Intelligence provides a data driven strategy that completely improves results. Using machine learning and predictive analysis, ForeSight Realty integrated with Artificial Intelligence is able to analyze big data along with identifying patterns, and forecast market trends better than traditional ways of working. All this is achieved through AI’s ability to deliver more informed and timely decisions to investors, reducing risks and uncovering profitable opportunities that remain unseen. ForeSight Realty also streamlines day to day tasks like property valuation, lease management and tenant tracking avoiding administrative expenses and human mistakes. ForeSight Realty analyses sentiments through social media and news tracking enables investors to measure public sentiment for certain properties or areas and gives them early indicators of market trends. Artificial Intelligence helps in predictive analysis which helps property managers to predict infrastructure problems and minimize repair expenses. Artificial Intelligence is enhancing real estate investment by offering more precise data analysis automating time consuming processes and enabling better risk management. With continued evolution Artificial Intelligence will further optimize real estate investment strategies to maximize profitability and reduce uncertainty. (https://journals.mriindia.com/index.php/ijeecs/article/view/230)",
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

    // Ongoing Courses & Activities
    ongoingCourses: [
      {
        name: "M.Sc. Computer Science - TU Dresden",
        platform: "TU Dresden",
  duration: "2025 – Ongoing",
        description: "Pursuing master's coursework and research focused on ML, CV and systems for AI."
      },
      {
        name: "German Language (A2)",
        platform: "Local / Online",
        duration: "2025 – Ongoing",
        description: "Continuing German study to reach A2 proficiency for daily life and academic communication."
      }
    ],

    // Languages
    languages: ["English", "German (A2)"],

    // Personal Relationships
    mehek: "Mehek is Ayush’s amazing girlfriend ❤️. She is a brilliant data scientist 👩‍💻 and also the most important person in Ayush’s life 💕. She’s not just his partner, she’s his owner 😉👑, his support, and his happiness. Every day with her is full of love, laughter, and inspiration 🌸✨."
  };

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase().trim();
  const langToUse = (lang === 'de' || message.includes('deutsch') || message.includes('german')) ? 'de' : 'en';

    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      const greetingsEn = [
        "Hello! Great to meet you! I'm Ayush's AI assistant. How are you doing today?",
        "Hey there! 👋 I'm here to chat about Ayush or just have a friendly conversation. What's on your mind?",
        "Hi! Nice to see you here. I'm Ayush's digital twin - ready to chat about anything!"
      ];
      const greetingsDe = [
        "Hallo! Schön, dich zu treffen! Ich bin Ayushs KI-Assistent. Wie geht es dir heute?",
        "Hey! 👋 Ich kann über Ayush sprechen oder einfach plaudern. Was möchtest du wissen?",
        "Hi! Schön, dich hier zu sehen. Ich bin Ayushs digitale Assistenz - bereit zu helfen!"
      ];
      const arr = langToUse === 'de' ? greetingsDe : greetingsEn;
      return arr[Math.floor(Math.random() * arr.length)];
    }

    if (message.includes('about ayush') || message.includes('about him') || message.includes('who is ayush') || message === 'ayush') {
      return langToUse === 'de'
  ? `Ich bin Data Analyst und KI-Ingenieur mit einem B.E. in Computer Engineering. Zurzeit studiere ich M.Sc. Informatik an der TU Dresden (2025). Ich arbeite mit Python, PyTorch, OpenCV und entwickle produktionsreife ML-Systeme.`
        : ayushKnowledgeBase.about;
    }

    if (message.includes('mehek') || message.includes('girlfriend')) {
      return ayushKnowledgeBase.mehek;
    }

    if (message.includes('passport') || message.includes('dob') || message.includes('date of birth') || message.includes('nationality') || message.includes('place of birth') || message.includes('phone') || message.includes('email')) {
      return langToUse === 'de'
        ? `Hier sind Ayushs persönliche Daten:\n• Reisepass: ${ayushKnowledgeBase.passport}\n• Geburtsdatum: ${ayushKnowledgeBase.dob}\n• Staatsangehörigkeit: ${ayushKnowledgeBase.nationality}\n• Geburtsort: ${ayushKnowledgeBase.placeOfBirth}\n• Telefon: ${ayushKnowledgeBase.phone}\n• E-Mail: ${ayushKnowledgeBase.email}`
        : `Here are Ayush's personal details:\n• Passport: ${ayushKnowledgeBase.passport}\n• Date of Birth: ${ayushKnowledgeBase.dob}\n• Nationality: ${ayushKnowledgeBase.nationality}\n• Place of Birth: ${ayushKnowledgeBase.placeOfBirth}\n• Phone: ${ayushKnowledgeBase.phone}\n• Email: ${ayushKnowledgeBase.email}`;
    }

    if (message.includes('education') || message.includes('study') || message.includes('university')) {
      if (langToUse === 'de') {
        return ayushKnowledgeBase.education.map(edu =>
          `${edu.degree} - ${edu.institution} (${edu.duration})\nKurse: ${edu.courses?.join(', ') || edu.field || ''}`
        ).join('\n\n');
      }
      return ayushKnowledgeBase.education.map(edu => 
        `${edu.degree} from ${edu.institution} (${edu.duration}), CGPA: ${edu.cgpa || 'N/A'}\nCourses: ${edu.courses?.join(', ') || edu.field || ''}`
      ).join('\n\n');
    }

    if (message.includes('publication') || message.includes('paper') || message.includes('research')) {
      if (langToUse === 'de') {
        return ayushKnowledgeBase.publications.map(pub =>
          `${pub.title} (${pub.year})\nAutoren: ${pub.authors.join(', ')}\nZeitschrift: ${pub.journal}\nZusammenfassung: ${pub.description}`
        ).join('\n\n');
      }
      return ayushKnowledgeBase.publications.map(pub =>
        `${pub.title} (${pub.year})\nAuthors: ${pub.authors.join(', ')}\nJournal: ${pub.journal}\nSummary: ${pub.description}`
      ).join('\n\n');
    }

    if (message.includes('german') || message.includes('deutsch')) {
      return `Ich lerne Deutsch auf A2-Niveau. I can respond with simple German phrases. For example:\n- Guten Tag! (Good day)\n- Ich lerne Deutsch. (I am learning German.)\n- Danke! (Thank you.)`;
    }

    if (message.includes('project') || message.includes('portfolio') || message.includes('built')) {
      if (langToUse === 'de') {
        return ayushKnowledgeBase.projects.map(proj =>
          `Projekt: ${proj.name} (${proj.duration})\n• Kurze Beschreibung: ${proj.description}`
        ).join('\n\n');
      }
      return ayushKnowledgeBase.projects.map(proj =>
        `${proj.name} (${proj.duration})\n• ${proj.description}`
      ).join('\n\n');
    }

    if (message.includes('course') || message.includes('learning') || message.includes('training')) {
      if (langToUse === 'de') {
        return ayushKnowledgeBase.ongoingCourses.map(course =>
          `${course.name} - ${course.platform} (${course.duration})\n${course.description}`
        ).join('\n\n');
      }
      return ayushKnowledgeBase.ongoingCourses.map(course =>
        `${course.name} - ${course.platform} (${course.duration})\n${course.description}`
      ).join('\n\n');
    }

    if (message.includes('skill') || message.includes('technology') || message.includes('programming')) {
      return langToUse === 'de'
        ? `Ayush beherrscht unter anderem: ${ayushKnowledgeBase.skills.slice(0,8).join(', ')} und mehr.`
        : `Ayush is highly skilled in: ${ayushKnowledgeBase.skills.join(', ')}`;
    }

    if (message.includes('experience') || message.includes('work') || message.includes('job')) {
      if (langToUse === 'de') {
        return ayushKnowledgeBase.experience.map(exp =>
          `${exp.role} bei ${exp.company} (${exp.duration})\n• ${exp.achievements.join('\n• ')}`
        ).join('\n\n');
      }
      return ayushKnowledgeBase.experience.map(exp =>
        `${exp.role} at ${exp.company} (${exp.duration})\n• ${exp.achievements.join('\n• ')}`
      ).join('\n\n');
    }

    const mathMatch = message.replace(/\s/g, '');
    if (/^[\d\.\+\-\*\/%\^\(\)]+$/.test(mathMatch)) {
      try {
        const expression = mathMatch.replace(/\^/g, '**');
        const result = Function(`"use strict"; return (${expression})`)();
        if (result !== undefined) return `🧮 The answer is: ${result}`;
      } catch {
        return "I couldn't solve that math problem. Please enter a valid one like 2+2, 5*3, or 2^3.";
      }
    }

    return langToUse === 'de'
      ? "Ich bin hier, um über Ayush, KI, Projekte oder Mathe zu sprechen. Frag mich einfach in kurzen Sätzen."
      : "I'm here to chat about Ayush, AI, projects, math, or anything else you'd like to know. Ask me anything!";

  };

  // translateToGerman: rule-based, A2-friendly translations for short messages
  const translateToGerman = (text: string): string => {
    const smallMap: Record<string,string> = {
      "Hey there! 👋 I'm here to chat about Ayush or just have a friendly conversation. What's on your mind?": "Hey! 👋 Ich bin hier, um über Ayush zu sprechen oder einfach zu plaudern. Was möchtest du wissen?",
      "Hi! Nice to see you here. I'm Ayush's digital twin - ready to chat about anything!": "Hi! Schön dich hier zu sehen. Ich bin Ayushs digitale Assistenz - bereit zu helfen!",
      "I'm here to chat about Ayush, AI, projects, math, or anything else you'd like to know. Ask me anything!": "Ich bin hier, um über Ayush, KI, Projekte oder Mathe zu sprechen. Frag mich einfach.",
      "I couldn't solve that math problem. Please enter a valid one like 2+2, 5*3, or 2^3.": "Ich konnte das Matheproblem nicht lösen. Bitte gib etwas Einfaches wie 2+2 ein.",
      "I am Ayush's AI assistant": "Ich bin Ayushs KI-Assistent",
    };

    // direct mapping first
    if (smallMap[text]) return smallMap[text];

    // small phrase replacements
    const replacements: Record<string,string> = {
      "Project": "Projekt",
      "Projects": "Projekte",
      "Phone": "Telefon",
      "Email": "E-Mail",
      "Location": "Ort",
      "Skills": "Fähigkeiten",
      "Education": "Ausbildung",
      "Experience": "Erfahrung",
      "I am": "Ich bin",
      "I have": "Ich habe",
      "Currently": "Zurzeit",
      "and": "und",
    };

    let result = text;
    const lower = text.toLowerCase();

    // Domain-specific rules: prefer short, A2-friendly German
    // Computer Vision / Denoising / Segmentation
    if (/(denois|dncnn|noise2noise|u-?net|segment|segmentation|psnr|ssim|iou|microscop|chemical)/i.test(lower)) {
      // Build a concise German summary for CV projects
      const parts: string[] = [];
      parts.push('Dieses Projekt entfernt Bildrauschen und segmentiert Objekte in Mikroskopbildern.');
      if (/u-?net/i.test(lower)) parts.push('Verwendetes Modell: U-Net.');
      if (/dncnn/i.test(lower) || /noise2noise/i.test(lower)) parts.push('Denoiser: DnCNN / Noise2Noise.');
      if (/psnr|ssim|iou/i.test(lower)) parts.push('Bewertung: PSNR, SSIM, IoU.');
      if (/streamlit|flask/i.test(lower)) parts.push('Demo/Deployment: Streamlit oder Flask.');
      return parts.join(' ');
    }

    // LLM / RAG / Fine-tuning projects
    if (/(llm|fine-?tune|fine tuning|retrieval|rag|faiss|transformer|hugging face|prompt|qa|q&a)/i.test(lower)) {
      const parts: string[] = [];
      parts.push('Dieses Projekt passt ein großes Sprachmodell an, um Fragen zu wissenschaftlichen Dokumenten zu beantworten.');
      if (/fine-?tune|fine tuning/i.test(lower)) parts.push('Methode: Feinabstimmung (fine-tuning).');
      if (/rag|retrieval/i.test(lower)) parts.push('Ansatz: Suche + Antwort (RAG) mit Indexierung.');
      if (/faiss/i.test(lower)) parts.push('Indexierung: FAISS oder ähnliches.');
      parts.push('Ziel: präzise Q&A über Forschungstexte.');
      return parts.join(' ');
    }

    // General computer vision shorter phrasing
    if (/(computer vision|cv|microscopy|image)/i.test(lower)) {
      // Keep it short
      return 'Computer-Vision-Projekt: Bildverarbeitung, Analyse und Modellierung für Mikroskopiebilder.';
    }
    // replace some common tokens (case-insensitive)
    Object.keys(replacements).forEach(key => {
      const rx = new RegExp(key, 'gi');
      result = result.replace(rx, replacements[key]);
    });

    // make sentences shorter for A2 style: keep first few sentence fragments
    const sentences = result.split(/([\.\!\?])+\s*/).filter(Boolean);
    if (sentences.length > 4) {
      result = sentences.slice(0,4).join('').trim();
    }

    // final safety prefix
    return `DE: ${result}`;
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
    console.log("New message sent at:", new Date().toLocaleTimeString());

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
        <div className="fixed bottom-24 right-6 z-50 w-96 max-w-[90vw] h-[500px] max-h-[80vh] bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/30 flex flex-col overflow-hidden transform hover:scale-105 transition-all duration-300 perspective-1000">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center gap-3 justify-between">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Bot size={20} />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base">Ayush AI Assistant</h3>
              <p className="text-xs sm:text-sm opacity-90">Let's chat about anything! 💬</p>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => setLang('en')} className={`px-2 py-1 rounded-md font-semibold ${lang==='en' ? 'bg-white/25' : 'bg-white/10'}`}>EN</button>
              <button onClick={() => setLang('de')} className={`px-2 py-1 rounded-md font-semibold ${lang==='de' ? 'bg-white/25' : 'bg-white/10'}`}>DE</button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm sm:text-base ${
                          message.isBot
                            ? 'bg-gray-100/50 text-gray-800 animate-gradient'
                            : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                        } transform hover:scale-105 transition-all duration-200 relative`}
                >
                        <div className="flex flex-col gap-1">
                          <div className="flex items-start gap-2">
                            {message.isBot && <Bot size={16} className="text-blue-600 mt-1 flex-shrink-0" />}
                            {!message.isBot && <User size={16} className="text-white mt-1 flex-shrink-0" />}
                            <div className="whitespace-pre-line leading-relaxed">
                              { /* show translated text if present */ }
                              {translatedMap[message.id] ? translatedMap[message.id] : message.text}
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="text-[10px] sm:text-[11px] opacity-50">
                              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </div>

                            {message.isBot && (
                              <div className="ml-2">
                                <button
                                  onClick={() => {
                                    // toggle translation for this message
                                    if (translatedMap[message.id]) {
                                      const copy = { ...translatedMap };
                                      delete copy[message.id];
                                      setTranslatedMap(copy);
                                    } else {
                                      const translated = translateToGerman(message.text);
                                      setTranslatedMap({ ...translatedMap, [message.id]: translated });
                                    }
                                  }}
                                  className="text-xs px-2 py-1 bg-white/20 rounded-md hover:bg-white/30"
                                  title="Toggle translation to German"
                                >
                                  DE
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100/50 p-3 rounded-2xl flex items-center gap-2">
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

          <div className="p-4 border-t border-white/30 flex items-center gap-3">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type a message..."
              className="flex-1 p-3 rounded-xl border border-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none h-12 sm:h-14 bg-white/20 text-sm sm:text-base"
            />
           <button
              onClick={handleSendMessage}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center"
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
