import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { volunteerData as data } from "../../data/volunteer";

const VolunteerWorkComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(p => (p + 1) % data.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const openModal  = (cert) => { setSelectedCertificate(cert); setIsModalOpen(true); };
  const closeModal = ()     => { setIsModalOpen(false); setSelectedCertificate(null); };
  const goToSlide  = (i)    => setCurrentSlide(i);

  const item = data[currentSlide];

  return (
    <section ref={ref} className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="section-subtitle mb-3">Community</p>
          <h2 className="section-title">
            Volunteer <span className="text-gradient-cyan">Work</span>
          </h2>
        </motion.div>

        {/* Slide nav */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-between mb-5"
        >
          <span className="text-xs text-gray-400 font-medium">
            {String(currentSlide + 1).padStart(2, "0")} / {String(data.length).padStart(2, "0")}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => goToSlide((currentSlide - 1 + data.length) % data.length)}
              className="p-2 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-blue-50 border border-gray-200 transition-all"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => goToSlide((currentSlide + 1) % data.length)}
              className="p-2 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-blue-50 border border-gray-200 transition-all"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Slide card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
            className="glass-card overflow-hidden"
          >
            <div className={`h-1 w-full bg-gradient-to-r ${item.color}`} />

            <div className="p-7 flex flex-col sm:flex-row items-start gap-6">
              {/* Number badge */}
              <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold text-white bg-gradient-to-br ${item.color} shadow-sm`}>
                {String(currentSlide + 1).padStart(2, "0")}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">{item.title}</h3>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-md bg-gradient-to-r ${item.color} text-white`}>
                        {item.role}
                      </span>
                      <span className="text-xs text-gray-500">{item.organization}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => openModal(item.certificate)}
                    className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-all"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Certificate
                  </button>
                </div>

                <div className="h-px bg-gray-100 mb-4" />
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {data.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`transition-all duration-300 rounded-full ${
                currentSlide === i
                  ? "w-6 h-1.5 bg-blue-600"
                  : "w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Certificate modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(4px)" }}
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-2xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute -top-4 -right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center bg-white text-gray-600 hover:text-gray-900 shadow-md border border-gray-200 text-lg"
              >
                ×
              </button>
              <img
                src={selectedCertificate}
                alt="Certificate"
                className="w-full rounded-2xl shadow-2xl border border-gray-200"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VolunteerWorkComponent;
