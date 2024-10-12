import { SelectData } from "../helpers/SelectData";

const Wallets = () => {
  return (
    <>
      <div className="bg-wallets relative -top-[550px]">
        <div className="max-w-[1138px] w-full m-auto px-[10px]">
          <div className=" pt-[445px]">
            <div className="flex flex-col gap-[100px] items-center">
              <h2 className="text-[#160647] text-[35px] font-medium leading-[112%]">
                Резерв валюты
              </h2>
              <div className="grid grid-cols-4 grid-rows-2 gap-x-[100px] gap-y-[85px] max-[1120px]:grid-cols-3 max-[820px]:grid-cols-2 max-[520px]:grid-cols-1">
                {SelectData.map((e, index) => {
                  return (
                    <div key={index} className="flex items-center gap-8">
                      <img
                        src={e.image}
                        alt="wallet"
                        className="w-[50px] h-[50px]"
                      />
                      <div className="flex flex-col gap-1">
                        <p className="text-[#A4AABF] text-[16px] font-normal leading-[normal]">
                          {e.wallet}
                        </p>
                        <p
                          title={e.count}
                          className="text-[#160647] text-[20px] font-normal leading-[155%] max-w-[120px] truncate"
                        >
                          {e.count}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wallets;
