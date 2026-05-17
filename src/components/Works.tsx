import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Terminal, Globe, LayoutTemplate, PlayCircle, Calendar, ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';

export default function Works() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const projects = [
    {
      title: 'MINIT',
      description: 'Full-stack mini-mart management system with inventory, staff, sales, and reporting modules. Built RESTful APIs with Spring Boot JPA, secured with JWT, and integrated with ReactJS frontend.',
      url: 'https://minit-xdjw.onrender.com/',
      image: 'https://i.imgur.com/eQO3zsV.png',
      icon: Terminal,
      color: 'bg-emerald-100/50 text-emerald-700',
      tags: ['Spring Boot', 'ReactJS', 'JWT', 'MariaDB', 'Render'],
      isLive: true
    },
    {
      title: 'IronBeast',
      description: 'A console-based gym management app that imitates Spring MVC architecture, built with pure JAVA, applying OOP principles and file-based persistence for CRUD operations.',
      url: 'https://a2dbcc86-ebf6-473a-9a5d-2a9688e9ddbd-00-33ewyv4jid7rt.sisko.replit.dev',
      image: 'https://i.imgur.com/2OYSw37.png',
      icon: Terminal,
      color: 'bg-orange-100/50 text-orange-700',
      tags: ['JAVA'],
      iframeUrl: 'https://a2dbcc86-ebf6-473a-9a5d-2a9688e9ddbd-00-33ewyv4jid7rt.sisko.replit.dev',
      isLive: true
    },
    {
      title: 'YouTube Clone',
      description: 'Built to master CSS Grid, Flexbox, and positioning. Currently personalizing the design.',
      url: 'https://my-youtube-clone-alpha.vercel.app/',
      image: 'https://i.imgur.com/UqySZZw.png',
      icon: LayoutTemplate,
      color: 'bg-red-100/50 text-red-700',
      tags: ['HTML', 'CSS'],
      isLive: true
    }
  ];

  const stack = ['JAVA', 'Springboot', 'MariaDB', 'JWT', 'Git', 'ReactJS', 'TypeScript', 'HTML', 'CSS', 'JavaScript'];

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      checkScroll();
      return () => {
        el.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, []);

  const scrollHandler = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="works" className="w-full max-w-7xl mx-auto px-4 md:px-6 py-20">
      
      <div className="bg-brand-dark/5 rounded-[2.5rem] md:rounded-[3rem] px-4 py-12 md:p-16 lg:p-20 border border-brand-dark/10">
        <div className="flex flex-col items-center mb-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight"
          >
            Portfolio Showcase
          </motion.h2>
          <div className="w-16 md:w-20 h-1.5 bg-brand-dark/40 mt-4 md:mt-6 rounded-full mb-6"></div>
          <p className="text-slate-500 font-medium mb-8 md:mb-10 max-w-lg text-sm md:text-base px-4">
            A journey from customer service to building full-stack engineering solutions.
          </p>
          
          {/* Tech Stack */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12 md:mb-16"
          >
            {stack.map((tech) => (
              <span key={tech} className="px-2.5 py-1 md:px-4 md:py-2 bg-white text-brand-dark font-mono font-bold text-xs md:text-base tracking-wide rounded-lg md:rounded-xl shadow-sm border border-slate-200">
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Featured Presentation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full max-w-5xl mb-16 bg-slate-900 rounded-[2rem] md:rounded-[2.5rem] p-4 md:p-6 shadow-2xl border border-slate-800 overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-light/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
            
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-center text-left relative z-10">
              <div className="w-full lg:w-3/5 aspect-video shrink-0 bg-black rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 group cursor-pointer"
                onClick={() => setSelectedProject(0)}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-brand-light flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                    <PlayCircle className="w-8 h-8 text-brand-dark fill-brand-dark" />
                  </div>
                </div>
                <iframe 
                  className="w-full h-full pointer-events-none"
                  src="https://www.youtube.com/embed/12oEGg8b6qk?controls=0"
                  title="MINIT Project Presentation"
                ></iframe>
              </div>
              
              <div className="flex flex-col gap-3 md:gap-4 py-2">
                <div className="flex flex-wrap items-center gap-2 md:gap-3">
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-brand-light/20 text-brand-light rounded-full border border-brand-light/30">
                    <PlayCircle className="w-3 h-3 md:w-3.5 md:h-3.5" />
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider">Demo Video</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 bg-white/10 text-slate-300 rounded-full border border-white/10">
                    <Calendar className="w-3 h-3 md:w-3.5 md:h-3.5" />
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-wider">May 2026</span>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="text-xl md:text-3xl font-extrabold text-white leading-tight">
                    MINIT Project Walkthrough
                  </h3>
                  <div className="w-12 h-1 bg-brand-light rounded-full"></div>
                </div>

                <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-sm">
                  Comprehensive demonstration of the retail system architecture and Spring Security integration.
                </p>

                <button 
                  onClick={() => setSelectedProject(0)}
                  className="flex items-center gap-2 mt-2 px-5 py-2.5 bg-brand-light text-brand-dark font-bold text-sm rounded-xl hover:bg-brand-light/90 transition-colors w-fit"
                >
                  Watch Full Presentation
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Improved Project Grid/Slider */}
        <div className="relative group max-w-7xl mx-auto px-4 md:px-0">
          {/* Navigation Controls - Hidden on Mobile */}
          <div className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-20 hidden md:block">
            <button 
              onClick={() => scrollHandler('left')}
              disabled={!canScrollLeft}
              className={`p-3 rounded-full bg-white shadow-xl border border-slate-100 transition-all ${!canScrollLeft ? 'opacity-0 scale-90' : 'opacity-100 scale-100 hover:bg-brand-light hover:text-brand-dark'}`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-20 hidden md:block">
            <button 
              onClick={() => scrollHandler('right')}
              disabled={!canScrollRight}
              className={`p-3 rounded-full bg-white shadow-xl border border-slate-100 transition-all ${!canScrollRight ? 'opacity-0 scale-90' : 'opacity-100 scale-100 hover:bg-brand-light hover:text-brand-dark'}`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div 
            ref={scrollRef}
            className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-visible pb-8 md:pb-0 snap-x snap-mandatory scrollbar-hide md:[mask-image:none]"
          >
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="min-w-[85vw] sm:min-w-[45vw] md:min-w-0 snap-center md:snap-align-none"
              >
                <div className="group flex flex-col h-full bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-200 group/card">
                  {/* Image Container */}
                  <div 
                    className="aspect-video w-full overflow-hidden relative bg-slate-100 cursor-pointer"
                    onClick={() => setSelectedProject(i)}
                  >
                    <div className="absolute inset-0 bg-slate-900/10 group-hover/card:bg-transparent transition-colors z-10" />
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover/card:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity z-20 bg-brand-dark/40 backdrop-blur-[2px]">
                      <div className="px-4 py-2 bg-white rounded-xl font-bold text-brand-dark flex items-center gap-2 shadow-xl transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-300">
                        <Maximize2 className="w-4 h-4" />
                        Quick View
                      </div>
                    </div>

                    <div className="absolute top-4 left-4 z-30">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-lg transform -rotate-3 group-hover/card:rotate-0 transition-transform duration-300 ${project.color}`}>
                        <project.icon className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 md:p-8 flex flex-col gap-4 relative text-left flex-grow">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-extrabold text-slate-900 text-xl md:text-2xl tracking-tight leading-tight">
                        {project.title}
                      </h3>
                      
                      <a 
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 shrink-0 rounded-full bg-slate-50 flex items-center justify-center group-hover/card:bg-brand-dark group-hover/card:text-white group-hover/card:scale-110 transition-all duration-300 border border-slate-100 shadow-sm"
                        title="Open App"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                    
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed line-clamp-3 overflow-hidden">
                      {project.description}
                    </p>

                    {/* Bottom Meta */}
                    <div className="mt-auto pt-4 flex flex-col gap-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span 
                            key={tag} 
                            className={`text-[10px] md:text-xs font-black px-2.5 py-1 rounded-lg uppercase tracking-wider ${
                              tag === 'Spring Boot' || tag === 'MariaDB' || tag === 'JWT' || tag === 'ReactJS' || tag === 'JAVA'
                                ? 'bg-brand-dark/10 text-brand-dark border border-brand-dark/20' 
                                : 'bg-slate-50 text-slate-400 border border-slate-200'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <button 
                        onClick={() => setSelectedProject(i)}
                        className="text-xs font-bold text-slate-400 hover:text-brand-dark transition-colors flex items-center gap-1.5 w-fit"
                      >
                        View Details & Demo
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 lg:p-12 bg-slate-950/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white w-full max-w-6xl max-h-[90vh] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-50 p-2 bg-black/10 hover:bg-black/20 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Media Part */}
              <div className="w-full md:w-3/5 bg-slate-100 flex items-center justify-center relative group">
                {projects[selectedProject].iframeUrl ? (
                  <iframe 
                    src={projects[selectedProject].iframeUrl}
                    className="w-full h-full min-h-[300px] md:min-h-[500px]"
                    title={projects[selectedProject].title}
                  />
                ) : selectedProject === 0 ? (
                  <div className="w-full aspect-video">
                    <iframe 
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/12oEGg8b6qk?autoplay=1"
                      title="MINIT Project Presentation"
                      allow="autoplay"
                    />
                  </div>
                ) : (
                  <img 
                    src={projects[selectedProject].image} 
                    alt={projects[selectedProject].title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Info Part */}
              <div className="w-full md:w-2/5 p-8 md:p-12 overflow-y-auto flex flex-col gap-6 md:gap-8 bg-white">
                <div className="flex flex-col gap-2">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${projects[selectedProject].color} mb-3`}>
                    {(() => {
                      const Icon = projects[selectedProject].icon;
                      return <Icon className="w-6 h-6" />;
                    })()}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                    {projects[selectedProject].title}
                  </h2>
                  <div className="w-16 h-1.5 bg-brand-light rounded-full"></div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs font-black uppercase text-slate-400 tracking-widest">About Project</h4>
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                    {projects[selectedProject].description}
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xs font-black uppercase text-slate-400 tracking-widest">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[selectedProject].tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-lg border border-slate-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-6 flex flex-col gap-3">
                  <a 
                    href={projects[selectedProject].url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-3 w-full py-4 bg-brand-dark text-white rounded-2xl font-bold shadow-lg hover:shadow-brand-dark/20 hover:-translate-y-0.5 transition-all"
                  >
                    <Globe className="w-5 h-5" />
                    Launch Live Project
                  </a>
                  <p className="text-xs text-slate-400 text-center font-medium">
                    Opened in a new browser tab for the full experience.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
