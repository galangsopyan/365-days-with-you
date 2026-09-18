 "use client";
import { Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const reasons = ["Senyummu","Kebaikanmu","Cara kamu memperdulikanku","Bagaimana kamu membuat hari-hari biasa menjadi istimewa","Kebiasaan kecilmu","Bagaimana kamu selalu membuatku merasa seperti di rumah","Cara kamu mendengarkan","Sederhananya, dirimu apa adanya"];

export default function LoveReasons() {
  const [open,setOpen] = useState<number[]>([]);
  const toggle=(i:number)=>setOpen(v=>v.includes(i)?v.filter(x=>x!==i):[...v,i]);
  return (
    <section id="reasons" className="relative overflow-hidden px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[.25em] text-[#a24c64]">Hal-hal kecil</p>
          <h2 className="mt-2 font-display text-4xl text-[#592236] sm:text-5xl">Hal-hal yang Kucintai tentangmu ❤️</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-[#82616b]">Ketuk kartu untuk tau.</p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
          {reasons.map((reason,i)=>{
            const isOpen=open.includes(i);
            return <button key={reason} onClick={()=>toggle(i)} className="group [perspective:1000px]">
              <motion.div animate={{rotateY:isOpen?180:0}} transition={{duration:.65}} className="relative min-h-40 w-full [transform-style:preserve-3d] sm:min-h-48">
                <div className="glass absolute inset-0 flex flex-col items-center justify-center rounded-3xl p-4 [backface-visibility:hidden]">
                  <Heart className="mb-3 text-[#b75970] transition group-hover:scale-110" size={22}/>
                  <span className="font-display text-lg text-[#713247]">Ketuk sayang</span>
                  <span className="mt-2 text-[9px] uppercase tracking-widest text-[#aa8290]">#{String(i+1).padStart(2,"0")}</span>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl bg-[#7b2d45] p-5 text-center text-white [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-xl">
                  <Sparkles size={17} className="mb-3 text-[#ffdce5]"/>
                  <span className="font-display text-xl leading-snug">{reason}</span>
                </div>
              </motion.div>
            </button>
          })}
        </div>
      </div>
    </section>
  );
}