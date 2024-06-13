"use client"; // This is a client component 👈🏽
import Nav from "@/components/layout/Nav/Nav";
import Image from "next/image";
import { Abril_Fatface } from "next/font/google";
import aboutImg1 from "@/public/morenikeji-about-1.jpg";
import aboutImg2 from "@/public/morenikeji-about-3.jpg";
import landingImg from "@/public/morenikeji-about-3.jpg";
import vine1 from "@/public/english-ivy.svg";
import ExperienceCard from "@/components/ui/ExperienceCard/ExperienceCard";
import Footer from "@/components/layout/Footer/Footer";
import React, { useRef, useState, useEffect } from "react";
import Boarditems from "@/components/interface/Boarditems";
import film from "@/public/theatre.png";
import fashion from "@/public/fashion.png";
import poetry from "@/public/poetry.png";

const fatface = Abril_Fatface({ subsets: ["latin"], weight: ["400"] });

const buzz = [
  {
    id: 1,
    title: "Open Studios 🤭",
    href: "https://www.instagram.com/p/C6TuYnqoxpy/?img_index=1",
    date: "30th Jun",
    desc: "I’m having an open studio @wintarstudios today from 5pm",
  },
  {
    id: 1,
    title: "The Encounter",
    href: "https://www.instagram.com/p/C7r70z-I2yC/",
    date: "30th Jun",
    desc: "coming soon",
  },
];

const exp = [
  {
    id: 1,
    title: "Content, Marketing and COO",
    company: "Wintar",
    desc: "I oversee content creation, develop marketing strategies, and manage daily operations as COO, ensuring efficient execution of our business strategy and achieving organizational goals.",
  },
  {
    id: 2,
    title: "Executive Assistant",
    company: "AFRIFF",
    desc: "Managed schedules, coordinated meetings, handled communications, and supported daily operations to ensure efficiency and effectiveness in executive tasks.",
  },
  {
    id: 3,
    title: "Sales & Strategy",
    company: "Exhibit",
    desc: "I developed market analysis reports, executed sales campaigns, and devised strategic initiatives to drive revenue growth and market expansion.",
  },
];

export default function Home() {
  return (
    <main className="manrope">
      <div className="md:h-auto h-[90vh] md:px-9 px-3">
        <div className="h-2/3 relative">
          <div className="absolute -z-[100] md:hidden block">
            {/* <Image className="w-[100%]" src={landingImg} /> */}
          </div>
          <div className="fatface font-bold md:text-9xl text-8xl h-full justify-center leading-[75px] flex flex-col items-end ">
            <div>
              {" "}
              moreni
              <br />
              keji
            </div>
            {/* <div>Adebola </div> */}
            {/* <Image className="w-[100px]" src={vine1} /> */}
          </div>
        </div>

        <div className="h-1/3 flex">
          <div className="flex flex-col justify-end">
            <div className=" font-semibold md:text-2xl text-lg pr-3">
              As a multidisciplinary artist, I elevate storytelling to new
              heights by seamlessly merging diverse mediums such as writing,
              filmmaking, fashion design, and poetry to create a rich and
              immersive tapestry of artistic expression.
            </div>
            <div className="mt-3 text-xl">myemail@gmal.com</div>
          </div>

          <div className="text-xl w-1/3 justify-end flex flex-col text-right">
            <div>Film</div>
            <div>Fashion</div>
            <div>Strategy</div>
            <div>Consulting</div>
          </div>
        </div>
      </div>

      <section id="about" className="md:px-9 px-3 pt-32">
        <h1 className="text-5xl  md:px-9 px-3 md:text-8xl mb-20">
          About <br /> Me
        </h1>

        <div className="font-semibold md:text-2xl text-lg text-center mb-10">
          For the last 3 years, I've been Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quibusdam illo adipisci quisquam sint quasi labore
          illum minima, excepturi magnam architecto!
        </div>

        <div className="font-semibold md:text-2xl text-lg text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          odit distinctio sed alias recusandae ducimus nulla architecto, error
          consequuntur dignissimos ea aperiam minima placeat adipisci, possimus
          incidunt iste natus iure..
        </div>

        <div className="w-full flex justify-center items-center mt-32">
          <div className="w-[350px] relative ">
            <Image src={aboutImg1} />

            {/* <Image className="absolute -right-[100px] -bottom-[300px]" src={aboutImg2} /> */}
          </div>
        </div>
      </section>

      <section className="mt-44 mb-44 ">
        <h1 className="mb-5 uppercase text-center text-2xl md:px-9 px-3 md:text-8xl">
          Buzz board
        </h1>
        <div className="md:px-9 px-3 flex flex-col gap-5">
          {buzz.map((x) => (
            <Boarditems title={x.title} href={x.href} date={x.date} desc={x.desc} />
          ))}
        </div>
      </section>

      <section id="experience" className="mt-20">
        <h1 className="text-5xl md:px-9 px-3 md:text-8xl">
          Work <br /> Experience
        </h1>

        {exp.map((x) => (
          <ExperienceCard
            id={x.id}
            company={x.company}
            title={x.title}
            desc={x.desc}
          />
        ))}
      </section>

      <section id="works" className="mt-20">
        <h1 className="text-5xl mb-10 md:px-9 px-3 md:text-8xl">
          Notable
          <br /> Works
        </h1>

        <div className="aspect-square  md:px-9 px-3">
          <div className="w-full flex ">
            <div className="aspect-square border px-5 flex flex-col justify-center w-1/2 m-2 shadow rounded-md">
              <div className="w-[35px] mb-2">
                <Image src={film} />
              </div>
              <div className="text-4xl">Film</div>
            </div>

            <div className="aspect-square border px-5 flex flex-col justify-center w-1/2 m-2 shadow rounded-md ">


            <div className="w-[35px] mb-2">
                <Image src={fashion} />
              </div>
              <div className="text-4xl">Fashion</div>
            </div>
          </div>

          <div className="w-full flex ">
            <div className="aspect-square border px-5 flex flex-col justify-center w-1/2 m-2 shadow rounded-md">
            <div className="w-[35px] mb-2">
                <Image src={poetry} />
              </div>
              <div className="text-4xl">Poetry</div>

            </div>



            {/* <div className="aspect-square border px-3 flex flex-col justify-center w-1/2 m-2 shadow rounded-md">

            <div className="w-[40px] mb-2">
                <Image src={film} />
              </div>
              <div className="text-5xl">Film</div>
            </div> */}
          </div>
        </div>
      </section>
    </main>
  );
}
