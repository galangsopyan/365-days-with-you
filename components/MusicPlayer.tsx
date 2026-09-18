 "use client";
import { Pause, Play, Volume2, VolumeX, Music2 } from "lucide-react";
import { motion } from "framer-motion";
import { RefObject, useEffect, useState } from "react";

export default function MusicPlayer({audioRef,started}:{audioRef:RefObject<HTMLAudioElement>,started:boolean}) {
  const [playing,setPlaying]=useState(false);
  const [progress,setProgress]=useState(0);
  const [volume,setVolume]=useState(0.7);
  const [muted,setMuted]=useState(false);

  useEffect(()=>{
    const audio=audioRef.current;if(!audio)return;
    audio.volume=volume;
    const time=()=>setProgress(audio.duration?audio.currentTime/audio.duration*100:0);
    const ended=()=>setPlaying(false);
    audio.addEventListener("timeupdate",time); audio.addEventListener("ended",ended);
    return()=>{audio.removeEventListener("timeupdate",time);audio.removeEventListener("ended",ended)};
  },[audioRef,volume]);

  useEffect(()=>{ if(started) setPlaying(true); },[started]);

  const toggle=async()=>{
    const a=audioRef.current;if(!a)return;
    if(a.paused){try{await a.play();setPlaying(true)}catch{setPlaying(false)}}else{a.pause();setPlaying(false)}
  };
  const seek=(v:number)=>{const a=audioRef.current;if(a?.duration)a.currentTime=(v/100)*a.duration;setProgress(v)};
  return (
    <section className="bg-[#f8e7ea]/65 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[.25em] text-[#a24c64]">Press play</p>
          <h2 className="mt-2 font-display text-4xl text-[#592236] sm:text-5xl">Our Song 🎵</h2>
        </div>
        <div className="glass rounded-[2rem] p-5 sm:p-8">
          <div className="flex flex-col items-center gap-7 sm:flex-row">
            <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-2xl bg-[#dca6b4] shadow-xl">
              <img src="/images/memory5.jpg" alt="Our song cover" className="h-full w-full object-cover" onError={e=>e.currentTarget.src="/images/placeholder.svg"}/>
              {playing && <div className="absolute inset-0 flex items-center justify-center bg-[#4d1629]/20"><div className="heart-beat rounded-full bg-white/85 p-3 text-[#7a2943]"><Music2/></div></div>}
            </div>
            <div className="w-full flex-1">
              <div className="flex items-end justify-between gap-4">
                <div><p className="text-[10px] uppercase tracking-widest text-[#aa7180]">Our favorite song</p><h3 className="mt-1 font-display text-2xl text-[#672a3d]">Our Song</h3><p className="text-xs text-[#8b6872]">Galang × Azulia</p></div>
                <div className="flex h-8 items-end gap-1">{[1,2,3,4,5,6,7].map(i=><motion.i key={i} animate={playing?{height:[5,18,8,22,7]}:{height:5}} transition={{duration:.7,repeat:Infinity,delay:i*.08}} className="w-1 rounded-full bg-[#b65c73]"/>)}</div>
              </div>
              <input aria-label="Song progress" type="range" min="0" max="100" value={progress} onChange={e=>seek(Number(e.target.value))} className="mt-7 w-full accent-[#8d334d]"/>
              <div className="mt-5 flex items-center gap-4">
                <button onClick={toggle} className="flex h-12 w-12 items-center justify-center rounded-full bg-[#70283d] text-white shadow-lg transition active:scale-95">{playing?<Pause size={18}/>:<Play size={18} className="ml-0.5"/>}</button>
                <div className="flex flex-1 items-center gap-2"><button onClick={()=>setMuted(v=>!v)} className="text-[#7c5260]">{muted?<VolumeX size={18}/>:<Volume2 size={18}/>}</button><input aria-label="Volume" type="range" min="0" max="1" step=".01" value={muted?0:volume} onChange={e=>{setMuted(false);setVolume(Number(e.target.value))}} className="w-24 accent-[#8d334d]"/></div>
              </div>
              <p className="mt-6 font-display text-lg italic text-[#7a4859]">“Every time this song plays, I think of you.”</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}