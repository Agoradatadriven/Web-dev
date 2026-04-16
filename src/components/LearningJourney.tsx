import { motion } from 'motion/react';
import { CheckCircle2, CircleDashed } from 'lucide-react';

export default function LearningJourney() {
  const completed = [
    "Completed front-end fundamentals and JavaScript coursework",
    "Learned version control and Git/GitHub workflow",
    "Built and launched real business websites",
    "Developed WordPress / Elementor / WooCommerce implementation skills",
    "Worked on chatbot and automation integrations",
    "Applied Python and Pandas for technical/data-related work"
  ];

  const current = [
    "Advancing into full-stack front-end and back-end development",
    "Deepening JavaScript and React implementation",
    "Exploring APIs, databases, and modern web architecture"
  ];

  return (
    <section id="journey" className="py-32 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
          }}
          className="max-w-3xl mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-zinc-950 tracking-tight">Our Learning Journey</h2>
          <p className="text-lg text-zinc-600 font-light leading-relaxed">
            A clear progression from foundational knowledge to practical business implementation, and now toward advanced full-stack development.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid lg:grid-cols-2 gap-8 lg:gap-16 relative"
        >
          {/* Animated Connection Line (Desktop) */}
          <motion.div 
            className="hidden lg:block absolute top-1/2 left-1/2 w-16 h-0.5 bg-zinc-200 -translate-x-1/2 -translate-y-1/2 z-0"
            variants={{
              hidden: { scaleX: 0, opacity: 0 },
              visible: { scaleX: 1, opacity: 1, transition: { duration: 1, delay: 0.5, ease: "easeInOut" } }
            }}
            style={{ originX: 0 }}
          />
          
          {/* Completed */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -30, scale: 0.95 },
              visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-zinc-200/60 relative overflow-hidden hover:shadow-xl hover:shadow-zinc-900/5 hover:border-zinc-300 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
            
            <h3 className="text-2xl font-display font-semibold mb-8 flex items-center gap-4 text-zinc-950 relative z-10">
              <span className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-900 border border-zinc-200">
                <CheckCircle2 size={20} />
              </span>
              Completed & Applied
            </h3>
            <motion.ul 
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
              }}
              className="space-y-6 relative z-10"
            >
              {completed.map((item, index) => (
                <motion.li 
                  key={index} 
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="flex items-start gap-4 text-zinc-600"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-2.5 shrink-0"></div>
                  <span className="leading-relaxed font-light">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Current */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 30, scale: 0.95 },
              visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="bg-zinc-950 text-white p-8 md:p-12 rounded-3xl shadow-xl shadow-zinc-900/10 relative overflow-hidden hover:shadow-2xl hover:shadow-[#52992C]/20 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-800 rounded-full mix-blend-screen filter blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2"></div>

            <h3 className="text-2xl font-display font-semibold mb-8 flex items-center gap-4 relative z-10">
              <span className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-white border border-zinc-700">
                <CircleDashed size={20} className="animate-[spin_4s_linear_infinite]" />
              </span>
              Currently Learning
            </h3>
            <motion.ul 
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.4 } }
              }}
              className="space-y-6 relative z-10"
            >
              {current.map((item, index) => (
                <motion.li 
                  key={index} 
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="flex items-start gap-4 text-zinc-300"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-2.5 shrink-0"></div>
                  <span className="leading-relaxed font-light">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
            
            <motion.div 
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.6 } }
              }}
              className="mt-12 pt-8 border-t border-zinc-800/80 relative z-10"
            >
              <h4 className="text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-6">Coursework Background</h4>
              <div className="flex flex-wrap gap-2">
                {["Meta Front-End Dev", "JavaScript", "Git/GitHub", "HTML & CSS in Depth"].map((course) => (
                  <motion.span 
                    key={course}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-md text-xs font-medium text-zinc-300"
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
