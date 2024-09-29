"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { upcomingEvents, pastEvents } from "./eventsData";
import ColoredSection from "../../../../components/ColoredSection";

const EventCard = ({ event }) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/activity/events/${event.id}`);
  };

  return (
    <div
      className="border flex flex-col md:flex-row px-4 py-6 md:px-10 md:py-9 space-y-4 md:space-y-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      <div className="h-auto w-full md:w-auto overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          width={1000}
          height={500}
          className={`object-cover transition duration-300 w-full md:w-[500px] ${
            isHovered ? "" : "grayscale"
          }`}
        />
      </div>

      <div className="px-2 md:px-4 flex flex-col justify-between">
        <div className="flex mb-2 text-black">
          <span
            className={`font-bold text-[22px] transition duration-500 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            .
          </span>
          <h2
            className={`font-bold text-[18px] md:text-[22px] transition duration-500  ${
              isHovered ? "translate-x-2" : ""
            }`}
          >
            {event.title}
          </h2>
        </div>

        <p
          className={`text-[16px] md:text-[20px] transition duration-500 ${
            isHovered ? "text-red-500" : "text-gray-600"
          }`}
        >
          {event.description}
        </p>
        <div>
          <hr
            className="w-full my-4 border-black transition duration-500"
            style={{ borderColor: isHovered ? "red" : "black" }}
          />
        </div>
        <div className="flex justify-between mb-4">
          <div>
            <p className="text-gray-800 text-[16px] md:text-[18px] font-semibold">
              {event.mode}
            </p>
            <p
              className={`text-[16px] md:text-[18px] transition duration-500 ${
                isHovered ? "text-red-500" : "text-gray-600"
              }`}
            >
              {event.date}
            </p>
          </div>
          <div>
            <button
              className={`text-white text-[16px] md:text-[18px] px-4 py-3 transition duration-500 ${
                isHovered ? "bg-red-500" : "bg-gray-500"
              }`}
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const EventsSection = ({ title, events }) => {
  return (
    <div className="container mx-auto py-8 px-4 md:px-0">
      <div className="w-full h-full flex justify-start items-end pt-8">
        <span className="w-3 h-3 bg-black mb-5 mr-3"></span>
        <h1 className="uppercase text-[32px] md:text-[48px] font-bold">
          {title}
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
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
          <div className="container mx-auto w-full h-[250px] md:h-[350px] flex justify-start items-end pb-8 px-4 md:px-8">
            <span className="w-3 h-3 bg-black mb-5 mr-3"></span>
            <h1 className="uppercase text-[32px] md:text-[48px] font-bold">
              Events
            </h1>
          </div>
        </div>
        <div className="bg-white container mx-auto">
          <div>
            <EventsSection title="Upcoming Events" events={upcomingEvents} />
            <EventsSection title="Past Events" events={pastEvents} />
          </div>
        </div>
      </div>
    </ColoredSection>
  );
}
