// app/activity/student_gp/page.jsx
"use client";
import React, { useState } from "react";
import { data } from "./content";
import Image from "next/image";
import ColoredSection from "../../../../components/ColoredSection";

export default function Page() {
  // Updated the function name to Page
  const [selectedItem, setSelectedItem] = useState(null);

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <ColoredSection color="BLACK">
      <div className="">
        <div className="bg-[#e9e8e9]">
          <div className="container mx-auto w-full h-[350px] flex justify-start items-end pb-8">
            <span className="w-3 h-3 bg-black mb-5 mr-3"></span>
            <h1 className="uppercase text-[48px] font-bold">Student groups</h1>
          </div>
        </div>
        {data.map((item, index) => (
          <HoverableItem
            key={index}
            item={item}
            onClick={() => setSelectedItem(item)}
          />
        ))}

        {selectedItem && <Modal item={selectedItem} onClose={closeModal} />}
      </div>
    </ColoredSection>
  );
}

function HoverableItem({ item, onClick }) {
  const [isHover, setHover] = useState(false);

  return (
    <div
      className="container mx-auto flex flex-row space-x-10 pt-20 cursor-pointer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      <div className="bg-slate-500 relative w-full h-full">
        <Image
          src={item.img}
          alt={item.head}
          width={800}
          height={400}
          className={`${
            isHover ? "" : "grayscale"
          } transition-all duration-300`}
        />
      </div>
      <div className="">
        <div className="flex mb-5 justify-start flex-row items-end">
          <span
            className={`dot w-1 h-1 bg-black mb-2 ${
              isHover ? "block" : "hidden"
            } transition-opacity duration-400`}
          ></span>
          <h1
            className={`text-2xl ${
              isHover ? "translate-x-3" : ""
            } transition-transform duration-300`}
          >
            {item.head}
          </h1>
        </div>
        <p
          className={`${
            isHover ? "text-[#dc856e]" : "text-[#000000]"
          } transition-colors duration-300 text-[20px] text-justify`}
        >
          {item.content}
        </p>
        <button
          className={`p-2 ${
            isHover ? "bg-[#dc856e]" : "bg-[#696969]"
          } text-center border hover:border-[#dc856e] hover:bg-[#ffffff] hover:text-[#dc856e] mt-8 text-white transition-all duration-300`}
        >
          {item.btn}
        </button>
      </div>
      
    </div>
  );
}

function Modal({ item, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <button
        className="absolute top-48 right-[530px] bg-white text-black px-2 p-1 hover:text-gray-800"
        onClick={onClose}
      >
        Close
      </button>
      <div className="bg-gray-300 w-[700px] p-8 flex flex-row space-x-10  relative">
        <div className="w-auto ">
          <Image
            src={item.img}
            alt={item.head}
            width={300}
            height={100}
            className="w-auto h-auto mb-4"
          />
          <h1 className="text-2xl font-bold mb-4">{item.head}</h1>
        </div>

        <div className="w-1/2">
          <p className="text-lg text-gray-700 mb-2 text-justify">
            {item.content}
          </p>
        </div>
      </div>
    </div>
  );
}
