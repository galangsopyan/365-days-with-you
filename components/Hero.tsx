 "use client";
import { Heart, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden px-5 pb-12 pt-24 sm:px-8">
      <div className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-[#f4c6d1]/40 blur-3xl" />
      <div className="absolute -right-28 bottom-0 h-80 w-80 rounded-full bg-[#ead2bd]/35 blur-3xl" />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <motion.div initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.8}} className="order-2 text-center lg:order-1 lg:text-left">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[.28em] text-[#a34b63]">18 September 2025 — 18 September 2026</p>
          <h2 className="font-display text-5xl leading-[1.04] text-[#572033] sm:text-6xl lg:text-7xl">
            One Year.<br />Countless Memories.<br /><span className="text-gradient">One Person I Choose. ❤️</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#765460] sm:text-base lg:mx-0">
            365 hari bersamamu bukan sekadar waktu, tapi kumpulan cerita yang ingin aku ulang berkali-kali.
          </p>
          <div className="mt-7 flex items-center justify-center gap-2 text-sm text-[#8b4b5d] lg:justify-start"><CalendarDays size={17}/> 18 September 2025</div>
          <div className="mt-7 flex justify-center lg:justify-start"><span className="inline-flex items-center gap-2 rounded-full bg-white/65 px-4 py-2 text-xs text-[#744252] shadow-sm"><Heart size={13} fill="currentColor"/> Galang & Azulia</span></div>
        </motion.div>
        <motion.div initial={{opacity:0,scale:.9,rotate:2}} whileInView={{opacity:1,scale:1,rotate:0}} viewport={{once:true}} transition={{duration:1}} className="order-1 flex justify-center lg:order-2">
          <div className="relative rotate-2 bg-white p-3 pb-12 shadow-[0_28px_70px_rgba(96,36,54,.16)] sm:p-5 sm:pb-16">
            <div className="relative aspect-[4/5] w-[min(78vw,370px)] overflow-hidden bg-[#f6e4e4]">
              <img src="/images/couple.jpg" alt="Galang dan Azulia" className="h-full w-full object-cover" onError={(e) => { e.currentTarget.src="/images/placeholder.svg"; }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4e1729]/20 to-transparent" />
            </div>
            <span className="absolute bottom-3 left-0 right-0 text-center font-display text-xl italic text-[#6c3043] sm:bottom-4">
              my favorite person ♡
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}