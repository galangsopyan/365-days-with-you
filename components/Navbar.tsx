 "use client";
import { Heart, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  ["Our Story", "story"], ["Memories", "memories"], ["Reasons", "reasons"], ["Letter", "letter"], ["Surprise", "surprise"]
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const go = (id: string) => { setOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };

  return (
    <nav className={`fixed left-0 right-0 top-0 z-50 px-4 py-3 transition-all duration-500 ${scrolled ? "bg-white/65 shadow-sm backdrop-blur-xl" : "bg-transparent"}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full px-2 sm:px-4">
        <button onClick={() => go("story")} className="flex items-center gap-2 font-display text-xl text-[#68243a]">
          Us <Heart size={15} fill="currentColor" />
        </button>
        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label,id]) => <button key={id} onClick={() => go(id)} className="text-xs font-medium text-[#6b4551] transition hover:text-[#a33e5b]">{label}</button>)}
        </div>
        <button onClick={() => setOpen(v => !v)} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/60 text-[#68243a] md:hidden" aria-label="Menu">
          {open ? <X size={19}/> : <Menu size={19}/>}
        </button>
      </div>
      {open && <motion.div initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} className="mx-auto mt-2 max-w-md rounded-3xl border border-white/70 bg-white/90 p-3 shadow-xl backdrop-blur-xl md:hidden">
        {links.map(([label,id]) => <button key={id} onClick={() => go(id)} className="block w-full rounded-2xl px-4 py-3 text-left text-sm text-[#633746] hover:bg-[#fff0f3]">{label}</button>)}
      </motion.div>}
    </nav>
  );
}