 "use client";
import { Clock3, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const start = new Date("2025-09-18T00:00:00+07:00").getTime();

export default function LoveCounter() {
  const [elapsed, setElapsed] = useState({days:0,hours:0,minutes:0,seconds:0});
  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, Date.now() - start);
      const totalSeconds = Math.floor(diff / 1000);
      setElapsed({
        days: Math.floor(totalSeconds / 86400),
        hours: Math.floor(totalSeconds / 3600),
        minutes: Math.floor(totalSeconds / 60),
        seconds: totalSeconds
      });
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);
  const cards = [
    [elapsed.days.toLocaleString(), "Days"],
    [elapsed.hours.toLocaleString(), "Hours"],
    [elapsed.minutes.toLocaleString(), "Minutes"],
    [elapsed.seconds.toLocaleString(), "Seconds"]
  ];
  return (
    <section className="relative px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[.25em] text-[#a24c64]">A tiny reminder</p>
          <h2 className="mt-2 font-display text-4xl text-[#592236] sm:text-5xl">Sudah berapa lama kita bersama?</h2>
        </motion.div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
          {cards.map(([value,label],i) => (
            <motion.div key={label} initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}} className="glass float-slow rounded-3xl p-5 text-center sm:p-7">
              <div className="font-display text-3xl font-semibold text-[#70283d] sm:text-5xl">{value}</div>
              <div className="mt-1 text-[10px] uppercase tracking-[.2em] text-[#98717c] sm:text-xs">{label}</div>
            </motion.div>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-xl text-center">
          <Clock3 className="mx-auto mb-4 text-[#bd627a]" size={21}/>
          <p className="font-display text-2xl italic leading-relaxed text-[#744252]">“Dan sampai hari ini, aku masih nyaman berjalan bersamamu.”</p>
          <Heart className="heart-beat mx-auto mt-5 text-[#a94561]" fill="currentColor" size={18}/>
        </div>
      </div>
    </section>
  );
}