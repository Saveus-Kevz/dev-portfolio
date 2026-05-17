import { motion } from 'motion/react';
import { ExternalLink, Terminal, Globe, LayoutTemplate, PlayCircle, Calendar } from 'lucide-react';

export default function Works() {
  const projects = [
    {
      title: 'MINIT',
      description: 'A full-stack mini-mart management system featuring role-based access, inventory tracking, automated sales processing, and analytics.',
      url: 'https://minit-xdjw.onrender.com/',
      image: 'https://i.imgur.com/eQO3zsV.png',
      icon: Terminal,
      color: 'bg-emerald-100/50 text-emerald-700',
      tags: ['Spring Boot', 'React', 'JWT', 'MariaDB', 'Render']
    },
    {
      title: 'YouTube Clone',
      description: 'A responsive video-sharing platform interface with functional playback and aesthetic UI design, replicating the core user experience.',
      url: 'https://www.notion.so/Youtube-Clone-314e1d08525a805c9f4bfd367fa3ee86?source=copy_link',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop',
      icon: LayoutTemplate,
      color: 'bg-red-100/50 text-red-700',
      tags: ['HTML', 'CSS', 'Javascript']
    }
  ];

  const stack = ['JAVA', 'Springboot', 'MariaDB', 'JWT', 'Git', 'React', 'TypeScript', 'HTML', 'CSS', 'JavaScript'];

  return (
    <section id="works" className="w-full max-w-6xl mx-auto px-6 py-20">
      
      <div className="bg-brand-dark/5 rounded-[3rem] px-6 py-16 lg:p-20 border border-brand-dark/10">
        <div className="flex flex-col items-center mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight"
          >
            Featured Projects
          </motion.h2>
          <div className="w-20 h-1.5 bg-brand-dark/40 mt-6 rounded-full mb-6"></div>
          <p className="text-slate-500 font-medium mb-10 max-w-lg">
            From BPO navigation to full-stack creation.
          </p>
          
          {/* Tech Stack */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {stack.map((tech) => (
              <span key={tech} className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white text-brand-dark font-mono font-bold text-[10px] sm:text-sm tracking-wide rounded-lg sm:rounded-xl shadow-sm border border-slate-200">
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Combined Presentation Video */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full max-w-4xl mb-16 bg-slate-900 rounded-[2.5rem] p-3 md:p-6 shadow-2xl border border-slate-800 overflow-hidden relative"
          >
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-light/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
            
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-center text-left relative z-10">
              <div className="w-full lg:w-3/5 aspect-video shrink-0 bg-black rounded-[1.5rem] md:rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/12oEGg8b6qk"
                  title="MINIT Project Presentation"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="flex flex-col gap-3 md:gap-5 py-2 px-2 md:px-0">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-brand-light/20 text-brand-light rounded-full border border-brand-light/30">
                    <PlayCircle className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Demo Video</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-white/10 text-slate-300 rounded-full border border-white/10">
                    <Calendar className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">April 30, 2026</span>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="text-xl md:text-3xl font-extrabold text-white leading-tight">
                    MINIT Walkthrough
                  </h3>
                  <div className="w-12 h-1 bg-brand-light rounded-full"></div>
                </div>

                <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-sm">
                  Technical deep dive into the system architecture, focusing on Spring Security and the automated retail workflow.
                </p>

                <div className="flex items-center gap-3 mt-1">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-500 uppercase font-black tracking-tighter">Event</span>
                    <span className="text-xs md:text-sm font-bold text-white">Demo Day Presentation</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.a
              key={i}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col bg-white rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-200"
            >
              {/* Image Container */}
              <div className="aspect-[16/9] sm:aspect-[4/3] w-full overflow-hidden relative bg-slate-100">
                <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform duration-300 ${project.color}`}>
                    <project.icon className="w-5 h-5" />
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-5 md:p-8 flex flex-col gap-4 md:gap-6 relative text-left flex-grow">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-bold text-slate-900 text-lg md:text-2xl tracking-tight leading-tight">
                    {project.title}
                  </h3>
                  
                  <div className="w-8 h-8 md:w-10 md:h-10 shrink-0 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-brand-dark group-hover:text-white group-hover:scale-110 transition-all duration-300 border border-slate-100 shadow-sm">
                    <ExternalLink className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </div>
                </div>
                
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed line-clamp-3 md:line-clamp-none">
                  {project.description}
                </p>

                {/* Project Tags */}
                <div className="flex flex-wrap gap-1.5 md:gap-2 mt-auto pt-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className={`text-[9px] md:text-[10px] font-black px-2 md:px-2.5 py-0.5 md:py-1 rounded-md md:rounded-lg uppercase tracking-wider ${
                        tag === 'Spring Boot' || tag === 'MariaDB' || tag === 'JWT' || tag === 'React' 
                          ? 'bg-brand-dark/10 text-brand-dark border border-brand-dark/20' 
                          : 'bg-slate-50 text-slate-400 border border-slate-200'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

    </section>
  );
}
