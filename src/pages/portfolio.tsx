import React, { useContext, useEffect, useState } from 'react'
import Lottie, { LottieProps } from 'react-lottie';
import no_Img from '#assets/lotties/no_img.json';
import { ColorSchemeContext } from './templates/Layout'
import MasonryLayout from '@/components/MasonryLayout';
import { getPortfolioContent, getPortfolios, getWorksCategories } from './api/portfolioContent';
import { getReferenceValue } from './api/getReferenceValue';

export interface PortfolioItemType {
    title: string;
    imgSrc: string;
    category: string;
}

const lottieOptions: LottieProps['options'] = {
    loop: true,
    autoplay: true,
    animationData: no_Img,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
}


export default function Portfolio() {

    const { colorScheme } = useContext(ColorSchemeContext)
    const [cats, setCats] = useState<string[]>([]);
    const [selectedFilter, updateFilters] = useState("Tout");
    const [portfolios, setPortfolios] = useState<PortfolioItemType[]>([])
    const [filteredWorks, setFilteredWorks] = useState<PortfolioItemType[]>([])
    const [isAnimating, setAnimating] = useState(false);
    const [portfolioContent, setPortfolioContent] = useState<any>({});

    useEffect(() => {
        getPortfolios()
            .then(async (res) => {
                const preparedItems = await preparePortfolioItem(res as any);
                setPortfolios(preparedItems);
                setFilteredWorks(preparedItems)
            })
            .catch((error) => console.error(error));
    }, []);

    useEffect(() => {

        getWorksCategories().then((res) => {
            const result = res.map((item) => String(item.fields.graphic_cat));
            result.unshift('Tout');
            setCats(result);
            console.log(result);

        });

        getPortfolioContent().then((res) => {
            console.log(res[0].fields)
            setPortfolioContent(res[0].fields)
        });


    }, [])



    async function preparePortfolioItem(portfolio_list: any[]) {
        const portfolioItems: Array<PortfolioItemType> = await Promise.all(
            portfolio_list?.map(async (item) => ({
                title: item.fields.portfolio_name as string,
                imgSrc: item.fields.portfolio_img.fields.file.url as string,
                category: await getReferenceValue(item.fields.portfolioCat.sys.id, 'graphic_cat') as string,
            }))
        );
        console.log(portfolioItems);
        return portfolioItems
    }



    const onFilter = (value: string) => {
        if (selectedFilter !== value) {
            setAnimating(true); // Start animation
            setTimeout(() => {
                updateFilters(value);
                if (value == 'Tout') return setFilteredWorks(portfolios)
                let filterResult = portfolios.filter((portfolio) => portfolio.category == value);
                filterResult.length == 0 ? setFilteredWorks([]) : setFilteredWorks(filterResult);
                setAnimating(false); // End animation
            }, 500); // Wait for the animation duration
        }
    };

    return (
        <div className="container  mb-8 px-4 sm:px-5 md:px-10 lg:px-[60px]">
            <div className="py-12 ">
                <h2 className="after-effect after:left-48 lg:mt-0">{portfolioContent.title}</h2>
                {/* fillter button group */}
                {/* fillter group buttons */}
                <ul className="button-group isotop-menu-wrapper mt-[30px] flex w-full justify-start md:justify-end flex-wrap font-medium">
                    {cats.map(cat => (
                        <li className={`capitalize fillter-btn mr-4 md:mx-4 ${selectedFilter == cat && "is-checked"}`} onClick={() => onFilter(cat)}>{cat}</li>
                    ))}
                </ul>
            </div>
            {/* End py-12 */}

            <div className="">
                <div className="grid-sizer"></div>
                {
                    filteredWorks.length > 0 ?
                        <MasonryLayout columns={2} gap={24}>
                            {filteredWorks.map((item: any, i: number) => (
                                <PortfolioItem key={i} colorScheme={colorScheme} item={item} animate={isAnimating} />
                            ))}
                        </MasonryLayout>
                        :
                        <div className='flex flex-col p-10 gap-y-5 items-center w-full h-96 bg-slate-400/10 rounded-lg'>
                            <Lottie options={lottieOptions} width={250} height={250}  />
                            <h2 className='font-semibold text-lg text-gray-500'>Oups il n'y a pas d'illustration pour cette catégorie !!</h2>
                        </div>
                }

            </div>
        </div>
    )
}

export function PortfolioItem({ colorScheme, item, animate }: { colorScheme: string, item: PortfolioItemType, animate: boolean }) {
    const { title, imgSrc, category } = item
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
