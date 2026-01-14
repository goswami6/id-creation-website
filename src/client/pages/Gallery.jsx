import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import HeroBanner from '../components/Hero';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const [filter, setFilter] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(null);

  const categories = [
    { id: 'all', label: 'All Works' },
    { id: 'id-cards', label: 'ID Cards' },
    { id: 'mementos', label: 'Mementos' },
    { id: 'digital', label: 'Digital' },
    { id: 'printing', label: 'Print Works' },
  ];

  const galleryItems = [
    { id: 1, category: 'id-cards', title: 'Corporate PVC ID', img: '/samples/product1.jpg' },
    { id: 2, category: 'mementos', title: 'Crystal Excellence Award', img: '/samples/product2.jpg' },
    { id: 3, category: 'digital', title: 'Industrial Web Interface', img: '/samples/product3.jpg' },
    { id: 4, category: 'printing', title: 'Bulk Brochure Printing', img: '/samples/product4.jpg' },
    { id: 5, category: 'id-cards', title: 'School Identity Ecosystem', img: '/samples/product5.jpg' },
    { id: 6, category: 'mementos', title: 'Acrylic Corporate Trophy', img: '/samples/product6.jpg' },
    { id: 7, category: 'printing', title: 'Bulk Brochure Printing', img: '/samples/product7.jpg' },
    { id: 8, category: 'id-cards', title: 'School Identity Ecosystem', img: '/samples/product8.jpg' },
    { id: 9, category: 'mementos', title: 'Acrylic Corporate Trophy', img: '/samples/product9.jpg' },
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  // --- LIGHTBOX NAVIGATION LOGIC ---
  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);

  // Keyboard support for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (currentIndex === null) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setCurrentIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  return (
    <div className="bg-white min-h-screen">
      <HeroBanner 
        subtitle="Visual Portfolio"
        title="THE PRECISION GALLERY"
        description="A showcase of our high-velocity production and design mastery."
        image="/samples/product5.jpg"
      />

      {/* --- FILTER NAVIGATION --- */}
      <section className="py-12 border-b border-gray-100 sticky top-0 bg-white/90 backdrop-blur-md z-40">
        <div className="max-w-[1600px] mx-auto px-6 flex flex-wrap justify-center gap-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`text-[10px] font-black uppercase tracking-[0.4em] pb-2 transition-all duration-300 ${
                filter === cat.id ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-300 hover:text-black'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* --- MASONRY GRID --- */}
      <section className="max-w-[1600px] mx-auto px-6 py-20">
        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative group overflow-hidden rounded-3xl cursor-pointer break-inside-avoid shadow-sm hover:shadow-2xl transition-all duration-500"
                onClick={() => setCurrentIndex(index)}
              >
                <div className="relative aspect-auto">
                  {/* Normal Color - Grayscale removed */}
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  
                  {/* Hover Icon Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 text-white">
                      <Maximize2 size={24} />
                    </div>
                  </div>

                  {/* Text Bottom Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-orange-500 text-[9px] font-black uppercase tracking-widest italic mb-1">
                      {item.category.replace('-', ' ')}
                    </p>
                    <h3 className="text-white text-xl font-bold tracking-tight uppercase">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* --- FULL SCREEN LIGHTBOX --- */}
      <AnimatePresence>
        {currentIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
          >
            {/* Background Branding Watermark */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center overflow-hidden">
               <h1 className="text-[20vw] font-black uppercase select-none leading-none">SHIVAM</h1>
            </div>

            {/* Close Button */}
            <button 
              onClick={() => setCurrentIndex(null)}
              className="absolute top-10 right-10 text-black hover:rotate-90 transition-transform duration-500 z-[110]"
            >
              <X size={48} strokeWidth={1} />
            </button>

            {/* Navigation Controls */}
            <button 
              onClick={handlePrev}
              className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 text-black/20 hover:text-orange-600 transition-colors z-[110]"
            >
              <ChevronLeft size={64} strokeWidth={1} />
            </button>
            <button 
              onClick={handleNext}
              className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 text-black/20 hover:text-orange-600 transition-colors z-[110]"
            >
              <ChevronRight size={64} strokeWidth={1} />
            </button>

            {/* Image & Title Portal */}
            <div className="w-full h-full flex flex-col items-center justify-center p-6 md:p-24 relative">
              <motion.div
                key={currentIndex}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center"
              >
                <img 
                  src={filteredItems[currentIndex].img} 
                  alt="Full View" 
                  className="max-h-[75vh] w-auto object-contain shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] rounded-lg"
                />
                
                <div className="mt-12 text-center">
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-orange-600 font-black uppercase tracking-[0.5em] text-[10px] mb-4"
                  >
                    {filteredItems[currentIndex].category}
                  </motion.p>
                  <motion.h2 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-black uppercase tracking-tighter"
                  >
                    {filteredItems[currentIndex].title}
                  </motion.h2>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- FOOTER CTA --- */}
      <section className="py-32 bg-gray-50 text-center border-t border-gray-100">
        <p className="text-gray-400 text-[10px] font-black uppercase tracking-[1em] mb-6">Inspired by our work?</p>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-10 uppercase">
          READY FOR <span className="text-orange-600 italic">PRECISION?</span>
        </h2>
        <Link to="/contact" className="bg-black text-white px-12 py-6 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] hover:bg-orange-600 transition-all duration-500 shadow-xl shadow-black/10">
          Contact Now
        </Link>
      </section>
    </div>
  );
};

export default Gallery;