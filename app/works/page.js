"use client"; // This is a client component 👈🏽

import React, { useRef, useEffect, useState } from "react";

const page = () => {

  return (
    <>
      <div className="h-[70vh] px-3 md:px-9 ">
        {/* <div className="app">
      <ImageSlideshow />
      <div className="content mt-96 p-8">
        <h1 className="text-4xl font-bold">Content Below Slideshow</h1>
        <p className="mt-4">
          This is the content that appears below the slideshow. Scroll down to continue reading.
        </p>
      </div>
    </div> */}

        <section className="h-full flex items-center">
          <div className="flex gap-5 flex-col">
            <h1 className="text-5xl">Coming soon</h1>
            <div className="w-2/3">
              Have a project that you think I can help with? Shoot me an email &
              get started right away!{" "}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default page;
