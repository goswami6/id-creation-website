import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';
import HeroBanner from '../components/Hero';

const Contact = () => {
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
      <HeroBanner 
        subtitle="Inquiry Portal"
        title="CONNECT WITH US"
        description="Initiate your project protocol. Our engineers and designers are ready to assist."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000"
      />

      <section className="py-32 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-24">
          
          {/* --- LEFT SIDE: CONTACT INFO --- */}
          <div className="lg:w-1/3 space-y-16">
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              variants={shutterVariants}
              className="space-y-4"
            >
              <p className="text-orange-600 text-[10px] font-black uppercase tracking-[0.6em]">Contact Details</p>
              <h2 className="text-5xl font-black tracking-tighter uppercase leading-none">
                Get in <br /> <span className="text-gray-200 italic">Touch.</span>
              </h2>
            </motion.div>

            <div className="space-y-10">
              {[
                { icon: <Phone size={20} />, label: "Call Us", val: "+91 9415225541" },
                { icon: <Mail size={20} />, label: "Email Info", val: "" },
                { icon: <MapPin size={20} />, label: "Headquarters", val: " BHRIGU MANDIR GATE BALLIA, UTTAR PRADESH, 277001" },
                { icon: <Clock size={20} />, label: "Operational Hours", val: "Mon - Sat: Available" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="text-orange-600 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">{item.label}</p>
                    <p className="text-lg font-bold tracking-tight">{item.val}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Global Presence Mini-Map or Stat */}
            <div className="pt-12 border-t border-gray-100 flex items-center gap-4">
               <Globe className="text-gray-200" size={40} />
               <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-relaxed">
                 Deploying services <br /> across 30+ regions.
               </p>
            </div>
          </div>

          {/* --- RIGHT SIDE: PROFESSIONAL FORM --- */}
          <div className="lg:w-2/3 bg-gray-50 p-8 md:p-16 rounded-[3rem]">
            <form className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-2 border-b border-gray-200 pb-4 focus-within:border-orange-600 transition-colors">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Your Identity</label>
                  <input type="text" placeholder="Full Name *" className="w-full bg-transparent outline-none text-xl font-bold placeholder:text-gray-200" />
                </div>
                <div className="space-y-2 border-b border-gray-200 pb-4 focus-within:border-orange-600 transition-colors">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email Protocol</label>
                  <input type="email" placeholder="Email Address *" className="w-full bg-transparent outline-none text-xl font-bold placeholder:text-gray-200" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-2 border-b border-gray-200 pb-4 focus-within:border-orange-600 transition-colors">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Interest Vertical</label>
                  <select className="w-full bg-transparent outline-none text-xl font-bold text-gray-400 appearance-none">
                    <option>PVC ID Cards</option>
                    <option>Web Development</option>
                    <option>Bulk Printing</option>
                    <option>Mementos & Trophies</option>
                  </select>
                </div>
                <div className="space-y-2 border-b border-gray-200 pb-4 focus-within:border-orange-600 transition-colors">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Connect Number</label>
                  <input type="tel" placeholder="Phone Number" className="w-full bg-transparent outline-none text-xl font-bold placeholder:text-gray-200" />
                </div>
              </div>

              <div className="space-y-2 border-b border-gray-200 pb-4 focus-within:border-orange-600 transition-colors">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Project Brief</label>
                <textarea rows="4" placeholder="Describe your requirements..." className="w-full bg-transparent outline-none text-xl font-bold placeholder:text-gray-200 resize-none" />
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full md:w-auto bg-orange-600 text-white px-16 py-6 rounded-full flex items-center justify-center gap-6 group hover:bg-black transition-all duration-500 shadow-xl shadow-orange-600/20"
              >
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Dispatch Inquiry</span>
                <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
              </motion.button>
            </form>
          </div>

        </div>
      </section>

      {/* --- MAP SECTION --- */}
      <section className="h-[500px] w-full grayscale contrast-125 opacity-80 hover:grayscale-0 transition-all duration-1000">
        <iframe 
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.223391313!2d77.08!3d28.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMxJzEyLjAiTiA3N8KwMDQnNDguMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
        />
      </section>
    </div>
  );
};

export default Contact;