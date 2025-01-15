'use client'

import dynamic from 'next/dynamic'
import { gql, useQuery } from '@apollo/client'
import client from 'apollo-client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

const POSTS_QUERY = gql`
  query MyQuery2 {
    page(id: "cG9zdDo0MzM=") {
      bookPageFeilds {
        bookSixthSectionVideoDescription
        bookSixthSectionVideoHeading
        bookSixthSectionVideoLink
        bookSixthSectionVideoMainHeading
        bookSixthSectionVideoThumbnail {
          node {
            link
          }
        }
      }
    }
  }
`

const VideoPlayer = ({ videoUrl = null, videoPoster = null }) => {
  const { loading, error, data } = useQuery(POSTS_QUERY)
  const [isPlaying, setIsPlaying] = useState(false) // Track video play state
  const [isPlayed, setPlayed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const videoRef = useRef<HTMLVideoElement>(null)
  const [hasStarted, setHasStarted] = useState(false) // Track if the video has started

  const handleLoadedMetadata = () => {
    if (videoRef.current instanceof HTMLVideoElement && !hasStarted) {
      videoRef.current.currentTime = 5 // Start at 5 seconds only when it loads
    }
  }

  const handlePlay = () => {
    if (videoRef.current && !hasStarted) {
      videoRef.current.currentTime = 0 // Reset to 0 when the user plays
      setHasStarted(true) // Prevent resetting again after the first play
    }
  }

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

  const handleClick = (videoElement: HTMLVideoElement, setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>) => {
    if (videoElement) {
      if (videoElement.paused) {
        videoElement.play() // Play the video if it is paused
        setIsPlaying(true) // Set state to true if the video is playing
      } else {
        videoElement.pause() // Pause the video if it is playing
        setIsPlaying(false) // Set state to false if the video is paused
      }
    }
    setPlayed(true)
  }
  if (loading) return null
  if (error) return <p>Error: {error.message}</p>

  return (
    <section
      className="md:py-[32px]"
      onClick={() => {
        // Ensure handleClick is triggered on section click as well
        const videoElement = document.querySelector('video')
        if (videoElement) {
          handleClick(videoElement, setIsPlaying) // Only trigger handleClick if video element is clicked
        }
      }}
    >
      {!isMobile && (
        <h1 className="md:text-[40px] mb-10 text-[25px] font-bold text-center text-black md:w-[60%] md:p-5 mx-auto leading-[30px] md:leading-[49px]">
          About the Book
        </h1>
      )}
      {isMobile && (
        <h1 className="md:text-[40px] mb-10 text-[25px] font-bold text-center text-black md:w-[60%] md:p-5 mx-auto leading-[30px] md:leading-[49px]">
          {data.page.bookPageFeilds.bookSixthSectionVideoMainHeading}
        </h1>
      )}

      <div className="relative mx-auto table md:w-[80%] video_hover">
        {/* {!isPlayed && (
          <Image
            src={data.page.bookPageFeilds.bookSixthSectionVideoThumbnail?.node?.link}
            alt="Video Poster"
            width={1000}
            height={563}
            className="w-full rounded-lg relative z-10"
            onClick={(e) => {
              //  Ensure handleClick is triggered on section click as well
              const videoElement = document.querySelector('video')
              if (videoElement) {
                handleClick(videoElement, setIsPlaying) // Only trigger handleClick if video element is clicked
              }
            }} // Pass the clicked video element and setIsPlaying
          />
        )} */}
        <video
          style={{ clipPath: 'inset(3px round 10px)' }}
          className={`w-full rounded-lg top-0 left-0 z-0`}
          loop
          ref={videoRef}
          // onLoadedMetadata={(e) => {
          //   const videoElement = e.target as HTMLVideoElement
          //   videoElement.currentTime = 5 // Start the video at 5 seconds
          // }}
          onLoadedMetadata={handleLoadedMetadata} // Set start time on load
          onPlay={handlePlay} // Reset to beginning on play
          // autoPlay
          //  onClick={(e) => handleClick(e.currentTarget, setIsPlaying)} // Pass the clicked video element and setIsPlaying
        >
          <source src={videoUrl || 'book-intro.mp4'} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Conditionally render images */}
        {!isPlaying && !isMobile && (
          <div className="md:absolute bottom-0 p-5 text-center md:text-left sm:hidden">
            <h2 className="md:text-[64px]  text-[30px] font-bold text-black md:text-white md:w-[40%] leading-[70px] mb-5">
              {data.page.bookPageFeilds.bookSixthSectionVideoHeading}
            </h2>
            <p className="font-normal text-[16px] mt-4 text-black md:text-white md:w-[72%]">
              {data.page.bookPageFeilds.bookSixthSectionVideoDescription}
            </p>
          </div>
        )}
        {isMobile && (
          <div className="md:absolute bottom-0 p-5 text-center md:text-left">
            <h2 className="md:text-[64px]  text-[30px] font-bold text-black md:text-white md:w-[40%] leading-[70px] mb-5">
              {data.page.bookPageFeilds.bookSixthSectionVideoHeading}
            </h2>
            <p className="font-normal text-[16px] mt-4 text-black md:text-white md:w-[72%]">
              {data.page.bookPageFeilds.bookSixthSectionVideoDescription}
            </p>
          </div>
        )}

        {/* {!isPlaying && (
          <div className=" absolute w-[95px] top-0 right-0 md:w-auto  md:top-5 md:right-[3%] p-5">
            <Image alt="" width={700} height={700} src="/91.png" className="w-[80%]" />
          </div>
        )} */}

        <div className="absolute bottom-5 right-5 z-10">
          {isPlaying ? (
            <Image width={700} height={700} src="/117.png" className="w-10" alt="Playing" /> // Image when video is playing
          ) : (
            <Image width={700} height={700} src="/73.png" className="w-10" alt="Paused" /> // Default image
          )}
        </div>
      </div>
    </section>
  )
}

export default VideoPlayer
