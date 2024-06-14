"use client"; // This is a client component 👈🏽

import React, { useRef, useEffect, useState } from "react";
import film from "@/public/morenikeji-about-3.jpg";
import fashion from "@/public/morenikeji-about-3.jpg";
import poetry from "@/public/morenikeji-about-3.jpg";

import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import Image from "next/image";

const images = [film, fashion, poetry];

export const IMAGES = [
  {
    id: 0,
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-light.appspot.com/o/morenikeji-acct-board1.jpg?alt=media&token=dd6fe7a1-7350-404d-bb91-8f5c11ae9f4d",
    type: "image",
  },
  {
    id: 1,
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-light.appspot.com/o/morenikeji-acct-board2.jpg?alt=media&token=992f4637-0f34-42cd-b174-6c517f8a5d56",
    type: "image",
  },
  {
    id: 2,
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-light.appspot.com/o/morenikeji-acct-board3.jpg?alt=media&token=47cd4d8e-cd87-487f-89dd-1b623e60c3e6",
    type: "image",
  },
  {
    id: 3,
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-light.appspot.com/o/morenikeji-acct-vid2.mp4?alt=media&token=5c8747e3-8ca3-4981-bea6-e05be9fa1b16",
    type: "video",
  },
  {
    id: 4,
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-light.appspot.com/o/morenikeji-acct-board4.jpg?alt=media&token=9f1b5a73-1a07-4dab-a172-3c51dab900e1",
    type: "image",
  },
  {
    id: 5,
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-light.appspot.com/o/morenikeji-acct-board5.jpg?alt=media&token=9b72d19c-aedb-4448-be0b-49a5b13b64c6",
    type: "image",
  },
  {
    id: 6,
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-light.appspot.com/o/morenikeji-acct-board6.jpg?alt=media&token=3d5fe1a8-5dca-4c0e-b509-938244cb11dd",
    type: "image",
  },
  {
    id: 7,
    imageSrc:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-light.appspot.com/o/morenikeji-acct-vid1.mp4?alt=media&token=93ae1db9-d5a9-4d95-a063-b99e2af036fd",
    type: "video",
  },
];

const sliderVariants = {
  incoming: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.2,
    opacity: 0,
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 0.2,
  }),
};

const sliderTransition = {
  duration: 1,
  ease: [0.56, 0.03, 0.12, 1.04],
};

const ImageSlider = () => {
  const [[imageCount, direction], setImageCount] = useState([0, 0]);

  const activeImageIndex = wrap(0, IMAGES.length, imageCount);

  const swipeToImage = (swipeDirection) => {
    setImageCount([imageCount + swipeDirection, swipeDirection]);
  };

  const dragEndHandler = (dragInfo) => {
    const draggedDistance = dragInfo.offset.x;
    const swipeThreshold = 50;
    if (draggedDistance > swipeThreshold) {
      swipeToImage(-1);
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImage(1);
    }
  };

  const skipToImage = (imageId) => {
    let changeDirection;
    if (imageId > activeImageIndex) {
      changeDirection = 1;
    } else if (imageId < activeImageIndex) {
      changeDirection = -1;
    }
    setImageCount([imageId, changeDirection]);
  };

  return (
    <>
      <main className="md:mt-32 mt-10">
      <h1 className="uppercase text-center text-2xl md:px-9 px-3 md:text-3xl">
          my works
        </h1>
        <div className="slider-container flex flex-col justify-center items-center w-full">
          <div className="slider">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={imageCount}
                style={{
                  backgroundImage: `url(${IMAGES[activeImageIndex].imageSrc})`,
                }}
                custom={direction}
                variants={sliderVariants}
                initial="incoming"
                animate="active"
                exit="exit"
                transition={sliderTransition}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
                className="image flex justify-center items-center"
              >
                {IMAGES[activeImageIndex].type === "image" ? (
                  <>
                   
                  </>
                ) : (
                  <>
                    <video width="600" controls>
                      <source
                        src={`${IMAGES[activeImageIndex].imageSrc}`}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className=" flex justify-center items-center  font-semibold gap-10">
            <button onClick={() => swipeToImage(-1)}>PREV</button>
            <button onClick={() => swipeToImage(1)}>NEXT</button>
          </div>
        </div>

        {/* <div className="flex  thumbnails ">
          {IMAGES.map((image) => (
            <div
              key={image.id}
              onClick={() => skipToImage(image.id)}
              className="thumbnail-container"
            >
              <img className="img" src={image.imageSrc} alt="Musician" />
              <div
                className={`active-indicator ${
                  image.id === activeImageIndex ? "active" : null
                }`}
              />
            </div>
          ))}
        </div> */}
      </main>
    </>
  );
};

export default ImageSlider;
