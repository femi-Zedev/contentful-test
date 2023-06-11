import { createClient } from "contentful";

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env

console.log(process.env.CONTENTFUL_SPACE_ID, " ",process.env.CONTENTFUL_ACCESS_TOKEN )

export const contentfulClient = createClient({  
  space: "9c0tqh10g15j",
  accessToken: "ffOJTnI5WgmYJhwrRi2LYC_7p8bz-IJsr8CQl7Tre6Y"
})