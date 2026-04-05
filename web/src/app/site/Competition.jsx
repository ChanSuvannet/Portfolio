import { AnimatePresence, motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { competitionData as data } from '../../data/competition';

const CompetitionComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentMainSlide, setCurrentMainSlide] = useState(0);
  const [currentModalSlide, setCurrentModalSlide] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (data.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentMainSlide((p) => (p + 1) % data.length);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  const openModal = (event) => {
    setSelectedEvent(event);
    setCurrentModalSlide(0);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
    document.body.style.overflow = '';
  };

  const nextModal  = () => setCurrentModalSlide((p) => (p + 1) % selectedEvent.images.length);
  const prevModal  = () => setCurrentModalSlide((p) => (p - 1 + selectedEvent.images.length) % selectedEvent.images.length);
  const goToSlide  = (i) => setCurrentModalSlide(i);

  const current = data[currentMainSlide];

  return (
    <section
      ref={ref}
      className="relative min-h-screen px-4 py-24"
      style={{ background: 'linear-gradient(180deg, #0a0a0f 0%, #0d0d1a 100%)' }}
    >
      {/* Ambient */}
      <div className="absolute top-1/3 right-0 w-80 h-80 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)', filter: 'blur(50px)' }} />

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="section-subtitle mb-3">// events</p>
          <h2 className="section-title text-3xl font-bold">
            Competition <span className="text-gradient-purple">Events</span>
          </h2>
          <p className="text-sm text-slate-500 mt-3">Events I've Participated In</p>
        </motion.div>

        {/* Main carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMainSlide}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-2xl overflow-hidden cursor-pointer group"
              style={{
                background: 'rgba(13,13,26,0.85)',
                border: '1px solid rgba(255,255,255,0.06)',
                backdropFilter: 'blur(16px)',
              }}
              onClick={() => openModal(current)}
            >
              {/* Accent top bar */}
              <div className={`h-0.5 bg-gradient-to-r ${current.color}`} />

              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <motion.img
                  src={current.images[0]}
                  alt={current.title}
                  className="w-full h-full object-cover"
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.6 }}
                />
                {/* Overlay */}
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(13,13,26,0.9) 100%)' }} />

                {/* Glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(ellipse at top, ${current.glow} 0%, transparent 60%)` }} />

                {/* Event badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${current.color}`}
                    style={{ boxShadow: `0 4px 16px ${current.glow}` }}
                  >
                    {current.event}
                  </span>
                </div>

                {/* Photo count */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-slate-300"
                    style={{ background: 'rgba(13,13,26,0.8)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {current.images.length} photos
                  </span>
                </div>

                {/* Click hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="px-5 py-2.5 rounded-full text-sm font-semibold text-white"
                    style={{ background: 'rgba(13,13,26,0.85)', border: '1px solid rgba(6,182,212,0.4)' }}>
                    View Gallery →
                  </div>
                </div>
              </div>

              {/* Card content */}
              <div className="p-6">
                <div className="h-px mb-4" style={{ background: `linear-gradient(90deg, ${current.glow}, transparent)` }} />
                <h3 className="text-lg font-semibold text-slate-100 mb-2">{current.title}</h3>
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-mono px-2 py-0.5 rounded-md bg-gradient-to-r ${current.color} text-white`}
                    style={{ fontSize: '10px' }}>
                    {current.badge}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          {data.length > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {data.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentMainSlide(i)}
                  className={`transition-all duration-300 rounded-full ${
                    currentMainSlide === i ? 'w-8 h-1.5 bg-cyan-400' : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* ── Lightbox Modal ── */}
      <AnimatePresence>
        {isModalOpen && selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.96)', backdropFilter: 'blur(12px)' }}
            onClick={closeModal}
          >
            <div
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 z-10 w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all text-xl"
                style={{ border: '1px solid rgba(255,255,255,0.12)' }}
              >
                ×
              </button>

              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentModalSlide}
                    src={selectedEvent.images[currentModalSlide]}
                    alt={`${selectedEvent.title} ${currentModalSlide + 1}`}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.35 }}
                    className="w-full max-h-[75vh] object-contain rounded-2xl"
                    style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                  />
                </AnimatePresence>

                {/* Arrows */}
                {selectedEvent.images.length > 1 && (
                  <>
                    <button onClick={prevModal}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all"
                      style={{ background: 'rgba(13,13,26,0.8)', border: '1px solid rgba(255,255,255,0.1)' }}>
                      ←
                    </button>
                    <button onClick={nextModal}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all"
                      style={{ background: 'rgba(13,13,26,0.8)', border: '1px solid rgba(255,255,255,0.1)' }}>
                      →
                    </button>
                  </>
                )}
              </div>

              {/* Modal nav dots */}
              {selectedEvent.images.length > 1 && (
                <div className="flex justify-center gap-2 mt-5">
                  {selectedEvent.images.map((_, i) => (
                    <button key={i} onClick={() => goToSlide(i)}
                      className={`rounded-full transition-all duration-300 ${currentModalSlide === i ? 'w-6 h-1.5 bg-cyan-400' : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/60'}`}
                    />
                  ))}
                </div>
              )}

              {/* Caption */}
              <p className="text-center mt-4 text-sm font-mono text-slate-400">
                {selectedEvent.title} &mdash;{" "}
                <span className="text-cyan-400">{currentModalSlide + 1}</span>
                <span className="text-slate-600"> / {selectedEvent.images.length}</span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CompetitionComponent;
