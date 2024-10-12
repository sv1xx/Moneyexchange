import { AdvantagesData } from "../helpers/AdvantagesData";
import Prewiew from "../prewiew/Prewiew";

const Advantages = () => {
  return (
    <>
      <div className="max-w-[1124px] m-auto w-full px-[10px]">
        <div className="pt-[80px] pb-[385px]">
          <div className="flex justify-between gap-x-[150px] max-[1110px]:flex-col max-[1110px]:items-center max-[1110px]:text-center">
            {AdvantagesData.map((e, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col gap-[20px] items-start first:max-w-[240px] max-[1110px]:first:max-w-[100%] max-[1110px]:last:max-w-[100%] max-[1110px]:max-w-[100%] max-w-[314px] last:max-w-[264px] max-[1110px]:items-center "
                >
                  <img
                    src={e.image}
                    alt="adv"
                    key={index}
                    className="w-[205px] h-[205px] "
                  />
                  <div className="flex flex-col gap-[32px]">
                    <h2 className="text-[#4E5983] text-[22px] font-medium leading-[normal]">
                      {e.header}
                    </h2>
                    <p className="text-[#4E5983] text-[18px] font-normal leading-[166%] opacity-[0.7]">
                      {e.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Prewiew />
    </>
  );
};

export default Advantages;
