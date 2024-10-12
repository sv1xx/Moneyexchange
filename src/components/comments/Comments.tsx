import { Swiper as SwiperClass } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useCallback } from "react";
import { CommentsData } from "../helpers/CommentsData";
import "swiper/css";

const Comments = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  return (
    <>
      <div className="max-w-[1128px] m-auto w-full px-[10px] relative -top-[400px]">
        <div className="flex flex-col gap-[120px] max-[550px]:gap-[50px]">
          <h1 className="text-[#160647] text-[35px] font-medium leading-[132%]">
            Что клиенты говорят о нас
          </h1>
          <div className="">
            <div className="block xl:hidden">
              <Swiper
                onSwiper={setSwiperRef}
                spaceBetween={140}
                slidesPerView={1}
              >
                {CommentsData.map((e, index) => (
                  <SwiperSlide
                    key={index}
                    className="flex flex-col gap-[50px] justify-between max-[450px]:max-w-[350px]"
                  >
                    <p className="max-w-[488px] text-[18px] text-[#4E5983] opacity-[0.7] font-normal leading-[166%]">
                      {e.text}
                    </p>
                    <div className="flex gap-[30px] items-center">
                      <h2 className="text-[#160647] text-[20px] font-normal leading-[155%]">
                        {e.author}
                      </h2>
                      <div className="flex items-center gap-1">
                        <span className="text-[#838BA8] text-[14px] font-normal leading-[normal]">
                          {e.date}
                        </span>
                        <span className="text-[#838BA8] text-[14px] font-normal leading-[normal]">
                          {e.time}
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="hidden xl:block">
              <Swiper
                onSwiper={setSwiperRef}
                spaceBetween={140}
                slidesPerView={2}
              >
                {CommentsData.map((e, index) => (
                  <SwiperSlide
                    key={index}
                    className="flex flex-col gap-[50px] justify-between max-[450px]:max-w-[350px]"
                  >
                    <p className="max-w-[488px] text-[18px] text-[#4E5983] opacity-[0.7] font-normal leading-[166%]">
                      {e.text}
                    </p>
                    <div className="flex gap-[30px] items-center">
                      <h2 className="text-[#160647] text-[20px] font-normal leading-[155%]">
                        {e.author}
                      </h2>
                      <div className="flex items-center gap-1">
                        <span className="text-[#838BA8] text-[14px] font-normal leading-[normal]">
                          {e.date}
                        </span>
                        <span className="text-[#838BA8] text-[14px] font-normal leading-[normal]">
                          {e.time}
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="flex items-center gap-5 pt-[45px] justify-end ">
              <div>
                <button
                  onClick={handlePrevious}
                  className="group flex items-center -space-x-[8px]"
                >
                  <svg
                    className=" duration-200 ease-in-out -group-hover:translate-x-4 fill-[#DADDE5] group-hover:fill-[#A17FFF]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="16"
                    viewBox="0 0 9 16"
                  >
                    <path d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM2 7H1L1 9H2L2 7Z" />
                  </svg>
                  <div className="h-[2px] bg-[#DADDE5] group-hover:bg-[#A17FFF] transition-all duration-200 ease-in-out w-8 group-hover:w-16"></div>
                </button>
              </div>
              <div>
                <button
                  onClick={handleNext}
                  className="group flex items-center -space-x-[8px]"
                >
                  <div className="h-[2px] bg-[#DADDE5] group-hover:bg-[#A17FFF] transition-all duration-200 ease-in-out w-8 group-hover:w-16"></div>
                  <svg
                    className=" duration-200 ease-in-out -group-hover:translate-x-4 fill-[#DADDE5] group-hover:fill-[#A17FFF] transform rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="16"
                    viewBox="0 0 9 16"
                  >
                    <path d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM2 7H1L1 9H2L2 7Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Comments;
