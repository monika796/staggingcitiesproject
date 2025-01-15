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
    page(id: "cG9zdDo5MzE=") {
      vintagePageFeild {
        vintageReviewSlider {
          vintageReviewSliderFirstReviewRow {
            vintageReviewSliderFirstUserImage {
              node {
                link
              }
            }
            vintageReviewSliderReviewFirstReview
            vintageReviewSliderReviewFirstUserName
            vintageReviewSliderReviewFirstUserStatus
          }
          vintageReviewSliderMainDescription
          vintageReviewSliderMainHeading
          vintageReviewSliderSecondReviewRow {
            vintageReviewSliderReviewSecondReview
            vintageReviewSliderReviewSecondUserImage {
              node {
                link
              }
            }
            vintageReviewSliderReviewSecondUserName
            vintageReviewSliderReviewSecondUserStatus
          }
        }
      }
    }
  }
`

interface vintageReviewSliderFirstReviewRow {
  __typename: string
  vintageReviewSliderReviewFirstReview: string
  vintageReviewSliderFirstUserImage?: {
    __typename: string
    node?: {
      __typename: string
      link: string
    }
  }
  vintageReviewSliderReviewFirstUserName: string
  vintageReviewSliderReviewFirstUserStatus: string
  id: string
}

const ReviewFirstSlider = () => {
  const [posts, setPosts] = useState<vintageReviewSliderFirstReviewRow[]>([])

  // Fetch data with Apollo client
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await client.query({
          query: POSTS_QUERY,
        })
        // Limit posts to the first 4
        setPosts(data?.page?.vintagePageFeild?.vintageReviewSlider?.vintageReviewSliderFirstReviewRow || [])
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <section className="max-w-[1520px] mx-auto  flex items-center justify-center">
        <div className="w-full h-auto">
          <Swiper
            modules={[Navigation, Pagination, Keyboard, Mousewheel, Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: false,
              el: '#vantage-review-slider-pagination-container',
              renderBullet: function (index, className) {
                return '<span class="' + className + '"></span>'
              },
            }}
            keyboard={{ enabled: true }}
            mousewheel={{ forceToAxis: true }}
            loop={true}
            cssMode
            // slidesPerView={4}  // Show 4 slides per view by default
            spaceBetween={30} // Add space between slides
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
            className="w-full h-auto vantage-review-slider "
          >
            {posts.map((testimonial, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center items-center text-lg bg-white
              "
              >
                <div key={index}>
                  <div className="flex mb-4">
                    <div className="mr-4">
                      <Image
                        src={testimonial.vintageReviewSliderFirstUserImage?.node?.link || 'Untitled'}
                        alt={testimonial.vintageReviewSliderReviewFirstUserName}
                        width={50}
                        height={50}
                        className="rounded-full border-2 border-[#cec5c5]"
                      />
                    </div>
                    <div>
                      <p className="text-[16px] font-bold text-[#000] m-0 leading-[22.9px]">
                        {testimonial.vintageReviewSliderReviewFirstUserName}
                      </p>
                      <p className="text-[14px] text-[#000] ">{testimonial.vintageReviewSliderReviewFirstUserStatus}</p>
                    </div>
                  </div>
                  <p className="text-[14px] text-[#0e0e0e] leading-[18.9px]">
                    {testimonial.vintageReviewSliderReviewFirstReview}
                  </p>
                </div>
              </SwiperSlide>
            ))}
            <div
              id="vantage-review-slider-pagination-container"
              className="flex justify-center items-center pt-10"
            ></div>
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

export default ReviewFirstSlider
