import contentfulClient from "./contentfulClient"

export async function getReferenceValue(refId: string, attribute?: string) {
  const refValue = contentfulClient().getEntry(refId)
  return attribute ? (await refValue).fields[`${attribute}`] : (await refValue).fields
}