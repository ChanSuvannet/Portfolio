import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Podium from '../../assets/icon/podium.png';
const data = [
  {
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    title: "Coding Hackathon 2024",
    event: "National Tech Competition"
  },
  {
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80",
    title: "Innovation Challenge",
    event: "University Innovation Fair"
  },
  {
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80",
    title: "Science Olympiad",
    event: "Regional Science Competition"
  },
];

const CompetitionComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    if (data.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % data.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex items-start justify-center flex-grow px-4 py-10">
        <div className="w-full max-w-7xl">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <img
                className="w-8 h-8"
                src={Podium}
                alt="Competition Icon"
              />
              <h1 className="text-3xl font-bold text-gray-800">
                Competition Events
              </h1>
            </div>
            <p className="text-gray-600">Events I've Participated In</p>
          </div>

          {/* Slideshow */}
          <div className="relative w-full mx-auto mb-6 overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {data.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full px-2"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 max-w-4xl mx-auto cursor-pointer"
                    onClick={() => openModal(item.image)}
                  >
                    {/* Image Container */}
                    <div className="relative aspect-video overflow-hidden bg-gray-200">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Event Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-800 shadow-md">
                          {item.event}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {item.title}
                      </h3>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          {data.length > 1 && (
            <div className="flex justify-center gap-2">
              {data.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.2 }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'bg-blue-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal for Full Image View */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-4xl font-light hover:rotate-90 transition-transform duration-300 w-12 h-12 flex items-center justify-center hover:bg-white/10 rounded-full"
          >
            ×
          </button>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-6xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Competition Event"
              className="object-contain w-full h-full rounded-lg shadow-2xl"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default CompetitionComponent;