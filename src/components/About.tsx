import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import codingVideo from '../assets/CODINGS.mp4';

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  return (
    <section id="about" ref={ref} className="py-32 bg-[#FDFDFE] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-zinc-950">
              Bridging the gap between business needs and technical execution.
            </h2>
            <p className="text-zinc-600 text-lg font-light">
              We build real-world solutions including business websites and automated workflows.
            </p>
          </div>
          
          <div className="relative lg:ml-auto w-full max-w-md">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-100 relative shadow-xl">
              <motion.video 
                style={{ y, scale: 1.1 }}
                src={codingVideo} 
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover" // 👈 Clean CSS: No more mix-blend-darken
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
