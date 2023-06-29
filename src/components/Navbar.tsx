import { getNavbarContent } from '@/pages/api/navbarContent';
import { ColorSchemeContext } from '@/pages/templates/Layout'
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react'

export default function Navbar() {
  const router = useRouter();
  const { colorScheme, updateColorScheme } = useContext(ColorSchemeContext)
  const [menuOpen, switchMenu] = useState<boolean>(false)
  const [navbarContent, setNavbarContent] = useState<any>({});


  useEffect(() => {
    getNavbarContent()
      .then((res) => setNavbarContent(res[0].fields))
      .catch((error) => console.error(error));
  }, []);

  return (
    <header className="flex justify-between items-center fixed top-0 left-0 w-full lg:static z-[1111111111]">
      <div className={`flex justify-between w-full px-4 lg:px-0 ${colorScheme == 'dark' ? "bg-[#F3F6F6]" : "bg-black "} lg:bg-transparent lg:dark:bg-transparent `} >
        <div className="flex justify-between w-full items-center space-x-4 lg:my-8 my-5">
          
          {/* website logo */}
          <Link href="/" className="text-5xl font-semibold" >
            <img className="h-[26px] lg:h-[32px]" src={'https:' + navbarContent.appLogo?.fields.file.url} alt="logo" />
          </Link>
          <div className="flex items-center">
            {/* light and dark mode button */}
            <button id="theme-toggle-mobile" type="button" className="dark-light-btn lg:hidden w-[44px] h-[44px] ml-2" onClick={updateColorScheme}>
              {colorScheme == 'light' && <i id="theme-toggle-light-icon-mobile" className="fa-solid fa-sun text-xl lg:hidden"></i>}
              {colorScheme == 'dark' && <i id="theme-toggle-dark-icon-mobile" className="fa-solid fa-moon text-xl lg:hidden"></i>}
            </button>

            {/* mobile toggle button */}
            <button id="menu-toggle" type="button" className="menu-toggle-btn" onClick={() => switchMenu(!menuOpen)}>
              {!menuOpen && <i id="menu-toggle-open-icon" className="fa-solid fa-bars text-xl"></i>}
              {menuOpen  && <i id="menu-toggle-close-icon" className="fa-solid fa-xmark text-xl"></i>}
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
              {colorScheme == 'light' && <i id="theme-toggle-light-icon" className="hidden lg:block fa-solid fa-sun text-xl"></i>}
              {colorScheme == 'dark' && <i id="theme-toggle-dark-icon" className="hidden lg:block fa-solid fa-moon text-xl"></i>}
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
                Bio
              </Link>
            </li>

            <li>
              <Link  href="/portfolio" className={`${router.asPath.includes('portfolio') ? "mobile-menu-items-active" : "mobile-menu-items"}`} >
                <span className="mr-2 text-xl">
                  <i className="fas fa-briefcase"></i>
                </span>
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/blog" className={`${router.asPath.includes('blog') ? "mobile-menu-items-active" : "mobile-menu-items"}`} >
                <span className="mr-2 text-xl">
                  <i className="fa-brands fa-blogger"></i>
                </span> Blog </Link>
            </li>
          </ul>
        </nav>}
    </header>
  )
}
