import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Filter,
  Search,
  SlidersHorizontal,
  Cpu,
  Zap,
  Shield
} from 'lucide-react';

const ProductList = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    "All",
    "ID Cards",
    "Printing Machines",
    "Gift & Loyalty Cards",
    "Medals & Mementos",
    "Accessories"
  ];


  const products = [
   
    /* 🔹 NEW PRODUCT: ID Card Printing Service */
    {
      id: "PRD-003",
      name: "ID Card Printing Service",
      category: "Printing Services",
      price: "Per Card Pricing",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi0fv7W7log4SsHCNWkAOQTp_-WFO7g_cTFg&s",
      tag: "Fast Delivery"
    },

    /* 🔹 Printing Machine */
    {
      id: "PRD-004",
      name: "ID Card Printing Machine",
      category: "Printing Machines",
      price: "Contact for Price",
      image: "https://d91ztqmtx7u1k.cloudfront.net/ClientContent/Images/Catalogue/pvc-id-card-printer-20240628102027791.png",
      tag: "Available"
    },

    /* 🔹 NEW PRODUCT: Card Cutter */
    {
      id: "PRD-005",
      name: "PVC Card Cutter",
      category: "Printing Machines",
      price: "Contact for Price",
      image: "https://cpimg.tistatic.com/09839842/b/6/70x100mm-ID-Card-Cutter.png",
      tag: "Essential"
    },

    /* 🔹 Gift Cards */
    {
      id: "PRD-006",
      name: "ID Card Printing Machine",
      category: "Printing Machines",
      price: "Custom Pricing",
      image: "https://5.imimg.com/data5/SELLER/Default/2022/6/KC/XK/QD/23441424/school-id-card-printer-500x500.jpg",
      tag: "Custom Design"
    },

    /* 🔹 Accessories */
    {
      id: "PRD-008",
      name: "Lanyards & Card Holders",
      category: "Accessories",
      price: "Affordable",
      image: "https://i.etsystatic.com/24459535/r/il/0a6ca7/2515727449/il_570xN.2515727449_q8av.jpg",
      tag: "Add-On"
    },

    /* 🔹 NEW PRODUCT: Printer Ribbon */
    {
      id: "PRD-009",
      name: "Printer Ribbon",
      category: "Print Supplies",
      price: "Contact for Price",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1BAVvvC99VTSk8muO5kgKzQ6OEQ7YpOdVhA&s",
      tag: "In Stock"
    },

    /* 🔹 NEW PRODUCT: Ink & Print Supplies */
    {
      id: "PRD-010",
      name: "Ink & Print Supplies",
      category: "Print Supplies",
      price: "Contact for Price",
      image: "https://5.imimg.com/data5/SELLER/Default/2021/2/ML/NK/AS/8137676/inks-for-dtf-direct-to-film-printers-dtf-inks-500x500.jpg",
      tag: "Essential"
    }
  ];



  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="bg-white text-black min-h-screen">
      {/* --- HEADER --- */}
      <header className="pt-32 pb-16 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <p className="text-orange-600 text-[10px] font-black uppercase tracking-[0.5em]">Inventory 2026</p>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
              Hardened <br /> <span className="text-orange-500 italic">Hardware.</span>
            </h1>
          </div>
          <div className="flex items-center gap-4 border-b-2 border-black pb-2 min-w-[300px]">
            <Search size={18} />
            <input
              type="text"
              placeholder="SEARCH PROTOCOL..."
              className="bg-transparent outline-none uppercase text-[10px] font-bold tracking-widest w-full"
            />
          </div>
        </div>
      </header>

      {/* --- TOOLBAR / FILTERS --- */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-y border-gray-100">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-6 flex overflow-x-auto no-scrollbar gap-8 items-center">
          <div className="flex items-center gap-2 text-orange-600 shrink-0 border-r border-gray-200 pr-8 mr-2">
            <Filter size={14} />
            <span className="text-[10px] font-black uppercase tracking-widest">Filters</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all ${activeCategory === cat ? 'text-black scale-110' : 'text-gray-400 hover:text-black'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* --- PRODUCT GRID --- */}
      <main className="max-w-[1600px] mx-auto px-6 md:px-12 py-12 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
          {filteredProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (idx % 3) * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gray-100 mb-8">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />

                {/* Floating Tag */}
                <div className="absolute top-6 left-6 bg-white px-4 py-1.5 rounded-full shadow-xl">
                  <p className="text-[8px] font-black uppercase tracking-widest">{product.tag}</p>
                </div>

                {/* Hover Overlay Button */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center scale-50 group-hover:scale-100 transition-transform duration-500">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-2">
                  <p className="text-orange-600 text-[9px] font-black uppercase tracking-widest">{product.id}</p>
                  <h3 className="text-2xl font-black tracking-tight uppercase group-hover:text-orange-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-4 text-gray-400">
                    <span className="text-[10px] font-bold uppercase tracking-widest">{product.category}</span>
                    <div className="w-1 h-1 bg-gray-200 rounded-full" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">In Stock</span>
                  </div>
                </div>
                <div className="text-xl font-black tracking-tighter">
                  {product.price}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- EMPTY STATE --- */}
        {filteredProducts.length === 0 && (
          <div className="py-40 text-center">
            <h2 className="text-4xl font-black text-gray-200 uppercase tracking-tighter">No Units Found in This Protocol.</h2>
          </div>
        )}
      </main>

      {/* --- FOOTER CTA --- */}
      <section className="bg-black text-white py-32 px-6 md:px-12 text-center">
        <div className="max-w-2xl mx-auto space-y-10">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">
            Need a <span className="text-orange-600 italic">Custom Build?</span>
          </h2>
          <p className="text-gray-400 font-light text-lg">
            Our lab specializes in bespoke industrial integration for unique automation requirements.
          </p>
          <button className="bg-white text-black px-12 py-6 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-orange-600 hover:text-white transition-all duration-500">
            Contact Laboratory
          </button>
        </div>
      </section>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default ProductList;