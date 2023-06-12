import { createClient } from 'contentful'

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env

const client = createClient({
	space: "9c0tqh10g15j",
	accessToken: "ffOJTnI5WgmYJhwrRi2LYC_7p8bz-IJsr8CQl7Tre6Y"
})


// This little helper will let us switch between the two
// clients easily:
export default function contentfulClient() {
  
	return client
}