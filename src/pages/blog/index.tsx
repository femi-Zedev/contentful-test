import React, { useContext, useEffect, useState } from 'react'
import { ColorSchemeContext } from '../templates/Layout'
import { getWorksCategories, getPortfolioContent } from '../api/portfolioContent';
import { PortfolioItemType } from '../portfolio';
import { getBlogPosts } from '../api/blogPosts';
import dayjs from 'dayjs';
import Link from 'next/link';

export interface BlogPostType {
  title: string;
  slug: string;
  post_content: any;
  post_img: string | null;
  updated_at: any;
}

export default function blog() {
  const { colorScheme } = useContext(ColorSchemeContext)



  const [posts, setPosts] = useState<any>([])
  useEffect(() => {
    getBlogPosts().then((res) => {
      console.log(res)
      const posts = res.map((item) => ({
        title: item.fields.title,
        slug: item.fields.slug,
        post_content: item.fields.post_content,
        updated_at: item.sys.updatedAt,
      }))
      localStorage.setItem( 'blog_posts', JSON.stringify(posts) )
      console.log(posts);
      
      setPosts(posts)
    });

  }, [])

  return (
    <div className="container px-4 sm:px-5 md:px-10 lg:px-[60px]">
      <div className="py-12">
        <h2 className="after-effect after:left-32 mt-12 lg:mt-0">Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-[30px] gap-x-10 gap-y-7 mb-6">

          {/* blog items */}
          {
            posts.map((item: BlogPostType) => (
              <BlogPost key={item.slug} colorScheme={colorScheme} post={item} />
            ))}

        </div>

      </div>
    </div>
  )
}

export function BlogPost({ post, colorScheme }: { post: BlogPostType, colorScheme: string }) {
  const { title, updated_at, slug } = post
  return (
    <div className={`p-5 rounded-lg mb-2 h-full ${colorScheme == 'dark' ? "bg-[#fcf4ff]" : "bg-transparent border-[#212425] border-2"} `} >
      <h3 className={`text-lg line-clamp-3 font-medium duration-300 transition cursor-pointer mt-1 pr-4 hover:text-[#FA5252] ${colorScheme == 'dark' ? "" : "text-white hover:text-[#FA5252]"}`}>
        <Link href={`blog/${slug}`}>{title}</Link>
      </h3>
      <div className="flex justify-between mt-4 text-tiny text-gray-lite dark:text-[#A6A6A6]">
        <span className='capitalize'>{dayjs(updated_at).format('DD MMMM, YYYY') }</span>
        <Link href={`blog/${slug}`} className='text-sm font-semibold hover:text-[#FA5252] cursor-pointer'>Lire plus &rarr;</Link>
      </div>
    </div>
  )
}
