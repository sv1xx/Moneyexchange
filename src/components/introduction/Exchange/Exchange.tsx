import { useState, useEffect } from "react";
import { SelectData } from "../../helpers/SelectData";
import ChangeInput from "./ChangeInput";

const Exchange = () => {
  const [currencyOptions, setCurrencyOptions] = useState<string[]>([]);
  const [fromCurrency, setFromCurrency] = useState<string>();
  const [toCurrency, setToCurrency] = useState<string>();
  const [exchangeRate, setExchangeRate] = useState<number>(0);
  const [amount, setAmount] = useState<number>(1);
  const [amountInFromCurrency, setAmountInFromCurrency] =
    useState<boolean>(true);

  let toAmount, fromAmount;

  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  useEffect(() => {
    const firstCurrency = SelectData[0].currency;
    const secondCurrency = SelectData[1].currency;
    setCurrencyOptions(SelectData.map((e) => e.currency));
    setFromCurrency(firstCurrency);
    setToCurrency(secondCurrency);
    setExchangeRate(SelectData[0].coefficient);
  }, []);

  const handleFromAmountChange = (
    e: React.ChangeEvent<HTMLInputElement> | null
  ) => {
    setAmount(Number(e?.target.value));
    setAmountInFromCurrency(true);
  };

  const handleToAmountChange = (
    e: React.ChangeEvent<HTMLInputElement> | null
  ) => {
    setAmount(Number(e?.target.value));
    setAmountInFromCurrency(false);
  };

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      const toCurrencyIndex = SelectData.findIndex(
        (e) => e.currency === toCurrency
      );
      const fromCurrencyIndex = SelectData.findIndex(
        (e) => e.currency === fromCurrency
      );
      if (toCurrencyIndex !== -1 && fromCurrencyIndex !== -1) {
        setExchangeRate(
          SelectData[toCurrencyIndex].coefficient /
            SelectData[fromCurrencyIndex].coefficient
        );
      }
    }
  }, [fromCurrency, toCurrency]);

  return (
    <>
      <div className="bg-[#F8F6FE] rounded-[26px] ">
        <div className="flex gap-[60px] pl-[105px] pr-[85px] max-[1045px]:flex-col max-[1045px]:items-center max-[1045px]:pl-[40px] max-[1045px]:pr-[40px] max-[1045px]:gap-[0px]">
          <div className="flex items-center gap-[48px] max-[800px]:flex-col max-[800px]:gap-[30px]">
            <div className="py-[75px] flex flex-col gap-[18px] max-[800px]:pb-[0px]">
              <div className="flex flex-col gap-[35px]">
                <h3 className="text-[#4E5983] text-[18px] font-medium leading-[normal]">
                  Вы отдаете
                </h3>
                <p className="text-[#4E5983] text-[14px] font-normal leading-[normal] opacity-[0.5]">
                  Сумма
                </p>
              </div>
              <ChangeInput
                currencyOptions={currencyOptions}
                selectedCurrency={fromCurrency}
                onChangeCurrency={(e) => setFromCurrency(e.target.value)}
                amount={fromAmount}
                onChangeAmount={handleFromAmountChange}
              />
            </div>
            <img
              className="relative top-[40px] max-[800px]:rotate-90"
              src="/src/assets/images/change.svg"
              alt="swap"
            />
            <div className="flex py-[75px] gap-[60px] ">
              <div className=" flex flex-col gap-[18px]">
                <div className="flex flex-col gap-[35px]">
                  <h3 className="text-[#4E5983] text-[18px] font-medium leading-[normal] flex items-center gap-[15px] text-nowrap">
                    Вы получаете
                    <span className="text-[#4E5983] text-[12px] font-normal leading-[normal] opacity-[0.5] text-nowrap">
                      c учетом комиссии ПС (0.5%)
                    </span>
                  </h3>
                  <p className="text-[#4E5983] text-[14px] font-normal leading-[normal] opacity-[0.5]">
                    Сумма
                  </p>
                </div>
                <ChangeInput
                  currencyOptions={currencyOptions}
                  selectedCurrency={toCurrency}
                  onChangeCurrency={(e) => setToCurrency(e.target.value)}
                  amount={toAmount}
                  onChangeAmount={handleToAmountChange}
                />
              </div>
            </div>
          </div>
          <div className="self-end pb-[75px] max-[1045px]:self-center">
            <button className="text-[14px] text-white font-bold leading-[normal] rounded-[9px] py-[18px] px-[43px] bg-exchange-button transition-all duration-200">
              Обменять
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Exchange;
