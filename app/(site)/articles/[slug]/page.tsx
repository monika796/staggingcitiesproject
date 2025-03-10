import Image from 'next/image'
import BlogCustomSlider from '@/components/BlogPostSlider'
import Link from 'next/link'
import Head from '@/app/(site)/head'
import { fetchData } from '@/lib/fetchData'
import { ALL_ARTICLES_QUERY, POST_QUERY } from '@/queries/queries'
interface FeaturedImage {
  node: {
    link: string
  }
}

interface Post {
  content: string
  date: string
  title: string
  featuredImage: FeaturedImage
}

type Params = Promise<{ slug: string }>

const SingleBlogPage = async ({ params }: { params: Params }) => {
  // Await params before using
  const { slug } = await params

  // Fetch post data server-side
  const data = await fetchData(POST_QUERY, { slug })

  const post = data.post
  if (!post) {
    return <p>Post not found</p>
  }

  // Check if the "Featured" tag exists
  const isFeatured = post.tags.nodes.some((tag) => tag.name.toLowerCase() === 'featured')

  return (
    <section className="container mx-auto max-w-[1480px]">
      <Head data={post} />
      <div className="mx-auto px-4 py-10 md:py-20 flex flex-col md:flex-row justify-between items-center border-b">
        {/* Left Section */}
        <div className="md:w-3/4 flex gap-3 md:gap-10 flex-col md:flex-row align-start">
          {/* Featured Badge */}
          {isFeatured && (
            <div className="mb-2">
              <span className="inline-block bg-black text-white text-xs uppercase py-1 px-3 rounded-xl">Featured</span>
            </div>
          )}
          <div>
            <h1
              className="text-lg md:text-[64px] font-bold text-gray-900 leading-tight"
              dangerouslySetInnerHTML={{ __html: post?.title }}
            />
            {/* <p className="text-gray-700 mt-4 text-[16px] md:text-[24px] max-w-[543px] leading-snug">
              You don’t have to search the Bible for very long to find passages highlighting the value and importance of
              community.
            </p> */}
          </div>
        </div>
        {/* Right Section */}
        <div className=" md:w-1/4 w-full flex flex-col items-start justify-center md:items-start mt-6 md:mt-0 pl-0 md:pl-20 border-unset md:border-l h-auto  md:h-[230px]">
          {/* Date */}
          <div className="text-center md:text-left mt-10 md:mt-0">
            <p className="text-[30px] font-bold text-gray-900">
              {post
                ? new Date(post.date).toLocaleString('default', { month: 'long' }) + ' ' + new Date(post.date).getDate()
                : ''}
            </p>
            <p className="text-sm text-gray-500 mt-5">{post ? new Date(post.date).toLocaleDateString() : ''}</p>
          </div>
          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4">
            <Link
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                typeof window !== 'undefined'
                  ? window.location.href
                  : `https://citiesprojectglobal.com/articles/${slug}`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900"
            >
              <span className="sr-only">Facebook</span>
              <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.78609 9.33674H6.20974V17.5634H2.39045V9.33674H0.573242V6.11862H2.39045V4.03562C2.39045 2.54554 3.10239 0.212891 6.24514 0.212891L9.07716 0.224593V3.34909H7.02395C6.68568 3.34909 6.21368 3.51682 6.21368 4.22676V6.12252H9.12436L8.79003 9.34064L8.78609 9.33674Z"
                  fill={'#000000'}
                />
              </svg>
            </Link>
            <Link
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                typeof window !== 'undefined'
                  ? window.location.href
                  : `https://citiesprojectglobal.com/articles/${slug}`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900"
            >
              <span className="sr-only">LinkedIn</span>
              <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.0087 9.34546V14.9586H12.7283V9.71993C12.7283 8.40538 12.2563 7.5082 11.0645 7.5082C10.1559 7.5082 9.61704 8.11282 9.38104 8.69793C9.2945 8.90857 9.2709 9.19723 9.2709 9.48979V14.9586H5.98655C5.98655 14.9586 6.02981 6.08833 5.98655 5.16776H9.2709V6.55642C9.2709 6.55642 9.25517 6.57983 9.2473 6.58763H9.2709V6.55642C9.70751 5.88939 10.4863 4.93761 12.2288 4.93761C14.3882 4.93761 16.0087 6.33798 16.0087 9.34156V9.34546ZM0.892853 14.9586H4.17327V5.16776H0.892853V14.9586ZM4.27161 1.84822C4.27161 2.7727 3.51639 3.52554 2.58026 3.52554C1.64412 3.52554 0.888916 2.7766 0.888916 1.84822C0.888916 0.919842 1.64412 0.170898 2.58026 0.170898C3.51639 0.170898 4.27161 0.919842 4.27161 1.84822Z"
                  fill={'#000000'}
                />
              </svg>
            </Link>
            <Link href="https://www.instagram.com/citiesprojectglobal/" className="text-gray-500 hover:text-gray-900">
              <span className="sr-only">Instagram</span>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 56.7 56.7"
                fill={'#000000'}
              >
                <g>
                  <path d="M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7 c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z" />
                  <circle cx="41.5" cy="16.4" r="2.9" />
                  <path d="M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9 h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.6,39.9c0,3.1-1.1,5.6-2.9,7.3 s-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3c1.7-1.7,4.3-2.6,7.3-2.6h20.6 c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9L48.6,39.9z" />
                </g>
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="blog-image mt-10">
        {post?.featuredImage?.node?.sourceUrl && (
          <Image
            alt="Featured Image"
            width={700}
            height={700}
            className="mx-auto rounded-md"
            src={post?.featuredImage?.node?.sourceUrl || '/No_Image.jpg'} // Fallback if the image is missing
          />
        )}
      </div>
      <div className="blog-content max-w-[684px] mx-auto py-15">
        <div
          className="text-gray-700 mt-2 leading-normal [&_p]:mb-4"
          dangerouslySetInnerHTML={{ __html: post?.content || '' }}
        />
      </div>
      <BlogCustomSlider />
    </section>
  )
}

export default SingleBlogPage

export async function generateStaticParams() {
  const postData = await fetchData(ALL_ARTICLES_QUERY)
  return postData.posts.nodes.map((post) => ({ slug: post.slug }))
}
