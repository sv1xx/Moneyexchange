interface ICurrencyRowProps {
  currencyOptions: string[];
  selectedCurrency: string | undefined;
  amount: number;
  onChangeCurrency: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onChangeAmount: (event: React.ChangeEvent<HTMLInputElement> | null) => void;
}

const ChangeInput = (props: ICurrencyRowProps) => {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    amount,
    onChangeAmount,
  } = props;

  return (
    <>
      <label
        htmlFor="input"
        className="flex items-center border-b-2 border-[#D6DCE2] max-w-[290px] w-full pb-[12px]"
      >
        <input
          value={amount}
          onChange={onChangeAmount}
          type="number"
          className="w-[160px] outline-none text-[20px] text-[#094067] font-ProximaNova font-normal leading-[normal] tracking-[0.3px] bg-inherit "
          id="input"
          name="input"
          max={12000}
        />
        <div className="border-l h-[25px] border-[#CFD4DA] mx-[10px]"></div>
        <select
          name=""
          id=""
          value={selectedCurrency}
          onChange={onChangeCurrency}
          className="bg-inherit"
        >
          {currencyOptions.map((e, index) => (
            <option key={index} value={e}>
              {e}
            </option>
          ))}
        </select>
      </label>
    </>
  );
};

export default ChangeInput;
