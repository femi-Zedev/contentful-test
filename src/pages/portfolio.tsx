import React, { ReactNode, useContext, useState } from 'react'
import { ColorSchemeContext } from './templates/Layout'
import MasonryLayout from '@/components/MasonryLayout';

export interface PortfolioItemType {
    title: string;
    imgSrc: string;
    category: string;
    projectType: string;
    client: string;
    projectLink: string;
    tech: string[];
    modalContent: ReactNode;
}
  const works = [
        {
            title: "Churl urina",
            imgSrc: "/assets/images/work_images/small/1.jpg",
            category: "UI/UX",
            projectType: "website",
            client: "Envato",
            projectLink: "https://teska-travel.netlify.app/",
            tech: ["Photoshop", "Figma", "Tailwind CSS"],
            modalContent: (
                <>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae.
                    Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus.
                    Nostrum eligendi recusandae qui tempore deserunt!
                </>
            ),
        },
        {
            title: "Churl urina",
            imgSrc: "/assets/images/work_images/small/2.jpg",
            category: "Dev",
            projectType: "website",
            client: "Envato",
            projectLink: "https://teska-travel.netlify.app/",
            tech: ["React", "Mantine UI", "Tailwind CSS"],
            modalContent: (
                <>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae.
                    Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus.
                    Nostrum eligendi recusandae qui tempore deserunt!
                </>
            ),
        },
        {
            title: "Churl urina",
            imgSrc: "/assets/images/work_images/small/3.jpg",
            category: "UI/UX",
            projectType: "website",
            client: "Envato",
            projectLink: "https://teska-travel.netlify.app/",
            tech: ["Photoshop", "Figma", "Tailwind CSS"],
            modalContent: (
                <>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae.
                    Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus.
                    Nostrum eligendi recusandae qui tempore deserunt!
                </>
            ),
        },
        {
            title: "Churl urina",
            imgSrc: "/assets/images/work_images/small/4.jpg",
            category: "UI/UX",
            projectType: "website",
            client: "Envato",
            projectLink: "https://teska-travel.netlify.app/",
            tech: ["React", "Mantine UI", "Tailwind CSS"],
            modalContent: (
                <>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae.
                    Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus.
                    Nostrum eligendi recusandae qui tempore deserunt!
                </>
            ),
        },
        {
            title: "Churl urina",
            imgSrc: "/assets/images/work_images/small/5.jpg",
            category: "Dev",
            projectType: "website",
            client: "Envato",
            projectLink: "https://teska-travel.netlify.app/",
            tech: ["Photoshop", "Figma", "Tailwind CSS"],
            modalContent: (
                <>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae.
                    Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus.
                    Nostrum eligendi recusandae qui tempore deserunt!
                </>
            ),
        },
        {
            title: "Churl urina",
            imgSrc: "/assets/images/work_images/small/6.jpg",
            category: "Fanart",
            projectType: "website",
            client: "Envato",
            projectLink: "https://teska-travel.netlify.app/",
            tech: ["React", "Mantine UI", "Tailwind CSS"],
            modalContent: (
                <>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae.
                    Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus.
                    Nostrum eligendi recusandae qui tempore deserunt!
                </>
            ),
        },
        {
            title: "Churl urina",
            imgSrc: "/assets/images/work_images/small/7.jpg",
            category: "Fanart",
            projectType: "website",
            client: "Envato",
            projectLink: "https://teska-travel.netlify.app/",
            tech: ["Photoshop", "Figma", "Tailwind CSS"],
            modalContent: (
                <>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae.
                    Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus.
                    Nostrum eligendi recusandae qui tempore deserunt!
                </>
            ),
        },
        {
            title: "Churl urina",
            imgSrc: "/assets/images/work_images/small/8.jpg",
            category: "Dev",
            projectType: "website",
            client: "Envato",
            projectLink: "https://teska-travel.netlify.app/",
            tech: ["React", "Mantine UI", "Tailwind CSS"],
            modalContent: (
                <>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae.
                    Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus.
                    Nostrum eligendi recusandae qui tempore deserunt!
                </>
            ),
        },
        {
            title: "Churl urina",
            imgSrc: "/assets/images/work_images/small/9.jpg",
            category: "Fanart",
            projectType: "website",
            client: "Envato",
            projectLink: "https://teska-travel.netlify.app/",
            tech: ["React", "Mantine UI", "Tailwind CSS"],
            modalContent: (
                <>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae.
                    Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus.
                    Nostrum eligendi recusandae qui tempore deserunt!
                </>
            ),
        },

    ]

