import { motion } from 'motion/react';
import { LayoutTemplate, Settings, Workflow, Smartphone } from 'lucide-react';

export default function Services() {
  const capabilities = [
    {
      icon: <LayoutTemplate size={24} />,
      title: "Business Websites & Landing Pages",
      description: "Clean, responsive, and conversion-focused websites built to represent your business professionally."
    },
    {
      icon: <Settings size={24} />,
      title: "WordPress & WooCommerce",
      description: "Setup, customization, and deployment of robust content management and e-commerce systems."
    },
    {
      icon: <Workflow size={24} />,
      title: "Automations & Integrations",
      description: "Connecting your website to ActiveCampaign, setting up chatbots, and streamlining business workflows."
    },
    {
      icon: <Smartphone size={24} />,
      title: "Booking Systems & UI",
      description: "Implementing seamless booking flows and responsive front-end interfaces for service-based businesses."
    }
  ];

  return (
    <section id="services" className="py-32 bg-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
          }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-zinc-950 tracking-tight">What We Can Build</h2>
          <p className="text-lg text-zinc-600 font-light leading-relaxed">
            Practical, business-ready solutions that combine solid web development with powerful integrations.
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid md:grid-cols-2 gap-8"
        >
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 40, rotateX: 10 },
                visible: { opacity: 1, scale: 1, y: 0, rotateX: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
              className="p-8 md:p-10 rounded-3xl bg-[#FAFAFA] border border-zinc-200/60 hover:border-zinc-300 hover:shadow-2xl hover:shadow-zinc-900/10 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-zinc-100 flex items-center justify-center text-zinc-900 mb-8 group-hover:scale-110 transition-transform duration-300">
                {cap.icon}
              </div>
              <h3 className="text-xl font-display font-semibold mb-4 text-zinc-950">{cap.title}</h3>
              <p className="text-zinc-600 leading-relaxed font-light">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
