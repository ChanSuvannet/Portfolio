import { ContainerTextFlip } from "../../components/container-text-flip";
import { Cover } from "../../components/cover";
import Profile from "/src/assets/image/pic.jpg";
import Discord from "/src/assets/svg/discord.svg";
import GitHub from "/src/assets/svg/github.svg";
import LinkIn from "/src/assets/svg/icons8-linkedin.svg";
import Mial from "/src/assets/svg/mail.svg";
import Mouse from "/src/assets/svg/mouse.svg";
const HomeComponent = () => {
  return (
    <div className="flex justify-center items-center h-full px-9 my-bg relative">
      <div className="w-full h-screen  flex justify-center items-center">
        <div className="flex flex-col justify-around h-full">
          <div>
            <div>
              <div className="flex flex-col items-center justify-center">
                <div className="w-44 h-44 rounded-full flex justify-center items-center border-[10px] border-red-300 hover:bg-red-400 cursor-pointer">
                  <img
                    src={Profile}
                    alt={Profile}
                    className="w-40 h-40 rounded-full hover:scale-105 border-[2px]"
                  />
                </div>
                <div className="flex flex-col justify-center items-center pt-5">
                  <h1 className="text-[34px] max-600:text-[28px] font-primary">
                    Chan Suvannet
                  </h1>
                  <ContainerTextFlip
                    words={["Web Development", "Mobile Apps", "DevOps"]}
                  />
                </div>
              </div>
              <div className="flex justify-center items-center pt-5">
                <div>
                  <ul className="flex space-x-4">
                    <li>
                      <a href="https://github.com/ChanSuvannet/" target="_blank">
                        <img
                          src={GitHub}
                          className="w-7 h-7 hover:scale-90 transition-transform duration-300"
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
                          className="w-7 h-7 hover:scale-90 transition-transform duration-300"
                          alt="Instagram"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="mailto:suvannetchan@gmail.com" target="_blank">
                        <img
                          src={Mial}
                          className="w-7 h-7 hover:scale-90 transition-transform duration-300"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center items-center pt-5">
                <Cover>
                  <a href="https://t.me/chan_suvannet" target="_blank">
                    <button className="w-[120px]  hover:text-white">
                      Hire Me
                    </button>
                  </a>
                </Cover>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center pt-5 flex-col">
            <h1 className="text-xl text-gray-600">Scroll Down</h1>
            <img className="mouse pt-10 cursor-pointer" src={Mouse} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
