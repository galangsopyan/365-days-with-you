 "use client";
import { Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function FinalSection() {
  return (
    <footer className="relative overflow-hidden bg-[radial-gradient(circle_at_center,#8c3b55,#481525_70%)] px-5 py-24 text-center text-white sm:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.1),transparent_18%),radial-gradient(circle_at_80%_70%,rgba(255,170,190,.12),transparent_20%)]"/>
      <div className="relative mx-auto max-w-3xl">
        <Sparkles className="mx-auto mb-7 text-[#f1b6c4]" size={18}/>
        <p className="text-xs uppercase tracking-[.3em] text-white/55">The next chapter starts here</p>
        <h2 className="mt-5 font-display text-5xl leading-tight sm:text-7xl">365 days down.<br/><span className="text-[#f6c8d2]">Forever to go. ❤️</span></h2>
        <div className="mx-auto mt-12 w-fit rotate-[-2deg] bg-white p-3 pb-10 shadow-2xl sm:p-4 sm:pb-12">
          <img src="/images/couple.jpg" alt="Galang dan Azulia" className="h-[min(58vh,420px)] w-[min(72vw,340px)] object-cover" onError={e=>e.currentTarget.src="/images/placeholder.svg"}/>
          <p className="mt-3 font-display text-lg italic text-[#68263b]">my favorite chapter ♡</p>
        </div>
        <h3 className="mt-12 font-display text-3xl">Happy 1st Anniversary, Azulia</h3>
        <p className="mt-4 text-sm text-white/70">Thank you for being my favorite chapter.</p>
        <div className="mx-auto mt-16 h-px max-w-xs bg-white/15"/>
        <p className="mt-7 text-xs text-white/50">Made with love <Heart className="mx-1 inline-block" size={12} fill="currentColor"/> by Galang</p>
      </div>
    </footer>
  );
}