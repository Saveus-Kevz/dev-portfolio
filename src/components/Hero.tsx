import { motion } from 'motion/react';
import { Linkedin, Mail, Github, Gitlab } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="w-full max-w-6xl mx-auto min-h-[90vh] flex flex-col justify-center px-6 pt-24 md:pt-32 pb-12">
      <div className="bg-brand-bg/40 border border-brand-light/30 rounded-[3rem] md:rounded-[4.5rem] flex flex-col md:flex-row items-center justify-between p-8 md:p-16 lg:p-24 relative overflow-hidden">
        
        {/* Background elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-brand-light/30 rounded-full blur-3xl opacity-50 mix-blend-multiply pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-light/20 rounded-full blur-3xl opacity-50 mix-blend-multiply pointer-events-none" />

        <div className="w-full md:w-3/5 z-10 flex flex-col gap-6 md:gap-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-1.5 text-center md:text-left"
          >
            <span className="text-brand-dark text-lg md:text-2xl font-medium tracking-tight">
              Hi, I'm
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Kevin Flores
            </h1>
          </motion.div>

          {/* Mobile Photo - only visible on small screens */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex md:hidden justify-center z-10"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-brand-light rounded-[2.5rem] transform rotate-3 scale-105 opacity-60 pointer-events-none"></div>
              <div className="relative w-36 h-36 bg-slate-200 rounded-[2rem] border-4 border-white overflow-hidden shadow-lg flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/10 to-slate-900/10 z-10 mix-blend-overlay"></div>
                <img 
                  src="https://i.imgur.com/R9jf7qV.jpeg" 
                  alt="Kevin Flores" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-3 md:gap-4 text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed max-w-2xl text-center md:text-left items-center md:items-start"
          >
            <p>
              <span className="font-bold text-brand-dark">Former:</span> Customer Support @ Meta, DoorDash, OfferUp, Guideline
            </p>
            <p>
              <span className="font-bold text-brand-dark">Current:</span> Back-end Development Student
            </p>
            <div className="inline-block mt-2 px-4 py-2 bg-slate-900 text-white rounded-xl font-medium text-sm w-fit border border-slate-700/50 shadow-sm text-left">
              <span className="text-brand-light mr-2">Mission:</span> Building the tools I once relied on.
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center md:justify-start gap-4 mt-4"
          >
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/kevin-f-153586235/", label: "LinkedIn" },
              { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=kevs2012104362@gmail.com", label: "Gmail" },
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Gitlab, href: "https://gitlab.com/kevz.dev", label: "GitLab" }
            ].map((social, i) => (
              <a 
                key={i}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white border border-slate-200 text-slate-600 hover:text-brand-dark hover:border-brand-light hover:shadow-md transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Desktop Photo Container - hidden on mobile */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:flex w-full md:w-2/5 mt-12 md:mt-0 justify-center md:justify-end z-10"
        >
          <div className="relative">
            {/* Soft background shape */}
            <div className="absolute inset-0 bg-brand-light rounded-[3rem] transform rotate-3 scale-105 opacity-60 pointer-events-none"></div>
            
            {/* The photo container */}
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-64 lg:w-72 lg:h-80 bg-slate-200 rounded-[2.5rem] border-8 border-white overflow-hidden shadow-xl flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/10 to-slate-900/10 z-10 mix-blend-overlay"></div>
              <img 
                src="https://i.imgur.com/R9jf7qV.jpeg" 
                alt="Kevin Flores" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  /* Fallback if user hasn't uploaded image to public/ yet */
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop";
                }}
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
