import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import { ColorSchemeContext } from '../templates/Layout';
import Link from 'next/link';
import { BlogPostType } from '.';
import dayjs from 'dayjs';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { fetchBlogPost } from '../api/blogPosts';

export const isObjectEmpty = (obj: object) => {
  let isEmpty = true;
  if (obj) isEmpty = Object.keys(obj).length === 0;
  return isEmpty;
};

export default function PostContent() {
  const { colorScheme } = useContext(ColorSchemeContext)
  const router = useRouter();
  const [post, setPost] = useState<BlogPostType>({
    title: '',
    slug: '',
    post_content: null,
    post_img: '',
    updated_at: null,
  });
  const { slug } = router.query;


  // useEffect(() => {
  //   let blog_posts = localStorage.getItem('blog_posts')
  //   if (blog_posts !== null) {
  //     let posts = []
  //     posts = JSON.parse(blog_posts);
  //     const currentPost = posts?.find((item: any) => item.fields?.slug.includes == slug);
  //     console.log(posts, currentPost);
  //     setPost(currentPost)
  //   } else {
  //   }
  // }, [])

  useEffect(() => {
   
    fetchBlogPost(slug as string ).then(res => {      
      console.log(res);
      setPost(res as BlogPostType)
    })
    
  }, [])



  // setup redux to store blog articles

  return (
    <div className="px-6">
      <Link className='' href="/blog">
        <h4 className="pt-3 pb-6 font-semibold text-6xl pr-3 lg:mt-0">&#8592; Tout mes articles</h4>
      </Link>
      <div className="pb-2">
        {!isObjectEmpty(post) &&
          <>
          {
            post.post_img && 
            <img className="w-full md:h-[450px] object-cover rounded-xl mt-6" src={post.post_img} alt="blog image" />
          }
            <h2 className={`${colorScheme == 'light' && "text-white"} sm:text-3xl mt-8 font-semibold`}>
              {post.title}
            </h2>
            <div className="flex mt-4 text-tiny text-gray-500 ">
              <span className='font-medium'>{dayjs(post.updated_at).format('DD MMMM, YYYY')}</span>
              <span className="dot-icon"></span>
            </div>
            <div className={`${colorScheme == 'light' && "text-white"} contentful-richtext my-4`}>
              {documentToReactComponents(post.post_content)}
            </div>

            <div className="lg:flex items-center md:justify-end gap-x-4 mt-8 mr-3">
              <h6 className={`${colorScheme == 'light' && "text-white"} my-2 text-[20px] font-medium`}>Mes réseaux</h6>
              <div className="flex space-x-3">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <span className="socialbtn text-[#1773EA]">
                    <i className="fa-brands fa-facebook-f"></i>
                  </span>
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                  <span className="socialbtn text-[#1C9CEA]">
                    <i className="fa-brands fa-twitter"></i>
                  </span>
                </a>
                <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer">
                  <span className="socialbtn text-[#e14a84]">
                    <i className="fa-brands fa-dribbble"></i>
                  </span>
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                  <span className="socialbtn text-[#0072b1]">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </span>
                </a>
              </div>
            </div>
          </>
        }


      </div>





    </div>
  )
}
