import { AnimatePresence, motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { volunteerData as data } from '../../data/volunteer';

const VolunteerWorkComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((p) => (p + 1) % data.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const openModal = (cert) => { setSelectedCertificate(cert); setIsModalOpen(true); };
  const closeModal = () => { setIsModalOpen(false); setSelectedCertificate(null); };
  const goToSlide = (i) => setCurrentSlide(i);

  const item = data[currentSlide];

  return (
    <section
      ref={ref}
      className="relative min-h-screen px-4 py-24"
      style={{ background: 'linear-gradient(180deg, #0d0d1a 0%, #0a0a0f 100%)' }}
    >
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)', filter: 'blur(50px)' }} />

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-subtitle mb-3">// community impact</p>
          <h2 className="section-title text-3xl font-bold">
            Volunteer <span className="text-gradient-cyan">Work</span>
          </h2>
        </motion.div>

        {/* Slide counter & nav */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-between mb-6"
        >
          <span className="text-xs font-mono text-slate-500">
            {String(currentSlide + 1).padStart(2, '0')} / {String(data.length).padStart(2, '0')}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => goToSlide((currentSlide - 1 + data.length) % data.length)}
              className="p-1.5 rounded-lg text-slate-500 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all border border-white/08"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => goToSlide((currentSlide + 1) % data.length)}
              className="p-1.5 rounded-lg text-slate-500 hover:text-cyan-400 hover:bg-cyan-400/10 transition-all"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Slide Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(13,13,26,0.85)',
              border: '1px solid rgba(255,255,255,0.06)',
              backdropFilter: 'blur(16px)',
            }}
          >
            {/* Gradient accent top */}
            <div className={`h-1 w-full bg-gradient-to-r ${item.color}`} />

            {/* Ambient hover glow */}
            <div className="absolute inset-0 pointer-events-none rounded-2xl"
              style={{ background: `radial-gradient(ellipse at top left, ${item.glow} 0%, transparent 50%)` }} />

            <div className="relative p-8 flex flex-col md:flex-row items-start gap-6">
              {/* Number badge */}
              <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold text-white bg-gradient-to-br ${item.color}`}
                style={{ boxShadow: `0 8px 24px ${item.glow}` }}>
                {String(currentSlide + 1).padStart(2, '0')}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                  <div>
                    <h3 className="text-base font-semibold text-slate-100">{item.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`text-xs font-mono px-2 py-0.5 rounded-md bg-gradient-to-r ${item.color} text-white`}
                        style={{ fontSize: '10px' }}>
                        {item.role}
                      </span>
                      <span className="text-xs text-slate-500 font-mono">{item.organization}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => openModal(item.certificate)}
                    className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-cyan-400 hover:bg-cyan-400/10 transition-all"
                    style={{ border: '1px solid rgba(6,182,212,0.3)' }}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Certificate
                  </button>
                </div>

                <div className="h-px mb-4" style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.07), transparent)' }} />

                <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {data.map((d, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === i
                  ? 'w-6 h-1.5 bg-cyan-400'
                  : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(8px)' }}
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute -top-4 -right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                style={{ border: '1px solid rgba(255,255,255,0.15)' }}
              >
                ×
              </button>
              <img
                src={selectedCertificate}
                alt="Certificate"
                className="w-full rounded-2xl shadow-2xl"
                style={{ border: '1px solid rgba(6,182,212,0.2)' }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VolunteerWorkComponent;
