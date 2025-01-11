import { BackgroundLines } from "../../../../../components/background-lines";
import { Cover } from "../../../../../components/cover";
import "./home.component.css";
import Profile from "/src/assets/image/pic.jpg";
import Discord from "/src/assets/svg/discord.svg";
import GitHub from "/src/assets/svg/github.svg";
import GitLab from "/src/assets/svg/gitlab.svg";
import Mial from "/src/assets/svg/mail.svg";
import Mouse from "/src/assets/svg/mouse.svg";
const HomeComponent = () => {
  return (
    <BackgroundLines >
      <div className="flex justify-center items-center h-full px-9 my-bg z-20 relative">
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
                    <h1 className="text-[34px] max-600:text-[28px]">
                      Chan Suvannet
                    </h1>
                    <p className="pt-2 text-xl max-600:text-[18px]">
                      I&apos;m Software Engineering{" "}
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center pt-5">
                  <div>
                    <ul className="flex space-x-4">
                      <li>
                        <a href="#faq">
                          <img
                            src={GitLab}
                            className="w-7 h-7 hover:scale-90 transition-transform duration-300"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#faq">
                          <img
                            src={GitHub}
                            className="w-7 h-7 hover:scale-90 transition-transform duration-300"
                            alt=""
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#faq">
                          <img
                            src={Discord}
                            className="w-7 h-7 hover:scale-90 transition-transform duration-300"
                            alt="Instagram"
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#faq">
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
                    <button className="w-[120px]  hover:text-white">
                      Hire Me
                    </button>
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
    </BackgroundLines>
  );
};

export default HomeComponent;
