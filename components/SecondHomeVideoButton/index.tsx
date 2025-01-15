'use client'
import Link from 'next/link'
import { useState } from 'react'
import ReactDOM from 'react-dom'

const VideoPopup = ({ videoUrl, buttonText }) => {
  const [isOpen, setIsOpen] = useState(false)

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Link
        href={'/leadership-circle'}
        title="Leadership Circle"
        className="w-full md:w-auto flex items-center gap-2.5 text-black text-lg font-extrabold rounded mb-4 md:mb-0 md:mr-4"
      >
        {buttonText}
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" id="arrow">
          <g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M1 13 13 1M4 1h9v9"></path>
          </g>
        </svg>
      </Link>

      {isOpen &&
        ReactDOM.createPortal(
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div className="bg-white p-4 rounded-lg relative w-11/12 md:w-3/4 lg:w-1/2">
              <button onClick={togglePopup} className="absolute top-2 right-2 text-gray-700 hover:text-black">
                ✕
              </button>
              <div className="aspect-w-16 aspect-h-9">
                <video className="w-full rounded-lg" controls autoPlay src="/videos.mp4"></video>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  )
}

export default VideoPopup
