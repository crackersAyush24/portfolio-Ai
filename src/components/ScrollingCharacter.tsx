import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from "framer-motion";
import { User, Zap, Code, Brain, Book, Mail, Briefcase, Bot } from 'lucide-react';

const ScrollingCharacter = () => {

  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);

  const [robotState, setRobotState] =
    useState<'idle' | 'active' | 'clicked'>('idle');

  const [showWarning, setShowWarning] =
    useState(false);

  const [centered, setCentered] =
    useState(false);

  const [trailParticles, setTrailParticles] =
    useState<{ x: number, y: number, id: number }[]>([]);

  const [lightStreaks, setLightStreaks] =
    useState<{ x: number, y: number, id: number }[]>([]);

  const [sparks, setSparks] =
    useState<{ x: number, y: number, id: number }[]>([]);

  const [robotDisabled, setRobotDisabled] =
    useState(false);

  const hoverCooldown = useRef(false);
  

  const { lang } = useLanguage();

  const sections = [
    { id: 'home', icon: User, colorFrom: '#00FFFF', colorTo: '#8A2BE2', name: 'Home' },
    { id: 'about', icon: Brain, colorFrom: '#FF69B4', colorTo: '#8A2BE2', name: 'About' },
    { id: 'skills', icon: Code, colorFrom: '#32CD32', colorTo: '#00FA9A', name: 'Skills' },
    { id: 'projects', icon: Zap, colorFrom: '#FFA500', colorTo: '#FF4500', name: 'Projects' },
    { id: 'experience', icon: Briefcase, colorFrom: '#7B68EE', colorTo: '#BA55D3', name: 'Experience' },
    { id: 'contact', icon: Mail, colorFrom: '#FF1493', colorTo: '#FF69B4', name: 'Contact' },
    { id: 'certificates', icon: Book, colorFrom: '#8B5CF6', colorTo: '#EC4899', name: 'Certificates' },
    { id: 'updates', icon: Zap, colorFrom: '#FFA500', colorTo: '#FF6347', name: 'Ongoing' }
  ];

  const CurrentIcon =
    sections[currentSection]?.icon || User;

  const { colorFrom, colorTo } =
    sections[currentSection] || {
      colorFrom: '#00FFFF',
      colorTo: '#8A2BE2'
    };

  // SCROLL
  useEffect(() => {

    let ticking = false;

    const handleScroll = () => {

      if (!ticking) {

        requestAnimationFrame(() => {

          const totalHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

          const progress = Math.min(
            (window.scrollY / totalHeight) * 100,
            100
          );

          setScrollProgress(progress);

          const viewportCenter =
            window.innerHeight / 2;

          let newCurrentSection = 0;

          for (let i = 0; i < sections.length; i++) {

            const element =
              document.getElementById(
                sections[i].id
              );

            if (element) {

              const rect =
                element.getBoundingClientRect();

              if (
                rect.top <= viewportCenter &&
                rect.bottom >= viewportCenter
              ) {

                if (newCurrentSection !== i) {

                  setRobotState('active');

                  setTimeout(() => {
                    setRobotState('idle');
                    setShowWarning(false);
                  }, 800);
                }

                newCurrentSection = i;

                break;
              }
            }
          }

          setCurrentSection(newCurrentSection);

          ticking = false;

        });

        ticking = true;
      }
    };

    window.addEventListener(
      'scroll',
      handleScroll,
      { passive: true }
    );

    return () =>
      window.removeEventListener(
        'scroll',
        handleScroll
      );

  }, []);

  // PARTICLES
  useEffect(() => {

    const particleId = Date.now();

    const yPosition =
      (scrollProgress / 100) * 220 - 110;

    setTrailParticles(prev => [
      ...prev,
      { x: 0, y: yPosition, id: particleId }
    ]);

    setLightStreaks(prev => [
      ...prev,
      { x: 0, y: yPosition, id: particleId }
    ]);

    const timer = setTimeout(() => {

      setTrailParticles(prev =>
        prev.filter(p => p.id !== particleId)
      );

      setLightStreaks(prev =>
        prev.filter(p => p.id !== particleId)
      );

    }, 1200);

    return () => clearTimeout(timer);

  }, [scrollProgress]);

  // AUDIO
  const audioCtxRef =
    useRef<AudioContext | null>(null);

  const playBeep = (
    freq = 600,
    duration = 0.12
  ) => {

    try {

      if (!audioCtxRef.current) {

        audioCtxRef.current = new (
          window.AudioContext ||
          (window as any).webkitAudioContext
        )();
      }

      const ctx = audioCtxRef.current;

      const oscillator =
        ctx.createOscillator();

      const gain =
        ctx.createGain();

      oscillator.type = 'square';

      oscillator.frequency.value = freq;

      gain.gain.value = 0.05;

      oscillator.connect(gain);

      gain.connect(ctx.destination);

      oscillator.start();

      oscillator.stop(
        ctx.currentTime + duration
      );

    } catch {}
  };

  const playWeirdSound = () => {
    playBeep(180, 0.4);
  };

  // SPEECH
  const speakText = (
    text: string,
    langCode = 'en'
  ) => {

    try {

      const synth =
        window.speechSynthesis;

      if (!synth) return;

      synth.cancel();

      const utterance =
        new SpeechSynthesisUtterance(text);

      utterance.lang =
        langCode === 'de'
          ? 'de-DE'
          : 'en-US';

      utterance.rate = 0.95;

      utterance.pitch = 1;

      synth.speak(utterance);

    } catch {}
  };

  // HOVER
  const hoverAngry = () => {

    if (robotDisabled) return;

    setRobotState('active');

    playBeep(980, 0.12);

if (lang === 'de') {

  speakText(
    "Willkommen! Schauen Sie sich gerne Ayushs Portfolio an.",
    'de'
  );

} else {

  speakText(
    "Welcome! Feel free to explore Eye-yoosh portfolio.",
    'en'
  );
}
    const tiny =
      Array.from({ length: 6 }).map(() => ({
        id: Date.now() + Math.random(),
        x: (Math.random() - 0.5) * 60,
        y: (Math.random() - 0.5) * 40
      }));

    setSparks(tiny);

    setTimeout(() => {

      setSparks([]);

      setRobotState('idle');

    }, 900);
  };

  // CLICK
  const startAngrySequence = () => {

    if (robotDisabled) return;

    setCentered(true);

    setRobotState('clicked');

    setShowWarning(true);

    const newSparks =
      Array.from({ length: 14 }).map(() => ({
        id: Date.now() + Math.random(),
        x: (Math.random() - 0.5) * 160,
        y: (Math.random() - 0.5) * 120
      }));

    setSparks(newSparks);

    playWeirdSound();

if (lang === 'de') {

  speakText(
    'Hey! Ich bin Ayushs Roboter. Bitte nicht stören!',
    'de'
  );

} else {

  speakText(
    "Hey there! Please don't disturb Eye-yoosh's robot.",
    'en'
  );

    }

    setTimeout(() => {

      setShowWarning(false);

      setRobotState('idle');

      setSparks([]);

    }, 2200);

    setTimeout(() => {
      setCentered(false);
    }, 2600);
  };

  // popup disabled on refresh
  // robot popup now appears only when clicked

  return (
    <>
      <div className="fixed right-4 md:right-6 top-1/2 transform -translate-y-1/2 z-50 pointer-events-none">

        <div className="relative">

          {/* PROGRESS */}
          <div className="absolute right-16 md:right-20 top-0 w-1 h-80 bg-gray-900/20 rounded-full overflow-hidden">

            <motion.div
              className="w-full rounded-full bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 shadow-lg"

              style={{
                height: `${scrollProgress}%`
              }}

              animate={{
                height: `${scrollProgress}%`
              }}

              transition={{
                duration: 0.5,
                ease: 'easeOut'
              }}
            />
          </div>

          {/* ROBOT */}
          {!centered && (
            <motion.div

              className="relative w-16 md:w-20 h-24 md:h-28 cursor-pointer pointer-events-auto"

              onClick={() => {
                startAngrySequence();
                playBeep(880, 0.12);
              }}

              onMouseEnter={() => {


                setRobotState('active');
                setShowWarning(true);

                if (!hoverCooldown.current) {

                  hoverCooldown.current = true;

                  hoverAngry();

                  setTimeout(() => {
                    hoverCooldown.current = false;
                  }, 1200);
                }
              }}
             onMouseLeave={() => {
  setRobotState('idle');
  setShowWarning(false);
}}

animate={{
  y: (scrollProgress / 100) * 320 - 160,

  scale:
    robotState === 'clicked'
      ? [1, 1.25, 1.05]
      : robotState === 'active'
      ? 1.12
      : 1,

  rotate:
    robotState === 'clicked'
      ? [0, -14, 14, -10, 8, 0]
      : robotState === 'active'
      ? 12
      : 0
}}

transition={{
  y: {
    type: 'spring',
    stiffness: 90,
    damping: 26,
    mass: 1.2
  },

  scale: {
    duration: 0.25
  },

  rotate: {
    duration: 0.25
  }
}}

            >
              {/* Trail Particles */}
{trailParticles.map(p => (
  <motion.div
    key={p.id}
    className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-60"
    initial={{ opacity: 0.6, scale: 0.7 }}
    animate={{ y: p.y, opacity: 0, scale: 0.3 }}
    transition={{ duration: 1.2, ease: 'easeOut' }}
  />
))}

{/* Neon Light Streaks */}
{lightStreaks.map(p => (
  <motion.div
    key={p.id}
    className="absolute w-1.5 h-1.5 rounded-full"
    style={{
      boxShadow: `0 0 10px ${colorFrom}, 0 0 20px ${colorTo}`
    }}
    initial={{ opacity: 0.7, scale: 0.8 }}
   animate={{
y: p.y - 20,
x: p.x,
opacity: 0,
scale: 0.4
}}
    transition={{ duration: 1.4, ease: 'easeOut' }}
  />
))}
              {/* SPARKS */}
              {sparks.map(s => (
                <motion.div
                  key={s.id}

                  className="absolute w-2 h-2 bg-red-500 rounded-full"

                  style={{
                    top: '50%',
                    left: '50%'
                  }}

                  initial={{
                    x: 0,
                    y: 0,
                    opacity: 1
                  }}

                  animate={{
                    x: s.x,
                    y: s.y,
                    opacity: 0
                  }}

                  transition={{
                    duration: 0.7,
                    ease: 'easeOut'
                  }}
                />
              ))}

              {/* MAIN BODY */}
              <motion.div

                className="relative w-16 md:w-20 h-16 md:h-20 rounded-2xl shadow-2xl flex items-center justify-center"

                style={{
                  background: `linear-gradient(135deg, ${colorFrom}, ${colorTo})`,
                  boxShadow: `0 0 30px ${colorFrom}, 0 0 60px ${colorTo}`
                }}
              >

                {/* HEAD */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 md:w-10 h-6 md:h-8 bg-gray-900 rounded-t-lg border border-white/20">

                  {/* ANTENNA */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-gray-700">

                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-red-500 rounded-full animate-ping"></div>

                  </div>

                  {/* EYES */}
                  <div className={`absolute top-1 left-1 w-1 h-1 rounded-full ${
                    robotState === 'clicked'
                      ? 'bg-red-500 animate-ping-fast'
                      : 'bg-cyan-400'
                  }`}></div>

                  <div className={`absolute top-1 right-1 w-1 h-1 rounded-full ${
                    robotState === 'clicked'
                      ? 'bg-red-500 animate-ping-fast'
                      : 'bg-cyan-400'
                  }`}></div>

                </div>

                {/* ICON */}
                <div className="absolute inset-0 flex items-center justify-center">

                  <CurrentIcon
                    size={26}
                    className="text-white"
                  />

                </div>

                {/* ARMS */}
                <div className="absolute -left-1 top-4 w-2 h-6 bg-gray-700 rounded-full animate-pulse-slow"></div>

                <div className="absolute -right-1 top-4 w-2 h-6 bg-gray-700 rounded-full animate-pulse-slow animation-delay-300"></div>

                {/* LEGS */}
                <div className="absolute -bottom-1 left-2 w-2 h-3 bg-gray-700 rounded-b-full animate-pulse-slow"></div>

                <div className="absolute -bottom-1 right-2 w-2 h-3 bg-gray-700 rounded-b-full animate-pulse-slow animation-delay-300"></div>

                {/* GLOW */}
                <motion.div

                  className="absolute inset-0 rounded-2xl opacity-40"

                  style={{
                    background: `radial-gradient(circle, ${colorFrom}, transparent 70%)`
                  }}

                  animate={{
                    scale:
                      robotState === 'clicked'
                        ? 1.3
                        : robotState === 'active'
                        ? 1.25
                        : 1
                  }}

                  transition={{
                    repeat:
                      robotState === 'clicked'
                        ? 0
                        : Infinity,

                    duration: 2,

                    repeatType: 'reverse'
                  }}
                />
              </motion.div>

              {/* LABEL */}
              <AnimatePresence mode="wait">

                <motion.div

                  key={
                    showWarning
                      ? 'warning'
                      : sections[currentSection].id
                  }

                  initial={{
                    opacity: 0,
                    x: 20
                  }}

                  animate={{
                    opacity: 1,
                    x: 0
                  }}

                  exit={{
                    opacity: 0,
                    x: 20
                  }}

                  transition={{
                    duration: 0.3
                  }}

                  className="absolute right-24 top-1/2 transform -translate-y-1/2 bg-gray-900/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-xl border border-cyan-400/40 flex items-center gap-2"
                >

                  {showWarning ? (

                    <span className="text-sm font-bold text-red-500 animate-pulse">
                      👋 Hello Recruiter!!
                    </span>

                  ) : (

                    <>
                      <Bot
                        size={16}
                        className="text-cyan-400 animate-bounce-slow"
                      />

                      <span className="text-sm font-bold text-white">
                        {sections[currentSection]?.name}
                      </span>

                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                    </>
                  )}

                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>

      {/* POPUP */}
      <AnimatePresence>
        {centered && (

          <motion.div

            initial={{ opacity: 0 }}

            animate={{ opacity: 1 }}

            exit={{ opacity: 0 }}

            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 pointer-events-auto"
          >

            <motion.div

              initial={{
                scale: 0.9,
                rotate: 0
              }}

              animate={{
                scale: [1, 1.12, 1.05],
                rotate: [0, -10, 10, -6, 6, 0]
              }}

              transition={{
                duration: 0.9
              }}

              className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-2xl border border-red-500 text-center max-w-md w-11/12 relative"
            >

              {/* CLOSE */}
              <div className="absolute top-4 right-6">

                <button

                  onClick={() => {
                    setCentered(false);

                    try {
                      window.speechSynthesis.cancel();
                    } catch {}
                  }}

                  className="text-sm px-3 py-1 rounded-md bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-200"
                >
                  Close
                </button>
              </div>

              {/* ROBOT */}
              <div className="flex items-center justify-center mb-4">

                <div

                  className="w-44 h-44 rounded-3xl flex items-center justify-center"

                  style={{
                    background: `linear-gradient(135deg, ${colorFrom}, ${colorTo})`,
                    boxShadow: `0 0 40px ${colorFrom}, 0 0 90px ${colorTo}`
                  }}
                >

                  <Bot
                    size={72}
                    className="text-white"
                  />

                </div>
              </div>

              {/* TEXT */}
              <div className="text-3xl font-extrabold text-red-600">
                😡 Hey! Don’t touch me!
              </div>

              <div className="mt-3 text-base text-gray-700 dark:text-gray-300">
                I am Ayush's robot — please stop poking me.
              </div>

              {/* BUTTON */}
              <div className="mt-6 flex items-center justify-center">

                <button

                  onClick={() => {
                    /*
const disableTime =
  Date.now() +
  5 * 60 * 1000;

localStorage.setItem(
  'robot_disabled_until',
  String(disableTime)
);
*/


                    setRobotDisabled(true);

                    setCentered(false);

                    try {
                      window.speechSynthesis.cancel();
                    } catch {}

                  }}

                  className="px-4 py-2 rounded-lg bg-red-500 text-white text-sm hover:bg-red-600 transition"
                >
                  Don’t show again (5 min)
                </button>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollingCharacter;