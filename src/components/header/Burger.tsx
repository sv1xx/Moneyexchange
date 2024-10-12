import { useState } from "react";

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="hidden max-[840px]:block transition duration-200">
        <div className="flex items-center justify-between ">
          <button className="HAMBURGER-ICON" onClick={() => setIsOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="20"
              viewBox="0 0 26 20"
              fill="none"
            >
              <rect width="26" height="4" fill="#4E5983" />
              <rect width="26" height="4" fill="#4E5983" />
              <rect y="8" width="26" height="4" fill="#4E5983" />
              <rect y="8" width="26" height="4" fill="#4E5983" />
              <rect y="16" width="26" height="4" fill="#4E5983" />
              <rect y="16" width="26" height="4" fill="#4E5983" />
            </svg>
          </button>
        </div>
        <a
          className={isOpen ? "showBgMenuNav" : "hidden"}
          onClick={() => setIsOpen(false)}
          href="#"
        ></a>
        <div className={isOpen ? "showMenuNav" : "hideMenuNav"}>
          <div className="flex flex-col justify-between w-full">
            <div className="flex flex-col px-[10px]">
              <div className="flex items-center justify-between py-[45px] ">
                <img src="/src/assets/images/logo.svg" alt="logo" />
                <button
                  className="HAMBURGER-ICON right-0"
                  onClick={() => setIsOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="20"
                    viewBox="0 0 26 20"
                    fill="none"
                  >
                    <rect width="26" height="4" fill="#4E5983" />
                    <rect width="26" height="4" fill="#4E5983" />
                    <rect y="8" width="26" height="4" fill="#4E5983" />
                    <rect y="8" width="26" height="4" fill="#4E5983" />
                    <rect y="16" width="26" height="4" fill="#4E5983" />
                    <rect y="16" width="26" height="4" fill="#4E5983" />
                  </svg>
                </button>
              </div>
              <nav className="pb-[70px] pt-[30px]">
                <ul className="flex flex-col items-center gap-[35px] ">
                  <li className="">
                    <a
                      href=""
                      className="text-[#4E5983] text-[20px] font-normal hover:underline-offset-4 hover:underline has-[:focus]:underline-offset-4 has-[:focus]:underline"
                    >
                      Цены
                    </a>
                  </li>
                  <li className="">
                    <a
                      href=""
                      className="text-[#4E5983] text-[20px] font-normal hover:underline-offset-4 hover:underline has-[:focus]:underline-offset-4 has-[:focus]:underline"
                    >
                      BotWebPay(BWP)
                    </a>
                  </li>
                  <li className="">
                    <a
                      href=""
                      className="text-[#4E5983] text-[20px] font-normal hover:underline-offset-4 hover:underline has-[:focus]:underline-offset-4 has-[:focus]:underline"
                    >
                      Преимущества
                    </a>
                  </li>
                  <li className="">
                    <a
                      href=""
                      className="text-[#4E5983] text-[20px] font-normal hover:underline-offset-4 hover:underline has-[:focus]:underline-offset-4 has-[:focus]:underline"
                    >
                      Карта сайта
                    </a>
                  </li>
                  <li className="">
                    <a
                      href=""
                      className="text-[#4E5983] text-[20px] font-normal hover:underline-offset-4 hover:underline has-[:focus]:underline-offset-4 has-[:focus]:underline"
                    >
                      Предупреждение
                    </a>
                  </li>
                  <li className="">
                    <a
                      href=""
                      className="text-[#4E5983] text-[20px] font-normal hover:underline-offset-4 hover:underline has-[:focus]:underline-offset-4 has-[:focus]:underline"
                    >
                      Правила сайта
                    </a>
                  </li>
                  <li className="">
                    <a
                      href=""
                      className="text-[#4E5983] text-[20px] font-normal hover:underline-offset-4 hover:underline has-[:focus]:underline-offset-4 has-[:focus]:underline"
                    >
                      Обмен
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="flex items-center gap-5 justify-center">
                <a
                  href="#"
                  className="text-[#4E5983] text-[20px] font-normal hover:underline-offset-4 hover:underline focus:underline-offset-4 focus:underline"
                >
                  Вход
                </a>
                <a
                  href="#"
                  className="text-[#4E5983] text-[20px] font-medium rounded-[9px] bg-[#A17FFF] bg-opacity-[0.11] hover:bg-opacity-20 focus:bg-opacity-20 px-[14px] py-[18px] transition-all duration-200"
                >
                  Регистрация
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Burger;
