'use client'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const StoriesSliderHome = ({ stories: data }) => {
  const sliderData = data.posts?.nodes.map((dataposts, index) => ({
    id: index + 1,
    slug: dataposts.slug,
    post_id: dataposts.id,
    imgSrc: dataposts.featuredImage?.node?.link,
    date: new Date(dataposts.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    title: dataposts.title,
    linkText: 'Learn More',
  }))

  return (
    <section>
      <div className="container mx-auto block md:hidden max-w-[1481px]">
        <h2 className="font-inter md:text-[48px] text-[30px] text font-bold leading-[58.09px]  p-8 text-black text-left text-center decoration-skip-ink-none">
          {' '}
          {data.page.homefourtsection.postsliderheading}{' '}
        </h2>
        <section className="w-[100%] mx-auto">
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
            className="animate_top mx-auto"
          >
            {/* Swiper Carousel */}
            <div className="swiper custom-carousel mb-20 pb-22.5">
              <Swiper
                modules={[Autoplay, Pagination]}
                loop={true} // Enable infinite loop
                centeredSlides={true}
                spaceBetween={30}
                slidesPerView={3}
                autoplay={{
                  delay: 6000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                }}
              >
                {sliderData.map((slide) => (
                  <SwiperSlide key={slide.id} className="swiper-slide-custom">
                    <div className="relative grid place-items-center p-9 rounded-lg shadow-solid-9">
                      <Image
                        width={1000}
                        height={1000}
                        src={slide.imgSrc || '/No_Image.jpg'}
                        className="object-contain w-full rounded-lg"
                        alt={slide.title}
                      />
                      <p className="absolute top-11  left-10 text-white bg-black px-2 py-0 rounded-full text-sm">
                        {slide.date}
                      </p>
                      <h2
                        className="text-center px-3 py-3 text-black font-semibold text-base"
                        dangerouslySetInnerHTML={{ __html: slide.title }}
                      />
                      <Link
                        href={`/articles/${slide.slug}`}
                        className="flex gap-2 items-center text-black font-extrabold text-center justify-center"
                      >
                        {slide.linkText}
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                          <g
                            fill="none"
                            fillRule="evenodd"
                            stroke="#000"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          >
                            <path d="M1 13L13 1M4 1h9v9"></path>
                          </g>
                        </svg>
                      </Link>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </motion.div>
        </section>
      </div>

      <div className="stories-transformation container mx-auto max-w-[1481px] md:block hidden mt-[100px] story-slider">
        <h2 className="font-inter md:text-[48px] text-[30px] text font-bold leading-[58.09px] p-8 text-black text-left text-center decoration-skip-ink-none">
          {data.page.homefourtsection.postsliderheading}
        </h2>
        <section className="w-[100%] mx-auto">
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
            className="animate_top mx-auto"
          >
            {/* Swiper Carousel */}
            <div className="swiper custom-carousel mb-20 pb-22.5">
              <Swiper
                modules={[Autoplay, Pagination]}
                loop={true} // Enable infinite loop
                centeredSlides={true}
                spaceBetween={30}
                slidesPerView={3}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  el: '#containerForBullets-stories',
                  clickable: true,
                  renderBullet: (index, className) =>
                    `<span class="${className} rounded-full bg-[#a0cf5f] opacity-50 transition-transform duration-300 transform hover:scale-125"></span>`,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                }}
              >
                {sliderData.map((slide) => (
                  <SwiperSlide key={slide.id} className="swiper-slide-custom">
                    <div className="relative grid place-items-center">
                      {/* <Image src={slide.imgSrc}
                      className="object-contain w-full rounded-lg"
                      alt={slide.title} width={800} height={800}
                     / > */}
                      <Link href={` /articles/${slide.slug}`}>
                        <div
                          className="relative w-full   bg-cover bg-center rounded h-[300px] "
                          //   style={{ backgroundImage: `url('${slide.imgSrc}')` }}
                        >
                          <Image
                            src={slide.imgSrc || '/No_Image.jpg'} // Fallback image
                            layout="fill"
                            objectFit="cover"
                            alt={'Default title'} // Provide a fallback title
                          />
                        </div>
                        <p className="absolute top-3  left-3,m text-white bg-black px-2 py-0 rounded-full text-sm">
                          {slide.date}
                        </p>
                        <h2 className="text-center px-3 py-3 text-black font-semibold text-base">
                          {slide.title.replace(/<[^>]*>?/gm, '')}
                        </h2>
                        {/* <Link
                      href={ ` /articles/${slide.slug}`}
                      className="flex gap-2 items-center text-black font-extrabold text-center justify-center"
                    >
                      {slide.linkText}
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
                        <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                          <path d="M1 13L13 1M4 1h9v9"></path>
                        </g>
                      </svg>
                    </Link> */}
                      </Link>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div id="containerForBullets-stories" className="flex justify-center space-x-2 mt-4"></div>
            </div>
          </motion.div>
        </section>
      </div>
      <style>{`
        .stories-transformation .swiper-slide-custom {
          transition: transform 0.3s ease;
        }
        .stories-transformation .swiper-slide-active {
          transform: scale(1); /* Make the center slide 10% larger */
        }
        .stories-transformation .swiper-slide:not(.swiper-slide-active) {
          transform: scale(0.8); /* Make other slides slightly smaller */
        }
        span.swiper-pagination-bullet.swiper-pagination-bullet-active {
          width: 49px;
          border-radius: 0;
          background: #;
        }

        span.swiper-pagination-bullet {
          width: 49px;
          border-radius: 0;
        }
      `}</style>
    </section>
  )
}

export default StoriesSliderHome
