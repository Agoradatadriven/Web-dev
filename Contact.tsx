import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Mail, Linkedin, Github } from 'lucide-react';
import AnimatedUpworkButton from './AnimatedUpworkButton';

export default function Contact() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section id="contact" ref={ref} className="py-32 bg-[#FAFAFA] relative overflow-hidden">
      {/* Subtle Background Pattern with Parallax */}
      <motion.div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none h-[150%]" 
        style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px', y }}
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 lg:p-24 text-center border border-zinc-200/60 shadow-2xl shadow-zinc-900/10 relative overflow-hidden">
          {/* Decorative blur inside the card */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#52992C]/5 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -z-10 pointer-events-none"></div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="max-w-3xl mx-auto"
          >
            <motion.h2 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="text-4xl md:text-5xl font-display font-bold mb-6 text-zinc-950 tracking-tight"
            >
              Let's build something together.
            </motion.h2>
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="text-xl text-zinc-600 mb-12 font-light"
            >
              We are open to freelance projects, collaborations, and web development opportunities.
            </motion.p>

            <motion.div 
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="flex flex-wrap justify-center gap-4 mb-16"
            >
              <motion.a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@agoradatadriven.com" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#52992C] text-white font-medium rounded-full hover:bg-[#417a23] transition-all shadow-md hover:shadow-lg"
              >
                <Mail size={18} />
                Email Us
              </motion.a>
              <AnimatedUpworkButton size="large" />
            </motion.div>

            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="flex justify-center gap-6"
            >
              <a href="#" className="p-4 bg-zinc-50 rounded-full text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 transition-all border border-zinc-200/60">
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="p-4 bg-zinc-50 rounded-full text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 transition-all border border-zinc-200/60">
                <Github size={24} />
                <span className="sr-only">GitHub</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
