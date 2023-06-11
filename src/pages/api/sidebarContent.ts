import { contentfulClient } from "./contentfulClient"


export const getSidebarContent = async() => {
  const sidebar = await contentfulClient.getEntries({ content_type: 'sidebar'})
  console.log(sidebar)
  return sidebar
}