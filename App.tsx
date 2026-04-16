/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import LearningJourney from './components/LearningJourney';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Vision from './components/Vision';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import { motion, useScroll } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-gray-900 selection:text-white">
      <Cursor />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#52992C] origin-left z-[60]"
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <LearningJourney />
        <Skills />
        <Projects />
        <Services />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
