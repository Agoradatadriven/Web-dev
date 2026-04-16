import { motion } from 'motion/react';

export default function Vision() {
  return (
    <section className="py-32 bg-zinc-950 text-white relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-zinc-900 rounded-full mix-blend-screen filter blur-[100px] opacity-50 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-zinc-900 rounded-full mix-blend-screen filter blur-[80px] opacity-30 -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
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
        >
          <motion.h2 
            variants={{
              hidden: { opacity: 0, y: 30, scale: 0.95 },
              visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 tracking-tight"
          >
            Building Now, Growing Further
          </motion.h2>
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="text-xl md:text-2xl text-zinc-400 leading-relaxed font-light"
          >
            We already build real websites and business systems today, and we are continuing to deepen our skills in front-end and full-stack development so we can create more customized, scalable, and technically advanced digital experiences in the future.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
