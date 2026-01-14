import React from 'react';
import { motion, useSpring, useTransform, animate } from 'framer-motion';
import { Layers, Zap, ShieldCheck, Globe } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// Counter Animation Component
const Counter = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const suffix = value.replace(/[0-9.]/g, '');

  useEffect(() => {
    const controls = animate(0, numericValue, {
      duration: 2,
      onUpdate: (value) => setDisplayValue(value.toFixed(numericValue % 1 === 0 ? 0 : 2)),
    });
    return () => controls.stop();
  }, [numericValue]);

  return <span>{displayValue}{suffix}</span>;
};

const OverlapStatsBar = () => {
  const stats = [
    { icon: <Layers size={22} />, label: "Precision Layers", value: "0.01mm" },
    { icon: <Zap size={22} />, label: "Fast Delivery", value: "24hrs" },
    { icon: <ShieldCheck size={22} />, label: "Quality Check", value: "ISO 9001" },
    { icon: <Globe size={22} />, label: "Global Export", value: "20+ Countries" },
  ];

  return (
    <div className="relative z-40 max-w-7xl mx-auto px-6 h-0"> 
      {/* h-0 ensure karta hai ki cards niche wale section ko push na karein balki upar float karein */}
      
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="relative -top-20 md:-top-24 bg-brand-black border border-white/10 rounded-[3rem] p-10 md:p-14 shadow-[0_50px_100px_-15px_rgba(0,0,0,0.5)] overflow-hidden"
      >
        
        {/* --- Background Animated Beam --- */}
        <motion.div 
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-brand-orange to-transparent opacity-30"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
          {stats.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 + 0.5 }}
              className="flex flex-col items-center lg:items-start space-y-4 group"
            >
              {/* Animated Icon Container */}
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="text-brand-orange bg-white/5 p-4 rounded-2xl border border-white/10 group-hover:border-brand-orange/50 group-hover:bg-brand-orange/10 transition-all duration-500 shadow-lg"
              >
                {item.icon}
              </motion.div>

              <div className="space-y-1 text-center lg:text-left">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 group-hover:text-brand-orange transition-colors">
                  {item.label}
                </p>
                
                <h3 className="text-3xl font-black text-white italic tracking-tighter flex items-center justify-center lg:justify-start gap-1">
                  <Counter value={item.value} />
                </h3>
              </div>

              {/* Decorative Divider for Desktop */}
              {idx !== stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        {/* --- Subtle Inner Glow --- */}
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-orange/5 rounded-full blur-[80px] pointer-events-none" />
      </motion.div>
    </div>
  );
};

export default OverlapStatsBar;