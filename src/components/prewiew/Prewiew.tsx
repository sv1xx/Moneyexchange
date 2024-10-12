const Prewiew = () => {
  return (
    <>
      <div className="max-w-[1261px] px-[10px] m-auto w-full ">
        <div className="flex gap-2 items-center border-[4px] rounded-[26px] bg-white border-[#F7F8FD] pb-[88px] pt-[100px] pl-[155px] pr-[15px] max-[1050px]:p-[50px] relative -top-[265px] z-10  ">
          <div className="flex flex-col gap-[40px] max-[1050px]:m-auto">
            <h2 className="text-[#160647] text-[35px] font-medium leading-[132%] max-w-[317px] max-[1050px]:text-center max-[1050px]:max-w-[695px] max-[450px]:text-[25px]">
              Сервис обмена электронных валют с 5-летней историей
            </h2>
            <p className="text-[#4E5983] text-[18px] font-normal leading-[166%] opacity-[0.7] max-w-[405px] max-[1050px]:text-center max-[1050px]:max-w-[695px] max-[450px]:text-[16px]">
              За время работы мы приобрели репутацию проверенного партнера и
              делаем все возможное, чтобы ваши впечатления от нашего сервиса
              были только благоприятными.
            </p>
          </div>
          <div className="">
            <img
              className="w-[655px] h-[336px] max-[1050px]:hidden"
              src="/src/assets/images/prewiew.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Prewiew;
