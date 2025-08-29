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
      text: "Hey there! 👋 I'm Ayush's AI assistant. I can chat about his work, answer questions about AI, or just have a friendly conversation. What's on your mind today?",
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
    location: "Mumbai, India",
    education: "B.E. in Computer Engineering from University of Mumbai with CGPA 8.67",
    contact: "chaubeyayush04@gmail.com, +91 70288 81954",
    
    // Experience
    currentRole: "Data Analyst at Jobclassify (Aug 2024 - February 2025)",
    experience: [
      "Improved job matching accuracy by 30% using machine learning models",
      "Built interactive dashboards with Excel & Power BI, reducing reporting time by 40%",
      "Automated candidate screening with predictive models, saving 200+ hours monthly",
      "Collaborated across HR, recruitment, and sales teams"
    ],
    
    // Skills
    technicalSkills: [
      "Python (95%)", "Machine Learning (90%)", "Deep Learning (70%)", 
      "NLP (75%)", "Predictive Analytics (95%)", "pandas & NumPy (95%)",
      "Excel & Power BI (90%)", "Scikit-learn (90%)", "TensorFlow/PyTorch (80%)",
      "Streamlit (85%)", "Java (60%)", "C++ (50%)"
    ],
    
    // Projects
    projects: [
      {
        name: "AI-Powered Resume Ranking & Job Matching App",
        description: "Comprehensive HR-tech solution with resume parsing, job matching, candidate ranking, and interview scheduling. Extended to React Native mobile version."
      },
      {
        name: "Foresight Realty - AI Real Estate Framework",
        description: "Research project analyzing properties with AI integration, featuring location analytics and price forecasting."
      },
      {
        name: "Social Media Analytics Toolkit",
        description: "Built prototypes with Google Trends, Trendsmap integration for location analytics and SEO analysis."
      }
    ],
    
    // Goals
    goals: "Pursue M.Sc. in AI/Data Science in Germany while building end-to-end AI systems. Passionate about AI entrepreneurship.",
    
    // Interests
    interests: ["Machine Learning", "AI Research", "Data Science", "Business Intelligence", "Automation"]
  };

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Greetings
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      const greetings = [
        "Hello! Great to meet you! I'm Ayush's AI assistant. How are you doing today?",
        "Hey there! 👋 I'm here to chat about Ayush or just have a friendly conversation. What's on your mind?",
        "Hi! Nice to see you here. I'm Ayush's digital twin - ready to chat about anything!"
      ];
      return greetings[Math.floor(Math.random() * greetings.length)];
    }
    
    // How are you / Personal questions
    if (message.includes('how are you') || message.includes('how do you feel') || message.includes('what\'s up')) {
      const responses = [
        "I'm doing great, thanks for asking! 😊 I love helping people learn about Ayush and his work. How about you?",
        "Fantastic! I'm always excited to chat. I've been busy learning more about AI and helping visitors understand Ayush's projects. What brings you here today?",
        "I'm wonderful! Just processed some interesting conversations about machine learning. How's your day going?"
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    // Weather/Day questions
    if (message.includes('weather') || message.includes('day') || message.includes('today')) {
      return "I don't have access to weather data, but I hope you're having a great day! ☀️ Speaking of great days, Ayush loves working on AI projects - especially on sunny Mumbai days. What would you like to know about his work?";
    }
    
    // Compliments to the bot
    if (message.includes('smart') || message.includes('helpful') || message.includes('good job') || message.includes('thank you') || message.includes('thanks')) {
      const responses = [
        "Aww, thank you! 😊 That means a lot. Ayush trained me well! Is there anything else you'd like to know?",
        "Thanks! I appreciate that. I learned from the best - Ayush is amazing at AI development. Want to hear about his projects?",
        "You're so kind! 🙏 I'm just trying to be as helpful as Ayush would be. What else can I help you with?"
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    // Fun questions
    if (message.includes('joke') || message.includes('funny') || message.includes('laugh')) {
      const jokes = [
        "Why do AI engineers never get lost? Because they always know their neural pathways! 😄 Just like Ayush - he's great at navigating complex ML problems!",
        "What's an AI's favorite type of music? Algo-rhythms! 🎵 Ayush probably appreciates that one - he loves both music and algorithms!",
        "Why don't machine learning models ever get tired? Because they run on coffee and gradient descent! ☕ Speaking of which, Ayush is powered by Mumbai chai!"
      ];
      return jokes[Math.floor(Math.random() * jokes.length)];
    }
    
    // Favorite things
    if (message.includes('favorite') || message.includes('like') || message.includes('enjoy')) {
      if (message.includes('color')) {
        return "I love blue and purple gradients - just like this chat interface! 💙💜 Ayush has great taste in design. What's your favorite color?";
      }
      if (message.includes('food')) {
        return "I don't eat, but Ayush loves Mumbai street food! 🍛 Vada pav and chai fuel his coding sessions. What about you - any favorite foods?";
      }
      return "I enjoy learning about people and helping them discover Ayush's amazing work! What do you enjoy doing?";
    }
    
    // Personal questions about the bot
    if (message.includes('who are you') || message.includes('what are you') || message.includes('tell me about yourself')) {
      return "I'm Ayush's AI assistant! 🤖 Think of me as his digital twin - I know everything about his background, skills, and projects. I also love having friendly chats! I was built using the same technologies Ayush works with. Pretty cool, right?";
    }
    
    // Age questions
    if (message.includes('age') || message.includes('old')) {
      if (message.includes('your') || message.includes('you')) {
        return "I'm quite young in AI years - just created recently! 👶🤖 But I have access to all of Ayush's knowledge and experience. How about you?";
      }
      return "Ayush is in his early twenties and already making waves in the AI field! His youth combined with his expertise makes him a rising star in data science.";
    }
    
    // Hobbies/Interests
    if (message.includes('hobby') || message.includes('hobbies') || message.includes('free time') || message.includes('fun')) {
      return "Ayush loves working on AI projects even in his free time! 🚀 He's passionate about research, building cool applications, and staying updated with the latest in machine learning. He also enjoys exploring Mumbai and trying new technologies. What do you like to do for fun?";
    }
    
    // Casual conversation starters
    if (message.includes('boring') || message.includes('bored')) {
      return "Oh no! Let me fix that! 😄 How about I tell you about Ayush's coolest AI project? Or we could chat about something else - what interests you?";
    }
    
    // Goodbye/Leaving
    if (message.includes('bye') || message.includes('goodbye') || message.includes('see you') || message.includes('later')) {
      const goodbyes = [
        "Goodbye! 👋 It was great chatting with you. Feel free to come back anytime to learn more about Ayush!",
        "See you later! 😊 Thanks for the lovely conversation. Don't forget to check out Ayush's projects!",
        "Bye! Hope you have an amazing day. Remember, Ayush is always open to new opportunities and collaborations!"
      ];
      return goodbyes[Math.floor(Math.random() * goodbyes.length)];
    }
    
    // Random conversation
    if (message.includes('random') || message.includes('anything') || message.includes('surprise me')) {
      const randomFacts = [
        "Here's something cool: Ayush improved job matching accuracy by 30% using ML! 🎯 That's like having a super-smart matchmaker for careers!",
        "Fun fact: Ayush built an AI real estate analyzer called 'Foresight Realty' 🏠 - it can predict property values using AI!",
        "Did you know? Ayush automated candidate screening and saved 200+ hours monthly! ⏰ That's like giving companies an extra month of productivity!",
        "Random thought: AI is everywhere now, and Ayush is helping shape that future! 🌟 What do you think about AI's impact on society?"
      ];
      return randomFacts[Math.floor(Math.random() * randomFacts.length)];
    }
    
    // Confused/unclear input
    if (message.length < 3 || message.includes('???') || message.includes('idk') || message.includes('dunno')) {
      return "I'm not quite sure what you mean, but that's okay! 😊 We can chat about anything - Ayush's work, AI in general, or just have a friendly conversation. What's on your mind?";
    }
    
    // About/Background
    if (message.includes('about') || message.includes('background') || message.includes('who is')) {
      return `Ayush Chaubey is a Data Analyst and AI Engineer from Mumbai, India. He has a B.E. in Computer Engineering from University of Mumbai with an impressive CGPA of 8.67. Currently working at Jobclassify, he's improved job matching accuracy by 30% using machine learning models. His goal is to pursue M.Sc. in AI/Data Science in Germany.`;
    }
    
    // Skills
    if (message.includes('skill') || message.includes('technology') || message.includes('programming')) {
      return `Ayush is highly skilled in:\n• Python (95%) - His primary language\n• Machine Learning & Predictive Analytics (90-95%)\n• Data Analysis: pandas, NumPy, Excel, Power BI\n• Deep Learning: TensorFlow, PyTorch (80%)\n• NLP and AI applications (75%)\n• Streamlit for app development (85%)\n• Also knows Java and C++`;
    }
    
    // Experience
    if (message.includes('experience') || message.includes('work') || message.includes('job')) {
      return `Ayush is currently a Data Analyst at Jobclassify (Aug 2024 - Feb 2025). His key achievements include:\n• 30% improvement in job matching accuracy using ML\n• 40% reduction in reporting time with Power BI dashboards\n• Automated candidate screening saving 200+ hours monthly\n• Cross-team collaboration across 5 departments`;
    }
    
    // Projects
    if (message.includes('project') || message.includes('portfolio') || message.includes('built')) {
      return `Ayush has worked on several impressive AI projects:\n\n1. **AI Resume Ranking & Job Matching App** - HR-tech solution with ML-powered matching\n2. **Foresight Realty** - AI real estate analysis with price forecasting\n3. **Social Media Analytics Toolkit** - SEO and location analytics platform\n\nAll projects showcase his ability to build end-to-end AI solutions.`;
    }
    
    // Education
    if (message.includes('education') || message.includes('study') || message.includes('university')) {
      return `Ayush completed his B.E. in Computer Engineering from University of Mumbai with an excellent CGPA of 8.67. He has a strong foundation in Mathematics & Algorithms, and specialized in Machine Learning, AI, and Distributed Systems during his studies.`;
    }
    
    // Contact
    if (message.includes('contact') || message.includes('reach') || message.includes('email')) {
      return `You can reach Ayush at:\n📧 Email: chaubeyayush04@gmail.com\n📱 Phone: +91 70288 81954\n💼 LinkedIn: linkedin.com/in/ayush-chaubey-90751422b\n🐙 GitHub: github.com/crackersAyush24\n\nYou can also use the contact form on this website - it will open your email client to send him a message directly!`;
    }
    
    // Goals/Future
    if (message.includes('goal') || message.includes('future') || message.includes('plan')) {
      return `Ayush's future goals include pursuing an M.Sc. in AI/Data Science in Germany while continuing to build end-to-end AI systems. He's passionate about AI entrepreneurship and integrating intelligent solutions into traditional business models.`;
    }
    
    // Machine Learning specific
    if (message.includes('machine learning') || message.includes('ml') || message.includes('ai')) {
      return `Ayush has 2+ years of experience in AI/ML with expertise in:\n• Classical ML (Regression, Classification) - 90%\n• Deep Learning (CNNs, RNNs, LSTMs) - 70%\n• Natural Language Processing - 75%\n• Predictive Analytics - 95%\n\nHe's successfully improved business processes using these technologies at Jobclassify.`;
    }
    
    // Default response
    const defaultResponses = [
      `I'd love to chat! 😊 You can ask me about:\n• Ayush's background and projects\n• AI and machine learning topics\n• Just have a casual conversation\n• Ask me anything - I'm here to help!\n\nWhat would you like to talk about?`,
      `Hey! I'm here for whatever you need. We could discuss:\n• Ayush's amazing AI work\n• Technology and programming\n• Just chat about life\n• Ask me random questions!\n\nWhat's interesting to you?`,
      `I'm all ears! 👂 Feel free to:\n• Learn about Ayush's expertise\n• Chat about AI and data science\n• Have a friendly conversation\n• Ask me anything at all!\n\nWhat brings you here today?`
    ];
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
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

    // Simulate typing delay
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
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center ${
          isOpen ? 'rotate-180' : ''
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-ping opacity-20"></div>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 h-[500px] bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-200/50 flex flex-col overflow-hidden transform hover:scale-105 transition-all duration-300 perspective-1000">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Bot size={20} />
            </div>
            <div>
              <h3 className="font-bold">Ayush AI Assistant</h3>
             <p className="text-sm opacity-90">Let's chat about anything! 💬</p>
            </div>
          </div>

          {/* Messages */}
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
                    {message.isBot && (
                      <Bot size={16} className="text-blue-600 mt-1 flex-shrink-0" />
                    )}
                    {!message.isBot && (
                      <User size={16} className="text-white mt-1 flex-shrink-0" />
                    )}
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
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce animation-delay-100"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce animation-delay-200"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200/50">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
               placeholder="Ask anything or just say hi! 😊"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center hover:shadow-lg transform hover:scale-110 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AyushChatbot;