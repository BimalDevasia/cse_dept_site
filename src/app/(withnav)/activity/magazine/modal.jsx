"use client";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Modal = ({ images, isOpen, onClose, startIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  if (!isOpen) return null;

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <button
        className="bg-white p-1 px-2 absolute top-28 md:top-8  right-4 md:right-56 text-sm cursor-pointer"
        onClick={onClose}
      >
        Close
      </button>
      <div className="relative p-4 rounded-md">
        <div className="flex flex-col items-center w-auto h-auto">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="w-[800px] h-[500px] object-cover mb-4"
          />
          <div className="flex justify-center gap-3 w-full px-4">
            <button
              className="flex items-center text-white py-2 px-4 rounded hover:bg-gray-400 transition-transform duration-200 hover:-translate-x-1"
              onClick={handlePrevious}
            >
              <AiOutlineLeft className="mr-2 text-xl transition-transform duration-200 hover:-translate-x-1" />
              Previous
            </button>
            <button
              className="flex items-center text-white py-2 px-4 rounded hover:bg-gray-400 transition-transform duration-200 hover:-translate-x-1"
              onClick={handleNext}
            >
              Next
              <AiOutlineRight className="ml-2 text-xl transition-transform duration-200 hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
