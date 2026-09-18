 "use client";
import { CalendarDays, Heart, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const moments = [
  {no:"01",title:"The Beginning",desc:"Hari ketika semuanya dimulai.",date:"18 September 2025",img:"/images/memory1.jpg",story:"Satu tanggal sederhana yang ternyata menjadi awal dari begitu banyak cerita. Dari sini, kita mulai menulis halaman pertama kita.",quote:"Every beautiful story has a beginning. Ours is my favorite."},
  {no:"02",title:"Our First Memories",desc:"Hal-hal kecil yang akhirnya menjadi kenangan besar.",date:"September — October 2025",img:"/images/memory7.jpg",story:"Obrolan kecil, tawa yang tiba-tiba, dan momen-momen sederhana perlahan menjadi sesuatu yang selalu ingin aku simpan.",quote:"The little things became the big things."},
  {no:"03",title:"The First Adventure",desc:"Pertama kalinya kita pergi dan membuat cerita bersama.",date:"Our first adventure",img:"/images/memory4.jpg",story:"Kita belajar bahwa tempat yang indah terasa lebih indah ketika dijalani bersama orang yang tepat.",quote:"Anywhere is special when I'm beside you."},
  {no:"04",title:"Through The Ups & Downs",desc:"Karena hubungan bukan hanya tentang bahagia, tapi tentang tetap memilih satu sama lain.",date:"Along the way",img:"/images/memory8.jpg",story:"Tidak semua hari sempurna. Tapi di antara perbedaan, lelah, dan hari yang berat, kita terus belajar memahami dan memilih untuk tetap bersama.",quote:"Love is choosing each other, even on ordinary days."},
  {no:"05",title:"Today",desc:"365 hari kemudian, aku masih memilih kamu.",date:"18 September 2026",img:"/images/couple.jpg",story:"Setahun berlalu, dan satu hal tetap sama: aku masih ingin melihat senyummu, mendengar ceritamu, dan membuat lebih banyak kenangan bersamamu.",quote:"One year later, still you. Still us."}
];

export default function JourneyTimeline() {
  const [selected,setSelected] = useState<(typeof moments)[number] | null>(null);
  return (
    <section id="story" className="relative px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[.25em] text-[#a24c64]">Chapter by chapter</p>
          <h2 className="mt-2 font-display text-4xl text-[#592236] sm:text-5xl">Our Little Journey 🌷</h2>
        </motion.div>
        <div className="relative mt-14">
          <div className="absolute bottom-4 left-[17px] top-4 w-px bg-[#e7bac5] sm:left-1/2 sm:-translate-x-1/2" />
          <div className="space-y-7 sm:space-y-10">
            {moments.map((m,i) => (
              <motion.button key={m.no} onClick={() => setSelected(m)} initial={{opacity:0,x:i%2?-20:20}} whileInView={{opacity:1,x:0}} viewport={{once:true,margin:"-60px"}} className={`relative flex w-full items-start gap-5 text-left sm:w-[calc(50%-28px)] ${i%2===1?"sm:ml-auto sm:flex-row-reverse sm:text-right":""}`}>
                <span className="relative z-10 mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-4 border-[#fff9f4] bg-[#9d4058] text-[9px] font-bold text-white shadow-md">{m.no}</span>
                <span className="glass flex-1 rounded-3xl p-5 transition hover:-translate-y-1 hover:shadow-xl">
                  <span className="block font-display text-2xl text-[#63273b]">{m.title}</span>
                  <span className="mt-1 block text-xs leading-5 text-[#82616b]">{m.desc}</span>
                  <span className="mt-3 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-[#b05b70]"><CalendarDays size={12}/> {m.date}</span>
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
      <AnimatePresence>
        {selected && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-[80] flex items-center justify-center bg-[#32101d]/65 p-5 backdrop-blur-md" onClick={() => setSelected(null)}>
            <motion.div initial={{opacity:0,y:25,scale:.96}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:20}} onClick={e=>e.stopPropagation()} className="max-h-[90svh] w-full max-w-lg overflow-auto rounded-[2rem] bg-[#fffaf6] p-4 shadow-2xl">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-[#f4dfe2]">
                <img src={selected.img} alt={selected.title} className="h-full w-full object-cover" onError={e=>e.currentTarget.src="/images/placeholder.svg"}/>
                <button onClick={()=>setSelected(null)} className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/85"><X size={17}/></button>
              </div>
              <div className="p-4 sm:p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[.2em] text-[#a34b63]">{selected.date}</p>
                <h3 className="mt-1 font-display text-3xl text-[#5d2032]">{selected.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#765460]">{selected.story}</p>
                <p className="mt-5 border-l-2 border-[#d891a2] pl-4 font-display text-lg italic text-[#8c4559]">“{selected.quote}”</p>
                <Heart className="mt-5 text-[#ad4d66]" fill="currentColor" size={17}/>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}