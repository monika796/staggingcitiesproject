'use client'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { motion } from 'framer-motion'

const ProgramTestimonial = ({ data }: { data: any }) => {
  const testimonialData = data.page.programpagefeild.secondSectionProgramTestemonials.map((slide, index) => ({
    id: index + 1,
    name: slide.programTestimonialAuthor,
    designation: slide.programTestimonialAuthorDescription.replace(/[()]/g, ''), // Remove parentheses for clarity

    content: slide.programTestimonialDescription.trim(),
  }))

  return (
    <>
      {/* <section className="md:absolute bottom-[-1%] "> */}
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
        className="animate_top mx-auto lg:absolute bottom-[-18px] w-[92%]  mt-15 max-w-c-1235 px-4 md:px-10 xl:mt-30 xl:px-0"
      >
        {/* Slider main container */}
        <div className="swiper testimonial-03 mb-20 pb-22.5">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
              delay: 8000,
              disableOnInteraction: true,
            }}
            pagination={{
              clickable: true,
            }}
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
                {/* <div className="md:w-3/5 p-10"> */}
                <p className="text-[18px] text-[#000000] italic font-normal leading-normal text-center md:text-left">
                  {review.content}{' '}
                </p>
                <h2 className="pt-[20px] text-[#000000] text-[16px] font-bold text-center md:text-left">
                  {review.name}
                </h2>
                <p className="md:w-[57%] text-[#000000] text-[14px] font-normal text-center md:text-left">
                  {review.designation}
                </p>

                {/* </div> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
      {/* </section> */}
      <style>
        {`
         .testimonial-03 .swiper-pagination {
            padding-top:10px;
            position:relative;
         }
         @media screen and (min-width: 768px) {
                                    .swiper-pagination {
                                                bottom: -20px; 
                                                text-align:left;
                                            }

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

export default ProgramTestimonial
