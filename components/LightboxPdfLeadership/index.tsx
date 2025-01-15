'use client';
import React, { useState } from "react";

const MainComponentLeadership = ({ buttonText, pdfUrl,extraclass }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative ">
      {/* Button to trigger the modal */}
      <button
        onClick={openModal}
        className={extraclass}
      >
        {buttonText}  {/* Render dynamic button text */}
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed z-99999 h inset-0 bg-gray-500  bg-opacity-75 flex justify-center items-center ">
          <div className="bg-white  rounded-lg w-full max-w-[80%]  relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute z-9999999999 top-2 right-2 px-4 py-2 text-white bg-red-600 rounded-full hover:bg-red-700"
            >
              X
            </button>

            {/* PDF Embed */}
            <div className="w-full">
              <iframe
                src={pdfUrl} // Use the dynamic PDF URL passed as a prop
                width="100%"
                height="600px"
                title="PDF Viewer"
                className="border-0 rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainComponentLeadership;
