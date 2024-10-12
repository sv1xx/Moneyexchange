const Joy = () => {
  return (
    <>
      <div className="max-w-[1258px] w-full m-auto px-[10px]">
        <div className="">
          <div className="flex items-center bg-gradient-to-b from-[#562EC2] from-30% to-[#A07EFE] to-70% pr-[130px] pt-[80px] pb-[60px] justify-end rounded-[17px] bg-opacity-[0.8] relative top-[-300px] max-[1230px]:justify-center max-[1230px]:text-center max-[1230px]:px-[10px]">
            <img
              src="/src/assets/images/joy.png"
              alt="w"
              className="z-10 absolute left-[-90px] h-[850px] w-[780px] max-[1230px]:hidden"
            />
            <div className="max-[1230px]:justify-center">
              <h2 className="pb-[30px] max-w-[466px] text-white text-[35px] font-medium leading-[132%] max-[1230px]:text-center">
                Будем рады предоставить Вам качественный обмен валют на нашем
                сервисе!
              </h2>
              <p className="pb-[58px] text-white text-[18px] font-normal leading-[166%] opacity-[0.7] max-[1230px]:text-center">
                Начните обмен прямо сейчас
              </p>
              <button className="bg-white rounded-[10px] bg-opacity-[0.8] text-[#9F7DFD] text-[16px] font-medium leading-[normal] px-[60px] py-[25px] hover:bg-opacity-[0.6] transition-all duration-200">
                Начать обмен
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Joy;
