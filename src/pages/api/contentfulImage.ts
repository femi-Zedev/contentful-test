import { Asset, AssetLink } from 'contentful'

export interface ContentImage {
	src: string
	alt: string
	width: number
	height: number
}

export function parseContentfulContentImage(
	asset?: Asset<undefined, string> | { sys: AssetLink }
) {
	if (!asset) {
		return null
	}

	if (!('fields' in asset)) {
		return null
	}
  
  const imgUrl = asset.fields.file?.url || '';
	return imgUrl
}