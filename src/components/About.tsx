import { motion } from 'motion/react';
import { BookOpen, Briefcase, GraduationCap, Code2 } from 'lucide-react';

export default function About() {
  const experiences = [
    { year: '2025', role: 'Trust & Safety, Content Moderation', company: 'Accenture (Meta)' },
    { year: '2023–2024', role: 'Retirement & Compliance', company: 'Open Access BPO (Guideline 401k)' },
    { year: '2019–2022', role: 'E-commerce Email Support', company: 'Sykes (OfferUp)' },
    { year: '2018–2019', role: 'Tier 3 Support, Voice/Chat/Email', company: 'TTEC (DoorDash)' },
    { year: '2017', role: 'Voice Support', company: 'ePerformax (PayPal)' },
    { year: '2016', role: 'Voice Support', company: 'Sitel (Capital One)' },
  ];

  const education = [
    { year: '2025–Now', degree: 'Java Back-end Development Student', school: 'Uplift Coding Bootcamp', link: 'https://www.upliftcodecamp.com/' },
    { year: '2016', degree: "ICT Associate's Degree + 600 hr Tech Support OJT", school: 'Rizal Technological University', link: 'https://www.rtu.edu.ph/' },
  ];

  return (
    <section id="about" className="w-full max-w-6xl mx-auto px-6 py-20 pb-32">
      <div className="flex flex-col items-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight"
        >
          About Me
        </motion.h2>
        <div className="w-20 h-1.5 bg-brand-light mt-6 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        
        {/* Left Column: Summary */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 bg-white rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-slate-200 lg:sticky lg:top-32"
        >
          <div className="flex items-center gap-4 mb-6 text-brand-dark">
            <div className="w-12 h-12 rounded-xl bg-brand-bg flex items-center justify-center">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Summary</h3>
          </div>
          
          <div className="text-slate-600 space-y-4 leading-relaxed text-sm sm:text-base md:text-lg">
            <p>
              Passionate about building clean, functional code and transitioning into software development full-time.
            </p>
            <p>
              Skilled in <strong className="text-slate-900 font-semibold">Core Java, Spring Boot, and SQL</strong> through hands-on projects completed during an intensive 6-month bootcamp.
            </p>
            <p className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-slate-700 italic text-sm sm:text-base mt-6">
              "After 7+ years navigating complex enterprise tools in the BPO industry, I'm now committed to building the very software I once only supported — architecture that solves problems at the root."
            </p>
          </div>
        </motion.div>

        {/* Right Column: Journey */}
        <div className="lg:col-span-7 flex flex-col gap-10">
          
          {/* Education */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-bg/30 rounded-[2.5rem] p-8 md:p-10 border border-slate-200/50"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand-dark">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Education</h3>
            </div>

            <div className="flex flex-col gap-6 relative">
              {/* Timeline line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-brand-dark/20"></div>
              
              {education.map((edu, i) => (
                <div key={i} className="relative pl-8">
                  <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-brand-light border-4 border-white shadow-sm"></div>
                  <div className="text-[10px] sm:text-sm font-mono text-brand-dark mb-1 bg-white inline-block px-2 sm:px-3 py-0.5 sm:py-1 rounded-lg border border-slate-100 shadow-sm">{edu.year}</div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-800 mt-1">{edu.degree}</h4>
                  <a 
                    href={edu.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-slate-500 text-xs sm:text-sm mt-0.5 font-medium hover:text-brand-dark transition-colors inline-block"
                  >
                    {edu.school}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-bg/30 rounded-[2.5rem] p-8 md:p-10 border border-slate-200/50"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand-dark">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Work Experience</h3>
            </div>

            <div className="flex flex-col gap-5 relative">
              {/* Timeline line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-brand-dark/20"></div>
              
              {experiences.map((exp, i) => (
                <div key={i} className="relative pl-8">
                  <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-slate-400 border-4 border-white shadow-sm"></div>
                  <div className="flex flex-col md:flex-row md:items-center gap-0.5 md:gap-3 mb-0.5">
                    <span className="text-[10px] font-mono text-slate-600 bg-white inline-block px-1.5 py-0.5 rounded border border-slate-100 shadow-sm w-fit">{exp.year}</span>
                    <h4 className="text-sm sm:text-base font-bold text-slate-800 tracking-tight">{exp.company}</h4>
                  </div>
                  <p className="text-slate-500 text-[11px] sm:text-sm">{exp.role}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
