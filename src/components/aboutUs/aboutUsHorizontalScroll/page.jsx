"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import HorizontalScroll from "../../horizontal-scroll.js";

const AboutusHorizontalScrollCarousel = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile(); // Initial check
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <>
      <main className="bg-black">
        <section className="relative w-[100%] min-h-[100vh]">
          {isMobile ? (
            <div className="flex flex-col h-auto w-screen items-center overflow-hidden">
              <motion.div>
                <Card
                  card={{
                    url: "/bg.png",
                    height: "390px",
                    width: "310px",
                    title: "Title 1",
                    id: 1,
                  }}
                  position="top-[50%] right-10 -translate-y-1/2"
                />
                <Card
                  card={{
                    url: "/bg.png",
                    height: "350px",
                    width: "310px",
                    title: "Title 2",
                    id: 2,
                  }}
                  position="top-[50%] left-10 -translate-y-1/2"
                />
                <Card
                  card={{
                    url: "/bg.png",
                    height: "390px",
                    width: "310px",
                    title: "Title 3",
                    id: 3,
                  }}
                  position="top-[50%] right-10 -translate-y-1/2"
                />
                <Card
                  card={{
                    url: "/bg.png",
                    height: "350px",
                    width: "310px",
                    title: "Title 4",
                    id: 4,
                  }}
                  position="top-[50%] left-10 -translate-y-1/2"
                />
              </motion.div>
            </div>
          ) : (
            <HorizontalScroll>
              <div className="relative h-full pl-[150px] flex bg-[#161616] flex-row flex-nowrap justify-start items-center">
                <div className="relative h-screen w-[1000px] mr-[40px] flex-shrink-0">
                  <div className="absolute h-[680px] w-[950px] top-5 right-0">
                    <img
                      src="/bg.png"
                      className="w-full h-full object-cover"
                      alt="random image"
                    />
                  </div>
                </div>
                <div className="relative h-screen w-[1000px] mr-[40px] flex-shrink-0">
                  <div className="absolute h-[680px] w-[950px] top-5 left-0">
                    <img
                      src="/bg.png"
                      className="w-full h-full object-cover"
                      alt="random image"
                    />
                  </div>
                </div>
                <div className="relative h-screen w-[1000px] mr-[40px] flex-shrink-0">
                  <div className="absolute h-[680px] w-[950px] bottom-5 right-0">
                    <img
                      src="/bg.png"
                      className="w-full h-full object-cover"
                      alt="random image"
                    />
                  </div>
                </div>
                <div className="relative h-screen w-[1000px] mr-[40px] flex-shrink-0">
                  <div className="absolute h-[680px] w-[950px] bottom-5 left-0">
                    <img
                      src="/bg.png"
                      className="w-full h-full object-cover "
                      alt="random image"
                    />
                  </div>
                </div>
                <div className="relative h-screen w-[1100px] bg-[#e9e9e8]">
                  <div className="h-full w-full flex flex-row justify-end items-center mr-5">
                    <div className="group h-[400px] w-[400px] hover:border-3 hover:border-purple-500 rounded-md">
                      <img
                        className="h-auto w-[300px] grayscale group-hover:grayscale-0 group-hover:transition-all group-hover:duration-100 group-hover:ease-in-out"
                        src="/ImageScroll/image1.png"
                        alt="random image"
                      />
                      <div></div>
                    </div>
                    <div className="group h-[400px] w-[400px] hover:border-3 hover:border-purple-500 mr-10">
                      <img
                        className="h-auto w-[300px] grayscale group-hover:grayscale-0 group-hover:transition-all group-hover:duration-500 group-hover:ease-in-out"
                        src="/ImageScroll/image2.png"
                        alt="random image"
                      />
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </HorizontalScroll>
          )}
        </section>
      </main>
    </>
  );
};

export default AboutusHorizontalScrollCarousel;

const Card = ({ card, position }) => {
  return (
    <div className="main-card w-[400px] h-[500px] md:w-[800px] xl:w-[800px] md:h-auto xl:h-auto relative">
      <div
        key={card.id}
        className={`group absolute overflow-hidden bg-neutral-200 ${position} border-2`}
        style={{ height: card.height, width: card.width }}
      >
        <div
          style={{
            backgroundImage: `url(${card.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 z-0 transition-transform duration-300 ease-in-out group-hover:scale-100"
        ></div>
      </div>
    </div>
  );
};
