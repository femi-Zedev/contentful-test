import { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { createClient } from "contentful";
import { ColorSchemeContext } from "./templates/Layout";
import SidebarMobile from "@/components/SidebarMobile";
import { GetStaticProps } from "next";
import { getSidebarContent } from "./api/sidebarContent";


export default function Home( ) {
  const { colorScheme } = useContext(ColorSchemeContext)
  const userName = 'Jean Baors'
  

  return (
    <>
      <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
        <h2 className="after-effect after:left-52">About Me</h2>
        <SidebarMobile/>
        <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center hidden">
          <div className="col-span-12 space-y-2.5">
            <div className="lg:mr-16">
              <p className="text-[#44566c] dark:text-color-910 leading-7"> I&apos;m Creative Director
                and UI/UX Designer from Sydney, Australia, working in web development and
                print media. I enjoy turning complex problems into simple, beautiful and
                intuitive designs. </p>
              <p className="text-[#44566c] leading-7 mt-2.5 dark:text-color-910"> My aim is to
                bring across your message and identity in the most creative way. I created
                web design for many famous brand companies. </p>
            </div>
            <div></div>
          </div>
        </div>

      </div>

      {/* <div className="pb-12 px-2 sm:px-5 md:px-10 lg:px-14">
        <h3 className="text-[35px] dark:text-white font-bold font-robotoSlab pb-5"> What I do! </h3>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          <div className={`about-box ${colorScheme == 'dark' ? "bg-[#fcf4ff]" : "bg-transparent"}`} >
            <img className="w-10 h-10 object-contain block" src="/assets/images/icons/icon.svg"
              alt="icon" />
            <div className="space-y-2">
              <h3 className={`text-[22px] font-semibold ${colorScheme !== 'dark' && "text-white"}`}> Ui/Ux Design </h3>
              <p className={`leading-8 ${colorScheme == 'dark' ? "text-gray-lite" : "text-[#A6A6A6]"}`}> Lorem ipsum dolor sit
                amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
            </div>
          </div>

          <div className={`about-box ${colorScheme == 'dark' ? "bg-[#fefaf0]" : "bg-transparent"}`}>
            <img className="w-10 h-10 object-contain block" src="/assets/images/icons/icon1.svg"
              alt="icon" />
            <div className="space-y-2">
              <h3 className={`text-[22px] font-semibold ${colorScheme !== 'dark' && "text-white"}`}> App Development </h3>
              <p className={`leading-8 ${colorScheme == 'dark' ? "text-gray-lite" : "text-[#A6A6A6]"}`}> Lorem ipsum dolor sit
                amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
            </div>
          </div>

          <div className={`about-box ${colorScheme == 'dark' ? "bg-[#fcf4ff]" : "bg-transparent"}`} >
            <img className="w-10 h-10 object-contain block" src="/assets/images/icons/icon2.svg"
              alt="icon" />
            <div className="space-y-2">
              <h3 className={`text-[22px] font-semibold ${colorScheme !== 'dark' && "text-white"}`}> Photography </h3>
              <p className={`leading-8 ${colorScheme == 'dark' ? "text-gray-lite" : "text-[#A6A6A6]"}`}> Lorem ipsum dolor sit
                amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
            </div>
          </div>

          <div className={`about-box ${colorScheme == 'dark' ? "bg-[#fff4f4]" : "bg-transparent"}`}>
            <img className="w-10 h-10 object-contain block" src="/assets/images/icons/icon3.svg"
              alt="icon" />
            <div className="space-y-2">
              <h3 className={`text-[22px] font-semibold ${colorScheme !== 'dark' && "text-white"}`}> Photography </h3>
              <p className={`leading-8 ${colorScheme == 'dark' ? "text-gray-lite" : "text-[#A6A6A6]"}`}> Lorem ipsum dolor sit
                amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
            </div>
          </div>

          <div className={`about-box ${colorScheme == 'dark' ? "bg-[#fff0f8]" : "bg-transparent"}`} >
            <img className="w-10 h-10 object-contain block" src="/assets/images/icons/icon4.svg"
              alt="icon" />
            <div className="space-y-2">
              <h3 className={`text-[22px] font-semibold ${colorScheme !== 'dark' && "text-white"}`}> Managment </h3>
              <p className={`leading-8 ${colorScheme == 'dark' ? "text-gray-lite" : "text-[#A6A6A6]"}`}> Lorem ipsum dolor sit
                amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
            </div>
          </div>

          <div className={`about-box ${colorScheme == 'dark' ? "bg-[#f3faff]" : "bg-transparent"}`}>
            <img className="w-10 h-10 object-contain block" src="/assets/images/icons/icon5.svg"
              alt="icon" />
            <div className="space-y-2">
              <h3 className={`text-[22px] font-semibold ${colorScheme !== 'dark' && "text-white"}`}> Web Development </h3>
              <p className={`leading-8 ${colorScheme == 'dark' ? "text-gray-lite" : "text-[#A6A6A6]"}`}> Lorem ipsum dolor sit
                amet, consectetuer adipiscing elit, sed diam euismod volutpat. </p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="px-2 sm:px-5 md:px-10 lg:px-14">
        <div className={`max-w-full px-10 h-auto pb-16 rounded-xl ${colorScheme == 'dark' ? "bg-[#F8FBFB]" : "bg-[#0D0D0D]"}`} >
          <h2 className={`text-6xl py-8 font-semibold ${colorScheme == 'light' && "text-[#F8FBFB]"}`}>Ce que disent mes clients  !</h2>
          {/* <h3 className={`text-center text-6xl mb-10 font-semibold ${colorScheme !== 'dark' && "text-white"} `}> Ce que mes clients disent ! </h3> */}
          <Swiper
            className="mySwiper mt-5"
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            slidesPerView={"auto"}
            pagination={{ clickable: true, }}
            // centeredSlides={true}
            loop={true}
            spaceBetween={30}
            modules={[Pagination, Autoplay]}
          >
            {Array(9).fill(0).map((el: any, i: number) => (
              <SwiperSlide key={i}>
                <div className={`h-[90%] flex items-center p-4 gap-x-4 rounded-xl border  ${colorScheme == 'dark' ? "bg-gray-100/60 border-gray-400" : "bg-purple-100/10 border-gray-500"} `} >
                  <img className='w-40' src={`https://ui-avatars.com/api/?name=${userName.split(" ")[0]}+${userName.split(" ")[1]}&background=1A3059&color=ffffff&rounded=true&bold=true`} alt="" />
                  <div>
                    <p className={`font-medium italic text-base ${colorScheme == 'dark' ? "text-gray-700" : "text-gray-300 "} `} >&ldquo;Hiring a Senior Laravel engineer through JobBoard has been incredible. The best job board experience we&apos;ve ever had.&ldquo;</p>
                    <span className={`text-sm  ${colorScheme == 'dark' ? "text-gray-600" : "text-gray-400 "}`} >{userName}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}
