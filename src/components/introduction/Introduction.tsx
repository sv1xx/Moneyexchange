import Exchange from "./Exchange/Exchange";

const Introduction = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-[#572FC3.50%] to-[#A17FFF]">
        <div className="max-w-[1124px] w-full m-auto px-[10px]">
          <div className="pt-[115px] pb-[85px] flex flex-col gap-[55px]">
            <div className="flex flex-col gap-[25px] items-center text-center">
              <h1 className="text-white text-[60px] font-bold leading-[112%] max-w-[853px] max-[560px]:text-[40px]">
                Мультивалютный обменный сервис 24/7
              </h1>
              <p className="text-[19px] text-white leading-[normal] font-normal">
                Быстрый обмен без скрытых комиссий
              </p>
            </div>
            <Exchange />
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
