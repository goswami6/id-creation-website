import React from 'react'
import HeroBanner from '../components/Hero'
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Zap } from 'lucide-react';
import { Target, Eye, ArrowRight } from 'lucide-react';
import { Award, CheckCircle2, FlaskConical, Microscope } from 'lucide-react';
import { Shield, Layers, Globe, } from 'lucide-react';
import { Link } from 'react-router-dom';


const AboutPage = () => {
  const stats = [
    { label: "Precision Projects", value: "250+", icon: <Cpu size={20} /> },
    { label: "Global Partners", value: "40+", icon: <ShieldCheck size={20} /> },
    { label: "Efficiency Rate", value: "99.9%", icon: <Zap size={20} /> },
  ];

  const qualityStandards = [
    {
      title: "Quality Printing Standards",
      desc: "Clean printing, clear text, and consistent color quality across every card and product.",
      icon: <CheckCircle2 size={18} />
    },
    {
      title: "Careful Quality Check",
      desc: "Each order is checked for print accuracy, alignment, and finishing before delivery.",
      icon: <Microscope size={18} />
    },
    {
      title: "Durable Materials",
      desc: "We use reliable PVC cards, ribbons, inks, and materials designed for long-lasting use.",
      icon: <FlaskConical size={18} />
    }
  ];

  const reasons = [
    {
      title: "Reliable Printing",
      desc: "Clean, professional printing with proper finishing.",
      icon: <Zap size={24} />
    },
    {
      title: "Strong & Durable",
      desc: "Cards and products made to last.",
      icon: <Shield size={24} />
    },
    {
      title: "Flexible Orders",
      desc: "Custom designs and bulk quantities available.",
      icon: <Layers size={24} />
    },
    {
      title: "Customer Support",
      desc: "Friendly service you can depend on.",
      icon: <Globe size={24} />
    }
  ]

  return (
    <>
      <HeroBanner
        subtitle="Precision Hardware" // Chhota text upar wala
        title="MASTERING MODERN TOOLS" // Badi heading
        description="Revolutionizing industrial workflows with next-gen hardware engineering." // Niche wala text
        image="/samples/product5.jpg"
      />
      {/* company info */}
      <section className="py-16 md:py-32 bg-white text-black overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">

          {/* --- GRID: Changed gap for mobile --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">

            {/* LEFT SIDE: Heading & Philosophy */}
            <div className="space-y-8 md:space-y-10">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-orange-600 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em]">
                  The Core Philosophy
                </h3>
                {/* Scale font: text-4xl on mobile, text-7xl on desktop */}
                <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] md:leading-none">
                  WE CREATE <br />
                  <span className="text-orange-400 italic">QUALITY.</span>
                </h2>

              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-gray-600 font-light leading-relaxed max-w-xl"
              >
                Founded in 2026, Shivam Creation specializes in PVC ID card printing, card designing,
                printing solutions, and custom mementos. We don’t just deliver products—we provide
                reliable printing and card solutions that support schools, institutions, and businesses
                with quality, consistency, and timely service.

              </motion.p>

              {/* Micro Stats Row: 2 columns on mobile for better fit */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 pt-10 border-t border-gray-100">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-orange-600 mb-2">{stat.icon}</div>
                    <div className="text-2xl md:text-3xl font-black tracking-tighter">{stat.value}</div>
                    <div className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE: Immersive Visuals */}
            <div className="relative pt-10 md:pt-0">
              <motion.div
                initial={{ clipPath: 'inset(0% 100% 0% 0%)' }}
                whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                /* Adjusted rounded corners for mobile */
                className="relative aspect-[4/5] rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80"
                  alt="Industrial Lab"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100"
                />
              </motion.div>

              {/* Floating Info Tag: Positioned safely for mobile */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                viewport={{ once: true }}
                /* Mobile: Relative/Block, Desktop: Absolute Floating */
                className="mt-6 md:absolute md:-bottom-10 md:-left-10 bg-black text-white p-6 md:p-10 rounded-2xl max-w-full md:max-w-[280px] shadow-2xl"
              >
                <p className="text-[11px] md:text-xs font-light leading-relaxed">
                  Our printing delivers <span className="text-orange-600 font-bold">sharp accuracy and clean finishing</span>,
                  ensuring every card and product meets high quality standards.

                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
      {/* mission and vision */}
      <section className="bg-[#0A0A0A] text-white py-20 md:py-32 border-t border-white/5 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">

          {/* SECTION HEADER */}
          <div className="mb-16 md:mb-24">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-orange-600 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] mb-4"
            >
              Purpose & Roadmap
            </motion.p>
            {/* text-3xl for mobile to prevent wrapping issues */}
            <h2 className="text-3xl md:text-6xl font-black tracking-tighter uppercase leading-none">
              The North Star <span className="text-orange-500">Protocol</span>
            </h2>
          </div>

          {/* GRID: Added border-t for mobile stacked view */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10 border border-white/10">

            {/* --- MISSION BLOCK --- */}
            <motion.div
              whileHover={{ backgroundColor: "rgba(255, 102, 0, 0.05)" }}
              className="group relative p-8 md:p-20 bg-[#0A0A0A] transition-colors duration-700 overflow-hidden"
            >
              <div className="relative z-10 space-y-6 md:space-y-8">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">
                  <Target size={24} className="md:w-8 md:h-8" />
                </div>

                <h3 className="text-3xl md:text-4xl font-black tracking-tight">OUR MISSION</h3>

                <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-md">
                  To bridge the gap between design and production by delivering reliable printing,
                  card solutions, and digital services that help schools and businesses work better.

                </p>

                <ul className="space-y-4 pt-4 md:pt-6">
                  {['Quality Printing & Finishing', 'Reliable & Timely Service', 'Honest Work & Customer Trust'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[9px] md:text-[10px] font-bold tracking-widest text-gray-500 uppercase">
                      <div className="w-1.5 h-1.5 bg-orange-600 rotate-45" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Background Decoration: Scaled down for mobile to avoid text overlap */}
              <div className="absolute -top-4 -right-4 md:top-10 md:right-10 text-[6rem] md:text-[10rem] font-black text-white/[0.02] leading-none select-none">
                01
              </div>
            </motion.div>

            {/* --- VISION BLOCK --- */}
            <motion.div
              whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }}
              className="group relative p-8 md:p-20 bg-[#0A0A0A] transition-colors duration-700 overflow-hidden border-t lg:border-t-0 border-white/10"
            >
              <div className="relative z-10 space-y-6 md:space-y-8">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center text-orange-600 group-hover:scale-110 transition-all duration-500">
                  <Eye size={24} className="md:w-8 md:h-8" />
                </div>

                <h3 className="text-3xl md:text-4xl font-black tracking-tight">OUR VISION</h3>

                <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-md">
                  We envision a future where printing and card solutions are simple, reliable, and accessible,
                  helping schools and businesses work smoothly with quality they can depend on.

                </p>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 text-orange-600 pt-4 md:pt-6 cursor-pointer"
                >
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em]">The 2030 Roadmap</span>
                  <ArrowRight size={16} />
                </motion.div>
              </div>

              {/* Background Image: Only shown on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 hidden md:block">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
                  alt="Future Vision"
                  className="w-full h-full object-cover grayscale"
                />
              </div>

              <div className="absolute -top-4 -right-4 md:top-10 md:right-10 text-[6rem] md:text-[10rem] font-black text-white/[0.02] leading-none select-none">
                02
              </div>
            </motion.div>

          </div>

          {/* --- BOTTOM TAGLINE --- */}
          <div className="mt-16 md:mt-20 flex justify-center">
            <div className="text-center space-y-2">
              <p className="text-[8px] md:text-[9px] font-bold text-gray-600 uppercase tracking-[0.5em] md:tracking-[0.8em]">Since the beginning</p>
              <p className="text-base md:text-lg font-serif italic text-white/40">"Integrity in every micron, vision in every tool."</p>
            </div>
          </div>

        </div>
      </section>
      {/* Quality section and experiance */}
      <section className="bg-white text-black py-20 md:py-32 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">

          {/* --- TOP ROW: EXPERIENCE FOCUS --- */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-20 md:mb-32">
            <div className="lg:w-1/3">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-orange-600 text-[10px] font-black uppercase tracking-[0.5em] mb-4 md:mb-6"
              >
                The Legacy
              </motion.p>
              {/* Scaled text for mobile: 4xl -> 6xl */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1] md:leading-[0.9]">
                DECADE OF <br /> <span className="text-orange-600 italic">DOMINANCE.</span>
              </h2>
            </div>

            {/* Removed border-l on mobile, added border-t/pt instead */}
            <div className="lg:w-2/3 border-t lg:border-t-0 lg:border-l border-gray-100 pt-10 lg:pt-0 lg:pl-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                <div className="space-y-4 md:space-y-6">
                  {/* Scaled number for mobile: 6xl -> 8xl */}
                  <span className="text-6xl md:text-8xl font-black text-orange-600 block leading-none">
                    12+
                  </span>

                  <h4 className="text-xl font-bold tracking-tight">
                    Years of Printing Experience
                  </h4>

                  <p className="text-gray-500 font-light leading-relaxed text-sm md:text-base">
                    Serving schools, institutions, and businesses with reliable ID card printing,
                    quality products, and consistent service built on years of hands-on experience.
                  </p>

                </div>
                <div className="space-y-4 md:space-y-6 lg:pt-20">
                  <span className="text-6xl md:text-8xl font-black text-orange-600 block leading-none">
                    50k+
                  </span>

                  <h4 className="text-xl font-bold tracking-tight">
                    Cards Printed & Delivered
                  </h4>

                  <p className="text-gray-500 font-light leading-relaxed text-sm md:text-base">
                    Successfully printed and delivered ID cards, gift cards, and related products
                    for schools, institutions, and businesses with consistent quality.
                  </p>

                </div>
              </div>
            </div>
          </div>

          {/* --- BOTTOM ROW: QUALITY FOCUS --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Quality Visual Overlay */}
            {/* Changed order-2 to order-1 for a better mobile reading flow (Image first) */}
            <div className="relative order-1 lg:order-1">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative aspect-video rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl"
              >
                <img
                  src="/samples/product5.jpg"
                  alt="Quality Testing"
                  className="w-full h-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-orange-600/10 mix-blend-multiply" />
              </motion.div>

              {/* Minimal Label - Scaled for mobile */}
              <div className="absolute top-6 left-6 md:top-10 md:left-10 flex items-center gap-2 md:gap-3 bg-white/90 backdrop-blur px-4 py-2 md:px-6 md:py-3 rounded-full border border-gray-100 shadow-xl">
                <Award className="text-orange-600 w-3 h-3 md:w-4 md:h-4" />
                <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-black">Master Certified</span>
              </div>
            </div>

            {/* Quality Text Strips */}
            <div className="space-y-8 md:space-y-12 order-2 lg:order-2">
              <div>
                <p className="text-orange-600 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] mb-3 md:mb-4">Precision Guarantee</p>
                <h3 className="text-3xl md:text-4xl font-black tracking-tight uppercase">UNCOMPROMISING STANDARDS</h3>
              </div>

              <div className="space-y-0">
                {qualityStandards.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.2 }}
                    className="group flex items-start gap-6 md:gap-8 py-6 md:py-8 border-b border-gray-100 last:border-0 hover:pl-2 md:hover:pl-4 transition-all duration-500 cursor-default"
                  >
                    <div className="text-orange-600 pt-1 group-hover:scale-125 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h5 className="font-black text-xs md:text-sm uppercase tracking-wider mb-1">{item.title}</h5>
                      <p className="text-gray-400 text-xs md:text-sm font-light italic">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>
      {/* why shivam creation */}
      <section className="bg-[#0A0A0A] text-white py-40 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">

          {/* --- SECTION HEADER --- */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 border-b border-white/5 pb-20">
            <div className="max-w-4xl">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-orange-600 text-[10px] font-black uppercase tracking-[0.5em] mb-6"
              >
                The Competitive Advantage
              </motion.p>
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase">
                WHY SHIVAM <br /> <span className="text-orange-600 italic">CREATION.</span>
              </h2>
            </div>

            <div className="hidden md:block max-w-[200px] text-right">
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-loose">
                Building the infrastructure for the next industrial era.
              </p>
            </div>
          </div>

          {/* --- REASONS LIST (Borders only style) --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10">
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group p-12 border-r border-b border-white/10 last:border-r-0 hover:bg-white/[0.02] transition-colors duration-700"
              >
                <div className="text-orange-600 mb-8 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                  {reason.icon}
                </div>
                <h4 className="text-xl font-black tracking-tight mb-4 uppercase">{reason.title}</h4>
                <p className="text-gray-500 text-sm font-light leading-relaxed group-hover:text-gray-300 transition-colors">
                  {reason.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* --- CALL TO ACTION (CTA) --- */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-40 text-center space-y-12"
          >
            <div className="space-y-4">
              <h3 className="text-3xl md:text-5xl font-light tracking-tighter">
                Ready to upgrade your <span className="font-black italic">industrial protocol?</span>
              </h3>
              <p className="text-gray-500 text-sm tracking-widest uppercase">Consult with our lead engineers today.</p>
            </div>

            <motion.button
              onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-6 bg-orange-600 text-white px-12 py-6 rounded-full group transition-all hover:bg-white hover:text-black"
            >
              <Link to="/contact" className="text-xs font-black uppercase tracking-[0.3em]">Initiate Contact</Link>
              <div className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                <ArrowRight size={16} />
              </div>
            </motion.button>
          </motion.div>

        </div>
      </section>
    </>
  )
}

export default AboutPage