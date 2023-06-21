import contentfulClient from "./contentfulClient"



export async function getNavbarContent( ) {
	const contentful = contentfulClient()

	const navbarContent = await contentful.getEntries({ content_type: 'navbar'})

	return navbarContent.items
}