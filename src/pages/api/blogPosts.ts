import { BlogPostType } from "../blog"
import contentfulClient from "./contentfulClient"
import { parseContentfulContentImage } from "./contentfulImage"

export function parseContentfulBlogPost(blogPostEntry: any): BlogPostType | null {
	if (!blogPostEntry) {
		return null
	}

	return {
		title: blogPostEntry.fields.title || '',
		slug: blogPostEntry.fields.slug,
		post_content: blogPostEntry.fields.post_content || null,
		updated_at: blogPostEntry.sys.updatedAt || null,
		post_img: parseContentfulContentImage(blogPostEntry.fields.post_img),
	}
}

export async function getBlogPosts( ) {
	const contentful = contentfulClient()
	const blogPosts = await contentful.getEntries({ content_type: 'blog_post'})
	return blogPosts.items
}

export async function fetchBlogPost( slug: string): Promise<BlogPostType | null> {
	const contentful = contentfulClient()

	const blogPostsResult = await contentful.getEntries({
		content_type: 'blog_post',
		'fields.slug': slug,
		include: 2,
	})

	return parseContentfulBlogPost(blogPostsResult.items[0])
}