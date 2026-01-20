"use client";

import Image from "next/image";
import CurrentBook from "./components/currentBook";

export default function HomePage() {
  const currentBook = {
    title: "Noe tapt og noe vunnet",
    author: "Tara Westover",
    pubYear: 2019,
    image: "/Noe_tapt.svg",
  };

  return (
    <div className="p-6">
      {/* Header-bilde */}
      <div className="w-full relative mb-8">
        <Image
          src="/forside_noe_tapt.svg"
          alt="Velkommen til Big Books Big Booties"
          width={1820}
          height={500}
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
        <h1 className="absolute inset-0 flex items-center justify-center text-4xl sm:text-6xl font-bold text-white drop-shadow-lg text-center">
          Velkommen til Big Books, Big Booties
        </h1>
      </div>

      {/* Månedens bok */}
      <h2 className="text-5xl font-bold mb-6 text-center">Månedens bok</h2>
      <div className="flex justify-center mb-8">
        <CurrentBook {...currentBook} />
      </div>

      {/* Lenke til tidligere bøker */}
      <div className="text-center mt-8">
        <a
          href="/blog"
          className="text-blue-600 hover:text-blue-800 underline text-lg"
        >
          Se tidligere bøker →
        </a>
      </div>
    </div>
  );
}
