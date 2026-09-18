 "use client";
import { Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingHearts() {
  const items = Array.from({ length: 13 }, (_, i) => i);
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {items.map(i => (
        <motion.div
          key={i}
          initial={{ y: "110vh", x: `${(i * 83) % 100}vw`, opacity: 0 }}
          animate={{ y: "-15vh", opacity: [0, .55, .55, 0], x: [`${(i * 83) % 100}vw`, `${((i * 83) + 7) % 100}vw`] }}
          transition={{ duration: 12 + (i % 5), repeat: Infinity, delay: i * .7, ease: "linear" }}
          className="absolute text-[#d98299]"
        >
          {i % 4 === 0 ? <Sparkles size={12} /> : <Heart size={10 + (i % 4) * 2} fill="currentColor" />}
        </motion.div>
      ))}
    </div>
  );
}