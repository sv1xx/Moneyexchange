import Burger from "./Burger";

const Header = () => {
  return (
    <>
      <div className="">
        <div className="max-w-[1264px] m-auto w-full px-[10px]">
          <div className="flex items-center justify-between py-[18px] max-[840px]:py-[45px]">
            <a href="#">
              <img src="/src/assets/images/logo.svg" alt="logo" />
            </a>
            <nav className="max-[840px]:hidden">
              <ul className="flex items-center gap-[45px]">
                <li className="text-[#4E5983] text-base font-normal hover:underline-offset-4 hover:underline has-[:focus]:underline-offset-4 has-[:focus]:underline">
                  <a href="#" className="">
                    Компания
                  </a>
                </li>
                <li className="text-[#4E5983] text-base font-normal hover:underline-offset-4 hover:underline has-[:focus]:underline-offset-4 has-[:focus]:underline">
                  <a href="#" className="">
                    Блог
                  </a>
                </li>
                <li className="text-[#4E5983] text-base font-normal hover:underline-offset-4 hover:underline has-[:focus]:underline-offset-4 has-[:focus]:underline">
                  <a href="#" className="">
                    Контакты
                  </a>
                </li>
              </ul>
            </nav>
            <div className="flex items-center gap-5 max-[840px]:hidden">
              <a
                href="#"
                className="text-[#4E5983] text-base font-normal hover:underline-offset-4 hover:underline focus:underline-offset-4 focus:underline"
              >
                Вход
              </a>
              <a
                href="#"
                className="text-[#4E5983] text-base font-medium rounded-[9px] bg-[#A17FFF] bg-opacity-[0.11] hover:bg-opacity-20 focus:bg-opacity-20 px-[14px] py-[18px] transition-all duration-200"
              >
                Регистрация
              </a>
            </div>
            <Burger />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
