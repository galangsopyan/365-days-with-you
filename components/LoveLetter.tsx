 "use client";
import { Heart, Mail, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const text = `Dear You,

365 hari.

Kalau dipikir-pikir, satu tahun terdengar seperti waktu yang singkat.
Tapi selama satu tahun itu, ada begitu banyak hal yang kita lalui.

Ada tawa.
Ada cerita.
Ada hari-hari yang indah.
Ada juga hari ketika semuanya tidak mudah.

Tapi dari semua hal yang terjadi,
satu hal yang paling aku syukuri adalah
aku menjalaninya bersamamu.

Terima kasih sudah hadir.
Terima kasih sudah bertahan.
Terima kasih sudah menjadi bagian dari hidupku.

Aku tidak tahu seperti apa perjalanan kita ke depannya.

Tapi kalau aku boleh memilih,
aku ingin terus membuat cerita bersamamu.

Happy 1st Anniversary, sayang.

I love you.
Today, tomorrow, and every day after. ❤️`;

export default function LoveLetter() {
  const [open,setOpen]=useState(false);
  const [shown,setShown]=useState("");
  useEffect(()=>{
    if(!open){setShown("");return}
    let i=0; const id=window.setInterval(()=>{i++;setShown(text.slice(0,i));if(i>=text.length)window.clearInterval(id)},18);
    return()=>window.clearInterval(id);
  },[open]);
  return (
    <section id="letter" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[.25em] text-[#a24c64]">Words from my heart</p>
        <h2 className="mt-2 font-display text-4xl text-[#592236] sm:text-5xl">A Letter For You 💌</h2>
        <button onClick={()=>setOpen(true)} className="group mx-auto mt-12 block w-full max-w-md">
          <motion.div animate={{y:[0,-5,0]}} transition={{duration:3,repeat:Infinity}} className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#8c354f] to-[#5e2033] p-10 text-white shadow-[0_25px_70px_rgba(100,30,50,.2)]">
            <div className="absolute left-1/2 top-0 h-24 w-52 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white/10"/>
            <Mail className="mx-auto mb-4" size={42}/>
            <span className="font-display text-2xl">Open My Letter</span>
            <p className="mt-2 text-xs text-white/65">There are a few words I want you to keep.</p>
          </motion.div>
        </button>
      </div>
      <AnimatePresence>
        {open && <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-[95] flex items-center justify-center bg-[#2a0d18]/70 p-5 backdrop-blur-md">
          <motion.div initial={{y:40,scale:.96}} animate={{y:0,scale:1}} className="relative max-h-[88svh] w-full max-w-2xl overflow-auto rounded-[1.5rem] bg-[#fffaf3] p-7 shadow-2xl sm:p-12">
            <button onClick={()=>setOpen(false)} className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#f7e3e5] text-[#6b293e]"><X size={16}/></button>
            <Heart className="mx-auto mb-5 text-[#a74661]" fill="currentColor" size={19}/>
            <pre className="whitespace-pre-wrap font-display text-[15px] leading-8 text-[#60303f] sm:text-lg sm:leading-9">{shown}<span className="animate-pulse">▌</span></pre>
            <p className="mt-7 text-right font-display text-xl italic text-[#914158]">— Galang ❤️</p>
          </motion.div>
        </motion.div>}
      </AnimatePresence>
    </section>
  );
}