import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  CreditCard, Globe, PenTool, Layers,
  Printer, Trophy, Megaphone, UserSquare,
  Palette
} from 'lucide-react';
import HeroBanner from '../components/Hero';

const ServicesPage = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: "id-cards",
      title: "PVC ID Card Printing & School IDs",
      category: "ID Card Solutions",
      icon: <CreditCard size={32} />,
      features: [
        "PVC ID Card Printing",
        "School & Office ID Cards",
        "Photo & Data Printing",
        "Lamination & Finishing"
      ],
      description:
        "We print high-quality PVC ID cards for schools, offices and institutions with durable material and clean finishing.",
      image:
        "/samples/product5.jpg"
    },
    {
      id: "digital-marking",
      title: "Digital Marking & Web Development",
      category: "Digital Services",
      icon: <Globe size={32} />,
      features: [
        "Digital Attendance System",
        "School Marking Solutions",
        "Website Development",
        "Basic Admin Panels"
      ],
      description:
        "We provide digital marking solutions for schools along with simple and effective website development services.",
      image:
        "https://diplomadevelopers.com/wp-content/uploads/2023/03/digitalmark.png"
    },
    {
      id: "printing",
      title: "Bulk Printing, Lamination & Finishing",
      category: "Printing Services",
      icon: <Printer size={32} />,
      features: [
        "Bulk Card Printing",
        "Matte & Gloss Lamination",
        "Strong Finishing",
        "Fast Turnaround"
      ],
      description:
        "From small to bulk orders, we handle printing, lamination and finishing with consistent quality and timely delivery.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvZJbIv99hSmEd2S2KbOjJCjx93EArYwqnuw&s"
    },
    {
      id: "mementos",
      title: "Mementos & Medals",
      category: "Awards & Recognition",
      icon: <Trophy size={32} />,
      features: [
        "School Medals & Trophies",
        "Event Awards & Mementos",
        "Custom Sizes & Designs",
        "Bulk Orders Available"
      ],
      description:
        "We create high-quality medals, trophies and mementos for schools, events and institutions with custom designs.",
      image:
        "https://www.ocpindia.com/blog/wp-content/uploads/2017/03/Awards-Trophies-Plaques-and-Mementoes-300x273.png",
      link: "/services/mementos-medals"
    },
    {
      id: "card-designing",
      title: "Card Designing",
      category: "Design Services",
      icon: <Palette size={32} />,
      features: [
        "ID Card Design",
        "Gift & Loyalty Card Design",
        "School & Office Layouts",
        "Print-Ready Files"
      ],
      description:
        "Professional card designing services for ID cards, gift cards and membership cards with clean and attractive layouts.",
      image:
        "/samples/product1.jpg",
      link: "/services/card-designing"
    }


  ];


  const shutterVariants = {
    hidden: { clipPath: 'inset(100% 0% 0% 0%)', y: 30, opacity: 0 },
    visible: {
      clipPath: 'inset(0% 0% 0% 0%)',
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="bg-white text-black min-h-screen">
      {/* 1. HERO - High End Industrial Style */}
      <HeroBanner
        subtitle="Industrial Solutions"
        title="OUR CORE CAPABILITIES"
        description="Shivam Creation merges high-velocity printing technology with custom digital engineering."
        image="/samples/product5.jpg"
      />

      {/* 2. SERVICES DEEP DIVE - Alternating Layout */}
      <section className="py-20 md:py-32 px-6 md:px-12 max-w-[1600px] mx-auto overflow-hidden">
        <div className="space-y-24 md:space-y-40">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className={`flex flex-col lg:flex-row gap-12 md:gap-20 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
            >
              {/* --- Image Container --- */}
              <motion.div
                initial={{ clipPath: 'inset(0% 100% 0% 0%)' }}
                whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                viewport={{ once: true }}
                // Rounded corners reduced for mobile to look cleaner
                className="w-full lg:w-1/2 aspect-video bg-gray-100 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                />
              </motion.div>

              {/* --- Content Container --- */}
              <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={shutterVariants}
                  viewport={{ once: true }}
                >
                  <p className="text-orange-600 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.6em] mb-3 md:mb-4">
                    {service.category}
                  </p>

                  {/* Title: Mobile pe overflow rokne ke liye text size scale kiya hai */}
                  <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-5xl font-black tracking-tighter uppercase mb-6 leading-[0.9] md:leading-none break-words">
                    {service.title.split(' ').map((w, i) => (
                      <span key={i} className="inline-block">
                        {i === 0 ? w + "\u00A0" : <span className="text-orange-500 italic">{w}&nbsp;</span>}
                      </span>
                    ))}
                  </h2>

                  <p className="text-gray-500 text-base md:text-lg font-light leading-relaxed mb-8 md:mb-10 max-w-xl">
                    {service.description}
                  </p>

                  {/* Technical Feature Tags: Mobile pe single column kiya hai space bachane ke liye */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-0">
                    {service.features.map(f => (
                      <div key={f} className="flex items-center gap-3 py-3 md:py-4 border-b border-gray-100">
                        <div className="w-1.5 h-1.5 bg-orange-600 rounded-full shrink-0" />
                        <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-gray-400 truncate">
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Button: Mobile pe width thodi adjust ki hai */}
                  <button
                    onClick={() => navigate('/contact')}
                    className="mt-10 md:mt-12 group flex items-center justify-between md:justify-start gap-6 bg-black text-white px-8 md:px-10 py-4 md:py-5 rounded-full hover:bg-orange-600 transition-all duration-500 w-full md:w-auto"
                  >
                    <span className="text-[10px] font-black uppercase tracking-widest">Inquire Protocol</span>
                    <ArrowUpRight size={18} className="shrink-0" />
                  </button>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. QUALITY ASSURANCE - Full Width Industrial Banner */}
      <section className="bg-[#0A0A0A] text-white py-40">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
          <motion.h3
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-6xl font-black tracking-tighter uppercase"
          >
            Zero-Defect <span className="text-orange-600 italic">Manufacturing</span>
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-white/10">
            {[
              { val: "24h", label: "Production Turnaround" },
              { val: "100%", label: "Material Sustainability" },
              { val: "ISO", label: "Quality Standards" }
            ].map(stat => (
              <div key={stat.label}>
                <div className="text-5xl font-black mb-2">{stat.val}</div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ArrowUpRight = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M17 7H7M17 7V17" />
  </svg>
);

export default ServicesPage;