 "use client";
import { Heart, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function Confetti() {
  return <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">{Array.from({length:70},(_,i)=><motion.span key={i} initial={{y:"-10vh",x:`${(i*37)%100}vw`,rotate:0,opacity:1}} animate={{y:"110vh",rotate:720,opacity:[1,1,0]}} transition={{duration:2.8+(i%7)*.2,delay:(i%12)*.04}} className="absolute text-xl">{i%3===0?"❤️":i%3===1?"✦":"♡"}</motion.span>)}</div>
}
export default function LoveQuestion() {
  const [answered,setAnswered]=useState(false);
  return (
    <section className="relative overflow-hidden bg-[#f5dce2] px-5 py-28 text-center sm:px-8">
      <div className="mx-auto max-w-2xl">
        <Sparkles className="mx-auto text-[#a94b63]" size={20}/>
        <p className="mt-4 text-xs font-semibold uppercase tracking-[.25em] text-[#9b5267]">Satu Pertanyaan Kecil...</p>
        <h2 className="mt-3 font-display text-4xl text-[#5a2033] sm:text-6xl">Apakah kamu akan memilihku lagi?</h2>
        {!answered ? <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          {["YES ❤️","OF COURSE ❤️"].map(x=><motion.button key={x} whileTap={{scale:.95}} onClick={()=>setAnswered(true)} className="rounded-full bg-[#70283d] px-8 py-4 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1">{x}</motion.button>)}
        </div> : <AnimatePresence>
          <motion.div initial={{opacity:0,scale:.7}} animate={{opacity:1,scale:1}} className="mt-10">
            <Confetti/>
            <Heart className="heart-beat mx-auto text-[#a13e58]" fill="currentColor" size={38}/>
            <h3 className="mt-5 font-display text-3xl text-[#70283d]">Aku tahu itu. 😌❤️</h3>
            <a href="#surprise" className="mt-7 inline-flex rounded-full border border-[#8d4056] bg-white/60 px-6 py-3 text-sm font-semibold text-[#6d293e]">Satu Kejutan Lagi →</a>
          </motion.div>
        </AnimatePresence>}
      </div>
    </section>
  );
}