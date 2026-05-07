import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronRight, CheckCircle2, Navigation, ArrowRight, Play, Eye, X,
  Laptop, Palette, Film, Smartphone,
  BatteryFull, Sparkles, Layers, Wand2,
  Smile, HelpCircle, Meh, ThumbsDown
} from 'lucide-react';
import React, { useState } from 'react';

const AppleLogo = ({ size = 18, fill = "currentColor", className = "" }: { size?: number, fill?: string, className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-14.558 0 270.558 315.162"
    width={size}
    height={size}
    fill={fill}
    className={className}
  >
    <path d="M213.803 167.03c.442 47.58 41.74 63.413 42.197 63.615-.35 1.116-6.599 22.563-21.757 44.716-13.104 19.153-26.705 38.235-48.13 38.63-21.05.388-27.82-12.483-51.888-12.483-24.061 0-31.582 12.088-51.51 12.871-20.68.783-36.428-20.71-49.64-39.793-27-39.033-47.633-110.3-19.928-158.406 13.763-23.89 38.36-39.017 65.056-39.405 20.307-.387 39.475 13.662 51.889 13.662 12.406 0 35.699-16.895 60.186-14.414 10.25.427 39.026 4.14 57.503 31.186-1.49.923-34.335 20.044-33.978 59.822M174.24 50.199c10.98-13.29 18.369-31.79 16.353-50.199-15.826.636-34.962 10.546-46.314 23.828-10.173 11.763-19.082 30.589-16.678 48.633 17.64 1.365 35.66-8.964 46.64-22.262" />
  </svg>
);

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const SurveyModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [formData, setFormData] = useState({
    uso: '',
    mejora: '',
    interes: '',
    email: ''
  });

  const nextStep = (data = {}) => {
    setFormData(prev => ({ ...prev, ...data }));
    setDirection(1);
    setStep(s => s + 1);
  };

  const prevStep = () => {
    setDirection(-1);
    setStep(s => s - 1);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 40 : -40,
      opacity: 0,
      scale: 0.97
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 40 : -40,
      opacity: 0,
      scale: 0.97,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    })
  };

  const questions = [
    {
      id: 'uso',
      title: '¿Cuál es tu uso principal de los dispositivos Apple?',
      options: [
        { label: 'Productividad y Trabajo', icon: <Laptop size={26} strokeWidth={1.5} /> },
        { label: 'Creatividad y Diseño', icon: <Palette size={26} strokeWidth={1.5} /> },
        { label: 'Entretenimiento', icon: <Film size={26} strokeWidth={1.5} /> },
        { label: 'Comunicación diaria', icon: <Smartphone size={26} strokeWidth={1.5} /> }
      ]
    },
    {
      id: 'mejora',
      title: '¿Qué aspecto priorizarías en futuras innovaciones?',
      options: [
        { label: 'Duración de batería', icon: <BatteryFull size={26} strokeWidth={1.5} /> },
        { label: 'Inteligencia Artificial', icon: <Sparkles size={26} strokeWidth={1.5} /> },
        { label: 'Integración del ecosistema', icon: <Layers size={26} strokeWidth={1.5} /> },
        { label: 'Diseño y ergonomía', icon: <Wand2 size={26} strokeWidth={1.5} /> }
      ]
    },
    {
      id: 'interes',
      title: '¿Te interesaría un dispositivo enfocado en el bienestar y la salud mental?',
      options: [
        { label: 'Muy interesado', icon: <Smile size={26} strokeWidth={1.5} /> },
        { label: 'Algo interesado', icon: <HelpCircle size={26} strokeWidth={1.5} /> },
        { label: 'Poco interesado', icon: <Meh size={26} strokeWidth={1.5} /> },
        { label: 'Nada interesado', icon: <ThumbsDown size={26} strokeWidth={1.5} /> }
      ]
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/40 backdrop-blur-md"
        >
          <div className="absolute inset-0 cursor-pointer" onClick={onClose} />
          
          <motion.div 
            initial={{ scale: 0.9, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 30, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-white/95 backdrop-blur-3xl rounded-[40px] shadow-2xl overflow-hidden flex flex-col"
            style={{ minHeight: '520px' }}
          >
            {/* Header / Progress */}
            <div className="px-8 py-6 flex items-center justify-between relative z-10">
              <div className="flex gap-1.5">
                {[0,1,2,3,4].map((s) => (
                  <div key={s} className={`h-1.5 rounded-full transition-all duration-500 ${s <= step ? 'bg-[#0071e3] w-8' : 'bg-gray-200 w-4'}`} />
                ))}
              </div>
              <button onClick={onClose} className="p-2 bg-[#f5f5f7] hover:bg-gray-200 rounded-full text-gray-500 transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 relative flex flex-col justify-center overflow-hidden px-8 pb-12 pt-4">
              <AnimatePresence custom={direction} mode="wait">
                {step === 0 && (
                  <motion.div key="intro" custom={direction} variants={variants} initial="enter" animate="center" exit="exit" className="flex flex-col items-center text-center">
                    <span className="text-xs uppercase tracking-widest text-[#86868b] font-semibold mb-4">Discovery Survey</span>
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f] mb-6">El futuro está en<br/>tus manos.</h2>
                    <p className="text-lg text-[#86868b] max-w-md mb-10">Tu experiencia nos guía. Completa esta breve encuesta para ayudarnos a definir la próxima generación de dispositivos Apple.</p>
                    <button onClick={() => nextStep()} className="bg-[#1d1d1f] hover:bg-black text-white px-10 py-4 rounded-full font-medium transition-colors text-lg flex items-center gap-2 shadow-lg shadow-black/10">
                      Comenzar <ArrowRight size={20} />
                    </button>
                  </motion.div>
                )}

                {step > 0 && step <= questions.length && (
                  <motion.div key={`q-${step}`} custom={direction} variants={variants} initial="enter" animate="center" exit="exit" className="flex flex-col w-full h-full justify-center">
                    <h2 className="text-3xl md:text-[32px] font-semibold tracking-tight text-[#1d1d1f] mb-10 leading-tight">
                      {questions[step - 1].title}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {questions[step - 1].options.map((opt, i) => (
                        <button 
                          key={i}
                          onClick={() => nextStep({ [questions[step - 1].id]: opt.label })}
                          className="flex flex-col items-center justify-center p-6 bg-[#f5f5f7] hover:bg-white border-[1.5px] border-transparent hover:border-[#0071e3] rounded-3xl transition-all duration-300 text-center shadow-sm hover:shadow-md group"
                        >
                          <span className="mb-3 text-[#1d1d1f] group-hover:text-[#0071e3] group-hover:scale-110 transition-all duration-300">{opt.icon}</span>
                          <span className="font-semibold text-[#1d1d1f]">{opt.label}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === questions.length + 1 && (
                  <motion.div key="email" custom={direction} variants={variants} initial="enter" animate="center" exit="exit" className="flex flex-col items-center text-center w-full justify-center">
                    <h2 className="text-4xl font-semibold tracking-tight text-[#1d1d1f] mb-4">Casi terminamos.</h2>
                    <p className="text-lg text-[#86868b] max-w-md mb-10">Introduce tu correo electrónico para recibir tu Apple Gift Card de 50€ como agradecimiento.</p>
                    
                    <form className="w-full max-w-md flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); nextStep(); }}>
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="tu@email.com" 
                        className="w-full bg-[#f5f5f7] border border-gray-200 rounded-2xl px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-[#0071e3] transition-all text-center text-[#1d1d1f]"
                      />
                      <button type="submit" className="bg-[#0071e3] hover:bg-[#0077ed] text-white px-8 py-4 rounded-2xl font-medium transition-colors text-lg shadow-sm w-full">
                        Reclamar recompensa
                      </button>
                    </form>
                  </motion.div>
                )}

                {step === questions.length + 2 && (
                  <motion.div key="success" custom={direction} variants={variants} initial="enter" animate="center" exit="exit" className="flex flex-col items-center text-center w-full justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                    >
                      <CheckCircle2 className="text-[#34c759] w-20 h-20 mb-6" />
                    </motion.div>
                    <h2 className="text-4xl font-semibold tracking-tight text-[#1d1d1f] mb-4">¡Gracias por tu visión!</h2>
                    <p className="text-lg text-[#86868b] max-w-md mb-10">Tus respuestas ayudarán a moldear el futuro. Hemos enviado tu tarjeta regalo a <b>{formData.email}</b>.</p>
                    <button onClick={onClose} className="bg-[#f5f5f7] hover:bg-gray-200 text-[#1d1d1f] px-10 py-4 rounded-full font-medium transition-colors text-lg">
                      Finalizar
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Optional Back button */}
            {step > 0 && step <= questions.length + 1 && (
               <div className="absolute bottom-6 left-8 z-20">
                 <button onClick={prevStep} className="text-sm font-medium text-[#86868b] hover:text-[#1d1d1f] transition-colors">
                   Atrás
                 </button>
               </div>
            )}
            
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const [isSurveyOpen, setIsSurveyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5f5f7] flex flex-col font-sans overflow-x-hidden relative selection:bg-[#0066cc] selection:text-white">
      {/* Background Gradients */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-tr from-blue-100 via-white to-gray-50 opacity-60 blur-3xl pointer-events-none rounded-full z-0"></div>

      {/* Navigation (Apple Style) */}
      <nav className="fixed top-0 left-0 right-0 h-[48px] bg-white/80 backdrop-blur-md z-50 flex items-center justify-center border-b border-gray-200">
        <div className="max-w-screen-lg w-full flex items-center justify-between px-4 text-[12px] font-medium tracking-wide text-gray-600">
          <a href="#" className="flex items-center gap-1 hover:text-black transition-colors text-black">
            <AppleLogo size={18} />
          </a>
          <div className="hidden md:flex gap-6">
            <a href="#" className="hover:text-black transition-colors text-gray-600">Encuesta</a>
            <a href="#" className="hover:text-black transition-colors text-gray-600">Tiendas</a>
            <a href="#" className="hover:text-black transition-colors text-gray-600">Productos</a>
            <a href="#" className="hover:text-black transition-colors text-gray-600">Soporte</a>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden bg-black pt-[48px] mb-32">
          {/* Striking Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=2600&auto=format&fit=crop" 
            alt="Apple Watch Impression Background" 
            className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
          />
          {/* Gradient to smooth transition into the white layout */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#f5f5f7]"></div>
          
          <div className="relative z-10 px-6 max-w-4xl mx-auto flex flex-col items-center mt-20">
            <FadeIn>
              <span className="text-[14px] font-semibold text-white/70 uppercase tracking-widest mb-4 block">Encuesta Apple 2026</span>
              <h1 className="text-5xl md:text-[88px] leading-[1.05] font-semibold tracking-tight text-white mb-6 drop-shadow-lg">
                Tu visión.<br />
                Nuestro futuro.
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <p className="text-xl md:text-[24px] text-gray-200 max-w-2xl font-medium tracking-tight mb-10 drop-shadow-md">
                Ayúdanos a mejorar tu experiencia Apple. ¡Tus comentarios dan forma a nuestros próximos productos!
              </p>
            </FadeIn>

            {/* Reward Badge */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="mb-10"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.82, y: 14 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="relative inline-flex items-center gap-4 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[20px] px-5 py-3.5 shadow-2xl shadow-black/30 overflow-hidden cursor-default select-none"
              >
                {/* Shimmer sweep */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.22) 50%, transparent 70%)',
                    width: '200%',
                  }}
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 5, ease: 'easeInOut' }}
                />

                {/* Mini Gift Card */}
                <div
                  className="relative w-11 h-7 rounded-[7px] flex-shrink-0 shadow-lg overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, #fbbf24 0%, #f97316 45%, #ec4899 100%)' }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <AppleLogo size={13} fill="white" />
                  </div>
                </div>

                {/* Text */}
                <div className="flex flex-col items-start leading-none gap-1">
                  <span className="text-[10px] font-semibold text-white/50 uppercase tracking-[0.12em]">Recompensa incluida</span>
                  <span className="text-[15px] font-semibold text-white tracking-tight">Apple Gift Card de 50€</span>
                </div>

                <div className="w-px h-6 bg-white/15 mx-0.5 flex-shrink-0" />

                <span className="text-[12px] text-white/45 font-medium tracking-wide pr-1">al completar</span>
              </motion.div>
            </motion.div>

            <FadeIn delay={0.25} className="flex flex-col sm:flex-row items-center gap-4">
              <button onClick={() => setIsSurveyOpen(true)} className="bg-white hover:bg-gray-100 text-black px-8 py-3.5 rounded-full font-medium tracking-wide transition-colors flex items-center justify-center min-w-[200px] cursor-pointer">
                Comenzar encuesta
              </button>
              <button className="bg-black/30 backdrop-blur-md hover:bg-black/50 text-white border border-white/20 px-8 py-3.5 rounded-full font-medium tracking-wide transition-colors flex items-center justify-center gap-1.5 group min-w-[200px]">
                Cómo funciona <span className="group-hover:translate-x-1 transition-transform"><ChevronRight size={16} /></span>
              </button>
            </FadeIn>
          </div>
        </section>

        {/* HOW IT WORKS (Apple Bento/Cards style) */}
        <section className="px-4 md:px-8 max-w-screen-xl mx-auto py-24 mb-20">
           <FadeIn>
             <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center text-[#1d1d1f] mb-16">
               Cómo funciona.
             </h2>
           </FadeIn>

           <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {[
                { step: "1", title: "Inicia la experiencia.", desc: "Abre nuestra breve encuesta interactiva de descubrimiento directamente en esta página.", icon: <Eye className="text-[#0071e3]" size={32} /> },
                { step: "2", title: "Comparte tu visión.", desc: "Responde a preguntas clave sobre tus necesidades tecnológicas diarias y tus experiencias con nuestros dispositivos.", icon: <Play className="text-[#0071e3]" size={32} /> },
                { step: "3", title: "Recibe tu recompensa.", desc: "Consigue una Apple Gift Card de 50€ directamente en tu email como agradecimiento por tu valioso tiempo.", icon: <CheckCircle2 className="text-[#0071e3]" size={32} /> }
              ].map((item, idx) => (
                <FadeIn key={item.step} delay={idx * 0.1} className="h-full">
                  <div className="bg-white/60 backdrop-blur-2xl border border-white/40 rounded-[28px] p-8 md:p-10 shadow-2xl shadow-black/5 h-full flex flex-col items-center text-center transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                    <div className="w-16 h-16 rounded-2xl bg-white/80 border border-gray-100 shadow-sm flex items-center justify-center mb-8 relative">
                      <span className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#1d1d1f] text-white flex items-center justify-center font-bold text-sm shadow-md">
                        {item.step}
                      </span>
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-[#1d1d1f] tracking-tight mb-4">{item.title}</h3>
                    <p className="text-[#86868b] leading-relaxed font-medium">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
           </div>
        </section>

        {/* GALLERY / SHOWCASE */}
        <section className="px-4 md:px-8 max-w-screen-xl mx-auto py-24 bg-white/60 backdrop-blur-2xl border border-white/40 rounded-[40px] shadow-2xl shadow-black/5 mb-20">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#1d1d1f] mb-4">
                Imprescindibles de Apple.
              </h2>
              <p className="text-xl text-[#86868b] font-medium">Herramientas para tu día a día.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
             <FadeIn delay={0.1} className="w-full aspect-[3/4] rounded-3xl overflow-hidden bg-gray-100 flex items-center justify-center shadow-inner relative group cursor-pointer">
                <img src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=800&auto=format&fit=crop" alt="iPhone" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
             </FadeIn>
             <FadeIn delay={0.2} className="w-full aspect-[3/4] rounded-3xl overflow-hidden bg-gray-100 flex items-center justify-center shadow-inner relative group cursor-pointer">
                <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop" alt="MacBook" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
             </FadeIn>
             <FadeIn delay={0.3} className="w-full aspect-[3/4] rounded-3xl overflow-hidden bg-gray-100 flex items-center justify-center shadow-inner relative group cursor-pointer">
                <img src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800&auto=format&fit=crop" alt="iPad" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
             </FadeIn>
             <FadeIn delay={0.4} className="w-full aspect-[3/4] rounded-3xl overflow-hidden bg-gray-100 flex items-center justify-center shadow-inner relative group cursor-pointer">
                <img src="https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=800&auto=format&fit=crop" alt="AirPods" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
             </FadeIn>
          </div>

          <div className="flex flex-col max-w-3xl mx-auto border-t border-gray-100 pt-8 gap-4">
             {[
               { label: "Apple Store App", btn: "Descargar la app" },
               { label: "Ver dispositivos", btn: "Comprar ahora" },
               { label: "Apple Retail", btn: "Ver ubicaciones" }
             ].map((link, i) => (
               <FadeIn delay={i * 0.1} key={link.label} className="flex flex-col sm:flex-row sm:items-center justify-between py-6 border-b border-gray-100 group cursor-pointer">
                 <span className="text-2xl font-semibold tracking-tight text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors">{link.label}</span>
                 <button className="mt-4 sm:mt-0 text-[#1d1d1f] bg-[#f5f5f7] hover:bg-[#e8e8ed] px-5 py-2.5 rounded-full font-medium text-sm transition-colors w-fit flex items-center gap-1.5">
                   {link.btn} <ChevronRight size={14} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                 </button>
               </FadeIn>
             ))}
          </div>
        </section>

        {/* SURVEY SECTION CTA */}
        <section className="px-4 md:px-8 max-w-screen-xl mx-auto py-24 bg-white/60 backdrop-blur-2xl border border-white/40 text-[#1d1d1f] rounded-[40px] shadow-2xl shadow-black/5 relative overflow-hidden mb-20">
          {/* Subtle glow effect behind */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-blue-50 via-white to-gray-100 opacity-80 blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
            <FadeIn className="order-2 md:order-1 relative rounded-3xl overflow-hidden aspect-[4/3] bg-gray-100 border border-white/50 shadow-sm">
               <img src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=1000&auto=format&fit=crop" alt="Apple Ecosystem" className="w-full h-full object-cover" />
               <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/90 backdrop-blur-md text-black border border-white/40 font-semibold rounded-full flex gap-1 flex-col items-center justify-center p-4 text-center leading-tight shadow-[0_4px_30px_rgba(0,0,0,0.1)] rotate-12 hover:rotate-0 transition-transform duration-500 cursor-pointer">
                 <span className="text-xs uppercase tracking-widest opacity-60">Tu</span>
                 <span className="text-xl tracking-tight">Opinión</span>
               </div>
            </FadeIn>
            
            <FadeIn className="order-1 md:order-2 flex flex-col items-start text-left">
              <Navigation className="text-[#0071e3] mb-6" size={40} />
              <h2 className="text-4xl md:text-[56px] font-semibold tracking-tight mb-4 leading-tight italic">
                Tu opinión nos inspira.
              </h2>
              <p className="text-[20px] text-[#86868b] font-medium mb-12">
                Participa en nuestra encuesta interactiva de producto y ayúdanos a seguir innovando. Recibe una Apple Gift Card de 50€ al finalizar.
              </p>
              
              <button onClick={() => setIsSurveyOpen(true)} className="bg-[#0071e3] hover:bg-[#0077ed] text-white px-8 py-4 rounded-full font-medium transition-colors text-lg shadow-sm flex items-center gap-2">
                Iniciar encuesta interactiva <ArrowRight size={20} />
              </button>
            </FadeIn>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 bg-white/50 backdrop-blur-md pt-16 pb-8 px-4 md:px-8 relative z-10">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 border-b border-gray-200 pb-10 mb-6">
           <div className="flex items-center gap-2 text-2xl font-semibold tracking-tight">
             <AppleLogo size={24} />
           </div>
           
           <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-gray-500">
             <a href="#" className="hover:text-black transition-colors">Encuesta</a>
             <a href="#" className="hover:text-black transition-colors">Tiendas</a>
             <a href="#" className="hover:text-black transition-colors">Productos</a>
             <a href="#" className="hover:text-black transition-colors">Contacto</a>
           </div>

           <div className="flex gap-4">
             <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors text-black"><span className="sr-only">Facebook</span><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"/></svg></a>
             <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors text-black"><span className="sr-only">Twitter X</span><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
             <a href="#" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors text-black"><span className="sr-only">Instagram</span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
           </div>
        </div>

        <div className="max-w-screen-xl mx-auto text-center text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>Copyright © 2026 Apple Inc. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-black">Política de privacidad</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-black">Términos de uso</a>
          </div>
        </div>
      </footer>
      
      {/* Global Survey Modal Overlay */}
      <SurveyModal isOpen={isSurveyOpen} onClose={() => setIsSurveyOpen(false)} />
    </div>
  );
}
