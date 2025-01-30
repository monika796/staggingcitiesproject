import Newsletter from '@/components/Newsletter'
// import { Metadata } from 'next'
// import { gql } from '@apollo/client'
// import client from 'apollo-client'
import BlogCard from '@/components/Blogdata'
import Image from 'next/image'
import Link from 'next/link'
import { ARTICLES_QUERY, ARTICLES_PAGE_QUERY } from '@/queries/queries'
import Head from '../head'
import { getSlugsFromUrl } from '@/lib/tools'
import { fetchData } from '@/lib/fetchData'

const BlogPage = async () => {
  const postData = await fetchData(ARTICLES_QUERY)
  const data = await fetchData(ARTICLES_PAGE_QUERY)

  return (
    <>
      <main className="md:w-[90%] mx-auto">
        <Head data={data} />
        <h1 className="md:py-[42px] md:max-w-[700px] mt-4 py-[30px] md:text-[64px] text-[45px] font-bold leading-normal text-center text-black mx-20 md:mx-auto">
          {data.page.blogPageFeilds.blogPageMainHeading}
        </h1>
        <section className="container mx-auto max-w-[1480px] bg-[#F8F8F8] border rounded-lg mt-10">
          <div className="flex flex-col lg:flex-row    overflow-hidden">
            <Image
              src={data.page.blogPageFeilds.blogSecondSection.blogPageLeft?.node?.link || '/No_Image.jpg'} // Replace with your image path
              alt="Group of people"
              className="w-full h-[100vh] object-cover "
              layout="responsive"
              width={800}
              height={700}
            />
            <div className="p-12 flex flex-col justify-end lg:w-[60%] relative">
              <div className="mb-4 max-w-[543px]">
                <span className="inline-block bg-black text-white text-xs px-3 py-1  rounded-full uppercase font-bold tracking-wider mb-4 uppercase">
                  {data.page.blogPageFeilds.blogSecondSection.blogPageRightUpperSubtitle}
                </span>
                <h2 className="text-[36px] font-light text-gray-800 leading-[43px] mt-3 mb-9">
                  {data.page.blogPageFeilds.blogSecondSection.blogPageRightHeading}
                </h2>
                <p className="mt-2 text-[20px] text-gray-600 leading-[29px] color-[#414141] mb-10">
                  {data.page.blogPageFeilds.blogSecondSection.blogPageRightDescription}
                </p>
                <Link
                  href={data.page.blogPageFeilds.blogSecondSection.blogPageRightButtonLink.url}
                  className=" flex  mx-unset md:mx-0 items-center gap-2.5 w-[fit-content] inline-block mt-4 bg-[#A1CF5F] font-bold text-black text-sm py-3 px-6 rounded-lg transition duration-300"
                >
                  {data.page.blogPageFeilds.blogSecondSection.blogPageRightButtonText}
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                    <g
                      fill="none"
                      fillRule="evenodd"
                      stroke="#000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M1 13 13 1M4 1h9v9"></path>
                    </g>
                  </svg>
                </Link>
              </div>
              <div className="flex justify-end items-center absolute bottom-0 right-0">
                <div className="flex items-end space-x-2 hidden">
                  <Image
                    src={data.page.blogPageFeilds.blogSecondSection.blogPageRightImage?.node?.link || '/No_Image.jpg'} // Replace with your small image path
                    alt="Nature"
                    className=" rounded"
                    width={154}
                    height={188}
                  />

                  <div className="w-[175px] h-[241px] bg-white border rounded-lg flex flex-col justify-end p-5">
                    <p className="text-[64px] font-semibold text-gray-700 mb-5">
                      {data.page.blogPageFeilds.blogSecondSection.blogPageRightDate}{' '}
                    </p>
                    <p className="text-[15px] text-gray-500">
                      {data.page.blogPageFeilds.blogSecondSection.blogPageRightMonthAndYear}{' '}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-10 mb-5">
          <div className=" container mx-auto max-w-[1480px]">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="text-left">
                <h2 className="text-[48px] md:w-[60%] font-bold text-gray-900 leading-[58px]">
                  {data.page.blogPageFeilds.blogLeftThirdSectionHeading}
                </h2>
              </div>
              {/* Right Section: Play Button and Caption */}
              <div className="flex items-center mt-6 lg:mt-0 lg:ml-6 hidden">
                {/* Play Button */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="#A1CF5F"
                  className="bi bi-play-circle-fill me-10"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
                </svg>
                {/* Caption */}
                <div className="ml-4">
                  <h3 className="text-[16px] font-bold text-black  leading-[23px]">
                    {data.page.blogPageFeilds.blogRightThirdSectionHeading}
                  </h3>
                  <hr className="my-4 border" />
                  <p className="text-[16px] max-w-[301px] text-black">
                    {data.page.blogPageFeilds.blogRightThirdSectionDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* //////////////// */}
        <div className="container mx-auto  max-w-[1480px] py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-8 gap-4">
            {postData.posts.nodes.map((post, index) => {
              var dat_time = post.date
              const dates = new Date(dat_time)
              var formatDate = dates.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })

              return (
                <BlogCard
                  key={index}
                  index={index}
                  image={post.featuredImage?.node?.link}
                  date={formatDate}
                  title={post.title}
                  // content={post.content}
                  linkText="Read More"
                  linkHref={post.slug}
                />
              )
              //   return index === 0 || index === 1 ? (
              //     <BlogCard
              //       index={index}
              //       image={post.featuredImage?.node?.link}
              //       date={formatDate}
              //       title={post.title}
              //       description={post.content}
              //       linkText="Read More"
              //       linkHref={post.slug}
              //     />
              //   ) : index === 2 || index === 3 ? (
              //     <BlogCard
              //       index={index}
              //       image={post.featuredImage?.node?.link}
              //       date={formatDate}
              //       title={post.title}
              //       description={post.content}
              //       linkText="Read More"
              //       linkHref={post.slug}
              //     />
              //   ) : null // For indices not 0, 1, 2, or 3, render nothing or another component
            })}
          </div>
        </div>
        {/* /////////////////////// */}
        <Newsletter />
      </main>
    </>
  )
}
export default BlogPage
