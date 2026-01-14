import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Clock, Eye, User, Plus } from 'lucide-react';

const SovereignBlog = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const articles = [
    {
      id: "BLOG-01",
      title: "HOW PVC ID CARDS BENEFIT SCHOOLS & OFFICES",
      cat: "ID Card Printing",
      date: "JAN 12, 2026",
      readTime: "4 MIN READ",
      summary: "Learn why PVC ID cards are durable, cost-effective and ideal for schools, offices and institutions.",
      image: "/samples/product9.jpg"
    },
    {
      id: "BLOG-02",
      title: "CHOOSING THE RIGHT CARD PRINTING MACHINE",
      cat: "Machines & Supplies",
      date: "JAN 08, 2026",
      readTime: "5 MIN READ",
      summary: "A simple guide to selecting the best ID card printing machine for your school or business needs.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdb7jqfNtxDQ0DARxe_n5Uboz5_0MKgPJFlQ&s"
    },
    {
      id: "BLOG-03",
      title: "IMPORTANCE OF AWARDS & MEMENTOS IN SCHOOLS",
      cat: "Awards & Recognition",
      date: "JAN 02, 2026",
      readTime: "3 MIN READ",
      summary: "Discover how medals, trophies and mementos motivate students and create lasting memories.",
      image: "/samples/product5.jpg"
    }
  ];

  return (
    <section className="py-20 md:py-40 bg-[#1A1A1A] text-white font-sans overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">

        {/* --- DYNAMIC HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-32 border-b border-white/10 pb-10 md:pb-20">
          <div className="overflow-hidden mb-6 md:mb-0">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[14vw] md:text-[8vw] font-black leading-none tracking-tighter"
            >
              PRINT <span className="text-brand-orange italic underline decoration-1 underline-offset-8">INSIGHTS.</span>
            </motion.h2>
          </div>
          <div className="max-w-xs md:text-right space-y-4">
            <p className="text-[9px] md:text-[10px] font-bold text-gray-500 uppercase tracking-[0.4em]">
              Knowledge Hub
            </p>
            <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed italic">
              "Practical tips, printing insights, and card solutions for schools and businesses."
            </p>
          </div>
        </div>

        {/* --- DYNAMIC BENTO BLOG GRID --- */}
        {/* Changed grid-cols-1 for mobile, border logic adjusted for mobile stacking */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t md:border border-white/10">
          {articles.map((post, idx) => (
            <motion.div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              // Adjusted min-height and border-bottom for mobile stacking
              className="relative min-h-[550px] md:min-h-[700px] flex flex-col p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 last:border-0 group cursor-crosshair"
            >
              {/* Volume Label Background */}
              <div className="absolute top-6 right-6 md:top-10 md:right-10 text-[3.5rem] md:text-[5rem] font-black text-white/[0.02] leading-none select-none">
                {post.id}
              </div>

              {/* Blog Meta */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6 md:mb-8">
                  <div className="w-2 h-2 bg-brand-orange rotate-45" />
                  <span className="text-[9px] md:text-[10px] font-black tracking-widest text-brand-orange uppercase">{post.cat}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-light tracking-tighter mb-4 group-hover:italic transition-all leading-[1.1]">
                  {post.title.split(' ').slice(0, -1).join(' ')} <br />
                  <span className="font-black text-brand-orange">{post.title.split(' ').pop()}</span>
                </h3>
              </div>

              {/* Image Shutter Reveal */}
              <div className="flex-grow relative flex items-center justify-center my-6 md:my-10 group-hover:my-4 md:group-hover:my-6 transition-all duration-700">
                <motion.div
                  animate={{
                    clipPath: hoveredIndex === idx ? 'inset(0% 0% 0% 0%)' : 'inset(10% 10% 10% 10%)',
                  }}
                  className="w-full h-full min-h-[220px] md:min-h-[300px] bg-white/5 rounded-2xl relative overflow-hidden transition-all duration-700 shadow-2xl"
                >
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000" />

                  {/* Summary Overlay */}
                  <AnimatePresence>
                    {hoveredIndex === idx && (
                      <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        className="absolute inset-0 bg-brand-black/60 flex flex-col justify-end p-6 md:p-10"
                      >
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          className="space-y-4"
                        >
                          <p className="text-xs md:text-sm font-light leading-relaxed text-gray-200">
                            {post.summary}
                          </p>
                          <div className="flex items-center gap-4 text-brand-orange">
                            <Plus size={14} />
                            <span className="text-[10px] font-black uppercase tracking-widest">Full Access Protocol</span>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>

              {/* Footer: Date & Read Time */}
              <div className="relative z-10 pt-6 md:pt-10 mt-auto">
                <div className="flex items-end justify-between">
                  <div className="space-y-2">
                    <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest block">Publication Date</span>
                    <div className="flex items-center gap-4 text-[10px] md:text-xs font-bold tracking-tighter text-gray-300">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 bg-white/20 rounded-full" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: "#ff6600", borderColor: "#ff6600" }}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-xl border border-white/20 flex items-center justify-center transition-all duration-500"
                  >
                    <ArrowUpRight size={20} />
                  </motion.button>
                </div>
              </div>

              {/* Sub-surface Glow */}
              <div className={`absolute inset-0 bg-gradient-to-t from-brand-orange/5 to-transparent transition-opacity duration-700 ${hoveredIndex === idx ? 'opacity-100' : 'opacity-0'}`} />
            </motion.div>
          ))}
        </div>

        {/* --- BLOG STATS / TRUST BAR --- */}
        {/* Adjusted gaps for mobile view */}
        <div className="mt-12 md:mt-20 flex flex-col md:flex-row flex-wrap gap-8 md:gap-20 opacity-40 hover:opacity-100 transition-all duration-700">
          <div className="flex items-center gap-4">
            <User size={18} className="text-brand-orange" />
            <div className="text-[9px] md:text-[10px] font-black tracking-[0.2em]">250+ TECHNICAL ARTICLES</div>
          </div>
          <div className="flex items-center gap-4">
            <Eye size={18} className="text-brand-orange" />
            <div className="text-[9px] md:text-[10px] font-black tracking-[0.2em]">1.2M INDUSTRY READERS</div>
          </div>
          <div className="flex items-center gap-4">
            <Clock size={18} className="text-brand-orange" />
            <div className="text-[9px] md:text-[10px] font-black tracking-[0.2em]">WEEKLY TECH UPDATES</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SovereignBlog;