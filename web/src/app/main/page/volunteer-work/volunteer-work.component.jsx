import { mdiCircle } from '@mdi/js';
import Icon from '@mdi/react';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { default as Certificate1, default as Certificate2, default as Certificate3 } from "/src/assets/certificate/image.png";
const data = [
  {
    title: "Youth Development in Digital Society: Rising Star in the North",
    role: "Camping Support - MoEYS Cambodia | 2022",
    description:
      "Facilitated youth engagement programs focused on digital literacy and leadership skills. Organized workshops, provided logistical support, and mentored participants to foster a tech-savvy generation in northern Cambodia.",
    certificate: Certificate1,
  },
  {
    title: "CODE-C 2023 Developer Conference and Tech Expo",
    role: "Technical Support - CADT | 2023",
    description:
      "Provided technical assistance during the conference, including setup and troubleshooting of presentation equipment, managing live coding sessions, and supporting exhibitors with their tech displays to ensure a seamless event experience.",
    certificate: Certificate2,
  },
  {
    title: "Cambodia 2023 32nd SEA Games",
    role: "Technical Support - NCDD | 2023",
    description:
      "Supported the technical infrastructure for the SEA Games by managing communication systems, coordinating with event IT teams, and ensuring reliable network connectivity for media and organizers, contributing to the success of this regional sporting event.",
    certificate: Certificate3,
  },
];

const VolunteerWorkComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % data.length);
    }, 5000); // 5,000 ms = 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Jump to specific slide
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="flex flex-col">
      {/* Main Content */}
      <div className="flex justify-center items-start flex-grow mt-10 md:px-4 sm:px-4 px-0">
        <div className="w-full max-w-7xl">
          <div className="text-center mb-5">
            <div className="flex justify-center items-center gap-2 px-5 md:px-0 sm:px-0">
              <img
                className="w-6 h-6"
                src="https://cdn-icons-png.flaticon.com/512/5944/5944552.png"
                alt="Volunteer Icon"
              />
              <h1 className="text-xl font-bold max-600:text-2xl">
                Volunteer Work
              </h1>

            </div>
          </div>
          <div className="relative w-full max-w-7xl mx-auto overflow-hidden mb-4 px-5">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {data.map((item, index) => (
                <div
                  key={index}
                  className="min-w-full flex flex-col md:flex-row items-start bg-white rounded-2xl p-6 transform hover:scale-[1.02] transition-all duration-300 max-w-4xl mx-auto shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
                >
                  <img
                    src={item.certificate}
                    alt={`${item.title} Certificate`}
                    className="w-[250px] sm:w-[370px] sm:h-[200px] md:w-[370px] md:h-[200px] flex items-center justify-center rounded-lg border-4 border-indigo-100 cursor-pointer"
                    onClick={() => openModal(item.certificate)}
                  />

                  <div className="w-full md:pl-5 sm:pl-5 md:mt-0 sm:mt-0 mt-1">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 italic text-sm mb-3">
                      {item.role}
                    </p>
                    <p className="text-gray-600 leading-relaxed text-[13px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mb-4">
            {data.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.1 }}
                className={`flex items-center text-sm w-[18px] h-[18px] px-1 py-1 rounded-full transition-all duration-200 ${currentSlide === index
                  ? 'bg-white text-black  border border-black'
                  : 'text-gray-500 hover:text-black border-gray-300 '
                  }`}
              >
                <Icon
                  path={mdiCircle}
                  size={0.5}
                />
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Certificate View */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative w-full h-full flex justify-center items-center">
            <button
              onClick={closeModal}
              className="absolute top-1 -right-10  text-4xl font-bold z-10"
            >
              ×
            </button>
            <div className="relative ">
              <img
                src={selectedCertificate}
                alt="Certificate"
                className="w-full h-full object-contain rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VolunteerWorkComponent;
