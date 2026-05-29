import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { competitionData as data } from "../../data/competition";

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
      setCurrentMainSlide(p => (p + 1) % data.length);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  const openModal = (event) => {
    setSelectedEvent(event);
    setCurrentModalSlide(0);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
    document.body.style.overflow = "";
  };

  const nextModal  = () => setCurrentModalSlide(p => (p + 1) % selectedEvent.images.length);
  const prevModal  = () => setCurrentModalSlide(p => (p - 1 + selectedEvent.images.length) % selectedEvent.images.length);
  const goToSlide  = (i) => setCurrentModalSlide(i);

  const current = data[currentMainSlide];

  return (
    <section ref={ref} className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="section-subtitle mb-3">Events</p>
          <h2 className="section-title">
            Competition <span className="text-gradient-purple">Gallery</span>
          </h2>
          <p className="text-sm text-gray-500 mt-3">Events and programs I have participated in</p>
        </motion.div>

        {/* Main carousel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentMainSlide}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              className="glass-card overflow-hidden cursor-pointer group"
              onClick={() => openModal(current)}
            >
              <div className={`h-0.5 bg-gradient-to-r ${current.color}`} />

              {/* Image */}
              <div className="relative aspect-video overflow-hidden bg-gray-100">
                <motion.img
                  src={current.images[0]}
                  alt={current.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                {/* Badges */}
                <div className="absolute top-4 right-4">
                  <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${current.color}`}>
                    {current.event}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-white bg-black/50 backdrop-blur-sm border border-white/10">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {current.images.length} photos
                  </span>
                </div>

                {/* Click hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-black/60 backdrop-blur-sm border border-white/20">
                    View Gallery →
                  </div>
                </div>
              </div>

              {/* Card content */}
              <div className="p-6">
                <h3 className="text-base font-semibold text-gray-900 mb-2">{current.title}</h3>
                <span className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full text-white bg-gradient-to-r ${current.color}`}>
                  {current.badge}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          {data.length > 1 && (
            <div className="flex justify-center gap-2 mt-5">
              {data.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentMainSlide(i)}
                  className={`transition-all duration-300 rounded-full ${
                    currentMainSlide === i ? "w-8 h-1.5 bg-blue-600" : "w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {isModalOpen && selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.92)", backdropFilter: "blur(8px)" }}
            onClick={closeModal}
          >
            <div className="relative max-w-5xl w-full" onClick={e => e.stopPropagation()}>
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 z-10 w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 border border-white/10 transition-all text-xl"
              >
                ×
              </button>

              <div className="relative overflow-hidden rounded-2xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentModalSlide}
                    src={selectedEvent.images[currentModalSlide]}
                    alt={`${selectedEvent.title} ${currentModalSlide + 1}`}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.3 }}
                    className="w-full max-h-[75vh] object-contain rounded-2xl"
                    style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                  />
                </AnimatePresence>

                {selectedEvent.images.length > 1 && (
                  <>
                    <button onClick={prevModal}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white bg-black/60 border border-white/10 hover:bg-black/80 transition-all">
                      ←
                    </button>
                    <button onClick={nextModal}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white bg-black/60 border border-white/10 hover:bg-black/80 transition-all">
                      →
                    </button>
                  </>
                )}
              </div>

              {selectedEvent.images.length > 1 && (
                <div className="flex justify-center gap-2 mt-5">
                  {selectedEvent.images.map((_, i) => (
                    <button key={i} onClick={() => goToSlide(i)}
                      className={`rounded-full transition-all duration-300 ${
                        currentModalSlide === i ? "w-6 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/30 hover:bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              )}

              <p className="text-center mt-4 text-sm text-white/60">
                {selectedEvent.title} —{" "}
                <span className="text-white">{currentModalSlide + 1}</span>
                <span className="text-white/40"> / {selectedEvent.images.length}</span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CompetitionComponent;
