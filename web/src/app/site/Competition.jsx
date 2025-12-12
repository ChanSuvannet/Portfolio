import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Podium from '../../assets/icon/podium.png';
import act1 from '/src/assets/image/competition/act_1.jpg';
import act2 from '/src/assets/image/competition/act_2.jpg';
import act3 from '/src/assets/image/competition/act_3.jpg';
import techno2025 from '/src/assets/image/competition/techno_2025.jpg';
import techno2025_2 from '/src/assets/image/competition/techno_2025_2.jpg';

// Example data – add as many images as you want per event
const data = [
  {
    title: "ACTSmart Incubation Program Cohort",
    event: "Digital Startup",
    description: "Geek Agent",
    images: [act1, act2, act3],
  },
  {
    title: "Techno Innovation Challenge 2025",
    event: "University Innovation",
    description: "Voluteer",
    images: [techno2025, techno2025_2],
  },
];

const CompetitionComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentMainSlide, setCurrentMainSlide] = useState(0);
  const [currentModalSlide, setCurrentModalSlide] = useState(0);

  // Auto-slide for main carousel
  useEffect(() => {
    if (data.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentMainSlide((prev) => (prev + 1) % data.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const openModal = (event) => {
    setSelectedEvent(event);
    setCurrentModalSlide(0);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
    setCurrentModalSlide(0);
  };

  const goToMainSlide = (index) => {
    setCurrentMainSlide(index);
  };

  const nextModalSlide = () => {
    setCurrentModalSlide((prev) => (prev + 1) % selectedEvent.images.length);
  };

  const prevModalSlide = () => {
    setCurrentModalSlide((prev) => (prev - 1 + selectedEvent.images.length) % selectedEvent.images.length);
  };

  const goToModalSlide = (index) => {
    setCurrentModalSlide(index);
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-start justify-center flex-grow">
        <div className="w-full max-w-7xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-4 mb-4">
              <img className="w-12 h-12" src={Podium} alt="Podium Icon" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Competition Events</h1>
            </div>
            <p className="text-xl text-gray-600">Events I've Participated In</p>
          </div>

          {/* Main Slideshow */}
          <div className="relative w-full mb-10 overflow-hidden">
            <div
              className="flex transition-transform duration-800 ease-in-out"
              style={{ transform: `translateX(-${currentMainSlide * 100}%)` }}
            >
              {data.map((item, index) => (
                <div key={index} className="flex-shrink-0 w-full px-4">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="bg-white rounded-3xl w-full overflow-hidden shadow-lg hover:shadow-3xl transition-all duration-300 cursor-pointer mx-auto"
                    onClick={() => openModal(item)}
                  >
                    {/* Image (first one) */}
                    <div className="relative w-full aspect-video overflow-hidden bg-gray-200">
                      <img
                        src={item.images[0]}
                        alt={item.title}
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      {/* Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-gray-800 shadow-md">
                          {item.event}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h3>
                      {/* <p className="text-gray-600 mb-3">{item.description}</p> */}
                      <p className="text-sm text-gray-500 font-medium">
                        {item.images.length} {item.images.length === 1 ? 'photo' : 'photos'}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Main Dots */}
            {data.length > 1 && (
              <div className="flex justify-center gap-4 mt-8">
                {data.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToMainSlide(index)}
                    whileTap={{ scale: 0.9 }}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${currentMainSlide === index
                      ? 'bg-blue-600 w-12'
                      : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal Carousel */}
      {isModalOpen && selectedEvent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white text-6xl font-light hover:rotate-90 transition-transform duration-300 w-20 h-20 flex items-center justify-center hover:bg-white/10 rounded-full"
          >
            ×
          </button>

          <div className="relative max-w-7xl w-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            {/* Image Slider */}
            <div className="relative overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentModalSlide * 100}%)` }}
              >
                {selectedEvent.images.map((img, idx) => (
                  <div key={idx} className="flex-shrink-0 w-full">
                    <img
                      src={img}
                      alt={`${selectedEvent.title} - ${idx + 1}`}
                      className="object-contain w-full max-h-[85vh] rounded-2xl shadow-2xl"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Arrows */}
            {selectedEvent.images.length > 1 && (
              <>
                <button
                  onClick={prevModalSlide}
                  className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-5 rounded-full transition text-3xl"
                >
                  ←
                </button>
                <button
                  onClick={nextModalSlide}
                  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-5 rounded-full transition text-3xl"
                >
                  →
                </button>
              </>
            )}

            {/* Dots */}
            {selectedEvent.images.length > 1 && (
              <div className="flex justify-center gap-3 mt-6">
                {selectedEvent.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToModalSlide(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${currentModalSlide === idx ? 'bg-white w-10' : 'bg-white/50 hover:bg-white/80'
                      }`}
                  />
                ))}
              </div>
            )}

            {/* Caption */}
            <div className="text-center mt-6 text-white text-xl font-medium">
              {selectedEvent.title} – {currentModalSlide + 1} / {selectedEvent.images.length}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default CompetitionComponent;