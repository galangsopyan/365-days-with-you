"use client";

import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
  Heart,
} from "lucide-react";

type Memory = {
  image: string;
  caption: string;
  description: string;
};

const memories: Memory[] = [
  {
    image: "/images/memory1.jpg",
    caption: "First date ❤️",
    description:
      "Salah satu momen yang sampai sekarang masih aku ingat dengan senyum.",
  },
  {
    image: "/images/memory2.jpg",
    caption: "That random Tuesday",
    description:
      "Hari biasa yang ternyata menjadi salah satu kenangan favoritku.",
  },
  {
    image: "/images/memory3.jpg",
    caption: "Your favorite smile",
    description:
      "Senyummu selalu punya cara sendiri untuk membuat hariku menjadi lebih baik.",
  },
  {
    image: "/images/memory4.jpg",
    caption: "Us being silly",
    description:
      "Karena bersama kamu, hal sederhana pun bisa berubah menjadi cerita lucu.",
  },
  {
    image: "/images/memory5.jpg",
    caption: "My favorite person ♡",
    description:
      "Di antara begitu banyak orang, tetap kamu yang selalu punya tempat spesial.",
  },
  {
    image: "/images/memory6.jpg",
    caption: "Little moments",
    description:
      "Momen kecil yang mungkin sederhana, tapi selalu berarti buatku.",
  },
  {
    image: "/images/memory7.jpg",
    caption: "Just us",
    description:
      "Tidak perlu sesuatu yang mewah. Cukup kamu dan aku.",
  },
  {
    image: "/images/memory8.jpg",
    caption: "A memory to keep",
    description:
      "Satu lagi kenangan yang ingin aku simpan selamanya.",
  },
];

export default function MemoryGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const selectedMemory =
    selectedIndex !== null ? memories[selectedIndex] : null;

  // Tutup modal dengan tombol Escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
        setIsZoomed(false);
      }

      if (event.key === "ArrowRight") {
        nextMemory();
      }

      if (event.key === "ArrowLeft") {
        previousMemory();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  // Disable scroll ketika lightbox terbuka
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  const openMemory = (index: number) => {
    setSelectedIndex(index);
    setIsZoomed(false);
  };

  const closeMemory = () => {
    setSelectedIndex(null);
    setIsZoomed(false);
  };

  const nextMemory = () => {
    if (selectedIndex === null) return;

    setSelectedIndex((current) => {
      if (current === null) return null;
      return (current + 1) % memories.length;
    });

    setIsZoomed(false);
  };

  const previousMemory = () => {
    if (selectedIndex === null) return;

    setSelectedIndex((current) => {
      if (current === null) return null;
      return (current - 1 + memories.length) % memories.length;
    });

    setIsZoomed(false);
  };

  return (
    <>
      <section
        id="memories"
        className="relative overflow-hidden bg-[#fffaf8] px-5 py-20 sm:px-8 md:py-28"
      >
        {/* Decorative background */}
        <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-pink-200/20 blur-3xl" />

        <div className="pointer-events-none absolute bottom-10 right-0 h-80 w-80 rounded-full bg-rose-200/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          {/* Heading */}
          <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#b76e79]/40" />

              <Heart
                size={17}
                className="fill-[#b76e79] text-[#b76e79]"
              />

              <span className="h-px w-10 bg-[#b76e79]/40" />
            </div>

            <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-[#b76e79]">
              Our Memories
            </p>

            <h2 className="font-serif text-4xl font-medium text-[#4d2931] sm:text-5xl">
              Pieces of Us 📸
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#765b61] sm:text-base">
              Delapan momen kecil yang menjadi bagian dari cerita satu tahun
              perjalanan kita.
            </p>
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
            {memories.map((memory, index) => (
              <button
                key={memory.image}
                type="button"
                onClick={() => openMemory(index)}
                className={`group relative w-full text-left outline-none ${
                  index % 3 === 1 ? "md:translate-y-8" : ""
                }`}
              >
                {/* Polaroid */}
                <div
                  className={`relative bg-white p-2.5 shadow-[0_12px_35px_rgba(100,50,60,0.10)] transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-1 group-hover:shadow-[0_20px_45px_rgba(100,50,60,0.18)] sm:p-3 ${
                    index % 2 === 0
                      ? "-rotate-1"
                      : "rotate-1"
                  }`}
                >
                  {/* IMAGE CONTAINER */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f3e8e8]">
                    <img
                      src={memory.image}
                      alt={memory.caption}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover object-[60%_center] transition-transform duration-700 ease-out group-hover:scale-105"
                      onError={(event) => {
                        event.currentTarget.src =
                          "/images/placeholder.svg";
                      }}
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/20">
                      <div className="flex h-11 w-11 scale-75 items-center justify-center rounded-full bg-white/90 opacity-0 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                        <ZoomIn
                          size={19}
                          className="text-[#6d3d48]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="flex min-h-[58px] items-center justify-center px-1 py-3 sm:min-h-[65px]">
                    <p className="font-serif text-sm italic text-[#70404b] sm:text-base">
                      {memory.caption}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Bottom text */}
          <div className="mt-16 text-center md:mt-20">
            <p className="font-serif text-lg italic text-[#87666d]">
              "Banyak hal sederhana yang akhirnya menjadi kenangan indah."
            </p>

            <div className="mt-4 flex justify-center gap-1.5">
              <span className="text-[#b76e79]">♡</span>
              <span className="text-[#b76e79]">♡</span>
              <span className="text-[#b76e79]">♡</span>
            </div>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedMemory && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#24171b]/95 p-4 backdrop-blur-md sm:p-8"
          onClick={closeMemory}
        >
          {/* Close */}
          <button
            type="button"
            onClick={closeMemory}
            className="absolute right-4 top-4 z-[110] flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-7 sm:top-7"
            aria-label="Close"
          >
            <X size={22} />
          </button>

          {/* Previous */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              previousMemory();
            }}
            className="absolute left-2 top-1/2 z-[110] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
            aria-label="Previous memory"
          >
            <ChevronLeft size={25} />
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              nextMemory();
            }}
            className="absolute right-2 top-1/2 z-[110] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
            aria-label="Next memory"
          >
            <ChevronRight size={25} />
          </button>

          {/* Content */}
          <div
            className="relative flex max-h-[94vh] w-full max-w-5xl flex-col items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Image */}
            <div
              className={`relative max-h-[72vh] max-w-full overflow-hidden rounded-sm bg-black shadow-2xl transition-all duration-300 ${
                isZoomed
                  ? "cursor-zoom-out"
                  : "cursor-zoom-in"
              }`}
              onClick={() => setIsZoomed((value) => !value)}
            >
              <img
                src={selectedMemory.image}
                alt={selectedMemory.caption}
                className={`block max-h-[72vh] max-w-[88vw] object-contain transition-transform duration-500 sm:max-w-[80vw] ${
                  isZoomed ? "scale-150" : "scale-100"
                }`}
                onError={(event) => {
                  event.currentTarget.src =
                    "/images/placeholder.svg";
                }}
              />
            </div>

            {/* Caption */}
            <div className="mt-5 max-w-xl text-center">
              <p className="font-serif text-xl italic text-white sm:text-2xl">
                {selectedMemory.caption}
              </p>

              <p className="mt-2 text-sm leading-6 text-white/65">
                {selectedMemory.description}
              </p>

              <p className="mt-3 text-xs tracking-widest text-white/40">
                {selectedIndex + 1} / {memories.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}