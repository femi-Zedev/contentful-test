import contentfulClient from "./contentfulClient"



export async function getSidebarContent( ) {
	const contentful = contentfulClient()

	const sidebarContent = await contentful.getEntries({ content_type: 'sidebar'})

	return sidebarContent.items
}