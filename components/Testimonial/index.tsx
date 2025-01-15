'use client'
import SectionHeader from '../Common/SectionHeader'

// Import Autoplay and Pagination from Swiper
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { Swiper, SwiperSlide } from 'swiper/react'

import { motion } from 'framer-motion'
import SingleTestimonial from './SingleTestimonial'
// import { testimonialData } from "./testimonialData";
// import { gql, useQuery } from '@apollo/client'

const Testimonial = ({ testimonials = [], className = 'bg-[#F5F5F5]' }: { testimonials: any; className: string }) => {
  // const { loading, error, data } = useQuery(POSTS_QUERY)

  const testimonialData = testimonials.page.testimonialSlider.slides.map((slide, index) => ({
    id: index + 1,
    name: slide.authorname,
    designation: slide.authordescription.replace(/[()]/g, ''), // Remove parentheses for clarity
    image: `image${index + 1}`, // Placeholder for images
    content: slide.message.trim(),
  }))
  return (
    <>
      <section
        className={`testimonial max-w-[1480px] mx-auto ${className} min-h-[655px] flex items-center justify-center mb-20`}
      >
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: -20,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_top mx-auto mt-15 max-w-c-1235 w-full px-4 md:px-10 xl:mt-30 xl:px-0"
        >
          {/* Slider main container */}
          <div className="swiper testimonial-01 mb-20 pb-22.5">
            <Swiper
              autoHeight={true}
              spaceBetween={50}
              slidesPerView={1}
              autoplay={{
                delay: 8000,
                disableOnInteraction: true,
              }}
              pagination={{
                clickable: true,
              }}
              loop={true}
              effect={'fade'}
              modules={[Autoplay, Pagination]}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },
              }}
            >
              {testimonialData.map((review) => (
                <SwiperSlide key={review?.id}>
                  <SingleTestimonial review={review} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </section>
      <style jsx>
        {`
          .swiper-slide-active {
            opacity: 1 !important;
          }
          .swiper-slide-next {
            opacity: 0.5 !important;
          }
          .swiper-slide-prev {
            opacity: 0.5 !important;
          }
        `}
      </style>
    </>
  )
}

export default Testimonial
