const translations = {
  header: {
    en: {
      nav: ['Home','About','Skills','Projects','Experience','Certificate','Ongoing','Contact'],
      lightMode: 'Light Mode',
      darkMode: 'Dark Mode'
    },
    de: {
      nav: ['Home','Über','Fähigkeiten','Projekte','Erfahrung','Zertifikate','Laufendes','Kontakt'],
      lightMode: 'Hellmodus',
      darkMode: 'Dunkelmodus'
    }
  },
  hero: {
    en: { viewResume: 'View / Download Resume', contact: 'Get In Touch' },
    de: { viewResume: 'Lebenslauf ansehen / herunterladen', contact: 'Kontakt' }
  },
  about: {
    en: {
      heading: 'About Me',
      para: 'I am a Data Analyst and AI engineer focusing on image denoising and segmentation. Currently pursuing an M.Sc. in Computer Science at TU Dresden (2025).'
      , long: {
        journey1: "With a B.E. in Computer Engineering from University of Mumbai and a strong CGPA of 8.67, I've built expertise in data analysis, machine learning, and AI applications. My journey began with academic excellence in mathematics and algorithms, evolving into practical AI solutions for HR-tech and business intelligence.",
        journey2: "At Jobclassify, I improved job matching accuracy using machine learning models and automated candidate screening processes, saving more than 200 hours monthly. I focus on leveraging AI to streamline business processes and create measurable impact.",
        journey3: "Currently studying for an M.Sc. in Computer Science at TU Dresden (2025), with a focus on computer vision and systems for machine learning. I enjoy bridging research and production to build robust AI systems."
      }
    },
    de: {
      heading: 'Über mich',
      para: 'Ich bin Data Analyst und KI-Ingenieur mit Schwerpunkt auf Bildentrauschung und Segmentierung. Zurzeit Studiere ich M.Sc. Informatik an der TU Dresden (2025).'
      , long: {
        journey1: 'Mit einem B.E. in Computer Engineering von der University of Mumbai und einem starken CGPA von 8,67 habe ich Fachwissen in Datenanalyse, Machine Learning und KI-Anwendungen aufgebaut. Meine Reise begann mit akademischer Exzellenz in Mathematik und Algorithmen und entwickelte sich zu praxisorientierten KI-Lösungen für HR-Tech und Business Intelligence.',
        journey2: 'Bei Jobclassify habe ich die Genauigkeit der Stellenzuordnung durch Machine-Learning-Modelle und automatisierte Kandidatenscreening-Prozesse verbessert und dabei mehr als 200 Stunden pro Monat eingespart. Ich konzentriere mich darauf, KI zur Optimierung von Geschäftsprozessen und zur Schaffung messbarer Auswirkungen einzusetzen.',
        journey3: 'Derzeit studiere ich M.Sc. Informatik an der TU Dresden (2025) mit Schwerpunkt auf Computer Vision und Systemen für Machine Learning. Ich überbrücke gerne Forschung und Produktion, um robuste KI-Systeme zu entwickeln.'
      }
    }
  },
  experience: {
    en: { title: 'Professional Experience', readPaper: 'Read Paper',
      descriptions: {
        dataAnalyst: 'Processed candidate and job data to improve matching and support decision-making. Improved model accuracy and built dashboards.',
        student: 'Strong academic foundation in Computer Engineering with focus on AI and distributed systems.',
        research: 'R&D on applied AI solutions with publications in real-estate analytics.',
        foresightLong: 'Foresight Realty: A Comprehensive AI-Powered Framework for Real Estate Investment Analysis. This work describes an end-to-end system where machine learning models are applied for property price prediction, market trend analysis, sentiment aggregation from news and social media, and automated valuation workflows. The system integrates feature engineering for location, amenities, and sentiment-based indicators and demonstrates improved forecasting accuracy compared to baseline statistical models. Full citation: Pathak et al., International Journal of Electrical, Electronics and Computer System, 2025.'
      }
    },
    de: { title: 'Berufserfahrung', readPaper: 'Artikel lesen',
      descriptions: {
        dataAnalyst: 'Verarbeitung von Kandidaten- und Stellen-Daten zur Verbesserung des Matchings und zur Unterstützung von Entscheidungsprozessen. Verbesserung der Modellgenauigkeit und Erstellung von Dashboards.',
        student: 'Solide akademische Grundlage im Bereich Computer Engineering mit Schwerpunkt auf KI und verteilten Systemen.',
        research: 'Forschung & Entwicklung praxisorientierter KI-Lösungen mit Veröffentlichungen zur Immobilienanalyse.',
        foresightLong: 'Foresight Realty: Ein umfassender, KI-gestützter Rahmen für die Analyse von Immobilieninvestitionen. Diese Arbeit beschreibt ein End-to-End-System, in dem Machine-Learning-Modelle zur Vorhersage von Immobilienpreisen, Markttrend-Analyse, Sentiment-Aggregation aus Nachrichten und sozialen Medien sowie automatisierten Bewertungs-Workflows eingesetzt werden. Das System integriert Feature-Engineering für Standort, Ausstattungsmerkmale und Sentiment-basierte Indikatoren und zeigt eine verbesserte Prognosegenauigkeit im Vergleich zu einfachen statistischen Modellen. Vollständiges Zitat: Pathak et al., International Journal of Electrical, Electronics and Computer System, 2025.'
      }
    }
  },
  projects: {
    en: { heading: 'Projects',
      descriptions: {
        denoising: 'Developed an end-to-end pipeline for denoising and segmenting chemical-peeled / microscopy images. Implemented Noise2Noise, DnCNN and a U-Net segmentation model in PyTorch; includes preprocessing, postprocessing, evaluation (PSNR/SSIM/IoU) and a Streamlit demo + Flask API.',
        deepfake: 'Built a deepfake detection pipeline for images and videos using face detectors, CNNs and a Streamlit UI for demonstration.',
        mnist: 'Trained a Keras-based deep neural network for MNIST achieving ~98% accuracy.',
        movie: 'Machine learning model + Streamlit app to predict box-office revenue using regression techniques.',
        foresight: 'Led Foresight Realty price prediction project using regression and deployed via Flask.'
      }
    },
    de: { heading: 'Projekte',
      descriptions: {
        denoising: 'Entwickelte eine End-to-End-Pipeline zum Entrauschen und Segmentieren von chemisch präparierten Mikroskopiebildern. Implementierte Noise2Noise, DnCNN und ein U-Net-Segmentierungsmodell in PyTorch; umfasst Vorverarbeitung, Nachbearbeitung, Bewertung (PSNR/SSIM/IoU) sowie eine Streamlit-Demo und eine Flask-API.',
        deepfake: 'Erstellte eine Pipeline zur Erkennung von Deepfakes in Bildern und Videos unter Verwendung von Gesichtserkennungsmodulen, CNNs und einer Streamlit-Oberfläche zur Demonstration.',
        mnist: 'Trainiertes Keras-Netzwerk zur Klassifikation handgeschriebener Ziffern (MNIST) mit ~98% Genauigkeit.',
        movie: 'ML-Modell und Streamlit-App zur Vorhersage von Kinoeinnahmen mittels Regressionsalgorithmen.',
        foresight: 'Projektleitung für die Preisvorhersage bei Foresight Realty mittels Regressionsmodellen, Deployment über Flask.'
      }
    }
  },
  // small UI labels for projects
  projectsMeta: {
    en: {
      featuredLabel: 'Featured',
      intro: 'A showcase of AI & ML projects demonstrating real-world impact and innovation.',
      buttons: { code: 'Code', demo: 'Live Demo' }
    },
    de: {
      featuredLabel: 'Ausgewählt',
      intro: 'Eine Auswahl von AI- & ML-Projekten, die echte Auswirkungen und Innovationen zeigen.',
      buttons: { code: 'Code', demo: 'Live-Demo' }
    }
  },
  skills: {
    en: { heading: 'Skills' },
    de: { heading: 'Fähigkeiten' }
  },
  certificates: {
    en: { title: 'Certificates', note: 'Selected professional certificates and online course badges.' },
    de: { title: 'Zertifikate', note: 'Ausgewählte berufliche Zertifikate und Online-Kurs-Abzeichen.' }
  },
  certificatesMeta: {
    en: { view: 'View', viewCertificate: 'View Certificate' },
    de: { view: 'Ansehen', viewCertificate: 'Zertifikat ansehen' }
  },
  contact: {
    en: { heading: 'Contact', phoneLabel: 'Phone', emailLabel: 'Email', paragraphs: {
      reachOut: 'Open to research collaborations and roles in image processing, denoising, and segmentation. Based in Dresden, Germany. Phone available for recruiters.'
    } },
    de: { heading: 'Kontakt', phoneLabel: 'Telefon', emailLabel: 'E-Mail', paragraphs: {
      reachOut: 'Offen für Forschungskooperationen und Positionen im Bereich Bildverarbeitung, Entrauschen und Segmentierung. Ansässig in Dresden, Deutschland. Telefonnummer für Recruiter verfügbar.'
    } }
  },
  contactMeta: {
    en: { follow: 'Follow Me', sendMessage: 'Send Message', sendButton: 'Send Message' },
    de: { follow: 'Folge mir', sendMessage: 'Nachricht senden', sendButton: 'Nachricht senden' }
  },
  updates: {
    en: { heading: 'Ongoing', items: {
      mscTitle: 'M.Sc. Computer Science - TU Dresden',
      msc: 'Accepted into M.Sc. Computer Science at TU Dresden (2025 intake).',
      germanA2Title: 'German Language (A2) & Portfolio Localization',
      germanA2: 'Completed German A2 certificate.',
      paperTitle: 'Foresight Realty Publication',
      paper: 'Published a paper with Foresight Realty on price prediction and feature analysis.'
    } },
    de: { heading: 'Laufendes', items: {
      mscTitle: 'M.Sc. Informatik - TU Dresden',
      msc: 'Zugelassen zum M.Sc. Informatik an der TU Dresden (Studienbeginn 2025).',
      germanA2Title: 'Deutsch (A2) & Portfolio-Lokalisierung',
      germanA2: 'Deutschzertifikat A2 abgeschlossen.',
      paperTitle: 'Foresight Realty Veröffentlichung',
      paper: 'Veröffentlichung mit Foresight Realty zur Preisvorhersage und Merkmalsanalyse.'
    } }
  },
  footer: {
    en: { copyright: '© 2024 Ayush Chaubey. Built with React, TypeScript, and Tailwind CSS.', crafted: 'Crafted with ❤️ for data-driven innovation' },
    de: { copyright: '© 2024 Ayush Chaubey. Erstellt mit React, TypeScript und Tailwind CSS.', crafted: 'Mit ❤️ für datengetriebene Innovation erstellt' }
  }
};

export default translations;
