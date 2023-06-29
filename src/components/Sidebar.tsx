import React, { useContext, useEffect, useState } from 'react'
import { ColorSchemeContext, sidebarState } from '@/pages/templates/Layout'
import { getSidebarContent } from '@/pages/api/sidebarContent';
import { atom, useRecoilState } from 'recoil';

export default function Sidebar() {


  const { colorScheme } = useContext(ColorSchemeContext)
  const [sidebarContent, setSidebarContent] = useRecoilState<any>(sidebarState);

  useEffect(() => {
    getSidebarContent()
      .then((res) => setSidebarContent(res[0].fields))
      .catch((error) => console.error(error));
  }, []);



  return (
    <div className="col-span-12 lg:col-span-4 hidden lg:block h-screen sticky top-44">
      {sidebarContent !== undefined &&
        <div className={`w-full mb-6 lg:mb-0 mx-auto relative  text-center px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0 ${colorScheme == 'dark' ? "bg-white" : "bg-[#111111]"}`} >
          <img src={'https:' + sidebarContent.profilePicture?.fields.file.url} className="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]" alt="about" />
          <div className="pt-[100px] pb-8">
            <h2 className={`mt-6 mb-1 text-[26px] font-semibold ${colorScheme == 'light' && "text-white"}`}> {sidebarContent!['fullName']} </h2>
            <h3 className={`mb-4 inline-block px-5 py-1.5 rounded-lg ${colorScheme == 'dark' ? "text-[#7B7B7B]" : "bg-[#1D1D1D] text-[#A6A6A6]"}`}>
              {sidebarContent!['job']}
            </h3>
            <div className="flex justify-center space-x-3">

              <a href={sidebarContent!['instagramLink']} target="_blank" rel="noopener noreferrer">
                <span className="socialbtn text-[#e14a84]">
                  <i className="fa-brands fa-instagram"></i>
                </span>
              </a>
              <a href={sidebarContent!['linkedinLink']} target="_blank"
                rel="noopener noreferrer">
                <span className="socialbtn text-[#0072b1]">
                  <i className="fa-brands fa-linkedin-in"></i>
                </span>
              </a>

              <a href={sidebarContent!['whatsappLink']} target="_blank"
                rel="noopener noreferrer">
                <span className="socialbtn text-green-600">
                  <i className="fa-brands fa-whatsapp"></i>
                </span>
              </a>

            </div>
            <div className={`p-7 rounded-2xl mt-7 ${colorScheme == 'dark' ? "bg-[#F3F6F6]" : "bg-[#1D1D1D]"}`} >
              <div className={`flex border-b py-2.5 ${colorScheme == 'dark' ? "border-[#E3E3E3]" : "border-[#3D3A3A]"}`}>
                <span className={`socialbtn shadow-md text-[#E93B81] ${colorScheme == 'dark' ? "bg-white" : "bg-black"}`}>
                  <i className="fa-solid fa-mobile-screen-button"></i>
                </span>
                <div className="text-left ml-2.5">
                  <p className={`text-xs  ${colorScheme == 'dark' ? "text-[#44566C]" : "text-[#A6A6A6]"}`}> N° de Téléphone </p>
                  <a href={`tel:+229${sidebarContent!['phoneNumber']}` } className={`hover:text-[#E93B81] ${colorScheme == 'light' && "text-white"}`}>+229 {sidebarContent!['phoneNumber']}</a>
                </div>
              </div>
              <div className={`flex border-b py-2.5 ${colorScheme == 'dark' ? "border-[#E3E3E3]" : "border-[#3D3A3A]"}`}>
                <span className={`socialbtn shadow-md text-[#6AB5B9] ${colorScheme == 'dark' ? "bg-white" : "bg-black"}`}>
                  <i className="fa-solid fa-envelope-open-text"></i>
                </span>
                <div className="text-left ml-2.5">
                  <p className={`text-xs  ${colorScheme == 'dark' ? "text-[#44566C]" : "text-[#A6A6A6]"}`}> Email </p>
                  <a href={sidebarContent!['email']} className={`hover:text-[#E93B81] ${colorScheme == 'light' && "text-white"}`}>{sidebarContent!['email']}</a>
                </div>
              </div>
              <div className={`flex py-2.5`}>
                <span className={`socialbtn shadow-md text-[#FD7590] ${colorScheme == 'dark' ? "bg-white" : "bg-black"}`}>
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <div className="text-left ml-2.5">
                  <p className={`text-xs  ${colorScheme == 'dark' ? "text-[#44566C]" : "text-[#A6A6A6]"}`}> Adresse </p>
                  <p className={`${colorScheme == 'light' && "text-white"}`}>{sidebarContent!['location']}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
