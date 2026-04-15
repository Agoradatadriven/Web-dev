import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import AnimatedUpworkButton from './AnimatedUpworkButton';

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -10]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center relative"
    >
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [50, -50]) }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 }
          }
        }}
        className={`lg:col-span-5 order-2 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
            }
          }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-xs font-semibold tracking-wide text-zinc-600 uppercase bg-zinc-100 rounded-full border border-zinc-200/60">
            {project.type}
          </div>
          <h3 className="text-3xl lg:text-4xl font-display font-bold mb-6 text-zinc-950">
            {project.title}
          </h3>
          <p className="text-lg text-zinc-600 mb-8 leading-relaxed font-light">
            {project.description}
          </p>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="mb-8"
        >
          <h4 className="text-sm font-semibold text-zinc-950 uppercase tracking-widest mb-4">
            Our Contribution
          </h4>
          <ul className="grid grid-cols-1 gap-3">
            {project.contributions.map((item: string, i: number) => (
              <motion.li
                key={i}
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
                  }
                }}
                className="flex items-start gap-3 text-zinc-600 text-sm font-light"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-1.5 shrink-0"></div>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="mb-10"
        >
          <h4 className="text-sm font-semibold text-zinc-950 uppercase tracking-widest mb-4">
            Built With
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool: string) => (
              <motion.span
                key={tool}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
                  }
                }}
                className="px-3 py-1.5 bg-white border border-zinc-200 rounded-md text-xs font-medium text-zinc-600 shadow-sm"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <div className="flex flex-wrap gap-4">
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#52992C] text-white text-sm font-medium rounded-full hover:bg-[#417a23] transition-all shadow-md hover:shadow-lg"
          >
            View Live Site <ExternalLink size={16} />
          </motion.a>
          <AnimatedUpworkButton />
        </div>
      </motion.div>

      <motion.div
        style={{ y, scale, rotateX, perspective: 1000 }}
        className={`lg:col-span-7 order-1 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_20px_50px_rgba(82,153,44,0.15)] hover:-translate-y-2 transition-all duration-700 border border-zinc-100 bg-zinc-50 flex items-center justify-center group">
          <video
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Projects() {
  const projects = [
    {
      title: 'Rooming House Expert',
      type: 'Real Estate Business Website',
      description:
        'A professional platform created for a property-focused business to present services, projects, and business information in a trustworthy way.',
      contributions: [
        'Website structure and page setup',
        'Layout and content organization',
        'Business-focused presentation',
        'Chatbot setup for the website',
        'Newsletter signup form to ActiveCampaign',
        'Live website delivery'
      ],
      tools: ['GitHub', 'Antigravity', 'VS Code', 'Wordpress', 'ActiveCampaign'],
      video: `${import.meta.env.BASE_URL}RHEV.mp4`,
      link: 'https://roominghouse.expert'
    },
    {
      title: 'HydRate MedBar',
      type: 'Spa & Wellness Salon Website',
      description:
        'A wellness and med spa website designed to showcase services, build trust, and drive conversions for a service-based business.',
      contributions: [
        'Website layout',
        'Service presentation',
        'Visual structure',
        'Conversion-focused business website setup',
        'Launch support'
      ],
      tools: ['Antigravity', 'GitHub', 'Wordpress', 'VS Code'],
      video: `${import.meta.env.BASE_URL}HRMV.mp4`,
      link: 'https://hydratemedbar.com'
    },
    {
      title: 'Sabbath Spa',
      type: 'Spa Website with Booking',
      description:
        'A comprehensive spa website featuring an integrated online booking system to help users browse services and schedule appointments seamlessly.',
      contributions: [
        'Website structure',
        'Service page presentation',
        'Booking system setup',
        'User flow from service browsing to booking'
      ],
      tools: ['Antigravity', 'GitHub', 'VS Code', 'Booking System Integration', 'Wordpress'],
      video: `${import.meta.env.BASE_URL}SSW.mp4`,
      link: 'https://sabbathspa.com'
    }
  ];

  return (
    <section id="work" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
            }
          }}
          className="mb-20 max-w-3xl"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-zinc-950 tracking-tight">
            Featured Work
          </h2>
          <p className="text-lg text-zinc-600 font-light leading-relaxed">
            Real business websites built to drive outcomes, combining clean structure with practical
            integrations. Developed using Antigravity and refined with VS Code.
          </p>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
