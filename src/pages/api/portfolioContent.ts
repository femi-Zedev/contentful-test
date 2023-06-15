import contentfulClient from "./contentfulClient"



export async function getPortfolioContent( ) {
	const portfolioContent = await contentfulClient().getEntries({ content_type: 'portfolioPage'})
	return portfolioContent.items
}

export async function getWorksCategories( ) {
	const worksCat = await contentfulClient().getEntries({ content_type: 'portolio_cats'})
	return worksCat.items
}

export async function getPortfolios( ) {
	const works = await contentfulClient().getEntries({ content_type: 'portolio_item'})
	return works.items
}
