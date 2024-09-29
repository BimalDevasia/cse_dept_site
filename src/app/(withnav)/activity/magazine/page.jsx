"use client";
import React, { useState } from "react";
import { departmentMagazine, pgMagazine, pgNewsLetter } from "./magazine";
import Modal from "./modal";
import ColoredSection from "../../../../components/ColoredSection";

const EventCard = ({ event, allImages }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    const index = allImages.indexOf(event.image);
    setStartIndex(index);
    setIsModalOpen(true);
  };

  return (
    <>
      <div
        className="border flex px-10 py-9 cursor-pointer"
        onClick={handleCardClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="h-auto w-auto overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            width={500}
            height={500}
            className={`object-cover transition duration-300 ${
              isHovered ? "" : "grayscale"
            }`}
          />
        </div>

        <div className="px-4 flex flex-col justify-between">
          <div className="flex mb-2 text-black">
            <span
              className={`font-bold text-[22px] transition duration-500 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              .
            </span>
            <h2
              className={`font-bold text-[22px] transition duration-500 ${
                isHovered ? "translate-x-2" : ""
              }`}
            >
              {event.title}
            </h2>
          </div>

          <p
            className={`text-[20px] transition duration-500 ${
              isHovered ? "text-red-500" : "text-gray-600"
            }`}
          >
            {event.description}
          </p>
          <div>
            <hr
              className="w-[400px] my-4 border-black mx-auto transition duration-500"
              style={{ borderColor: isHovered ? "red" : "black" }}
            />
          </div>
          <div className="flex justify-between mb-4">
            <div>
              <p className="text-gray-800 text-[18px] font-semibold">
                Published In
              </p>
              <p
                className={`text-[18px] transition duration-500 ${
                  isHovered ? "text-red-500" : "text-gray-600"
                }`}
              >
                {event.date}
              </p>
            </div>
            <div>
              <button
                className={`text-white text-[18px] px-4 py-2 transition duration-500 rounded ${
                  isHovered ? "bg-red-500" : "bg-gray-500"
                }`}
              >
                READ
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        images={allImages}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        startIndex={startIndex}
      />
    </>
  );
};

const EventsSection = ({ title, events }) => {
  const allImages = events.map((event) => event.image);

  return (
    <div className="container mx-auto py-8">
      <div className="w-full h-full flex justify-start items-end pt-8">
        <span className="w-3 h-3 bg-black mb-5 mr-3"></span>
        <h1 className="uppercase text-[48px] font-bold">{title}</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {events.map((event) => (
          <EventCard key={event.id} event={event} allImages={allImages} />
        ))}
      </div>
      <div className="text-center mt-6">
        <button className="bg-gray-500 text-white px-4 py-2 rounded">
          Load More
        </button>
      </div>
    </div>
  );
};

export default function Page() {
  return (
    <ColoredSection color="BLACK">
      <div>
        <div className="bg-[#e9e8e9]">
          <div className="container mx-auto w-full h-[350px] flex justify-start items-end pb-8">
            <span className="w-3 h-3 bg-black mb-5 mr-3"></span>
            <h1 className="uppercase text-[48px] font-bold">
              MAGAZINE - NEWSLETTERS
            </h1>
          </div>
        </div>
        <div className="bg-white container mx-auto">
          <EventsSection
            title="Department Magazine"
            events={departmentMagazine}
          />
          <EventsSection title="PG Magazine" events={pgMagazine} />
          <div className="container mx-auto py-8">
            <div className="w-full h-full flex justify-start items-end pt-8">
              <span className="w-3 h-3 bg-black mb-5 mr-3"></span>
              <h1 className="uppercase text-[48px] font-bold">PG NewsLetter</h1>
            </div>
            <div className="grid grid-cols-1">
              {pgNewsLetter.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  allImages={pgNewsLetter.map((e) => e.image)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </ColoredSection>
  );
}
