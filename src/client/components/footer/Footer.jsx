import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Send
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white pt-24 relative overflow-hidden">

      {/* 1. Newsletter Overlap Box */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="relative bg-brand-black rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]">

          {/* Background Decorative Circles */}
          <div className="absolute top-[-50%] right-[-10%] w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-lg text-center lg:text-left">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
              Ready to start your <br />
              <span className="text-brand-orange bg-clip-text text-transparent bg-gradient-to-r from-brand-orange to-[#ff9857]">
                Next Project?
              </span>
            </h3>
            <p className="text-gray-400 font-medium text-sm md:text-base">
              Get a custom quote or join our newsletter for industrial insights.
            </p>
          </div>

          {/* Input Container: Ensuring no overflow on small mobiles */}
          <div className="relative z-10 w-full lg:w-auto">
            <div className="relative flex items-center w-full">
              <input
                type="email"
                placeholder="Enter your email"
                // Added pr-16 to ensure text doesn't go under the button on small screens
                className="w-full lg:w-96 bg-white/5 border border-white/10 rounded-2xl py-5 px-6 pr-16 text-white outline-none focus:border-brand-orange transition-all placeholder:text-gray-500 text-sm md:text-base"
              />
              <button className="absolute right-2 bg-brand-orange text-white p-3 md:p-4 rounded-xl hover:bg-white hover:text-brand-black transition-all group">
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        {/* Adjusted grid for better tablet (md) and mobile (sm) stacking */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Brand Identity */}
          <div className="lg:col-span-4 space-y-8 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <div className="w-10 h-10 bg-brand-black rounded-xl flex items-center justify-center">
                <span className="text-brand-orange font-black text-xl">P</span>
              </div>
              <span className="text-2xl font-black text-brand-black tracking-tighter uppercase">Print<span className="text-brand-orange">Me</span></span>
            </div>
            <p className="text-gray-500 leading-relaxed text-sm max-w-sm mx-auto sm:mx-0">
              Precision-engineered hardware and premium digital printing solutions. We help industries scale through high-quality tools and identity branding since 1998.
            </p>
            <div className="flex justify-center sm:justify-start gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-11 h-11 md:w-12 md:h-12 rounded-xl border border-gray-100 flex items-center justify-center text-brand-black hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 lg:pl-10 space-y-8 text-center sm:text-left">
            <h4 className="text-sm font-black text-brand-black uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-4">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Our Products', path: '/products' },
                { name: 'Industrial Tools', path: '/products' }, // Map to products or specific category
                { name: 'Gallery', path: '/gallery' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-500 hover:text-brand-orange text-sm font-bold transition-colors flex items-center justify-center sm:justify-start gap-2 group"
                  >
                    {/* Animated Line - Hidden on Mobile for better alignment, visible on SM up */}
                    <div className="hidden sm:block w-0 h-[2px] bg-brand-orange group-hover:w-4 transition-all duration-300"></div>

                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-8 text-center sm:text-left">
            <h4 className="text-sm font-black text-brand-black uppercase tracking-widest">Get In Touch</h4>
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-brand-orange flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <p className="text-sm text-gray-500 font-medium leading-relaxed max-w-xs">
                  BHRIGU MANDIR GATE BALLIA, UTTAR PRADESH, 277001
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-brand-orange flex-shrink-0">
                  <Phone size={18} />
                </div>
                <p className="text-sm text-brand-black font-black">+91 9415225541</p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-brand-orange flex-shrink-0">
                  <Mail size={18} />
                </div>
                <p className="text-sm text-brand-black font-black"></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Bar */}
      <div className="border-t border-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-gray-400 text-[9px] md:text-[10px] font-black uppercase tracking-widest">
            © 2026 PrintMe Industrial Solutions. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[9px] md:text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-brand-orange transition-colors">Privacy Policy</a>
            <a href="#" className="text-[9px] md:text-[10px] font-black text-gray-400 uppercase tracking-widest hover:text-brand-orange transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Aesthetic Background Ghost Text - Adjusted size for mobile to prevent overflow */}
      <div className="absolute -bottom-6 -right-10 text-[8rem] md:text-[15rem] font-black text-gray-50 select-none pointer-events-none -z-10 leading-none opacity-50">
        PRINT
      </div>
    </footer>
  );
};

export default Footer;