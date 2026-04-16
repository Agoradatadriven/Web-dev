import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  const y = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  return (
    <section id="about" ref={ref} className="py-32 bg-[#FDFDFE] overflow-hidden relative">
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [100, -100]) }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-zinc-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -z-10 translate-x-1/3 -translate-y-1/3"
      />

      <motion.div
        style={{ opacity, scale }}
        className="max-w-7xl mx-auto px-6 md:px-12"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
                visible: {
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                }
              }}
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-8 text-zinc-950 tracking-tight"
            >
              Bridging the gap between business needs and technical execution.
            </motion.h2>
            <div className="space-y-6 text-zinc-600 text-lg leading-relaxed font-light">
              <motion.p
                variants={{
                  hidden: { opacity: 0, x: -20, filter: 'blur(5px)' },
                  visible: {
                    opacity: 1,
                    x: 0,
                    filter: 'blur(0px)',
                    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                  }
                }}
              >
                We don&apos;t just watch tutorials. We build real-world solutions. We have practical experience delivering business websites, e-commerce platforms, booking systems, and automated workflows using tools like WordPress, Elementor, and ActiveCampaign.
              </motion.p>
              <motion.p
                variants={{
                  hidden: { opacity: 0, x: -20, filter: 'blur(5px)' },
                  visible: {
                    opacity: 1,
                    x: 0,
                    filter: 'blur(0px)',
                    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                  }
                }}
              >
                Having mastered front-end fundamentals, we are actively expanding our expertise into full-stack web development. We are driven by the challenge of building custom, complex applications from the ground up.
              </motion.p>
              <motion.p
                variants={{
                  hidden: { opacity: 0, x: -20, filter: 'blur(5px)' },
                  visible: {
                    opacity: 1,
                    x: 0,
                    filter: 'blur(0px)',
                    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                  }
                }}
              >
                Our approach combines technical structure with business utility. We aim to build digital experiences that not only look exceptional but function flawlessly and drive measurable results.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={{
              hidden: { opacity: 0, scale: 0.95, x: 30 },
              visible: {
                opacity: 1,
                scale: 1,
                x: 0,
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
              }
            }}
            className="relative lg:ml-auto w-full max-w-md"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#FDFDFE] relative">
              <motion.video
                style={{ y, scale: 1.1 }}
                src={`${import.meta.env.BASE_URL}CODINGS.mp4`}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover origin-center invert hue-rotate-180 contrast-125 mix-blend-darken"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FDFDFE]/40 to-transparent pointer-events-none"></div>
            </div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-zinc-100 rounded-full -z-10 border border-zinc-200"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
