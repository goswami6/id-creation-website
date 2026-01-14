import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const AnimatedPrintSolutions = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scrollVelocity = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const rotateSync = useTransform(scrollVelocity, [0, 1], [0, 45]);

  // --- NEW: Shutter Animation Variant ---
  const shutterVariant = {
    hidden: {
      clipPath: 'inset(100% 0% 0% 0%)',
      y: 50,
      opacity: 0
    },
    visible: (i = 0) => ({
      clipPath: 'inset(0% 0% 0% 0%)',
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
        delay: i * 0.1 // Staggering effect
      }
    })
  };

  const products = [
    { id: 1, name: "Premium PVC ID Cards", category: "ID Card Printing", image: "/samples/product2.jpg", tag: "Best Quality", color: "#F97316" },
    { id: 2, name: "Smart School ID Cards", category: "School Solutions", image: "/samples/product3.jpg", tag: "Digital Ready", color: "#0F172A" },
    { id: 3, name: "Custom Gift & Loyalty Cards", category: "Business & Retail", image: "/samples/product1.jpg", tag: "Popular", color: "#F97316" },
    { id: 4, name: "Custom Mementos & Medals", category: "Awards & Recognition", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk6gw3QwLswb7l1Iz8oodKs8s2JlGNjJNDsA&s", tag: "Available", color: "#0F172A" }
  ];

  return (
    <section ref={containerRef} className="py-40 bg-white relative overflow-hidden font-sans min-h-screen">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '100px 100px' }}
      />

      <motion.div style={{ rotate: rotateSync }} className="absolute top-1/4 -left-20 w-96 h-96 bg-gray-50/50 backdrop-blur-3xl border border-gray-100 rounded-[4rem] z-0 shadow-2xl" />
      <motion.div style={{ rotate: -rotateSync }} className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] bg-brand-orange/5 backdrop-blur-2xl border border-brand-orange/10 rounded-full z-0" />

      <div className="max-w-[1400px] mx-auto px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-8">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="flex items-center gap-4 mb-6">
              <span className="h-[1px] w-12 bg-brand-orange" />
              <span className="text-brand-orange text-[11px] font-black uppercase tracking-[0.5em]">Est. Industrial Excellence</span>
            </motion.div>

            {/* --- ADDED: Shutter Reveal to Heading --- */}
            <div className="overflow-hidden">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={shutterVariant}
                className="text-6xl md:text-10xl font-black text-brand-black tracking-tight leading-[0.85]"
              >
                Card Samples <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-black to-gray-400">
                  Crafted to Impress.
                </span>
              </motion.h2>
            </div>
          </div>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-gray-400 max-w-sm text-sm font-medium leading-relaxed italic">
            Merging heavy-industrial precision with boutique creative vision to redefine the physical touchpoints of your brand.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item, index) => (
            <ProductCard
              key={item.id}
              item={item}
              index={index}
              scrollYProgress={scrollYProgress}
              shutterVariant={shutterVariant} // Pass variant to card
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ item, index, scrollYProgress, shutterVariant }) => {
  const yMove = useTransform(scrollYProgress, [0, 1], [0, index % 2 === 0 ? -60 : 60]);

  return (
    <motion.div
      style={{ y: yMove }}
      custom={index} // Used for stagger delay
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={shutterVariant} // --- ADDED: Shutter Reveal to Card ---
      className="relative group cursor-pointer"
    >
      <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4] bg-gray-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] transition-transform duration-700 group-hover:shadow-[0_40px_80px_-20px_rgba(255,102,0,0.15)]">
        <motion.img whileHover={{ scale: 1.08 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} src={item.image} alt={item.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-brand-black/90 opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-6 left-6 flex items-center gap-2">
          <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] font-black px-3 py-1.5 rounded-lg uppercase tracking-widest">{item.tag}</span>
        </div>
        <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <p className="text-brand-orange text-[9px] font-black uppercase tracking-[0.3em] mb-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">{item.category}</p>
          <h4 className="text-xl font-bold text-white leading-tight mb-6">{item.name}</h4>
          <motion.d whileHover={{ x: 5 }} className="flex items-center gap-3 text-white/60 text-[10px] font-black uppercase tracking-widest group-hover:text-white transition-colors">
            <Link to={`/contact`} className="flex items-center gap-3">
              Explore <ArrowRight size={14} className="text-brand-orange" />
            </Link>
          </motion.d>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between px-2">
        <span className="text-gray-200 font-black text-4xl italic group-hover:text-brand-orange/20 transition-colors">0{index + 1}</span>
        <div className="w-8 h-[1px] bg-gray-100 group-hover:w-16 group-hover:bg-brand-orange transition-all duration-500" />
      </div>
    </motion.div>
  );
};

export default AnimatedPrintSolutions;