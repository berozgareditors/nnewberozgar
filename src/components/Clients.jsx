import { motion } from "framer-motion";
import { clients } from "../data/content.js";
import Reveal from "./Reveal.jsx";

export default function Clients() {
  return (
    <section id="clients" className="relative bg-[#020202] py-24 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-[#FF3E20]/5 rounded-full blur-[150px]" />
      </div>

      <div className="container-x relative z-10">
        <Reveal>
          <div className="mb-20 text-center">
            {/* Reduced, Refined Heading */}
            <div className="inline-block relative">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white mb-4">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3E20] to-purple-500">Partners</span>
              </h2>
              {/* Decorative underline */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-gradient-to-r from-transparent via-[#FF3E20] to-transparent" />
            </div>
            
            <p className="text-white/30 uppercase tracking-[0.3em] text-[10px] font-bold mt-10">
              Trusted by industry leaders
            </p>
          </div>
        </Reveal>

        {/* Responsive Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {clients.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ y: -5, opacity: 1 }}
              className="flex items-center justify-center opacity-40 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 cursor-pointer p-4"
            >
              <img
                src={c.logo}
                alt={c.name}
                className="max-h-10 md:max-h-12 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
