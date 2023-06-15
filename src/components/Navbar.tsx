import { ColorSchemeContext } from '@/pages/templates/Layout'
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react'

export default function Navbar() {
  const router = useRouter();
  const { colorScheme, updateColorScheme } = useContext(ColorSchemeContext)
  const [menuOpen, switchMenu] = useState<boolean>(false)

  return (
    <header className="flex justify-between items-center fixed top-0 left-0 w-full lg:static z-[1111111111]">
      <div className={`flex justify-between w-full px-4 lg:px-0 ${colorScheme == 'dark' ? "bg-[#F3F6F6]" : "bg-black "} lg:bg-transparent lg:dark:bg-transparent `} >
        <div className="flex justify-between w-full items-center space-x-4 lg:my-8 my-5">
          {/* website logo */}
          <a className="text-5xl font-semibold" href="index.html">
            <img className="h-[26px] lg:h-[32px]" src="/assets/images/logo/logo.png" alt="logo" />
          </a>
          <div className="flex items-center">
            {/* light and dark mode button */}
            <button id="theme-toggle-mobile" type="button" className="dark-light-btn lg:hidden w-[44px] h-[44px] ml-2" onClick={updateColorScheme}>
              {colorScheme == 'dark' && <i id="theme-toggle-light-icon-mobile" className="fa-solid fa-sun text-xl hidden"></i>}
              {colorScheme == 'light' && <i id="theme-toggle-dark-icon-mobile" className="fa-solid fa-moon text-xl  hidden"></i>}
            </button>

            {/* mobile toggle button */}
            <button id="menu-toggle" type="button" className="menu-toggle-btn" onClick={() => switchMenu(!menuOpen)}>
              {menuOpen && <i id="menu-toggle-open-icon" className="fa-solid fa-bars text-xl "></i>}
              {!menuOpen && <i id="menu-toggle-close-icon" className="fa-solid fa-xmark text-xl hidden  "></i>}
            </button>
          </div>
        </div>
      </div>

      {/* header items two for large screens */}
      <nav className="hidden lg:block">
        <ul className="flex my-12">
          <li>
            <Link href="/" className={`${router.asPath === "/" ? "menu-item-two-active" : "menu-item-two"}`}  >
              <span className="mr-2 text-base">
                <i className="fa-regular fa-user"></i>
              </span>
              Bio
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className={`${router.asPath === "/portfolio" ? "menu-item-two-active" : "menu-item-two"}`}>
              <span className="mr-2 text-base">
                <i className="fas fa-briefcase"></i>
              </span>
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/blog" className={`${router.asPath.includes('blog') ? "menu-item-two-active" : "menu-item-two"}`}  >
              <span className="mr-2 text-base">
                <i className="fa-brands fa-blogger"></i>
              </span>
              Blogs
            </Link>
          </li>
          <li>
            {/* light and dark mode button */}
            <button id="theme-toggle" type="button" className="dark-light-btn w-[44px] h-[44px] ml-2" onClick={updateColorScheme}>
              {colorScheme == 'dark' && <i id="theme-toggle-light-icon" className="fa-solid fa-sun text-xl hidden"></i>}
              {colorScheme == 'light' && <i id="theme-toggle-dark-icon" className="fa-solid text-xl fa-moon hidden"></i>}
            </button>

          </li>
        </ul>
      </nav>

      {menuOpen == true &&
        <nav >
          <ul className={`block p-3 rounded-b-[20px] shadow-md absolute left-0 top-20 z-[22222222222222] w-full ${colorScheme == 'dark' ? "bg-white" : "bg-[#111111]"}`} >
            <li >
              <Link href="/" className={`${router.asPath === "/" ? "mobile-menu-items-active" : "mobile-menu-items"}`} >
                <span className="mr-2 text-xl">
                  <i className="fa-regular fa-user"></i>
                </span> 
                About
              </Link>
            </li>

            <li>
              <Link  href="/portfolio" className={`${router.asPath === "portfolio" ? "mobile-menu-items-active" : "mobile-menu-items"}`} >
                <span className="mr-2 text-xl">
                  <i className="fas fa-briefcase"></i>
                </span>
                Works
              </Link>
            </li>
            <li>
              <Link href="/blog" className={`${router.asPath.includes('blog') ? "mobile-menu-items-active" : "mobile-menu-items"}`} >
                <span className="mr-2 text-xl">
                  <i className="fa-solid fa-address-book"></i>
                </span> Contact </Link>
            </li>
          </ul>
        </nav>}
    </header>
  )
}
