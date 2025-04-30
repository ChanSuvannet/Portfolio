import { mdiStar, mdiStarHalfFull } from '@mdi/js';
import Icon from '@mdi/react';
import { motion } from 'framer-motion';
import Profile from "/src/assets/image/pic.jpg";
import Coffee from "/src/assets/svg/cafe.svg";
import Certificate from "/src/assets/svg/certificate.svg";
import Code from "/src/assets/svg/code.svg";
import Rocket from "/src/assets/svg/rocket.svg";
const AboutMeComponent = () => {
  return (
    <div className="h-full px-5 flex justify-center items-center">
      <div className="w-full h-auto max-w-7xl flex justify-center ">
        <div className="w-full">
          <div className="flex flex-col justify-center items-center gap-5 max-600:gap-4 max-980:flex-col max-980:w-full max-600:flex-col my-5">
            <div className="max-600:w-full w-[600px]">
              <div className="flex flex-wrap">
                <div className="w-full px-4">
                  <div className="mx-auto  max-w-[510px] text-center">
                    <div className="w-full flex justify-center rounded-full">
                      <img className="w-14 h-14" src="https://lh3.googleusercontent.com/a/ACg8ocLwnU6pFHzGJX_V7X1iM4-BrlFso2NwYtH2IFrlFKU73CEuirNg=s317-c-no" alt="" aria-hidden="true" data-noaft="" />
                    </div>
                    <div className="flex justify-center items-start mt-5 gap-2">
                      <span height="20" width="20" >I'm not a great programmer, I'm just a good programmer with great habits. </span>
                    </div>
                    <div className="relative inline-flex items-center justify-center w-full">
                      <hr className="w-64 h-[2px] my-8 bg-gray-400 border-0 rounded " />
                      <div className="absolute px-4 -translate-x-1/2 left-1/2 flex items-center justify-center bg-white ">
                        <img className="pt-[1.2px]" title=":copilot:" alt=":copilot:" src="https://github.githubassets.com/images/icons/emoji/copilot.png" height="20" width="20" align="absmiddle" />
                      </div>
                    </div>
                    <p className="text-base text-body-color dark:text-dark-6">
                      Explore my background and dedicated skills in teamwork,
                      which bring extensive experience and creativity to every
                      project.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-3 my-5">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Icon path={mdiStar} size={1} className='text-red-400' />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Icon path={mdiStar} size={1} className='text-red-400' />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Icon path={mdiStar} size={1} className='text-red-400' />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Icon path={mdiStar} size={1} className='text-red-400' />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Icon path={mdiStarHalfFull} size={1} className='text-red-400' />
                </motion.div>
              </div>
              <div className="flex flex-col justify-center items-center text-center">
                <img
                  className="w-10 h-10 rounded-full"
                  src={Profile}
                  alt="Profile picture"
                />
                <div className="font-medium mt-2">
                  <h1 className="md:text-lg sm:text-md text-base">Chan Suvannet</h1>
                  <p className="text-[14px] mt-1 text-gray-600">Languages Spoken</p>
                  <div className="text-[12px] px] mt-1 text-gray-500 dark:text-gray-500">
                    Khmer, English, and French.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-start px-6 py-5 flex-col h-auto w-full max-600:h-auto bg-white  rounded-3xl max-600:w-full  max-980:w-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              <div className="flex max-600:flex-col gap-2 max-600:gap-0 ">
                <div className="w-[50%] max-600:w-full">
                  <p className="md:text-lg sm:text-md text-base">
                    I'm Suvannet, Currently pursuing a degree in Information and Communication Engineering at the Institute of Technology of Cambodia. I'm known for my positive mindset, strong motivation, and excellent communication skills. I have a deep respect for talented individuals and a relentless drive for self-improvement. Passionate about lifelong learning, I actively seek opportunities to grow, sharpen my skills, and broaden my knowledge.
                  </p>
                </div>
                <div className="max-980:hidden mb-5 mt-5">
                  <hr />
                </div>
                <div className="w-[50%] max-600:w-full">
                  <div>
                    <div>
                      <div className=" w-full">
                        <div className="flex justify-between">
                          <p className="md:text-lg sm:text-md text-base max-600:text-base">
                            Development
                          </p>
                          <p className="md:text-lg sm:text-md text-base max-600:text-base">80%</p>
                        </div>
                        <div className="mb-5 pt-3">
                          <div className="bg-stroke bg-gray-200 relative h-[4px] w-full rounded-2xl max-600:h-1">
                            <div className="bg-red-400 absolute top-0 left-0 h-full w-4/5 rounded-2xl"></div>
                          </div>
                        </div>
                      </div>
                      <div className=" w-full">
                        <div className="flex justify-between">
                          <p className="md:text-lg sm:text-md text-base max-600:text-base">
                            Problem-Solving
                          </p>
                          <p className="md:text-lg sm:text-md text-base max-600:text-base">85%</p>
                        </div>
                        <div className="mb-5 pt-3">
                          <div className="bg-stroke bg-gray-200 relative h-[4px] w-full rounded-2xl max-600:h-1">
                            <div className="bg-yellow-400 absolute top-0 left-0 h-full w-10/12 rounded-2xl"></div>
                          </div>
                        </div>
                      </div>
                      <div className=" w-full">
                        <div className="flex justify-between">
                          <p className="md:text-lg sm:text-md text-base max-600:text-base">
                            Communication
                          </p>
                          <p className="md:text-lg sm:text-md text-base max-600:text-base">91%</p>
                        </div>
                        <div className="mb-5 pt-3">
                          <div className="bg-stroke bg-gray-200 relative h-[4px] w-full rounded-2xl max-600:h-1">
                            <div className="bg-purple-400 absolute top-0 left-0 h-full w-11/12 rounded-2xl"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center my-20 max-600:mt-8 max-600:mb-8">
            <div className="grid grid-cols-4 gap-32 max-600:grid-cols-2 max-600:gap-10 justify-center">
              <div className="flex gap-5">
                <div>
                  <img
                    src={Code}
                    className="w-16 hover:scale-110 transition-transform duration-300 max-600:w-10 cursor-pointer"
                    alt=""
                  />
                </div>
                <div className="w-full">
                  <h1 className="md:text-2xl sm:text-md text-base">10</h1>
                  <p className="mt-2 md:text-lg sm:text-md text-base max-600:mt-0 w-full">
                    Project Completed
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div>
                  <img
                    src={Rocket}
                    className="w-16 hover:scale-110 transition-transform duration-300 max-600:w-10 cursor-pointer"
                    alt=""
                  />
                </div>
                <div>
                  <h1 className="md:text-2xl sm:text-md text-base">3</h1>
                  <p className="mt-2 md:text-lg sm:text-md text-base max-600:mt-0">
                    Project Ongoing
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div>
                  <img
                    src={Coffee}
                    className="w-16 hover:scale-110 transition-transform duration-300 max-600:w-10 cursor-pointer"
                    alt=""
                  />
                </div>
                <div>
                  <h1 className="md:text-2xl sm:text-md text-base">
                    1460
                  </h1>
                  <p className="mt-2 md:text-lg sm:text-md text-base max-600:mt-0">
                    Cup of Coffee
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
                <div>
                  <img
                    src={Certificate}
                    className="w-16 hover:scale-110 transition-transform duration-300 max-600:w-10 cursor-pointer"
                    alt=""
                  />
                </div>
                <div>
                  <h1 className="md:text-2xl sm:text-md text-base">6</h1>
                  <p className="mt-2 md:text-lg sm:text-md text-base max-600:mt-0">
                    Certificate
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-10 max-600:my-8 max-600:mb-8 max-600:justify-start">
            <p className="md:text-lg sm:text-md text-base">
              Let&apos;s start a conversation to explore new technology
              together.
              <strong className="text-red-400 md:text-lg sm:text-md text-base max-600:text-[14px] transition-colors duration-300 hover:text-red-200 cursor-pointer">
                {" "}
                Click here{" "}
              </strong>
              to contact me!{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeComponent;
