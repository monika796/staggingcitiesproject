'use client'
import SectionHeader from '../Common/SectionHeader'
import React, { useState, useRef, useEffect, Suspense } from 'react'
// Import necessary Swiper styles and modules
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import ReactPlayer from 'react-player'
import { motion } from 'framer-motion'
import { gql, useQuery } from '@apollo/client'
import Link from 'next/link'
import Image from 'next/image' // Import Image component

export default function VideoCarousel({ videos: data }) {
  // const { loading, error, data } = useQuery(POSTS_QUERY)
  const [playingVideos, setPlayingVideos] = useState<{ [key: number]: boolean }>({}) // State to track playing state for each video
  const [isPlaying, setIsPlaying] = useState(true) // Start autoplay by default

  const videoRef = useRef<HTMLVideoElement>(null)
  const swiperRef = useRef<SwiperRef>(null) // Fix the type error by using 'typeof Swiper'
  const [hasStarted, setHasStarted] = useState(false) // Track if the video has started
  const handleToggle = () => {
    if (!swiperRef.current) return

    if (isPlaying) {
      swiperRef.current.swiper.autoplay.stop()
    } else {
      swiperRef.current.swiper.autoplay.start()
    }
    setIsPlaying(!isPlaying) // Toggle button state
  }
  const handleLoadedMetadata = () => {
    if (videoRef.current instanceof HTMLVideoElement && !hasStarted) {
      videoRef.current.currentTime = 5 // Start at 5 seconds only when it loads
    }
  }

  // if (loading) return <div className="container max-w-[1481px] mx-auto">Loading videos...</div>
  // if (error) return <p>Error: {error.message}</p>

  // useEffect(() => {
  //   const videos = document.querySelectorAll('video')

  //   videos.forEach((video) => {
  //     video.addEventListener('play', () => {
  //       videos.forEach((v) => {
  //         if (v !== video) {
  //           v.pause() // Pause all other videos
  //         }
  //       })
  //     })
  //   })

  //   return () => {
  //     videos.forEach((video) => {
  //       video.removeEventListener('play', () => {})
  //     })
  //   }
  // }, [data])

  const videoData = data?.page?.homevideobanner?.videoslider?.map((videoslider, index) => ({
    id: index + 1,
    videoUrl: videoslider?.videoFileLink?.node?.mediaItemUrl,
    description: videoslider?.videothumbnail?.node?.mediaItemUrl,
  }))

  const handlePlayPause = (videoId: number, videoElement: HTMLVideoElement) => {
    if (videoElement) {
      const isCurrentlyPlaying = playingVideos[videoId] || false
      if (isCurrentlyPlaying) {
        videoElement.pause()
        setPlayingVideos((prev) => ({ ...prev, [videoId]: false })) // Pause the video and update state
      } else {
        videoElement.play()
        setPlayingVideos((prev) => ({ ...prev, [videoId]: true })) // Play the video and update state
      }
    }
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="videoteestimonialhome container max-w-[1481px] mx-auto">
        <section className="md:flex lg:flex-row md:flex-col  w-[100%] mx-auto">
          <div className="md:w-full lg:w-4/12 md:p-[20px] p-5 md:pl-0">
            <h2 className="font-inter text-[25px] md:text-[48px] text-black lg:max-w-[387px] font-bold leading-[35px] md:leading-[58.09px] text-center md:text-left underline-from-font decoration-skip-ink-none">
              {data.page.homevideobanner.maintitle}
            </h2>
            <p className="pt-4 pb-8 text-[16px] text-gray-900 lg:max-w-[304px] text-center md:text-left ">
              {data.page.homevideobanner.videosubtitle}
            </p>
            <Link href="https://www.instagram.com/citiesprojectglobal/" target="_blank">
              <p className="flex gap-2 text-[16px] underline text-center md:text-left md:justify-start justify-center text-black font-extrabold">
                {data.page.homevideobanner.linktext}
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 56.7 56.7"
                  fill="#000000"
                >
                  <g>
                    <path d="M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7 c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z" />
                    <circle cx="41.5" cy="16.4" r="2.9" />
                    <path d="M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9 h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.6,39.9c0,3.1-1.1,5.6-2.9,7.3 s-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3c1.7-1.7,4.3-2.6,7.3-2.6h20.6 c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9L48.6,39.9z" />
                  </g>
                </svg>
              </p>
            </Link>
          </div>

          <div className="md:w-full lg:w-8/12 p-5">
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
              className="animate_top mx-auto relative"
            >
              {/* Video Carousel */}
              <div className="swiper video-carousel mb-20 pb-22.5">
                <Swiper
                  ref={swiperRef}
                  modules={[Autoplay, Pagination]}
                  spaceBetween={50}
                  slidesPerView={3}
                  draggable={true}
                  pagination={{
                    el: '#containerForBullets-video-home',
                    clickable: true,
                    renderBullet: (index, className) =>
                      `<span class="${className} rounded-full bg-[#a0cf5f] opacity-50 transition-transform duration-300 transform hover:scale-125"></span>`,
                  }}
                  autoplay={{
                    delay: 8000,
                    disableOnInteraction: true,
                  }}
                  onSwiper={(swiper) => {
                    swiper.pagination.init()
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
                  {videoData &&
                    videoData.map((video) => (
                      <SwiperSlide key={video?.id}>
                        <div className="video-slide bg-white rounded-lg shadow-solid-9 dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none">
                          <div className="video-container mb-6 relative">
                            {/* Conditionally render Image or Video */}
                            {/* {!playingVideos[video.id] && (
                          <Image
                            src={video.description}
                            alt="Video Thumbnail"
                            width={600}
                            height={337} // Set appropriate width and height
                            className="w-full rounded-lg absolute inset-0 object-cover"
                          />
                        )} */}

                            <video
                              className="w-full rounded-lg"
                              // onLoadedMetadata={handleLoadedMetadata} // Set start time on load
                              onLoadedMetadata={(e) => {
                                const videoElement = e.target as HTMLVideoElement
                                videoElement.currentTime = 5 // Start the video at 5 seconds
                              }}
                              ref={videoRef}
                            >
                              <source src={video?.videoUrl} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>

                            {/* Play Button */}
                            {!playingVideos[video.id] && (
                              <button
                                className="absolute inset-0 flex items-center justify-center text-white text-3xl rounded-full"
                                onClick={(e) => {
                                  e.stopPropagation() // Prevent the video click event
                                  handlePlayPause(video.id, e.currentTarget.previousElementSibling as HTMLVideoElement)
                                  if (typeof window !== 'undefined') {
                                    const allVideos = document.querySelectorAll('video')
                                    allVideos.forEach((vid) => {
                                      if (vid !== e.currentTarget.previousElementSibling) {
                                        vid.pause()
                                        // Change the state of the playingVideos to false for the current video
                                        playingVideos[video.id] = false
                                        // Change the icon to play icon
                                        e.currentTarget.innerHTML = `
                                        <svg
                                          fill="#fff"
                                          height="50px"
                                          width="50px"
                                          version="1.1"
                                          xmlns="http://www.w3.org/2000/svg"
                                          viewBox="0 0 64 64"
                                        >
                                          <g id="Play">
                                            <path d="M46.0136986,31.1054993L25.1973,20.6973c-0.3096008-0.1532993-0.6777992-0.1387005-0.9727001,0.0438995C23.9297009,20.9237995,23.75,21.2451,23.75,21.5918007v20.8163986c0,0.3467026,0.1797009,0.6679993,0.4745998,0.8506012C24.3848,43.3583984,24.5674,43.4081993,24.75,43.4081993c0.1532993,0,0.3057003-0.035099,0.4473-0.1054001l20.8163986-10.4081993c0.3388023-0.1699982,0.5527-0.5157013,0.5527-0.8945999C46.5663986,31.6210995,46.3525009,31.2754002,46.0136986,31.1054993zM25.75,40.7901001v-17.580101L43.330101,32L25.75,40.7901001z" />
                                          </g>
                                        </svg>
                                      `
                                      }
                                    })
                                  }
                                }}
                              >
                                <svg
                                  fill="#fff"
                                  height="50px"
                                  width="50px"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 64 64"
                                >
                                  <g id="Play">
                                    <path d="M46.0136986,31.1054993L25.1973,20.6973c-0.3096008-0.1532993-0.6777992-0.1387005-0.9727001,0.0438995C23.9297009,20.9237995,23.75,21.2451,23.75,21.5918007v20.8163986c0,0.3467026,0.1797009,0.6679993,0.4745998,0.8506012C24.3848,43.3583984,24.5674,43.4081993,24.75,43.4081993c0.1532993,0,0.3057003-0.035099,0.4473-0.1054001l20.8163986-10.4081993c0.3388023-0.1699982,0.5527-0.5157013,0.5527-0.8945999C46.5663986,31.6210995,46.3525009,31.2754002,46.0136986,31.1054993zM25.75,40.7901001v-17.580101L43.330101,32L25.75,40.7901001z" />
                                  </g>
                                </svg>
                              </button>
                            )}
                            {/* Pause Button */}
                            {playingVideos[video.id] && (
                              <button
                                className="absolute inset-0 flex items-center justify-center text-white text-3xl rounded-full"
                                onClick={(e) => {
                                  e.stopPropagation() // Prevent the video click event
                                  handlePlayPause(video.id, e.currentTarget.previousElementSibling as HTMLVideoElement)
                                }}
                              >
                                <svg
                                  fill="#fff"
                                  height="50px"
                                  width="50px"
                                  version="1.1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 512 512"
                                >
                                  <g>
                                    <path d="M224,435.8V76.1c0-6.7-5.4-12.1-12.2-12.1h-71.6c-6.8,0-12.2,5.4-12.2,12.1v359.7c0,6.7,5.4,12.2,12.2,12.2h71.6C218.6,448,224,442.6,224,435.8z" />
                                    <path d="M371.8,64h-71.6c-6.7,0-12.2,5.4-12.2,12.1v359.7c0,6.7,5.4,12.2,12.2,12.2h71.6c6.7,0,12.2-5.4,12.2-12.2V76.1C384,69.4,378.6,64,371.8,64z" />
                                  </g>
                                </svg>
                              </button>
                            )}
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                </Swiper>
                <div id="containerForBullets-video-home" className="flex justify-center space-x-2 mt-4"></div>
              </div>
              <button
                onClick={handleToggle}
                className="absolute bottom-0 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition-all z-10"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  // Pause Icon
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 4H6v16h4V4zm8 0h-4v16h4V4z"
                    />
                  </svg>
                ) : (
                  // Play Icon
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3l14 9-14 9V3z" />
                  </svg>
                )}
              </button>
            </motion.div>
          </div>
        </section>
      </div>
      <style>
        {`
          #containerForBullets-video-home .swiper-pagination.swiper-pagination-bullets.swiper-pagination-horizontal {
            display: none;
          }
          #containerForBullets-video-home.swiper-pagination {
            bottom: -20px;
          }

          #containerForBullets-video-home .swiper-pagination-bullet {
            background: #a0cf5f;
            opacity: 0.5;
            width: 10px !important;
          }

          #containerForBullets-video-home .swiper-pagination-bullet-active {
            background: #8fb34f;
            opacity: 1;
            width: 10px !important;
          }
        `}
      </style>
    </Suspense>
  )
}
