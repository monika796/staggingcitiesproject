'use client'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Keyboard, Mousewheel, Autoplay } from 'swiper/modules'
import Image from 'next/image'
import Link from 'next/link'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { gql } from '@apollo/client'
import client from 'apollo-client'
const POSTS_QUERY = gql`
  query MyQuery2 {
    page(id: "cG9zdDo4ODk=") {
      shortCourseFields {
        shortCoursesThirdSection {
          shortCoursesThirdSectionMainFirstRowDescription
          shortCoursesThirdSectionMainFirstRowHeading
          shortCoursesThirdSectionMainSecondRowCards {
            shortCoursesThirdSectionMainSecondRowCardButtonLink
            shortCoursesThirdSectionMainSecondRowCardButtonText
            shortCoursesThirdSectionMainSecondRowCardImage {
              node {
                link
              }
            }
            shortCoursesThirdSectionMainSecondRowCardPrice
            shortCoursesThirdSectionMainSecondRowCardTitle
          }
        }
      }
    }
  }
`
interface ShortCoursesThirdSectionCard {
  __typename: string
  shortCoursesThirdSectionMainSecondRowCardButtonLink: string
  shortCoursesThirdSectionMainSecondRowCardButtonText: string
  shortCoursesThirdSectionMainSecondRowCardImage?: {
    __typename: string
    node?: {
      __typename: string
      link: string
    }
  }
  shortCoursesThirdSectionMainSecondRowCardPrice: string
  shortCoursesThirdSectionMainSecondRowCardTitle: string
  id: string
}

const SwiperSectionshortcourses = () => {
  const [posts, setPosts] = useState<ShortCoursesThirdSectionCard[]>([])

  // Fetch data with Apollo client
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await client.query({
          query: POSTS_QUERY,
        })
        // Limit posts to the first 4
        setPosts(
          data?.page?.shortCourseFields?.shortCoursesThirdSection?.shortCoursesThirdSectionMainSecondRowCards || [],
        )
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <section className="max-w-[1280px] mx-auto">
        <div className="w-full h-auto">
          <Swiper
            modules={[Navigation, Pagination, Keyboard, Mousewheel, Autoplay]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              type: 'bullets',
            }}
            keyboard={{ enabled: true }}
            mousewheel={{ forceToAxis: true }}
            loop={true}
            cssMode
            // slidesPerView={1}  // Show 4 slides per view by default
            spaceBetween={30} // Add space between slides
            breakpoints={{
              1400: {
                slidesPerView: 4, // 4 slides on large screens
              },
              1024: {
                slidesPerView: 3, // 4 slides on large screens
              },
              768: {
                slidesPerView: 2, // 2 slides on tablets
              },
              480: {
                slidesPerView: 1, // 1 slide on mobile screens
              },
            }}
            className="w-full h-auto"
          >
            {posts.map((course, index) => (
              <SwiperSlide key={index} className=" text-lg bg-white">
                <div key={index} className="m-4 rounded bg-white">
                  <Image
                    src={course.shortCoursesThirdSectionMainSecondRowCardImage?.node?.link || 'Untitled'}
                    alt={course.shortCoursesThirdSectionMainSecondRowCardTitle}
                    className="h-[200px]"
                    height={1000}
                    width={1000}
                  />
                  <div className="md:p-5 p-3 grid gap-3">
                    <p className="md:text-[20px] text-[16px] text-black font-medium leading-[24px]">
                      {course.shortCoursesThirdSectionMainSecondRowCardTitle}
                    </p>
                    <Image src="/140.png" alt="" className="w-[50%]" height={1000} width={1000} />
                    <h4 className="text-[20px] w-[50%] font-bold text-black">
                      {course.shortCoursesThirdSectionMainSecondRowCardPrice}
                    </h4>
                    <Link
                      href={course.shortCoursesThirdSectionMainSecondRowCardButtonLink}
                      className="flex w-fit items-center gap-2.5 inline-block md:mt-2 bg-[#A1CF5F] font-bold text-black text-[13px] md:text-sm py-1 md:py-3 px-6 rounded-lg transition duration-300"
                    >
                      {course.shortCoursesThirdSectionMainSecondRowCardButtonText}
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
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Custom CSS for pagination */}
      <style>
        {`
         .swiper-pagination.swiper-pagination-clickable.swiper-pagination-bullets.swiper-pagination-horizontal {
    display: block;
    position: relative;
    margin-top: 41px;
}
          .swiper-pagination {
            bottom: -20px; 
          }

          .swiper-pagination-bullet {
            background: #000; 
            opacity: 0.6;
          }

          .swiper-pagination-bullet-active {
            background: #ff5722;
            opacity: 1;
          }
        `}
      </style>
    </>
  )
}

export default SwiperSectionshortcourses
