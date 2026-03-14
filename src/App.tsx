import ContactForm from "./components/ContactForm.tsx";
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  MessageCircle, Globe, Share2, Users, 
  Brain, Zap, GitBranch, Smartphone,
  Scissors, Dumbbell, Stethoscope,
  Play, ChevronRight, Phone, Mail, MapPin
} from 'lucide-react';

const Navbar = ({ openForm }: { openForm: () => void }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card rounded-none border-x-0 border-t-0 border-b-white/10 px-6 py-4 flex justify-between items-center bg-black/50">
      <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
        <span className="text-neon-blue">AI</span>GROWTH
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
        {['Home', 'Pricing', 'Services', 'Blog', 'Contact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white relative group">
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>
      <button 
      onClick={openForm}
      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 py-2 rounded-full font-semibold text-sm transition-all shadow-[0_0_15px_rgba(0,229,255,0.4)] hover:shadow-[0_0_25px_rgba(0,229,255,0.6)] animate-pulse hover:animate-none">
        BOOK A FREE DEMO
      </button>
    </nav>
  );
};

const Hero = ({ openForm }: { openForm: () => void }) => {
  const [text, setText] = useState('');
  const fullText = "AUTOMATE. GROW. DOMINATE.";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Tunnel Particles */}
      <div className="absolute inset-0 z-0 opacity-30">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              scale: 0,
              opacity: 0
            }}
            animate={{ 
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
            }}
            transition={{ 
              duration: Math.random() * 3 + 2, 
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 z-10">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 h-32 md:h-40">
            <span className="typing-container text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              {text}
            </span>
          </h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 1 }}
            className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0"
          >
            Your 24/7 AI Employee on <span className="text-neon-blue font-semibold">WhatsApp</span> & Web.
          </motion.p>
          <motion.button 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5 }}
            onClick={openForm}
            className="bg-white/10 hover:bg-white/20 border border-cyan-500/50 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:shadow-[0_0_30px_rgba(0,229,255,0.3)] backdrop-blur-sm"
          >
            BOOK A FREE DEMO
          </motion.button>
        </div>

        <div className="flex-1 relative w-full max-w-lg aspect-square">
          {/* 3D Brain Simulation */}
          <motion.div 
            animate={{ rotateY: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="w-full h-full relative"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_30px_rgba(0,229,255,0.5)]">
              {/* Simplified Brain Path */}
              <path d="M100,20 C50,20 20,60 20,100 C20,140 50,180 100,180 C150,180 180,140 180,100 C180,60 150,20 100,20 Z" fill="none" stroke="rgba(0,229,255,0.3)" strokeWidth="2" />
              <path d="M100,20 C70,40 40,80 40,100 C40,120 70,160 100,180" fill="none" stroke="rgba(0,229,255,0.5)" strokeWidth="1" />
              <path d="M100,20 C130,40 160,80 160,100 C160,120 130,160 100,180" fill="none" stroke="rgba(0,229,255,0.5)" strokeWidth="1" />
              <path d="M20,100 C50,90 80,90 100,100 C120,110 150,110 180,100" fill="none" stroke="rgba(0,229,255,0.4)" strokeWidth="1" />
              
              {/* Inner circuits */}
              <path d="M60,60 Q100,100 140,60" fill="none" stroke="rgba(176,38,255,0.6)" strokeWidth="1.5" className="data-stream" />
              <path d="M60,140 Q100,100 140,140" fill="none" stroke="rgba(176,38,255,0.6)" strokeWidth="1.5" className="data-stream" />
              <path d="M40,100 L160,100" fill="none" stroke="rgba(0,229,255,0.6)" strokeWidth="1.5" className="data-stream" />
            </svg>
            
            {/* Synapses */}
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                className="synapse"
                style={{
                  top: `${Math.random() * 60 + 20}%`,
                  left: `${Math.random() * 60 + 20}%`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    { icon: <MessageCircle size={32} />, title: 'WhatsApp', color: 'text-green-400', border: 'hover:border-green-500/50', shadow: 'hover:shadow-[0_0_30px_rgba(74,222,128,0.2)]' },
    { icon: <Globe size={32} />, title: 'Website Chat', color: 'text-blue-400', border: 'hover:border-blue-500/50', shadow: 'hover:shadow-[0_0_30px_rgba(96,165,250,0.2)]' },
    { icon: <Share2 size={32} />, title: 'Social Media', color: 'text-purple-400', border: 'hover:border-purple-500/50', shadow: 'hover:shadow-[0_0_30px_rgba(192,132,252,0.2)]' },
    { icon: <Users size={32} />, title: 'Lead Management', color: 'text-cyan-400', border: 'hover:border-cyan-500/50', shadow: 'hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]' },
  ];

  return (
    <section id="services" className="py-24 relative z-10">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">THE COMPLETE AI EMPLOYEE</h2>
          <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
            Start complete AI automation whatsapp and omni-channel chat, social media, servicing to your real employees.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card p-8 flex flex-col items-center justify-center gap-4 cursor-pointer group relative ${f.border} ${f.shadow}`}
            >
              <div className={`${f.color} transition-transform duration-300 group-hover:scale-125 group-hover:animate-pulse`}>
                {f.icon}
              </div>
              <h3 className="font-semibold text-lg">{f.title}</h3>
              
              {/* WhatsApp specific popup */}
              {f.title === 'WhatsApp' && (
                <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-48 bg-[#075e54] rounded-xl p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-2xl border border-green-400/30 z-20 translate-y-4 group-hover:translate-y-0">
                  <div className="flex items-center gap-2 mb-2 border-b border-white/10 pb-2">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center"><Brain size={14} className="text-white"/></div>
                    <span className="text-xs font-bold text-white">AI Assistant</span>
                  </div>
                  <div className="bg-[#dcf8c6] text-black text-[10px] p-2 rounded-lg rounded-tl-none mb-1">
                    Hi! How can I help you book an appointment today?
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pillars = () => {
  const [hoveredPillar, setHoveredPillar] = useState<number | null>(null);

  const pillars = [
    { id: 1, title: 'Gen AI', subtitle: 'THE BRAIN', icon: <Brain />, pos: 'col-start-1 row-start-1', color: 'cyan' },
    { id: 2, title: 'Automation', subtitle: 'THE HANDS', icon: <Zap />, pos: 'col-start-1 row-start-3', color: 'purple' },
    { id: 3, title: 'Agentic AI', subtitle: 'THE DECISION MAKER', icon: <GitBranch />, pos: 'col-start-3 row-start-1', color: 'purple' },
    { id: 4, title: 'WhatsApp Auto', subtitle: 'THE MAIN FEATURE', icon: <Smartphone />, pos: 'col-start-3 row-start-3', color: 'cyan' },
  ];

  return (
    <section className="py-24 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">THE 4-PILLAR SYSTEM</h2>
          <p className="text-gray-400">Choose our premium AI automation solutions.</p>
        </div>

        <div className="relative max-w-4xl mx-auto aspect-square md:aspect-video flex items-center justify-center">
          {/* SVG Connections */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
            {/* 1 to 3 */}
            <path d="M 20% 20% Q 50% 10% 80% 20%" fill="none" stroke={hoveredPillar === 1 || hoveredPillar === 3 ? "#00e5ff" : "rgba(255,255,255,0.1)"} strokeWidth="2" className={hoveredPillar ? "data-stream" : ""} />
            {/* 1 to 4 */}
            <path d="M 20% 20% L 80% 80%" fill="none" stroke={hoveredPillar === 1 || hoveredPillar === 4 ? "#b026ff" : "rgba(255,255,255,0.1)"} strokeWidth="2" className={hoveredPillar ? "data-stream" : ""} />
            {/* 2 to 3 */}
            <path d="M 20% 80% L 80% 20%" fill="none" stroke={hoveredPillar === 2 || hoveredPillar === 3 ? "#00e5ff" : "rgba(255,255,255,0.1)"} strokeWidth="2" className={hoveredPillar ? "data-stream" : ""} />
            {/* 2 to 4 */}
            <path d="M 20% 80% Q 50% 90% 80% 80%" fill="none" stroke={hoveredPillar === 2 || hoveredPillar === 4 ? "#b026ff" : "rgba(255,255,255,0.1)"} strokeWidth="2" className={hoveredPillar ? "data-stream" : ""} />
            
            {/* Core AI in center */}
            <circle cx="50%" cy="50%" r="40" fill="rgba(0,229,255,0.05)" stroke="#00e5ff" strokeWidth="2" className="animate-pulse" />
            <text x="50%" y="50%" textAnchor="middle" dy=".3em" fill="#fff" fontSize="12" fontWeight="bold">CORE AI</text>
          </svg>

          {/* Pillar Cards */}
          <div className="grid grid-cols-3 grid-rows-3 w-full h-full relative z-10 gap-4">
            {pillars.map((p) => (
              <div 
                key={p.id}
                className={`${p.pos} glass-card p-6 flex flex-col items-start justify-center transition-all duration-500 ${hoveredPillar && hoveredPillar !== p.id ? 'opacity-30 scale-95' : 'opacity-100 scale-100 hover:shadow-[0_0_30px_rgba(0,229,255,0.2)]'}`}
                onMouseEnter={() => setHoveredPillar(p.id)}
                onMouseLeave={() => setHoveredPillar(null)}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl font-bold text-gray-500">{p.id}.</span>
                  <h3 className="text-xl font-bold">{p.title}</h3>
                </div>
                <p className={`text-xs font-semibold tracking-wider ${p.color === 'cyan' ? 'text-neon-blue' : 'text-neon-purple'}`}>— {p.subtitle}</p>
                <div className="mt-4 p-3 bg-white/5 rounded-lg w-full flex justify-center text-gray-300">
                  {p.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Flow = () => {
  const steps = [
    { id: 1, text: 'Customer Message', detail: 'Lead sends a WhatsApp message.' },
    { id: 2, text: 'AI Understands', detail: 'NLP analyzes intent and context.' },
    { id: 3, text: 'Natural Reply', detail: 'Human-like response generated.' },
    { id: 4, text: 'Lead Saved', detail: 'Data pushed to CRM via n8n.' },
    { id: 5, text: 'Owner Alerted', detail: 'Notification sent to your team.' },
  ];

  const examples = [
    { icon: <Scissors size={40} className="text-pink-400" />, title: 'Salon', stat: '+40%', desc: 'bookings' },
    { icon: <Dumbbell size={40} className="text-blue-400" />, title: 'Gym', stat: '24/7', desc: 'lead capture' },
    { icon: <Stethoscope size={40} className="text-green-400" />, title: 'Clinic', stat: '-60%', desc: 'admin work' },
  ];

  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">SIMPLE & POWERFUL FLOW</h2>
          <p className="text-gray-400">The most efficient lead generation pipeline.</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-20">
          {/* Left: Vertical Flow */}
          <div className="flex flex-col items-center relative">
            <div className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500/20 via-purple-500/50 to-cyan-500/20 left-1/2 -translate-x-1/2 z-0"></div>
            
            {steps.map((step, i) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 mb-8 last:mb-0 group cursor-pointer"
              >
                <div className="glass-card px-6 py-3 rounded-full border-cyan-500/30 group-hover:border-cyan-400 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] bg-[#0a0a0a]">
                  <span className="font-medium">{step.text}</span>
                </div>
                {/* Tooltip */}
                <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 w-48 p-3 glass-card text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {step.detail}
                </div>
                
                {i < steps.length - 1 && (
                  <div className="h-8 w-px bg-cyan-500/50 mx-auto my-2"></div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Right: Examples */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {examples.map((ex, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + (i * 0.2) }}
                className="glass-card p-6 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform"
              >
                <div className="mb-4 p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                  {ex.icon}
                </div>
                <h4 className="font-bold text-lg mb-2">{ex.title}</h4>
                <div className="text-2xl font-black text-neon-blue mb-1">{ex.stat}</div>
                <p className="text-sm text-gray-400">{ex.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    { name: 'BASIC', setup: '₹5k', monthly: '₹3k', popular: false },
    { name: 'AUTOMATION', setup: '₹15k', monthly: '₹7k', popular: true },
    { name: 'AGENTIC SYSTEM', setup: '₹30k', monthly: '₹12k', popular: false },
  ];

  return (
    <section id="pricing" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">PRICING</h2>
          <p className="text-gray-400">Choose your premium AI Automation solutions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`glass-card light-scan p-8 flex flex-col items-center text-center relative ${plan.popular ? 'border-cyan-500/50 shadow-[0_0_30px_rgba(0,229,255,0.15)] scale-105 z-10' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-xl font-bold mb-6 tracking-wider">{plan.name}</h3>
              <div className="text-5xl font-black mb-2">{plan.setup}</div>
              <p className="text-sm text-gray-400 mb-6">Setup fee</p>
              <div className="text-3xl font-bold text-neon-blue mb-2">{plan.monthly}</div>
              <p className="text-sm text-gray-400 mb-8">Monthly maintenance</p>
              
              <button className={`w-full py-3 rounded-full font-bold transition-all ${plan.popular ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-[0_0_15px_rgba(0,229,255,0.4)]' : 'bg-white/10 hover:bg-white/20 text-white'}`}>
                Book now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Demos = () => {
  return (
    <section className="py-24 relative z-10 bg-white/5 border-y border-white/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">SEE OUR AI EMPLOYEES IN ACTION</h2>
          <p className="text-gray-400">Watch how we transform businesses.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Salon Demo */}
          <div className="glass-card p-6 flex flex-col items-center text-center group">
            <div className="w-full aspect-video bg-black/50 rounded-lg mb-6 relative overflow-hidden flex items-center justify-center border border-white/10 group-hover:border-cyan-500/50 transition-colors cursor-pointer">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity"></div>
              <div className="w-16 h-16 rounded-full bg-cyan-500/80 flex items-center justify-center z-10 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(0,229,255,0.5)]">
                <Play className="text-white ml-1" fill="currentColor" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
              <Scissors className="text-pink-400" /> Salon AI Assistant Demo
            </h3>
            <p className="text-neon-blue font-semibold mb-4">Salons get +40% bookings</p>
            <button className="text-sm font-bold tracking-wider text-gray-300 hover:text-white flex items-center gap-1">
              PLAY SALON DEMO <ChevronRight size={16} />
            </button>
          </div>

          {/* Clinic Demo */}
          <div className="glass-card p-6 flex flex-col items-center text-center group">
            <div className="w-full aspect-video bg-black/50 rounded-lg mb-6 relative overflow-hidden flex items-center justify-center border border-white/10 group-hover:border-purple-500/50 transition-colors cursor-pointer">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity"></div>
              <div className="w-16 h-16 rounded-full bg-purple-500/80 flex items-center justify-center z-10 group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(176,38,255,0.5)]">
                <Play className="text-white ml-1" fill="currentColor" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
              <Stethoscope className="text-green-400" /> Clinic AI Assistant Demo
            </h3>
            <p className="text-neon-purple font-semibold mb-4">Clinics reduce admin by 60%</p>
            <button className="text-sm font-bold tracking-wider text-gray-300 hover:text-white flex items-center gap-1">
              PLAY CLINIC DEMO <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="py-12 relative z-10 border-t border-white/10 mt-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-bold text-lg mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"><Phone size={16} /> +91 1234567890</li>
            <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"><Mail size={16} /> contact@aigrowth.com</li>
            <li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer"><MapPin size={16} /> Mumbai, India</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">Social</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="hover:text-cyan-400 transition-colors cursor-pointer flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-cyan-400"></div> LinkedIn</li>
            <li className="hover:text-cyan-400 transition-colors cursor-pointer flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-cyan-400"></div> Twitter</li>
            <li className="hover:text-cyan-400 transition-colors cursor-pointer flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-cyan-400"></div> Instagram</li>
          </ul>
        </div>
        <div className="flex flex-col items-start md:items-end justify-center">
          <div className="text-3xl font-bold tracking-tighter mb-2">
            <span className="text-neon-blue">AI</span>GROWTH
          </div>
          <p className="text-xs text-gray-500">© 2026 AI Growth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <div className="min-h-screen bg-grid relative text-gray-100 selection:bg-cyan-500/30">
      {/* Background Plasma Effects */}
      <div className="plasma-glow plasma-blue"></div>
      <div className="plasma-glow plasma-purple"></div>

      <Navbar openForm={() => setIsFormOpen(true)} />
      <Hero openForm={() => setIsFormOpen(true)} />
      <Features />
      <Pillars />
      <Flow />
      <Pricing />
      <Demos />
      {isFormOpen && <ContactForm closeForm={() => setIsFormOpen(false)} />}
      <Footer />
    </div>
  );
}