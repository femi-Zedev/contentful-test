import { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { ColorSchemeContext } from "./templates/Layout";
import SidebarMobile from "@/components/SidebarMobile";
import { getAboutContent } from "./api/aboutContent";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import useBreakpoint from "@/hooks/useBreakpoint";


export default function Home( ) {
  const { colorScheme } = useContext(ColorSchemeContext)
  const [aboutContent, setAboutContent] = useState<any>({});
  const viewPortWidth = useBreakpoint();
  
  useEffect(() => {
    getAboutContent()
      .then((res) => {
        console.log(res[0].fields)
        setAboutContent(res[0].fields)
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
        <h2 className="after-effect after:left-52">{aboutContent!['title']}</h2>
        <SidebarMobile/>
        <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center hidden">
          <div className="col-span-12 space-y-2.5">
            <div className="lg:mr-16">
            {documentToReactComponents(aboutContent!['aboutText'])}
            </div>
            <div></div>
          </div>
        </div>

      </div>

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
            {aboutContent['customerReviews']?.map((item: any, i: number) => (
              <SwiperSlide key={i} className={`h-full ${viewPortWidth == 'sm' || viewPortWidth == 'xs' ? 'w-full': '!w-3/4'} `} >
                <div className={`h-[90%] flex items-center p-6 gap-x-4 rounded-xl border  ${colorScheme == 'dark' ? "bg-gray-100/60 border-gray-400" : "bg-purple-100/10 border-gray-500"} `} >
                  <img className='w-16 max-w-[64px] ' src={`https://ui-avatars.com/api/?name=${item.fields.customerName.split(" ")[0]}+${item.fields.customerName.split(" ")[1]}&background=1A3059&color=ffffff&rounded=true&bold=true`} alt="" />
                  <div>
                    <p className={`font-medium italic text-base line-clamp-3 ${colorScheme == 'dark' ? "text-gray-700" : "text-gray-300 "} `} >{item.fields.review}</p>
                    <span className={`text-sm  ${colorScheme == 'dark' ? "text-gray-600" : "text-gray-400 "}`} >{item.fields.customerName}</span>
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
