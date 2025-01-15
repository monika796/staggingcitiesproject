'use client'

import dynamic from 'next/dynamic'
import { gql, useQuery } from '@apollo/client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

const POSTS_QUERY = gql`
  query MyQuery2 {
    page(id: "cG9zdDoyNjY=") {
      aboutussections {
        videosectionheading
        videosectiontitle
        videosectiondescription
        videosectionbackground {
          node {
            link
          }
        }
      }
    }
  }
`

const VideoPlayer = () => {
  const { loading, error, data } = useQuery(POSTS_QUERY)
  const [isPlaying, setIsPlaying] = useState(false) // Track video play state
  const [isPlayed, setPlayed] = useState(false)

  const [isMobile, setIsMobile] = useState(false)

  // Function to update the state based on the window width
  const updateMobileView = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true) // Mobile view
    } else {
      setIsMobile(false) // Desktop view
    }
  }

  // Update the view on component mount and on window resize
  useEffect(() => {
    updateMobileView() // Check on initial render

    // Set up a resize event listener
    window.addEventListener('resize', updateMobileView)

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateMobileView)
    }
  }, [])

  const handleClick = (videoElement: HTMLVideoElement) => {
    if (videoElement) {
      if (videoElement.paused) {
        videoElement.play() // Play the video if it is paused
        setIsPlaying(true) // Set state to true if the video is playing
      } else {
        videoElement.pause() // Pause the video if it is playing
        setIsPlaying(false) // Set state to false if the video is paused
      }
      setPlayed(true)
    }
  }

  const handleSectionClick = () => {
    const videoElement = document.querySelector('video')
    if (videoElement) {
      handleClick(videoElement) // Trigger handleClick with the video element
    }
  }

  if (loading) return null
  if (error) return <p>Error: {error.message}</p>

  return (
    <section
      className="md:py-[32px] container mx-auto px-4"
      onClick={handleSectionClick} // Play video on section click
    >
      {/* <h1 className="md:text-[40px] text-[25px] font-bold text-center text-black md:w-[52%] md:p-5 mx-auto leading-[49px]">
        {data.page.aboutussections.videosectionheading}
      </h1> */}

      <div className="relative mx-auto table md:w-full md:before:content-[''] md:before:block md:before:w-full md:before:h-[200px] md:before:absolute md:before:bottom-0 md:before:bg-gradient-to-t md:before:from-[#000000b2] md:before:to-transparent md:before:rounded-b-lg md:before:z-1">
        {/* Use Image component for the video poster */}
        {!isPlayed && (
          <div className="relative">
            <Image
              src={data.page.aboutussections.videosectionbackground?.node?.link}
              alt="Video Poster"
              width={1000}
              height={563}
              className="w-full rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center md:hidden">
              <div className="w-16 h-16 bg-black bg-opacity-50 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        )}

        <video
          className={`before:content-['>'] before:absolute before:inset-0 before:bg-black before:opacity-50 w-full rounded-lg ${
            isPlayed ? '' : 'hidden'
          }`}
          loop
          onClick={(e) => {
            e.stopPropagation() // Prevent triggering section click
            handleClick(e.currentTarget) // Play or pause video
          }}
        >
          <source src="about-video-hd.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="md:absolute bottom-0 p-5 text-center md:text-left w-full z-9">
          <h2 className="md:text-[64px] text-[30px] font-bold text-black md:text-white md:w-[32%] leading-[65px]">
            {data.page.aboutussections.videosectiontitle}
          </h2>
          <p className="font-normal text-[16px] mt-4 text-black md:text-white md:w-[72%]">
            {data.page.aboutussections.videosectiondescription}
          </p>
          <PlayButton isPlaying={isPlaying} />
        </div>
      </div>
    </section>
  )
}

const PlayButton = ({ isPlaying }: { isPlaying: boolean }) => {
  return (
    <div className="absolute md:bottom-5 bottom-0 md:top-unset right-0 md:p-5 md:pb-0 ">
      {isPlaying ? (
        <Image width={800} height={500} src="/117.png" className="md:w-[80%] w-[60%]" alt="Playing" />
      ) : (
        <Image width={800} height={500} src="/73.png" className="md:w-[80%] w-[60%]" alt="Paused" />
      )}
    </div>
  )
}

export default VideoPlayer
