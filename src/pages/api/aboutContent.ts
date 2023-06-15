import contentfulClient from "./contentfulClient"



export async function getAboutContent( ) {
	const contentful = contentfulClient()

	const aboutContent = await contentful.getEntries({ content_type: 'aboutPage'})

	return aboutContent.items
}