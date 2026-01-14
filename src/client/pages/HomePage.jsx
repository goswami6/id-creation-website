import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { ArrowRight, Star, ShieldCheck, Phone, IdCard, CreditCard, Monitor } from 'lucide-react';
import { Globe, Zap, BarChart3, Fingerprint } from 'lucide-react';
import { Settings, MousePointer2, Box, Droplets, Scissors, Download, } from 'lucide-react';
import { ArrowUpRight, Cpu, HardDrive } from 'lucide-react';
import { Award, Headphones, ChevronRight, CheckCircle2, Mail, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

import { Plus, Filter } from 'lucide-react';

// Swiper styles import karein
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import AnimatedPrintSolutions from '../components/AnimatedPrintSolutions';
import OverlapStatsBar from '../components/OverlapStatsBar';
import SovereignHardware from '../components/SovereignHardware';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Industrial', 'Digital Print', 'Custom Tools', 'Precision'];

  const galleryItems = [
    {
      id: 1,
      title: "Custom Steel Components",
      category: "Industrial",
      size: "md:col-span-2 md:row-span-2", // Bada card
      image: "/samples/product5.jpg"
    },
    {
      id: 2,
      title: "Branded PVC Cards",
      category: "Digital Print",
      size: "md:col-span-1 md:row-span-1",
      image: "/samples/product2.jpg"
    },
    {
      id: 3,
      title: "Precision Gear Set",
      category: "Precision",
      size: "md:col-span-1 md:row-span-2",
      image: "/samples/product3.jpg"
    },
    {
      id: 4,
      title: "Corporate Identity Kit",
      category: "Digital Print",
      size: "md:col-span-1 md:row-span-1",
      image: "/samples/product4.jpg"
    },
    {
      id: 5,
      title: "Heavy Duty Hardware",
      category: "Industrial",
      size: "md:col-span-2 md:row-span-1",
      image: "/samples/product1.jpg"
    },
    {
      id: 6,
      title: "Heavy Duty Hardware",
      category: "Industrial",
      size: "md:col-span-2 md:row-span-1",
      image: "/samples/product6.jpg"
    }
  ];

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);
  const slides = [
    {
      title: "",
      subtitle: "",
      description: "",
      image: "/banner1.png", // Replace with your card sample photo

    },
    {
      title: "",
      subtitle: "",
      description: "",
      image: "/banner2.png", // Replace with your machine photo

    },
    {
      title: "",
      subtitle: "",
      description: "",
      image: "/banner3.png", // Replace with your machine photo

    },
    {
      title: "",
      subtitle: "",
      description: "",
      image: "/banner4.png", // Replace with your machine photo

    }
  ];

  const services = [
    {
      title: "ID Card Printing",
      desc: "High-quality PVC ID cards for schools, offices, events and institutions with long-lasting finish.",
      icon: <IdCard className="text-brand-orange" size={32} />,
      link: "/services/id-card-printing"
    },
    {
      title: "Custom Cards & Branding",
      desc: "Gift cards, loyalty cards and membership cards designed to match your brand identity.",
      icon: <CreditCard className="text-brand-orange" size={32} />,
      link: "/services/custom-cards"
    },
    {
      title: "Digital Attendance & Marking",
      desc: "Smart digital marking solutions for schools and institutes to save time and reduce paperwork.",
      icon: <Monitor className="text-brand-orange" size={32} />,
      link: "/services/digital-marking"
    }
  ];

  // Shutter Animation Variant
  const shutterVariant = {
    hidden: { clipPath: 'inset(100% 0% 0% 0%)', y: 30, opacity: 0 },
    visible: {
      clipPath: 'inset(0% 0% 0% 0%)',
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Premium Print Quality",
      desc: "High-quality PVC cards, sharp printing and durable finishing for long-lasting use.",
      color: "bg-orange-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Turnaround Time",
      desc: "Quick production and timely delivery for bulk and urgent orders.",
      color: "bg-brand-black"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Trusted by Schools & Businesses",
      desc: "Reliable printing and card solutions trusted by schools, institutes and local businesses.",
      color: "bg-orange-600"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Complete Card Solutions",
      desc: "From design and printing to machines, medals and digital services under one roof.",
      color: "bg-brand-black"
    }
  ];


  const hardwareProducts = [
    {
      name: "Dual-Sided ID Card Printer",
      category: "Machines",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdb7jqfNtxDQ0DARxe_n5Uboz5_0MKgPJFlQ&s",
      specs: ["High Speed", "Thermal Print"],
      icon: <Box size={18} />
    },
    {
      name: "Heavy Duty Card Cutter",
      category: "Tools",
      image: "https://m.media-amazon.com/images/I/81ZcHB969eL.jpg",
      specs: ["Stainless Steel", "Precise Edge"],
      icon: <Scissors size={18} />
    },
    {
      name: "Premium Dye Inks & Ribbons",
      category: "Consumables",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCwdOniX64nbu1aJCCjXx3ZoCZAHK_7aJ9ZA&s",
      specs: ["Vibrant Colors", "Waterproof"],
      icon: <Droplets size={18} />
    }
  ];

  return (
    <>
      <div className="relative h-auto sm:h-[100vh] md:h-[100vh] bg-brand-black overflow-hidden pt-20">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          speed={1000}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="h-full w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                {/* Using an <img> tag instead of background-image for better control.
                  - object-contain on mobile: shows full image without cutting.
                  - md:object-cover on desktop: fills the screen luxuriously.
              */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-contain md:object-cover"
                />


              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* --- CUSTOM CSS FOR PAGINATION --- */}
        <style>{`
        .swiper-pagination { bottom: 20px !important; }
        .swiper-pagination-bullet { 
          background: white !important; 
          opacity: 0.5; 
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active { 
          background: #FF6600 !important; 
          opacity: 1; 
          width: 30px !important; 
          border-radius: 5px; 
        }
        
        /* Ensure the Swiper container is always visible */
        .swiper { width: 100%; height: 100%; }
      `}</style>
      </div>

      {/* // cards samples */}
      <AnimatedPrintSolutions />

      {/* service */}
      <section className="py-24 bg-brand-black relative overflow-hidden">
        {/* Decorative Background Pattern */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-orange/5 skew-x-12 transform origin-right"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-brand-orange font-black uppercase tracking-[0.3em] text-xs mb-4">
                Our Expertise
              </h2>
              <h3 className="text-4xl md:text-6xl font-heading font-black text-white leading-tight">
                Beyond Printing. <br /> We Build <span className="text-brand-orange">Brands.</span>
              </h3>
            </div>

            {/* Main Button to Service Page */}
            <button className="group relative px-8 py-4 bg-transparent border-2 border-brand-orange text-brand-orange font-black uppercase tracking-widest text-xs rounded-full overflow-hidden transition-all duration-500 hover:text-white">
              <Link to="/services" className="relative z-10 flex items-center gap-3">
                Explore All Services <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <div className="absolute inset-0 bg-brand-orange translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </button>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-brand-orange/50 transition-all duration-500 hover:bg-white/[0.07] backdrop-blur-sm">

                {/* Icon Container */}
                <div className="w-16 h-16 bg-brand-black border border-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-brand-orange/20 transition-all duration-500">
                  {service.icon}
                </div>

                <h4 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-brand-orange transition-colors">
                  {service.title}
                </h4>

                <p className="text-gray-400 font-body leading-relaxed mb-8">
                  {service.desc}
                </p>

                {/* Individual Service Link */}
                <a href="/services" className="inline-flex items-center gap-2 text-white font-bold text-sm group/link">
                  Learn More
                  <div className="w-6 h-[1px] bg-brand-orange group-hover/link:w-10 transition-all duration-500"></div>
                </a>
              </div>
            ))}
          </div>

          {/* Bottom Banner - Trust Element */}
          <div className="mt-20 p-8 rounded-[2rem] bg-gradient-to-r from-brand-orange to-[#FF8533] flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_20px_50px_rgba(255,102,0,0.3)]">
            <div className="flex items-center gap-6">
              <div className="bg-white/20 p-4 rounded-xl backdrop-blur-md">
                <BarChart3 className="text-white" size={32} />
              </div>
              <div>
                <h5 className="text-white font-black text-xl">Ready to scale your business?</h5>
                <p className="text-white/80 text-sm font-medium">Get a custom digital strategy for your brand today.</p>
              </div>
            </div>
            <Link to="/contact" className="bg-brand-black text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white hover:text-brand-black transition-all shadow-2xl active:scale-95">
              Get Started
            </Link>
          </div>

        </div>
      </section>
      {/* preduct preview */}
      <section className="py-32 bg-[#FFFFFF] relative overflow-hidden">
        {/* Background Subtle Gradients - Clean Look */}
        <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* Header Section */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
                </span>
                <span className="text-gray-500 font-black uppercase tracking-[0.3em] text-[10px]">
                  Next-Gen Hardware
                </span>
              </div>
              <h3 className="text-5xl md:text-7xl font-heading font-black text-brand-black leading-[1.1]">
                Engineering the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-[#ff802b]">Future of Precision.</span>
              </h3>
            </div>

            <div className="hidden lg:block relative">
              <Settings className="text-gray-100 w-48 h-48 animate-spin-slow" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Cpu className="text-brand-orange/20 w-16 h-16" />
              </div>
            </div>
          </div>

          {/* The Modern White Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hardwareProducts.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Main Card: Ultra-thin border & Soft elevation */}
                <div className="relative h-[620px] bg-white rounded-[2.5rem] border border-brand-orange/10 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] flex flex-col p-2">

                  {/* 1. Image Canvas - Clean & Balanced */}
                  <div className="relative h-[340px] rounded-[2rem] bg-[#F9F9F9] overflow-hidden flex items-center justify-center transition-colors duration-500 group-hover:bg-white">
                    <motion.img
                      src={item.image}
                      alt={item.name}
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.5 }}
                      className="w-[75%] h-[75%] object-contain mix-blend-multiply z-10"
                    />

                    {/* Subtle Top Indicator */}
                    <div className="absolute top-6 left-6 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                      <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Industrial Std.</span>
                    </div>
                  </div>

                  {/* 2. Content Block - Professional Typography */}
                  <div className="flex-grow px-8 py-6 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-4 h-[1px] bg-brand-orange"></span>
                      <p className="text-brand-orange font-bold text-[9px] uppercase tracking-[0.2em]">
                        {item.category}
                      </p>
                    </div>

                    <h4 className="text-2xl font-bold text-brand-black leading-tight tracking-tight mb-4 transition-colors group-hover:text-brand-orange">
                      {item.name}
                    </h4>

                    {/* Specs: Minimalist Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {item.specs.map((spec, i) => (
                        <span key={i} className="text-[9px] font-semibold text-gray-500 bg-gray-50 px-3 py-1 rounded-md border border-gray-100 transition-colors group-hover:border-brand-orange/20">
                          {spec}
                        </span>
                      ))}
                    </div>

                    {/* 3. Footer: Sharp & Direct */}
                    <div className="mt-auto pt-6 flex items-center justify-between border-t border-gray-50">
                      <div className="space-y-0.5">
                        <p className="text-[8px] text-gray-400 font-bold uppercase tracking-wider">Starting From</p>
                        <div className="flex items-baseline gap-1">
                          <span className="text-brand-orange font-bold text-xs">₹</span>
                          <span className="text-2xl font-extrabold text-brand-black tracking-tighter">12,999</span>
                        </div>
                      </div>

                      <motion.button
                        whileTap={{ scale: 0.97 }}
                        className="flex items-center gap-2 bg-brand-black text-white px-6 py-3.5 rounded-xl font-bold uppercase tracking-widest text-[9px] transition-all hover:bg-brand-orange hover:shadow-lg hover:shadow-brand-orange/20"
                      >
                        Details
                        <ChevronRight size={14} className="opacity-70" />
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Background Number: Very subtle, refined position */}
                <span className="absolute -top-6 -left-4 text-[8rem] font-black text-gray-100/30 select-none pointer-events-none -z-10 transition-colors duration-500 group-hover:text-brand-orange/[0.04]">
                  0{index + 1}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <style>{`
        .animate-spin-slow {
          animation: spin 25s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      </section>
      {/* why choose us */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden font-sans border-t border-gray-50">

        {/* --- REFINED ARCHITECTURAL BACKGROUND --- */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{ backgroundImage: `linear-gradient(#000 1.5px, transparent 1.5px), linear-gradient(90deg, #000 1.5px, transparent 1.5px)`, backgroundSize: '80px 80px' }}>
        </div>

        <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

            {/* --- LEFT SIDE: CONTENT --- */}
            <div className="lg:col-span-5 space-y-6 md:space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gray-50 border border-gray-100"
              >
                <Zap size={14} className="text-brand-orange animate-pulse" />
                <span className="text-brand-black font-black uppercase tracking-[0.3em] text-[9px]">
                  Industrial Benchmark
                </span>
              </motion.div>

              <div className="overflow-hidden">
                <motion.h2
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={shutterVariant}
                  className="text-4xl md:text-6xl font-black text-brand-black leading-[1.1] md:leading-[0.9] tracking-tighter"
                >
                  WHY LEADERS <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-[#ff8c40] italic">
                    TRUST OUR TOOLS.
                  </span>
                </motion.h2>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-gray-500 text-base md:text-lg leading-relaxed max-w-md"
              >
                We don’t just sell products; we create complete printing and card solutions that support your school, business, and brand identity.
              </motion.p>

              <div className="space-y-4 pt-4">
                {['High Quality Printing & Finishing', 'Fast & Reliable Service Support', 'Trusted by Schools & Businesses'].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="shrink-0 w-6 h-6 rounded-lg bg-brand-orange/5 border border-brand-orange/10 flex items-center justify-center group-hover:bg-brand-orange transition-colors">
                      <CheckCircle2 size={12} className="text-brand-orange group-hover:text-white" />
                    </div>
                    <span className="font-bold text-brand-black text-[11px] md:text-[12px] uppercase tracking-widest">{item}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="pt-4"
              >
                <Link
                  to="/about"
                  className="group w-full md:w-auto inline-flex items-center justify-center gap-6 bg-brand-black text-white px-10 py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] hover:bg-brand-orange transition-all duration-500 shadow-2xl shadow-black/20"
                >
                  Company Profile
                  <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </motion.div>
            </div>

            {/* --- RIGHT SIDE: BENTO GRID --- */}
            {/* Changed gap to 4 on mobile, 8 on desktop */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">

              {/* Feature 1 - Large Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                // rounded-[2rem] on mobile, rounded-[3.5rem] on desktop
                className="md:col-span-2 group relative p-8 md:p-12 bg-gray-50 rounded-[2rem] md:rounded-[3.5rem] border border-gray-100 overflow-hidden transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)]"
              >
                <div className="absolute top-0 right-0 w-24 h-24 md:w-40 md:h-40 bg-brand-orange/5 rounded-bl-[3rem] md:rounded-bl-[6rem] group-hover:bg-brand-orange transition-all duration-700 flex items-start justify-end p-6 md:p-10">
                  <Headphones size={32} className="text-brand-orange group-hover:text-white transition-transform duration-500 group-hover:rotate-12" />
                </div>

                <div className="relative z-10 max-w-lg">
                  <h4 className="text-2xl md:text-3xl font-black text-brand-black mb-4 md:mb-6 uppercase tracking-tighter">
                    RELIABLE CUSTOMER SUPPORT
                  </h4>
                  <p className="text-gray-500 leading-relaxed text-sm md:text-lg mb-6 md:mb-8">
                    Get complete support for card printing, machines, and services. From order guidance to after-sales help, we ensure smooth and hassle-free service.
                  </p>
                  <div className="flex flex-wrap gap-2 md:gap-4">
                    <span className="px-4 py-2 md:px-5 md:py-2.5 bg-white rounded-xl text-[8px] md:text-[9px] font-black border border-gray-200 uppercase tracking-widest text-brand-orange">Quick Response</span>
                    <span className="px-4 py-2 md:px-5 md:py-2.5 bg-white rounded-xl text-[8px] md:text-[9px] font-black border border-gray-200 uppercase tracking-widest text-brand-black">After-Sales Support</span>
                  </div>
                </div>
              </motion.div>

              {/* Feature 2 & 3 - Small Cards */}
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * i, duration: 0.6 }}
                  className="group p-8 md:p-10 bg-white rounded-[2rem] md:rounded-[3rem] border border-orange-100 transition-all duration-500 hover:bg-brand-black hover:shadow-3xl hover:-translate-y-4"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-50 text-brand-orange rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:bg-brand-orange group-hover:text-white transition-all duration-500 shadow-inner">
                    {f.icon}
                  </div>
                  <h4 className="text-lg md:text-xl font-black text-brand-black mb-3 md:mb-4 group-hover:text-white uppercase tracking-tight transition-colors">
                    {f.title}
                  </h4>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                    {f.desc}
                  </p>
                </motion.div>
              ))}

            </div>
          </div>
        </div>
      </section>
      {/* contact */}
      <section className="py-16 md:py-24 bg-white font-sans overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          {/* --- TOP HEADER AREA --- */}
          <div className="flex flex-col items-center text-center mb-12 md:mb-20">
            <div className="flex items-center justify-center -space-x-4 mb-6 md:mb-8">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-white overflow-hidden shadow-lg z-30">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&fit=crop" alt="Support" className="w-full h-full object-cover" />
              </div>
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-brand-orange overflow-hidden shadow-xl z-40 scale-110">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&h=200&fit=crop" alt="Manager" className="w-full h-full object-cover" />
              </div>
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-white overflow-hidden shadow-lg z-30">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&h=200&fit=crop" alt="Consultant" className="w-full h-full object-cover" />
              </div>
            </div>

            <span className="text-brand-orange font-black uppercase tracking-[0.3em] text-[10px] mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-6xl font-black text-brand-black leading-tight max-w-3xl">
              Let's Build Something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-[#ff8c40]">Exceptional Together.</span>
            </h2>
          </div>

          {/* --- MAIN CONTENT AREA (MOBILE FULL WIDTH) --- */}
          <div className="relative bg-[#0A0A0A] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl min-h-[600px] flex flex-col lg:flex-row mx-0">

            {/* Background Decorative Mesh */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill-rule='evenodd' stroke='%23ffffff' fill='none'/%3E%3C/svg%3E")`, backgroundSize: '100px' }}>
            </div>

            {/* Left Side: Contact Info */}
            <div className="relative z-10 lg:w-2/5 p-8 md:p-16 flex flex-col justify-between text-white border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="space-y-8 md:space-y-12">
                <div className="flex items-start gap-5 md:gap-6 group">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-500 border border-white/10">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Email Us</p>
                    <p className="text-lg md:text-xl font-bold break-all"></p>
                  </div>
                </div>

                <div className="flex items-start gap-5 md:gap-6 group">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-500 border border-white/10">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Call Us</p>
                    <p className="text-lg md:text-xl font-bold">+91 9415225541</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 md:gap-6 group">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-500 border border-white/10">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Visit Us</p>
                    <p className="text-lg md:text-xl font-bold">BHRIGU MANDIR GATE BALLIA,UTTAR PRADESH, 277001</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 lg:mt-0">
                <div className="inline-flex items-center gap-4 py-3 px-5 bg-white/5 rounded-full border border-white/10">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <p className="text-[11px] font-bold text-gray-300">Support is currently online</p>
                </div>
              </div>
            </div>

            {/* Right Side: Modern Form */}
            <div className="relative z-10 lg:w-3/5 p-8 md:p-16 bg-white/[0.02] backdrop-blur-md">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-orange ml-2">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white outline-none focus:border-brand-orange focus:bg-white/10 transition-all placeholder:text-gray-600" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-orange ml-2">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white outline-none focus:border-brand-orange focus:bg-white/10 transition-all placeholder:text-gray-600" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-brand-orange ml-2">Your Message</label>
                  <textarea rows="4" placeholder="How can we help you?" className="w-full bg-white/5 border border-white/10 rounded-3xl py-4 px-6 text-white outline-none focus:border-brand-orange focus:bg-white/10 transition-all resize-none placeholder:text-gray-600"></textarea>
                </div>
                <div className="md:col-span-2 pt-4">
                  <button className="w-full py-5 bg-brand-orange text-white rounded-2xl font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-3 hover:bg-white hover:text-brand-black transition-all duration-500 shadow-xl shadow-brand-orange/20 group">
                    Send Message
                    <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* gallery */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header with Filter */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-brand-orange font-black uppercase tracking-[0.3em] text-[10px]">
                <div className="w-8 h-[2px] bg-brand-orange"></div>
                Our Work
              </div>

              <h2 className="text-4xl md:text-6xl font-black text-brand-black">
                Quality You Can <br />
                <span className="text-brand-orange">See & Trust.</span>
              </h2>
            </div>


            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${activeFilter === cat
                    ? 'bg-brand-black text-white border-brand-black shadow-lg shadow-black/10'
                    : 'bg-transparent text-gray-400 border-gray-100 hover:border-brand-orange hover:text-brand-orange'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-[2.5rem] bg-gray-100 ${item.size} transition-all duration-700`}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Glassmorphism Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                  <div className="translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-brand-orange font-black text-[10px] uppercase tracking-widest block mb-2">
                      {item.category}
                    </span>
                    <h4 className="text-2xl font-black text-white mb-6">
                      {item.title}
                    </h4>
                    <div className="flex items-center justify-between">
                      <button className="flex items-center gap-2 text-white text-[10px] font-black uppercase tracking-widest group/btn">
                        View Project
                        <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover/btn:bg-brand-orange transition-colors">
                          <ArrowUpRight size={14} />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Quick View Icon (Top Right) */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-2xl">
                    <Plus className="text-brand-orange" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <Link to="/gallery" className="inline-flex items-center gap-4 border-b-2 border-brand-black pb-2 text-brand-black font-black uppercase tracking-[0.2em] text-xs hover:text-brand-orange hover:border-brand-orange transition-all">
              View All Showcase Projects
            </Link>
          </div>
        </div>
      </section>
      {/*  */}
      <SovereignHardware />
    </>
  );
};

export default HomePage;