import { BackgroundLines } from "../../components/background-lines";
import { ContainerTextFlip } from "../../components/container-text-flip";
import { Cover } from "../../components/cover";
import Profile from "/src/assets/image/image.png";
import Discord from "/src/assets/svg/discord.svg";
import GitHub from "/src/assets/svg/github.svg";
import LinkIn from "/src/assets/svg/icons8-linkedin.svg";
import Mial from "/src/assets/svg/mail.svg";
import Mouse from "/src/assets/svg/mouse.svg";
const HomeComponent = () => {
  return (
    <BackgroundLines>
      <div className="relative flex items-center justify-center h-full px-9 my-bg">
        <div className="flex items-center justify-center w-full h-screen">
          <div className="flex flex-col justify-around h-full">
            <div>
              <div>
                <div className="flex flex-col items-center justify-center">
                  {/* Gradient border wrapper */}
                  <div className="w-44 h-44 rounded-full p-[5px] bg-gradient-to-r from-pink-400 to-purple-600 cursor-pointer">
                    <div className="flex items-center justify-center w-full h-full bg-white rounded-full">
                      <img
                        src={Profile}
                        alt="Profile"
                        className="object-cover w-40 h-40 transition-transform duration-300 rounded-full sca hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Name and title */}
                  <div className="flex flex-col items-center justify-center pt-5">
                    <h1 className="text-[34px] max-600:text-[28px] font-primary">
                      Chan Suvannet
                    </h1>
                    <ContainerTextFlip
                      words={["Web Development", "Mobile Apps", "DevOps"]}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-center pt-5">
                  <div>
                    <ul className="flex space-x-4">
                      <li>
                        <a href="https://github.com/ChanSuvannet/" target="_blank">
                          <img
                            src={GitHub}
                            className="transition-transform duration-300 w-7 h-7 hover:scale-90"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/chan-suvannet-63865224a/" target="_blank">
                          <img
                            src={LinkIn}
                            className="w-9 -mt-[3px] h-9 hover:scale-90 transition-transform duration-300"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="https://discordapp.com/users/suvannet" target="_blank">
                          <img
                            src={Discord}
                            className="transition-transform duration-300 w-7 h-7 hover:scale-90"
                            alt="Instagram"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="mailto:suvannetchan@gmail.com" target="_blank">
                          <img
                            src={Mial}
                            className="transition-transform duration-300 w-7 h-7 hover:scale-90"
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-center justify-center pt-5">
                  <Cover>
                    <a href="https://t.me/chan_suvannet" target="_blank">
                      <button className="w-[120px] text-gray-200  hover:text-white">
                        Hire Me
                      </button>
                    </a>
                  </Cover>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center pt-5">
              <h1 className="text-xl text-gray-600">Scroll Down</h1>
              <img className="pt-10 cursor-pointer mouse" src={Mouse} />
            </div>
          </div>
        </div>
      </div>
    </BackgroundLines>
  );
};

export default HomeComponent;
