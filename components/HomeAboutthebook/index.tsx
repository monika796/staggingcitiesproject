'use client'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MainComponent from '@/components/LightboxPdf'

const HomeAboutTheBook = ({ data, Video_gif, videoUrl = null }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [Played, setPlayed] = useState(false)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

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

  // Open the modal
  const openModal = () => setIsModalOpen(true)

  // Close the modal
  const closeModal = () => setIsModalOpen(false)
  // const handleButtonClick = () => {
  //   setPlayed(!Played); // Toggle the state between true and false
  // };
  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
    }
    setIsPlaying(!isPlaying)
    setPlayed(true)
  }

  return (
    <div className="fifithsectioncss container my-10 mx-auto max-w-[1481px]">
      <div
        className="flex flex-col md:flex-col lg:flex-row w-[100%] pb-[0px] mx-auto items-stretch rounded-[5px]"
        style={{ backgroundColor: 'rgb(3, 4, 2)' }}
      >
        {/* Left Content */}
        <div className="md:w-full lg:w-5/12 w-full p-[40px] pb-0 md:p-[50px] mt-10 md:mt-0">
          <span className="text-[18px] bg-[#fff] text-black font-bold mx-auto md:mx-0 text-center w-[45%] rounded-[20px] px-4 py-1 font-bold">
            {data.page.homefifthsection.fifthfirstsubtitle}
          </span>
          <h5 className="md:text-[45px] text-[26px] text-[#A1CF5F] md:text-left text-left pb-[10px] font-bold pt-[20px] md:leading-10">
            {data.page.homefifthsection.mainheadingfifth}
          </h5>
          <p className="md:text-[45px] md:w-[87%] text-[22px] md:text-left text-left text-white md:leading-[58.09px] font-bold">
            {data.page.homefifthsection.fifthheadingsimple}
          </p>
          <Image
            src={data.page.homefifthsection.authorimage?.node?.link}
            className="md:inline block mx-auto"
            alt="image"
            width={232}
            height={220}
          />
          <div className="hidden md:block">
            <Link href="/book" target="_blank">
              <button className="mx-auto mt-[21px] md:mx-0 md:mt-0 flex items-center gap-3 text-black bg-[#A1CF5F] font-bold py-3 px-5 rounded-md hover:bg-[#A1CF5F] hover:text-black transition-all duration-300 scale-100 hover:scale-105">
                Learn More
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
              </button>
            </Link>
          </div>
          <div className="flex flex-col md:flex-row gap-10 hidden">
            <h5 className="text-[30px] text-white md:text-left text-left font-bold pb-2 md:pb-3">
              Bob Varney <div className="text-[16px] font-normal">CEO & President</div>
            </h5>
            <h5 className="text-[30px] text-white md:text-left text-left font-bold pb-2 md:pb-3">
              Hugh Brandt <div className="text-[16px] font-normal">Global City Consultant</div>
            </h5>
          </div>
          {/* <h5
            className="text-[16px] text-white md:text-left text-left font-normal"
            dangerouslySetInnerHTML={{ __html: data.page.homefifthsection.authordesignation }}
          /> */}
        </div>

        {/* Right Content */}
        <div className="md:w-full lg:w-8/12 md:py-[0px] relative video_hover md:flex space-around justify-around">
          {/* Black Box for Video */}
          <div className="bg-[rgb(3, 4, 2)]  rounded-lg h-full w-full flex">
            {isPlaying ? (
              <button className="absolute inset-0 hover_elementss md:bottom-0 bottom-[40%] flex items-center justify-center text-white text-3xl rounded-full">
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
            ) : (
              <Image
                src={Video_gif}
                className="md:w-[224px] w-[145px]  video-gif cursor-pointer"
                alt="Video gif"
                width={100}
                height={100}
                onClick={handleVideoClick}
              />
            )}
            {/* Conditionally render the thumbnail or video */}
            {!isPlaying && !Played && (
              <Image
                src={data.page.homefifthsection.fifthfirstimage?.node?.link}
                alt="Video Thumbnail"
                width={1000}
                height={563}
                className="w-full md:pl-0 cursor-pointer h-full object-contain opacity-40"
                onClick={handleVideoClick}
              />
            )}
            {Played && (
              <video
                ref={videoRef}
                className="w-full "
                src={videoUrl || 'book-intro.mp4'}
                onClick={handleVideoClick}
                autoPlay
              ></video>
            )}
          </div>
          {/* Buttons */}
          {!isPlaying && !isMobile && false && (
            <div className="md:float-right  md:mr-3 mt-5 z-999 md:absolute bottom-0 right-5">
              <Link href={data.page.homefifthsection.buttonlinkone} target="_blank">
                <button className="mx-auto mt-[21px] md:mx-0 md:mt-0 flex items-center gap-3 text-black bg-[#A1CF5F] font-bold p-2 rounded-[5px]">
                  {data.page.homefifthsection.fifthbuttonone}
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
                </button>
              </Link>

              <div
                onClick={openModal}
                className="max-w-fit sm:mt-0 md:w-[100%] max-w-max mb-5  !mx-auto !mt-[21px] md:mx-0 md:mt-4 mr-2 flex items-center gap-3 text-black bg-white font-bold p-2 rounded-[5px]"
              >
                <MainComponent
                  extraclass=""
                  buttonText={data.page.homefifthsection.textbuttonsecond}
                  pdfUrl="/SampleChapter.pdf"
                />
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
              </div>
            </div>
          )}

          {isMobile && false && (
            <div className="md:float-right  md:mr-3 mt-5 z-999 md:absolute bottom-3 right-0">
              <Link href={data.page.homefifthsection.buttonlinkone} target="_blank">
                <button className="mx-auto mt-[21px] md:mx-0 md:mt-0 flex items-center gap-3 text-black bg-[#A1CF5F] font-bold p-2 rounded-[5px]">
                  {data.page.homefifthsection.fifthbuttonone}
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
                </button>
              </Link>
              <div
                onClick={openModal}
                className="max-w-fit sm:mt-0 md:w-[100%] max-w-max mb-5  !mx-auto !mt-[21px] md:mx-0 md:mt-4 mr-2 flex items-center gap-3 text-black bg-white font-bold p-2 rounded-[5px]"
              >
                <MainComponent
                  extraclass=""
                  buttonText={data.page.homefifthsection.textbuttonsecond}
                  pdfUrl="/SampleChapter.pdf"
                />
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
              </div>
            </div>
          )}

          <div className="md:hidden block mt-20 mb-10">
            <Link href="/book" target="_blank">
              <button className="mx-auto mt-[21px] md:mx-0 md:mt-0 flex items-center gap-3 text-black bg-[#A1CF5F] font-bold py-3 px-5 rounded-md hover:bg-[#A1CF5F] hover:text-black transition-all duration-300 scale-100 hover:scale-105">
                Learn More
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
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeAboutTheBook
