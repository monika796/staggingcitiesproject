"use client";
import React from "react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";
import { Anton } from "next/font/google";

const anton = Anton({ weight: "400", subsets: ["latin"] });

interface BannerProps {
  banners: any[]; // Define more specific types if possible
}

const NewBannerSlider: React.FC<BannerProps> = ({ banners }) => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      loop={true}
      spaceBetween={50}
      slidesPerView={1}
      className="w-full"
    >
      {banners.map((banner, index) => (
        <SwiperSlide key={index}>
          <div
            className="relative w-full bg-cover bg-center newstory-slider h-[510px] md:h-[850px]"
            //
          >
            <div className="container relative max-w-[1480px] mx-auto h-[510px] md:h-[780px]">
              <div className="relative w-full md:absolute md:top-[61%] top-0 md:pt-0 pt-[36rem] left-0 transform -translate-y-1/2 text-white">
                {/* Subtitle */}
                <span className="uppercase inline-block text-[10px] md:text-[14px] bg-[#fff] text-black leading-none text-center font-bold py-1 px-2">
                  {banner.homeBannerSubtitle}
                </span>
                {/* Heading */}
                <strong
                  className={`${anton.className} md:w-[39%] block uppercase md:text-[126px] leading-[50px] text-[37px] font-light xl:leading-[130px] md:leading-none`}
                >
                  {banner.homeBannerHeadings}
                </strong>
                {/* Description */}
                <p className="mt-2 md:mb-0 mb-10 md:w-[26%] font-light xl:leading-6 md:leading-none">
                  {banner.homeBannerDescription}
                </p>
                {/* Button */}
                <Link
                  href={banner.homeBannerButtonLink}
                  className="flex w-fit items-center gap-2.5 bg-[#A1CF5F] font-bold text-black text-[13px] md:text-sm py-1 md:py-3 px-6 rounded-lg transition duration-300"
                >
                  {banner.homeBannerButtonText}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    id="arrow"
                  >
                    <g
                      fill="none"
                      fillRule="evenodd"
                      stroke="#000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M1 13 13 1M4 1h9v9"></path>
                    </g>
                  </svg>
                </Link>
              </div>
              {/* Image */}
              <Image
                alt="Banner Image"
                width={800}
                height={500}
                src={banner.homeBannerLatestPostImages?.node?.link || ""}
                className="container md:absolute right-[29px] bottom-[0%] w-3/12 p-4"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default NewBannerSlider;
