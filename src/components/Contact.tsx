import { motion } from 'motion/react';
import { Linkedin, Mail, Github, Gitlab, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <footer id="contact" className="w-full max-w-6xl mx-auto px-6 py-12">
      <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col gap-2 text-center md:text-left z-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Ready to build with you
          </h2>
          <p className="text-slate-400 font-medium">
            Let's make something awesome.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-6 z-10">
          <div className="flex gap-3">
            {[
              { icon: Linkedin, href: "https://www.linkedin.com/in/kevin-f-153586235/", label: "LinkedIn" },
              { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=kevs2012104362@gmail.com", label: "Gmail" },
              { icon: Github, href: "https://github.com/Saveus-Kevz", label: "GitHub" },
              { icon: Gitlab, href: "https://gitlab.com/kevz.dev", label: "GitLab" }
            ].map((social, i) => (
              <a 
                key={i}
                href={social.href} 
                target="_blank" 
                rel="noreferrer" 
                className="w-12 h-12 bg-white/10 border border-white/10 rounded-2xl flex items-center justify-center text-white hover:bg-brand-light hover:text-brand-dark transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=kevs2012104362@gmail.com" 
            target="_blank"
            rel="noreferrer"
            className="text-brand-light hover:text-white transition-colors text-sm font-bold bg-white/5 px-4 py-2 rounded-xl border border-white/10"
          >
            kevs2012104362@gmail.com
          </a>
        </div>
      </div>

      <div className="text-center mt-8 text-slate-400 text-xs font-medium uppercase tracking-widest opacity-60">
        <p>© {new Date().getFullYear()} Kevin Flores — Created with passion and code.</p>
      </div>
    </footer>
  );
}
