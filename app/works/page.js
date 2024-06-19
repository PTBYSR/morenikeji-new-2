"use client"; // This is a client component 👈🏽
import WaveSurfer from "wavesurfer.js";

// import asabi from '@/public/asabi.mp3'

import React, { useRef, useEffect, useState } from "react";
import { Input } from "postcss";
import MusicPlayer from "@/components/interface/MusicPlayer";

const tracks = [{ title: "asabi", src: "/asabi.mp3" }];

const fromWaveSurferOptions = (ref) => ({
  container: ref,
  waveColor: "#ccc",
  progressColor: "#0178ff",
  cursorColor: "transparent",
  responsive: true,
  height: 80,
  normalize: true,
  backend: "WebAudio",
  barWidth: 2,
  barGap: 3,
});

function formatTime(seconds) {
  let date = new Date(0);
  date.setSeconds(seconds);
  return date.toISOString().substr(11, 8);
}

const page = () => {
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [muted, setMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [audioFileName, setAudioFileName] = useState("");

  useEffect(() => {
    // const options = formWavesurfer
  });

  const handlePlayPause = () => {
    setPlaying(!playing);
  };
  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume);
    setMuted(newVolume === 0);
  };

  const handleMute = () => {
    setMuted(!muted);
  };

  const handleVolumeUp = () => {
    handleVolumeChange(Math.min(volume + 0.1, 1));
  };

  const handleVolumeDown = () => {
    handleVolumeChange(Math.max(volume - 0.1, 0));
  };

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

// className={`fixed top-0 left-0 h-full bg-gray-800 text-white shadow-md transform transition-transform ${
//   isVisible ? 'translate-x-0' : '-translate-x-full'
// }`}

{
  /* <div className="mt-32 bg-black h-9" id="waveform" ref={waveformRef} style={{ width: "100%" }}> */
}
{
  /* <input */
}
// type="range"
// id="volume"
// name="volume"
// min="0"
// max="1"
// step="0.05"
// value={muted ? 0 : volume}
// onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
{
  /* /> */
}
{
  /* <button className="text-white"  onClick={handlePlayPause}>{playing ? "pause" : "play"}</button> */
}
{
  /* <button className="text-white" onClick={handleMute}>{muted ? "vol off" : "vol mute"}</button> */
}
{
  /* <button className="text-white" onClick={handleVolumeDown}>{"volume down"}</button> */
}
{
  /* <button className="text-white" onClick={handleVolumeUp}>{"volume up"}</button> */
}
{
  /*  */
}
{
  /* <div className="audio-info"> */
}
{
  /* <span>Playing: {audioFileName}</span> */
}
{
  /* <span> */
}
{
  /* Duration :{formatTime(duration)} | Current time:{" "} */
}
{
  /* {formatTime(currentTime)} */
}
{
  /* </span> */
}
{
  /* <span>Volume : {Math.round(volume * 100)}%</span> */
}
{
  /* </div> */
}
{
  /* </div>  */
}