export default function Portfolio() {
    const filtersDefault = [
        { label: "All" },
        { label: "UI/UX" },
        { label: "Fanart" },
        { label: "Dev" },
    ];
    const { colorScheme } = useContext(ColorSchemeContext)
    const [selectedFilter, updateFilters] = useState("All");
    const [portfolios, setPortfolios] = useState(works)
    const [isAnimating, setAnimating] = useState(false);

  

    const onFilter = (value: string) => {
        if (selectedFilter !== value) {
          setAnimating(true); // Start animation
          setTimeout(() => {
            updateFilters(value);
            let filteredWorks = works.filter((work) => work.category == value);
            filteredWorks.length > 0
              ? setPortfolios(filteredWorks)
              : setPortfolios(works);
            setAnimating(false); // End animation
          }, 500); // Wait for the animation duration
        }
      };
    return (
        <div className="container  mb-8 px-4 sm:px-5 md:px-10 lg:px-[60px]">
            <div className="py-12 ">
                <h2 className="after-effect after:left-48 lg:mt-0">Portfolio</h2>
                {/* fillter button group */}
                {/* fillter group buttons */}
                <ul className="button-group isotop-menu-wrapper mt-[30px] flex w-full justify-start md:justify-end flex-wrap font-medium">
                    {filtersDefault.map(f => (
                        <li className={`capitalize fillter-btn mr-4 md:mx-4 ${selectedFilter == f.label && "is-checked"}`} onClick={() => onFilter(f.label)}>{f.label}</li>
                    ))}
                </ul>
            </div>
            {/* End py-12 */}

            <div  className="">
                <div className="grid-sizer"></div>
                <MasonryLayout columns={2} gap={24}>
                    {
                        portfolios.map((item: PortfolioItemType, i) => (
                            <PortfolioItem key={i} colorScheme={colorScheme} item={item} animate={isAnimating} />
                        ))
                    }
                </MasonryLayout>

            </div>
        </div>
    )
}

export function PortfolioItem({ colorScheme, item, animate  }: { colorScheme: string, item: PortfolioItemType, animate: boolean }) {
    const { title, imgSrc, category, projectType, client, projectLink, tech, modalContent } = item
    return (
        <>
            <div className={`portfolio_list-two-items isotop-item plugin custom w-full ${animate ? "fade-scale" : ""}`} >
                <div className={`rounded-lg p-6 ${colorScheme == 'dark' ? "bg-[#fff0f0]" : "bg-transparent border-[2px]"} border-[#212425]`} >
                    <div className="overflow-hidden rounded-lg">
                        <a href="portfiloOne.html#portfiloOne" rel="modal:open">
                            <img className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto" src={imgSrc} alt="portfolio image" />
                        </a>
                    </div>
                    <span className={`pt-5 text-[14px] font-normal ${colorScheme == 'dark' ? "text-gray-lite" : "text-[#A6A6A6]"}  block`} >{category}</span>
                    <h2 className={`font-medium cursor-pointer text-xl duration-300 transition mt-2 ${colorScheme == 'dark' ? "hover:text-[#FA5252]" : "hover:text-[#FA5252] text-white"} `} >
                        <a href="portfiloOne.html#portfiloOne" rel="modal:open"> {title} </a>
                    </h2>
                </div>
            </div>
        </>
    )
}
