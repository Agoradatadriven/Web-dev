/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView, useScroll } from 'motion/react';
import { ArrowRight, Mail } from 'lucide-react';

const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "0px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" });
      return controls.stop;
    } else {
      count.set(0);
    }
  }, [count, value, inView]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const Typewriter = () => {
  const phrases = [
    "Building e-commerce flows",
    "Building automation systems",
    "Building business websites"
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = 80;
    const deleteSpeed = 40;
    const pauseTime = 2000;

    const handleType = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      
      if (isDeleting) {
        setCurrentText(currentPhrase.substring(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      } else {
        setCurrentText(currentPhrase.substring(0, currentText.length + 1));
        if (currentText.length === currentPhrase.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
          return;
        }
      }
    };

    const timer = setTimeout(handleType, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIndex]);

  return (
    <div className="h-8 mb-6">
      <span className="text-[#52992C] font-mono text-xl md:text-2xl">
        {currentText}
        <span className="animate-pulse">|</span>
      </span>
    </div>
  );
};

const CodeSnippet = ({ text, delay, yOffset, xOffset, duration = 10 }: { text: string, delay: number, yOffset: number, xOffset: number, duration?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: yOffset + 100 }}
    animate={{ opacity: [0, 1, 1, 0], y: yOffset - 200 }}
    transition={{ duration, repeat: Infinity, delay, ease: "linear" }}
    className="absolute text-sm font-mono text-[#52992C]/80 whitespace-nowrap pointer-events-none select-none font-bold tracking-wider"
    style={{ left: `${xOffset}%` }}
  >
    {text}
  </motion.div>
);

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [300, 800], [1, 0]);
  const scale = useTransform(scrollY, [300, 800], [1, 0.95]);
  const bgY1 = useTransform(scrollY, [0, 1000], [0, -150]);
  const bgY2 = useTransform(scrollY, [0, 1000], [0, 150]);

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-[#FAFAFA]">
      {/* Premium Floating Background Elements */}
      <motion.div 
        style={{ y: bgY1 }}
        className="absolute top-20 -left-64 w-96 h-96 bg-[#52992C]/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"
      />
      <motion.div 
        style={{ y: bgY2 }}
        className="absolute top-40 -right-64 w-96 h-96 bg-zinc-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"
      />
      <motion.div 
        style={{ y: bgY1 }}
        className="absolute -bottom-32 left-1/2 w-96 h-96 bg-[#52992C]/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"
      />

      <motion.div 
        style={{ opacity, scale }}
        className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-start pt-12">
          {/* Left Column */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.1,
                },
              },
            }}
          >
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="text-5xl md:text-6xl lg:text-[4.5rem] font-display font-bold tracking-tight text-zinc-950 leading-[1.05] mb-4"
            >
              Building real websites, automations & digital experiences.
            </motion.h1>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
            >
              <Typewriter />
            </motion.div>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="text-lg text-zinc-600 mb-10 max-w-xl leading-relaxed font-light"
            >
              We create business websites, booking flows, automations, and digital systems while continuously strengthening our front-end and full-stack web development skills.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="flex flex-wrap items-center gap-4 mb-16"
            >
              <motion.a
                href="#work"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#52992C] text-white text-sm font-medium rounded-md hover:bg-[#417a23] transition-all shadow-md hover:shadow-lg"
              >
                View Our Work
                <ArrowRight size={16} />
              </motion.a>
              <motion.a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@agoradatadriven.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-zinc-900 border border-zinc-200 text-sm font-medium rounded-md hover:bg-zinc-50 transition-all shadow-sm hover:shadow-md"
              >
                <Mail size={16} />
                Contact Us
              </motion.a>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="grid grid-cols-3 gap-6 border-t border-zinc-200 pt-8"
            >
              <div>
                <div className="text-2xl font-bold text-zinc-950 mb-1"><Counter value={3} suffix="+" /></div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider">Live Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-zinc-950 mb-1"><Counter value={10} suffix="+" /></div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider">Automations</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-zinc-950 mb-1"><Counter value={15} suffix="+" /></div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider">Skills</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image & Code Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ y: y1 }}
            className="hidden lg:flex justify-center items-center relative min-h-[500px]"
          >
            {/* Coding Animation Background */}
            <div className="absolute inset-0 overflow-hidden flex items-center justify-center pointer-events-none z-0 mask-image-radial opacity-80">
              <CodeSnippet text="const app = express();" delay={0} yOffset={100} xOffset={5} duration={8} />
              <CodeSnippet text="function build() { return true; }" delay={2} yOffset={150} xOffset={60} duration={12} />
              <CodeSnippet text="<motion.div animate={{ scale: 1 }} />" delay={4} yOffset={50} xOffset={15} duration={10} />
              <CodeSnippet text="await db.collection('users').get();" delay={1} yOffset={200} xOffset={70} duration={9} />
              <CodeSnippet text="import { useState } from 'react';" delay={5} yOffset={80} xOffset={35} duration={11} />
              <CodeSnippet text="npm run build && npm start" delay={3} yOffset={120} xOffset={80} duration={8} />
              <CodeSnippet text="git commit -m 'feat: awesome animation'" delay={6} yOffset={180} xOffset={10} duration={10} />
              <CodeSnippet text="border-radius: 9999px;" delay={2.5} yOffset={60} xOffset={85} duration={9} />
              <CodeSnippet text="console.log('Hello World');" delay={7} yOffset={140} xOffset={25} duration={12} />
              <CodeSnippet text="export default function App()" delay={1.5} yOffset={220} xOffset={45} duration={10} />
              <CodeSnippet text="const [data, setData] = useState([])" delay={4.5} yOffset={90} xOffset={55} duration={11} />
              <CodeSnippet text="transition={{ duration: 0.5 }}" delay={0.5} yOffset={170} xOffset={20} duration={9} />
              <CodeSnippet text="return <div className='wow'>;" delay={3.5} yOffset={110} xOffset={75} duration={10} />
            </div>

            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="w-full max-w-md flex justify-center items-start pt-4 relative z-10"
            >
              <img 
                src={`${import.meta.env.BASE_URL}BG-LOGO.png`}
                alt="Agora Data Driven Logo" 
                className="w-full max-w-[400px] h-auto object-contain mix-blend-darken drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
