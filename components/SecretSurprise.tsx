 "use client";
import { Heart, Sparkles, Stars } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function SecretSurprise() {
  const [open,setOpen]=useState(false);
  return (
    <section id="surprise" className="relative overflow-hidden px-5 py-28 text-center sm:px-8">
      <div className="mx-auto max-w-xl">
        <button onClick={()=>setOpen(true)} className="group rounded-full border border-[#c18b99] bg-white/50 px-6 py-3 text-sm text-[#6e3043] shadow-sm transition hover:bg-white hover:shadow-lg">Don&apos;t Click This 👀</button>
        <p className="mt-5 text-xs text-[#9b7881]">Seriously. I mean it.</p>
      </div>
      <AnimatePresence>
        {open && <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-[110] flex items-center justify-center overflow-hidden bg-[#13070c] p-6 text-white">
          {Array.from({length:35},(_,i)=><motion.span key={i} initial={{opacity:0}} animate={{opacity:[0,.8,0],y:[0,-100]}} transition={{duration:2+(i%5),repeat:Infinity,delay:i*.08}} className="absolute" style={{left:`${(i*29)%100}%`,top:`${(i*47)%100}%`}}><Stars size={10+(i%3)*4}/></motion.span>)}
          <motion.div initial={{scale:.6,opacity:0}} animate={{scale:1,opacity:1}} transition={{delay:.7,duration:1}} className="relative z-10 max-w-2xl">
            <motion.div animate={{scale:[1,1.16,1]}} transition={{duration:1.2,repeat:Infinity}}><Heart className="mx-auto text-[#ee91aa]" fill="currentColor" size={50}/></motion.div>
            <p className="mt-8 text-xs uppercase tracking-[.35em] text-[#c78a99]">Okay...</p>
            <h2 className="mt-3 font-display text-4xl sm:text-6xl">Kamu telah menemukan rahasianya. ❤️</h2>
            <p className="mt-10 font-display text-2xl italic text-[#f3cfd7]">Ini adalah janjiku...</p>
            <p className="mx-auto mt-5 max-w-lg text-sm leading-8 text-white/75 sm:text-base">Aku akan terus memilihmu, terus menghargaimu, terus membuat kenangan bersamamu, dan terus mencintai hal-hal kecil tentang kita.</p>
            <button onClick={()=>setOpen(false)} className="mt-10 rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#561b2d]">Keep this secret 🤍</button>
          </motion.div>
        </motion.div>}
      </AnimatePresence>
    </section>
  );
}