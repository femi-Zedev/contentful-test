import { useState, useEffect, createContext } from 'react'


import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

export const metadata = {
  title: 'Ayemane Badarou',
  description: 'Ayemane Badarou portfolio',
}

type colorSchemeContextType = {
  colorScheme: string;
  updateColorScheme: () => void;
};

export const ColorSchemeContext = createContext<colorSchemeContextType>({
  colorScheme: 'dark',
  updateColorScheme: () => { }
});





export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  const [colorScheme, setColorScheme] = useState<string>("dark")


  useEffect(() => {
    if (colorScheme === 'light') {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // document.body.className = dark ? 'bg-neutral-900 text-neutral-300' : 'bg-neutral-100 text-gray-800';
  }, [colorScheme]);

  useEffect(() => {
    if (localStorage.getItem("color-theme") === "dark" || (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches))
      setColorScheme('dark')
    else setColorScheme('light')

  }, [])



  function updateColorScheme() {
    colorScheme == "dark" ? setColorScheme("light") : setColorScheme('dark')
  }

  return (
    <ColorSchemeContext.Provider value={{ colorScheme, updateColorScheme }}>
      <div className="bg-homeBg dark:bg-homeBg-dark min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
        
        <div className="container">
          <Navbar />
        </div>

        <div className="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]">
          
          <Sidebar />
          
          <div className="col-span-12 lg:col-span-8">
            <div>
              <div className={`lg:rounded-2xl py-5 ${colorScheme == 'dark' ? "bg-white" : "bg-[#111111]"}`} >
                {children}
              </div>
            </div>
          </div>

        </div>

      </div>
    </ColorSchemeContext.Provider>

  )
}
