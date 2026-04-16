import { motion } from 'motion/react';

export default function Skills() {
  const skillGroups = [
    {
      title: "Front-End Development",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "Responsive Design", "UI/UX Fundamentals"]
    },
    {
      title: "Website Platforms",
      skills: ["WordPress", "Elementor", "WooCommerce", "Booking Systems"]
    },
    {
      title: "Automations & Integrations",
      skills: ["ActiveCampaign", "Chatbot Setup", "Workflow Automation", "API Integrations"]
    },
    {
      title: "Technical & Data",
      skills: ["Git / GitHub", "Python", "Pandas", "VS Code", "Antigravity"]
    },
    {
      title: "Currently Expanding Into",
      skills: ["Full-Stack Development", "React", "Node.js", "Databases"],
      highlight: true
    }
  ];

  return (
    <section id="skills" className="py-32 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
          }}
          className="mb-20 max-w-3xl"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-zinc-950 tracking-tight">Technical Arsenal</h2>
          <p className="text-lg text-zinc-600 font-light leading-relaxed">
            A combination of foundational web technologies and practical business implementation tools, constantly expanding.
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
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              variants={{
                hidden: { opacity: 0, scale: 0.95, y: 20 },
                visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
              }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className={`p-8 rounded-2xl transition-shadow duration-300 ${
                group.highlight 
                  ? 'bg-zinc-950 text-white shadow-xl shadow-zinc-900/10 hover:shadow-2xl hover:shadow-[#52992C]/20 lg:col-span-2 xl:col-span-1' 
                  : 'bg-white border border-zinc-200/60 shadow-sm hover:shadow-xl hover:shadow-zinc-900/5 hover:border-zinc-300'
              }`}
            >
              <h3 className={`text-lg font-display font-semibold mb-6 ${group.highlight ? 'text-white' : 'text-zinc-950'}`}>
                {group.title}
              </h3>
              <motion.div 
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
                }}
                className="flex flex-wrap gap-2"
              >
                {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      variants={{
                        hidden: { opacity: 0, scale: 0.8, y: 10 },
                        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
                      }}
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut", delay: Math.random() }}
                      className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors inline-block ${
                      group.highlight
                        ? 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white'
                        : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900'
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
