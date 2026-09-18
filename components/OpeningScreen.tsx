 "use client";
import { Heart, MailOpen, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function OpeningScreen({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);
  const petals = Array.from({ length: 16 }, (_, i) => i);

  const handle = () => {
    setOpening(true);
    window.setTimeout(onOpen, 1150);
  };

  return (
    <motion.section
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex min-h-[100svh] items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,#ffeef3_0%,#f9dbe3_40%,#eac0cc_100%)] px-6 text-center"
    >
      {petals.map(i => (
        <span key={i} className="petals" style={{ left: `${(i * 17) % 100}%`, animationDuration: `${7 + (i % 5)}s`, animationDelay: `${i * -.8}s` }} />
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.65),transparent_48%)]" />
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .9 }}
        className="relative z-10 mx-auto max-w-xl"
      >
        <motion.div animate={{ y: [0,-8,0] }} transition={{ duration: 3.5, repeat: Infinity }} className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-white/65 text-[#a94561] shadow-xl shadow-[#a94561]/10">
          <Heart fill="currentColor" size={28} />
        </motion.div>
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[.32em] text-[#8c4357]">A little love story</p>
        <h1 className="font-display text-4xl leading-[1.12] text-[#5d2032] sm:text-6xl">
          Untuk seseorang yang membuat<br />365 hari terasa begitu berarti <span className="whitespace-nowrap">❤️</span>
        </h1>
        <p className="mt-7 font-display text-2xl italic text-[#8d4659]">Happy 1st Anniversary</p>
        <button onClick={handle} disabled={opening} className="group mt-9 inline-flex min-h-14 items-center gap-3 rounded-full bg-[#70283d] px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(112,40,61,.25)] transition hover:-translate-y-1 active:scale-95 disabled:opacity-80">
          <motion.span animate={opening ? { rotate: [0,-10,10,0] } : {}}><MailOpen size={18}/></motion.span>
          {opening ? "Opening our story..." : "Open Our Story 💌"}
          <Sparkles size={15} className="opacity-70" />
        </button>
        <div className={`mx-auto mt-8 h-1 w-20 rounded-full bg-white/70 transition-all duration-700 ${opening ? "w-44" : ""}`} />
      </motion.div>
    </motion.section>
  );
}