import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

const HeroBanner = ({
  title = "THE NEW STANDARD",
  subtitle = "Precision Engineering",
  description = "Redefining the boundaries of industrial hardware through neural-sync architecture and advanced alloy casting.",
  image = "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  primaryBtn = "Explore Protocol",
  secondaryBtn = "Technical Docs"
}) => {
  const { scrollYProgress } = useScroll();

  // Advanced Parallax: Image moves slower than scroll
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  // Text scales and fades slightly as you scroll down
  const opacityText = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scaleText = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <section className="relative h-[100vh] w-full overflow-hidden bg-[#0A0A0A]">

      {/* --- IMMERSIVE BACKGROUND --- */}
      <motion.div
        style={{ y: yImage }}
        className="absolute inset-0 z-0"
      >
        <img
          src={image}
          alt="Hero"
          className="w-full h-full object-cover opacity-50 transition-all duration-1000"
        />
        {/* Cinematic Vignette: Darkens the edges and bottom for text clarity */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-transparent" />
      </motion.div>

      {/* --- CONTENT LAYER --- */}
      <motion.div
        style={{ opacity: opacityText, scale: scaleText }}
        className="relative z-10 h-full max-w-[1600px] mx-auto px-10 flex flex-col justify-end pb-32"
      >
        <div className="max-w-5xl">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-[1px] bg-orange-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-orange-600">
              {subtitle}
            </span>
          </motion.div>

          {/* Massive Heading - No Box/Card */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[12vw] md:text-[6vw] font-black text-white leading-[0.85] tracking-tighter mb-10"
            >
              {title}
            </motion.h1>
          </div>

          {/* Description & CTAs */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12 border-t border-white/10 pt-10">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="max-w-md text-gray-400 text-lg font-light leading-relaxed"
            >
              {description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-8"
            >
              {/* Minimalist Primary Button */}
              <button className="group flex items-center gap-4 text-white">
                <span className="text-[11px] font-black uppercase tracking-[0.4em] border-b border-orange-600 pb-2">
                  {primaryBtn}
                </span>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-orange-600 group-hover:border-orange-600 transition-all">
                  <ArrowUpRight size={18} />
                </div>
              </button>

              {/* Minimalist Secondary Button */}
              <button className="text-gray-500 hover:text-white transition-colors text-[11px] font-black uppercase tracking-[0.4em] pb-2">
                {secondaryBtn}
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* --- DECORATIVE SIDEBAR --- */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-20 items-center opacity-20">
        <p className="rotate-90 text-[9px] font-bold tracking-[1em] text-white whitespace-nowrap">SCROLL TO DISCOVER</p>
        <div className="w-[1px] h-32 bg-white" />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-orange-600"
        >
          <ArrowDown size={24} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBanner;