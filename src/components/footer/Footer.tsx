function Footer() {
  return (
    <>
      <div className="max-w-[1264px] w-full m-auto px-[10px] ">
        <div className="pb-[80px] ">
          <div className="flex  justify-between max-[420px]:flex-col max-[420px]:items-center max-[420px]:gap-10">
            <div className="flex flex-col gap-5 max-[420px]:gap-2">
              <a href="" className="">
                <img
                  src="/src/assets/images/logo.svg"
                  alt="logo"
                  className=""
                />
              </a>
              <p className="text-[#838BA8] text-[14px] font-normal leading-[normal] pl-[24px] max-[420px]:pl-0">
                Сервис обмена электронных валют
              </p>
            </div>
            <nav className="max-[1110px]:hidden">
              <ul className="flex items-center gap-[65px]">
                <li className="text-[#4E5983] text-base font-normal hover:underline-offset-4 hover:underline has-[:focus]:underline-offset-4 has-[:focus]:underline">
                  <a href="#" className="">
                    Карта сайта
                  </a>
                </li>
                <li className="text-[#4E5983] text-base font-normal hover:underline-offset-4 hover:underline has-[:focus]:underline-offset-4 has-[:focus]:underline">
                  <a href="#" className="">
                    Предупреждение
                  </a>
                </li>
                <li className="text-[#4E5983] text-base font-normal hover:underline-offset-4 hover:underline has-[:focus]:underline-offset-4 has-[:focus]:underline">
                  <a href="#" className="">
                    Правила сайта
                  </a>
                </li>
                <li className="text-[#4E5983] text-base font-normal hover:underline-offset-4 hover:underline has-[:focus]:underline-offset-4 has-[:focus]:underline">
                  <a href="#" className="">
                    Обмен
                  </a>
                </li>
              </ul>
            </nav>
            <div className="flex gap-[30px] ">
              <a href="" className="">
                <img src="/src/assets/images/vk.svg" alt="vk" className="" />
              </a>
              <a href="" className="">
                <img
                  src="/src/assets/images/facebook.svg"
                  alt="facebook"
                  className=""
                />
              </a>
              <a href="" className="">
                <img
                  src="/src/assets/images/instagram.svg"
                  alt="instagram"
                  className=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
