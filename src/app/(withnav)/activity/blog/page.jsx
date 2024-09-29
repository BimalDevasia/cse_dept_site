"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { data } from "./content";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <div className="bg-[#e9e8e9]">
        <div className="container mx-auto w-full h-[250px] md:h-[350px] flex justify-start items-end pb-8 px-4 md:px-8">
          <span className="w-3 h-3 bg-black mb-5 mr-3"></span>
          <h1 className="uppercase text-[32px] md:text-[48px] font-bold">
            Blogs
          </h1>
        </div>
      </div>
      {data.map((item) => (
        <HoverableItem key={item.id} item={item} />
      ))}
    </div>
  );
}

function HoverableItem({ item }) {
  const [isHover, setHover] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    router.push(`/activity/blog/${item.id}`);
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <div
        className="container mx-auto flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-10 pt-10 px-4 md:px-8"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="bg-slate-500 relative w-full md:w-1/2 h-auto">
          <Image
            src={item.img}
            alt={item.head}
            width={800}
            height={400}
            className={`${
              isHover ? "" : "grayscale"
            } transition-all duration-300 w-full object-cover`}
          />
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex mb-5 mt-5 justify-start items-end">
            <span
              className={`dot w-1 h-1 bg-black mb-2 ${
                isHover ? "block" : "hidden"
              } transition-opacity duration-400`}
            ></span>
            <h1
              className={`text-xl md:text-2xl ${
                isHover ? "translate-x-3" : ""
              } transition-transform duration-300`}
            >
              {item.head}
            </h1>
          </div>
          <p
            className={`${
              isHover ? "text-[#dc856e]" : "text-[#000000]"
            } transition-colors duration-300 text-[16px] md:text-[20px]`}
          >
            {item.content}
          </p>
          <div className="bg-black w-full border border-black mt-6"> </div>
          <div className="flex flex-col md:flex-row justify-between mt-5">
            <div className="flex gap-5">
              <div
                className={`text-xl md:text-2xl mt-3 w-10 h-10 ${
                  isHover ? "text-[#dc856e]" : "text-[#000000]"
                }`}
              >
                {React.cloneElement(item.icon, {
                  className: "w-8 h-8 md:w-12 md:h-12",
                })}
              </div>
              <div className="mt-3">
                <h1 className="text-sm md:text-base">{item.name}</h1>
                <p
                  className={`${
                    isHover ? "text-[#dc856e]" : "text-[#000000]"
                  } text-xs md:text-sm`}
                >
                  {item.year}
                </p>
              </div>
            </div>
            <div
              className={`mt-3 md:mt-10 ${
                isHover ? "text-[#dc856e]" : "text-[#000000]"
              } text-sm md:text-base`}
            >
              {item.date}
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-10 mx-4 md:mx-48 border border-black" />
    </div>
  );
}
