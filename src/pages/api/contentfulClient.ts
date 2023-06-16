import { createClient } from 'contentful'

const client = createClient({
	space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,
	accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!
})


// This little helper will let us switch between the two
// clients easily:
export default function contentfulClient() {
	return client
}