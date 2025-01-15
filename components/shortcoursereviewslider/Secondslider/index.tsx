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
        shortCoursesSixthSection {
          shortCoursesSixthSectionSecondReviewRow {
            shortCourseSixthSectionReviewSecondUserName
            shortCoursesSixthSectionReviewSecondReview
            shortCoursesSixthSectionReviewSecondUserImage {
              node {
                link
              }
            }
            shortCoursesSixthSectionReviewSecondUserStatus
          }
        }
      }
    }
  }
`
interface ShortCoursesSixthSectionSecondReview {
  __typename: string
  shortCourseSixthSectionReviewSecondUserName: string
  shortCoursesSixthSectionReviewSecondReview: string
  shortCoursesSixthSectionReviewSecondUserImage?: {
    __typename: string
    node?: {
      __typename: string
      link: string
    }
  }
  shortCoursesSixthSectionReviewSecondUserStatus: string
  id: string
}

const ReviewSecondSlider = () => {
  const [posts, setPosts] = useState<ShortCoursesSixthSectionSecondReview[]>([])

  // Fetch data with Apollo client
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await client.query({
          query: POSTS_QUERY,
        })
        // Limit posts to the first 4
        setPosts(data?.page?.shortCourseFields?.shortCoursesSixthSection?.shortCoursesSixthSectionSecondReviewRow || [])
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <section className="max-w-[1520px] mx-auto  ">
        <div className="w-full h-auto">
          <Swiper
            modules={[Pagination, Keyboard, Mousewheel, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: false,
            }}
            keyboard={{ enabled: true }}
            mousewheel={{ forceToAxis: true }}
            loop={true}
            cssMode
            // slidesPerView={4}  // Show 4 slides per view by default
            spaceBetween={10} // Add space between slides
            breakpoints={{
              1024: {
                slidesPerView: 4, // 4 slides on large screens
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
            {posts.map((testimonial, index) => (
              <SwiperSlide key={index} className=" text-lg bg-white">
                <div key={index} className="p-10  min-h-[250px] bg-[#F5F5F5] text-black rounded-lg">
                  <div className="flex mb-4">
                    <div className="mr-4">
                      <Image
                        src={testimonial.shortCoursesSixthSectionReviewSecondUserImage?.node?.link || 'Untitled'}
                        alt={testimonial.shortCourseSixthSectionReviewSecondUserName}
                        width={50}
                        height={50}
                        className="rounded-full border-2 border-[#cec5c5]"
                      />
                    </div>
                    <div>
                      <p className="text-[16px] font-bold text-[#000] m-0 leading-[22.9px]">
                        {testimonial.shortCourseSixthSectionReviewSecondUserName}
                      </p>
                      <p className="text-[14px] text-[#000] ">
                        {testimonial.shortCoursesSixthSectionReviewSecondUserStatus}
                      </p>
                    </div>
                  </div>
                  <p className="text-[14px] text-[#0e0e0e] leading-[18.9px]">
                    {testimonial.shortCoursesSixthSectionReviewSecondReview}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Custom CSS for pagination */}
      <style>
        {`
        
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
            .swiper-pagination.swiper-pagination-bullets.swiper-pagination-horizontal {
    display: none;
}
        `}
      </style>
    </>
  )
}

export default ReviewSecondSlider
