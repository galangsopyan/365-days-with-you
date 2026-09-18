 "use client";

import { useEffect, useRef, useState } from "react";
import OpeningScreen from "./OpeningScreen";
import Navbar from "./Navbar";
import FloatingHearts from "./FloatingHearts";
import Hero from "./Hero";
import LoveCounter from "./LoveCounter";
import JourneyTimeline from "./JourneyTimeline";
import MemoryGallery from "./MemoryGallery";
import LoveReasons from "./LoveReasons";
import MusicPlayer from "./MusicPlayer";
import LoveLetter from "./LoveLetter";
import LoveQuestion from "./LoveQuestion";
import SecretSurprise from "./SecretSurprise";
import FinalSection from "./FinalSection";

export default function AnniversaryApp() {
  const [opened, setOpened] = useState(false);
  const [musicStarted, setMusicStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const enterStory = () => {
    setOpened(true);
    setMusicStarted(true);
    window.setTimeout(() => {
      audioRef.current?.play().catch(() => {});
      document.getElementById("story")?.scrollIntoView({ behavior: "smooth" });
    }, 650);
  };

  useEffect(() => {
    if (!opened) return;
    document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [opened]);

  return (
    <main className="min-h-screen bg-[#fff9f4]">
      <audio ref={audioRef} src="/music/our-song.mp3" preload="metadata" loop />
      {!opened && <OpeningScreen onOpen={enterStory} />}
      {opened && (
        <>
          <FloatingHearts />
          <Navbar />
          <div id="story"><Hero /></div>
          <LoveCounter />
          <JourneyTimeline />
          <MemoryGallery />
          <LoveReasons />
          <MusicPlayer audioRef={audioRef} started={musicStarted} />
          <LoveLetter />
          <LoveQuestion />
          <SecretSurprise />
          <FinalSection />
        </>
      )}
    </main>
  );
}