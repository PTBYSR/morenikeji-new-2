import { Manrope, Abril_Fatface } from "next/font/google";
import "./globals.css";
import Nav from "@/components/layout/Nav/Nav";
import Footer from "@/components/layout/Footer/Footer";
import MusicPlayer from "@/components/interface/MusicPlayer";

const inter = Manrope({ subsets: ["latin"] });
const fatface = Abril_Fatface({ subsets: ["latin"], weight: ["400"] });

const audio = [
  {
    id: 1,
    src: "/asabi.mp3",
    title: "asabi",
    src: "/asabi.jpg",
  },
];
const tracks = [
  {
    id: 1,
    title: "Ta Lo Wa Ni Ogba Na?",
    src: "/audio/talo.mp3",
    img: "/audio/talo.jpg",
  },
  {
    id: 2,
    title: "asabi",
    src: "/asabi.mp3",
    img: "/audio/asabi.jpg",
  },
  {
    id: 3,
    title: "Ewa",
    src: "/audio/ewa.mp3",
    img: "/audio/ewa.jpg",
  },
  {
    id: 4,
    title: "Beere",
    src: "/audio/beere.mp3",
    img: "/audio/beere.jpg",
  },
  {
    id: 5,
    title: "Iranti",
    src: "/audio/iranti.mp3",
    img: "/audio/iranti.jpg",
  },
  {
    id: 6,
    title: "Reni",
    src: "/audio/reni.mp3",
    img: "/audio/reni.jpg",
  },
  {
    id: 7,
    title: "Igbo",
    src: "/audio/igbo.mp3",
    img: "/audio/igbo.jpg",
  },
  {
    id: 8,
    title: "Mabinu 1",
    src: "/audio/mabinu1.mp3",
    img: "/audio/mabinu1.jpg",
  },
  {
    id: 9,
    title: "Kofoworola",
    src: "/audio/kofoworola.mp3",
    img: "/audio/kofoworola.jpg",
  },
  {
    id: 10,
    title: "Dehinwawola",
    src: "/audio/dehinwawola.mp3",
    img: "/audio/dehinwawola.jpg",
  },
];

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html className="relative" lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Manrope:wght@200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <div className="z-50 absolute w-screen top-0 h-full right-0">
        <div className="top-0 z-[1000] sticky w-full">
          <Nav />
        </div>
        <MusicPlayer tracks={tracks} />
      </div>

      <body style={{ position: "relative" }} className={inter.className}>

        {children}
      </body>

      <Footer />
    </html>
  );
}
