// https://cdn.contentful.com/spaces/9c0tqh10g15j/environments/master/entries?content_type=portfolio_page
import contentfulClient from "./contentfulClient"

// const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env
const CONTENTFUL_SPACE_ID = "9c0tqh10g15j"

export async function getReferenceValue(refId: string, attribute?: string) {
  const refValue = contentfulClient().getEntry(refId)
  return attribute ? (await refValue).fields[`${attribute}`] : (await refValue).fields
}