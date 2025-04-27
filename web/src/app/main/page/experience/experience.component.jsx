import React from 'react';
import CamCyberLogo from "/src/assets/logo/cam.jpg";
const ExperienceComponent = () => {
  return (
    <div className="flex justify-center items-center h-full px-9 mt-8">
      <div className="w-full h-auto max-w-7xl">
        <div className="flex justify-center pt-2">
          <h1 className="text-xl text-center font-bold max-600:text-2xl">👩🏻‍💻ᝰ.ᐟ Work Experience</h1>
        </div>

        <div className="flex justify-center gap-5 pt-6 items-center w-full">
          <div className="flex justify-start md:px-4 py-5 flex-col w-full h-auto max-600:h-auto bg-white">
            <div className="flex max-600:flex-col gap-2 max-600:gap-0">
              <ol className="relative border-l-2 border-gray-300">
                <li className="mb-10 ml-7">
                  <span className="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full -left-5 ring-4 ring-white">
                    <a href="https://www.camcyber.com/?fbclid=IwY2xjawJ6y4JleHRuA2FlbQIxMABicmlkETFXY3UzVDhRdUZ5RFoySDVqAR6qBurO1-3X7AMt1Tncg5ztPBRNX4m5gUehxe5B8wlDmrIM3mtu2I4PEmdCuA_aem_o1mQ7uBMepDEvmAfF6vtsw" target="_blank" rel="noopener noreferrer">
                      <img className="rounded-lg object-cover" src={CamCyberLogo} alt="CamCyber Logo" />
                    </a>
                  </span>
                  <p className="font-medium leading-tight">
                    Back End Internship
                  </p>
                  <p className="text-sm pt-1">CamCyber Digital Tech Team</p>
                  <p className="text-sm pt-1">Nov 2023 – Feb 2024</p>
                  <ul className="mt-2 text-left text-sm text-gray-700 list-disc">
                    <li>Assisted in developing RESTful APIs using NestJS and PostgreSQL for internal tools.</li>
                    <li>Collaborated with senior developers to implement authentication, error handling, and secure routing.</li>
                    <li>Participated in daily stand-ups and sprint reviews, gaining experience with Agile development.</li>
                    <li>Conducted unit testing and API debugging using Postman and Jest for consistent performance.</li>
                  </ul>
                </li>

                <li className="mb-10 ml-7">
                  <span className="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full -left-5 ring-4 ring-white">
                    <a href="https://www.camcyber.com/?fbclid=IwY2xjawJ6y4JleHRuA2FlbQIxMABicmlkETFXY3UzVDhRdUZ5RFoySDVqAR6qBurO1-3X7AMt1Tncg5ztPBRNX4m5gUehxe5B8wlDmrIM3mtu2I4PEmdCuA_aem_o1mQ7uBMepDEvmAfF6vtsw" target="_blank" rel="noopener noreferrer">
                      <img className="rounded-lg object-cover" src={CamCyberLogo} alt="CamCyber Logo" />
                    </a>
                  </span>
                  <p className="font-medium leading-tight">
                    Junior Full Stack Developer
                  </p>
                  <p className="text-sm pt-1">CamCyber Digital Tech Team</p>
                  <p className="text-sm pt-1">Feb 2024 – Present</p>
                  <ul className="mt-2 text-left text-sm text-gray-700 list-disc">
                    <li >Built and maintained scalable full-stack applications using AngularJS, NestJS, and Laravel.</li>
                    <li>Integrated third-party tools like jsreport for report generation, WebSocket for real-time communication, and Keycloak for secure authentication.</li>
                    <li>Designed responsive front-end features and data-driven dashboards, improving user engagement.</li>
                    <li>Contributed to CI/CD pipelines using Git and DigitalOcean for faster deployments.</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceComponent;
