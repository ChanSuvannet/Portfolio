import React, { useState } from 'react';
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

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex justify-center items-start flex-grow mt-8">
        <div className="w-full max-w-7xl ">
          <div className="text-center mb-12">
            <div className='flex justify-start items-center gap-2'>
              <img className='w-6 h-6' src="https://cdn-icons-png.flaticon.com/512/5944/5944552.png" alt="" />
              <h1 className="text-2xl font-bold max-600:text-2xl">
                Volunteer Work
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-0 sm:px-0">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-start bg-white rounded-2xl p-6 transform hover:scale-[1.02] transition-all duration-300 max-w-4xl mx-auto shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
              >
                <div className="">
                  <img
                    src={item.certificate}
                    alt={`${item.title} Certificate`}
                    className="w-full h-[100px] object-cover rounded-lg border-4 border-indigo-100 shadow-md cursor-pointer"
                    onClick={() => openModal(item.certificate)}
                  />
                </div>
                <div className="md:w-2/3 md:pl-8">
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