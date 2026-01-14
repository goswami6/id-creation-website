import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ShieldCheck, 
  Settings, 
  Cpu, 
  ChevronRight, 
  Maximize2, 
  ShoppingBag,
  CheckCircle2,
  FileText
} from 'lucide-react';

const ProductPage = () => {
  const [selectedImg, setSelectedImg] = useState(0);

  const product = {
    id: "PRD-2026-X1",
    name: "CORE-X1 INDUSTRIAL",
    sub: "Precision Thermal Printer",
    price: "$2,499.00",
    description: "The gold standard for high-volume PVC card production. Engineered with a zero-tolerance thermal head and adaptive logic for consistent output in demanding environments.",
    images: [
      "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80"
    ],
    specs: [
      { label: "Resolution", value: "600 DPI Ultra-HD" },
      { label: "Throughput", value: "250 Cards/Hour" },
      { label: "Interface", value: "Ethernet / USB 3.0" },
      { label: "Reliability", value: "100k MTBF Hours" }
    ],
    features: [
      { title: "Thermal Logic", desc: "Real-time heat management prevents card warping.", icon: <Settings size={20}/> },
      { title: "Shield Protocol", desc: "End-to-end data encryption for secure ID issuance.", icon: <ShieldCheck size={20}/> },
      { title: "Neural Sync", desc: "Self-correcting alignment for 0.01mm precision.", icon: <Cpu size={20}/> }
    ]
  };

  return (
    <div className="bg-white text-black font-sans selection:bg-orange-600 selection:text-white">
      
      {/* --- BREADCRUMB --- */}
      <nav className="pt-32 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
          <span>Equipment</span>
          <ChevronRight size={10} />
          <span>Card Printers</span>
          <ChevronRight size={10} />
          <span className="text-orange-600">{product.name}</span>
        </div>
      </nav>

      <main className="py-12 px-6 md:px-12 max-w-[1600px] mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          
          {/* --- LEFT: IMAGE GALLERY --- */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative aspect-square md:aspect-[4/3] bg-gray-50 rounded-[2rem] overflow-hidden group"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedImg}
                  src={product.images[selectedImg]}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </AnimatePresence>
              <div className="absolute top-8 right-8">
                <div className="w-12 h-12 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:bg-orange-600 hover:text-white transition-all">
                  <Maximize2 size={20} />
                </div>
              </div>
            </motion.div>

            <div className="flex gap-4">
              {product.images.map((img, i) => (
                <button 
                  key={i}
                  onClick={() => setSelectedImg(i)}
                  className={`w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all ${selectedImg === i ? 'border-orange-600' : 'border-transparent opacity-50'}`}
                >
                  <img src={img} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* --- RIGHT: PRODUCT INFO --- */}
          <div className="lg:col-span-5 space-y-12">
            <section className="space-y-6">
              <div className="space-y-2">
                <p className="text-orange-600 text-[10px] font-black uppercase tracking-[0.5em]">{product.id}</p>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
                  {product.name.split(' ')[0]} <br />
                  <span className="text-gray-300 italic">{product.name.split(' ')[1]}</span>
                </h1>
                <p className="text-xl font-light text-gray-500">{product.sub}</p>
              </div>

              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-black tracking-tight">{product.price}</span>
                <span className="text-[10px] font-bold text-green-600 uppercase tracking-widest flex items-center gap-1">
                  <CheckCircle2 size={12} /> In Stock
                </span>
              </div>

              <p className="text-gray-600 leading-relaxed font-light text-lg max-w-md">
                {product.description}
              </p>
            </section>

            {/* --- SPECS GRID --- */}
            <section className="grid grid-cols-2 gap-px bg-gray-100 border border-gray-100">
              {product.specs.map((spec, i) => (
                <div key={i} className="bg-white p-6 space-y-1">
                  <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{spec.label}</p>
                  <p className="text-sm font-bold tracking-tight">{spec.value}</p>
                </div>
              ))}
            </section>

            {/* --- ACTIONS --- */}
            <section className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-black text-white px-10 py-6 rounded-full font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-4 hover:bg-orange-600 transition-all duration-500 shadow-2xl">
                <ShoppingBag size={18} />
                Deploy Hardware
              </button>
              <button className="flex items-center justify-center w-full sm:w-20 h-20 border border-gray-200 rounded-full hover:border-orange-600 hover:text-orange-600 transition-all group">
                <FileText size={24} className="group-hover:scale-110 transition-transform"/>
              </button>
            </section>

            {/* --- TECHNICAL FEATURES --- */}
            <section className="pt-12 border-t border-gray-100 space-y-8">
              {product.features.map((feat, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-gray-50 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all">
                    {feat.icon}
                  </div>
                  <div className="space-y-1">
                    <h5 className="font-black text-xs uppercase tracking-widest">{feat.title}</h5>
                    <p className="text-sm text-gray-500 font-light">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>

        {/* --- BOTTOM SECTION: TECHNICAL MARQUEE --- */}
        <div className="mt-32 py-12 border-y border-gray-100 overflow-hidden relative">
           <div className="flex whitespace-nowrap gap-20 items-center animate-marquee">
              {[1,2,3,4].map((n) => (
                <div key={n} className="flex gap-20 items-center">
                  <span className="text-[10vw] font-black text-gray-50 opacity-10 uppercase tracking-tighter">Industrial Grade</span>
                  <span className="text-[10vw] font-black text-gray-50 opacity-10 uppercase tracking-tighter">Thermal Precision</span>
                </div>
              ))}
           </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: 200%;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ProductPage;