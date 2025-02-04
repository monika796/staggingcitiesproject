'use client'
import React, { useState, useEffect, useRef } from 'react'

const MainComponent = ({ buttonText, pdfUrl, extraclass }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const modalRef = useRef<HTMLDivElement | null>(null) // Reference to the modal element

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true)
  }

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false)
  }

  // Close modal if clicked outside of the modal
  const handleClickOutside = (event) => {
    return
    // if (modalRef.current && !modalRef.current.contains(event.target)) {
    //   closeModal()
    // }
  }

  // Listen for click events to close modal when clicked outside
  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('click', handleClickOutside)
    } else {
      document.removeEventListener('click', handleClickOutside)
    }

    // Cleanup listener on unmount
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isModalOpen])

  return (
    <div className="relative">
      {/* Button to trigger the modal */}
      <button onClick={openModal} className={extraclass}>
        {buttonText} {/* Render dynamic button text */}
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed z-99999 h inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
          <div ref={modalRef} className="bg-white rounded-lg w-full max-w-[80%] relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute z-9999999999 -top-5 -right-5 px-4 py-2 text-white bg-red-600 rounded-full hover:bg-red-700"
            >
              X
            </button>

            {/* PDF Embed */}
            <div className="w-full">
              <iframe
                src={pdfUrl || '/api/proxy/'} // Use the dynamic PDF URL passed as a prop
                width="100%"
                height="100%"
                title="PDF Viewer"
                className="border-0 rounded-lg aspect-video min-h-[100vh]"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MainComponent
