"use client";
import { useState, useRef, useEffect } from "react";
import play from "@/public/play.png";
import pause from "@/public/pause.png";
import fastForward from "@/public/fast-forward.png";
import volumeUp from "@/public/volume-down.png";
import volumeDown from "@/public/volume-up.png";
import Image from "next/image";
import note from "@/public/musical-note.png";
import asabii from "@/public/audio/asabi.jpg";
import Link from "next/link";

const MusicPlayer = ({ tracks }) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1); // Volume ranges from 0.0 to 1.0
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);
  const progressRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    console.log(currentTrackIndex)
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
    console.log(currentTrackIndex)
    setIsPlaying(false);
    console.log('hi')
    console.log(audioRef.current)
  };

  const handlePrev = () => {
    setCurrentTrackIndex(
      (prevIndex) => (prevIndex - 1 + tracks.length) % tracks.length
    );
    setIsPlaying(false);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };

  const handleProgressClick = (e) => {
    const progressBar = progressRef.current;
    const newTime =
      (e.nativeEvent.offsetX / progressBar.offsetWidth) * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeUp = () => {
    const newVolume = Math.min(volume + 0.1, 1);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const handleVolumeDown = () => {
    const newVolume = Math.max(volume - 0.1, 0);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const handleMute = () => {
    const newMuteState = !isMuted;
    setIsMuted(newMuteState);
    audioRef.current.muted = newMuteState;
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener("timeupdate", handleTimeUpdate);
      audio.addEventListener("loadedmetadata", handleTimeUpdate);
    }
    return () => {
      if (audio) {
        audio.removeEventListener("timeupdate", handleTimeUpdate);
        audio.removeEventListener("loadedmetadata", handleTimeUpdate);
      }
    };
  }, [currentTrackIndex]);

  return (
    <div className={`  transition-transform  ${isVisible ? "bg-gray-500 bg-opacity-40" : ""} 0 top-0 right-0 sticky z-50 border h-screen`}>
      <button
      onClick={toggleVisibility}
        className={`bg-white ml-3 absolute left-[6px] bottom-[80px] animate-not flex justify-center items-center border ${
          isVisible ? "w-[45px] h-[45px]" : "w-[50px] h-[50px]"
        }   mx-3 rounded-full`}
        >
        <Image
        className={` ${isVisible ? "w-[22px]" : "w-[25px]"} `}
        src={note}
        />
      </button>
      <div
      
      >

      {/* <iframe 
      className={`absolute -bottom-[60px] animate-not flex justify-center items-center border ${
          isVisible ? "w-[45px] h-[45px]" : "w-[50px] h-[50px]"
        }   mx-3 rounded-full`} src="https://lottie.host/embed/ed273f73-08c7-43eb-a839-ecadf973254b/b5uwLH0CUU.json"></iframe> */}
      </div>
      {/* <button onClick={toggleVisibility} className="top-4 left-4 bg-blue-500 text-white p-2 rounded">
        {isVisible ? 'Hide Player' : 'Show Player'}
      </button> */}
      <div
        className={` bg-white border py-4 px-5 shadow m-5 transform transition-transform ${
          isVisible
            ? "translate-x-0  block"
            : "-translate-x-full  invisible "
        }`}
      >
        <Image
          width={300}
          height={300}
          className="w-full"
          src={tracks[currentTrackIndex].img}
        />
        <audio
          ref={audioRef}
          src={tracks[currentTrackIndex].src}
          onEnded={handleNext}
        />
        <div className="relative flex flex-col mt-3 items-center h-[130px]">
          <h3 className="relative text-gray-600 text-">
            {tracks[currentTrackIndex].title}
            {/* <button  onClick={handleMute} className=" absolute ml-4   rounded-full  top-[px] -right-[50px]">
            {<Image className="w-[17px]" src={isMuted ? volumeUp : volumeDown} />}
          </button> */}
          </h3>
          <Link target="__blank" href="https://soundcloud.com/morenikeji-adebola/sets/ta-lo-wa-ni-ogba-na/s-gs82gJxD1ah?ref=clipboard&p=i&c=1&si=C4113FF522634F94A22C7F7348A89785">
            <div className="mb-5 underline text-xs text-gray-500">
              {" "}
              see all tracks
            </div>
          </Link>
          <div
            className="w-full bg-slate-100 border h-1 rounded-full mb-2"
            ref={progressRef}
            onClick={handleProgressClick}
          >
            <div
              className="bg-gray-600 h-1 rounded-full"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            ></div>
          </div>
          <div className="relative">
            <div className="flex items-center  gap-4 space-x-4 mt-4">
              <button
                onClick={handlePrev}
                className="rotate-[180deg]   rounded-full"
              >
                <Image className="w-[20px]" src={fastForward} />
              </button>
              <button onClick={handlePlayPause} className="  rounded-full">
                {<Image className="w-[20px]" src={isPlaying ? pause : play} />}
              </button>
              <button onClick={handleNext} className="  rounded-full">
                <Image className="w-[20px]" src={fastForward} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4 mt-4">
          {/* <button onClick={handleVolumeDown} className="bg-blue-500  rounded-full">Volume Down</button> */}

          {/* <button onClick={handleVolumeUp} className="bg-blue-500  rounded-full">Volume Up</button> */}
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
