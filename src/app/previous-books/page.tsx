"use client";

import Image from "next/image";
import Link from "next/link";
import { faces } from "@/app/data/faces";

export default function PreviousBooksPage() {
  const ratings = [
    { name: "Victoria", score: 5 },
    { name: "Nora", score: 4 },
    { name: "Regine", score: 5 },
    { name: "Ida", score: 3 },
    { name: "Mari", score: 4 },
    { name: "Deborah", score: 4 },
    { name: "Thea", score: 5 },
    {name: "Sandra", score: 5}
  ];

  const avg = ratings.reduce((sum, r) => sum + r.score, 0) / ratings.length;

  const book = {
    title: "Naiv. Super.",
    author: "Erlend Loe",
    image: "/naiv_super.jpg",
    pubYear: 1996,
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6"> Tidligere bok</h1>

      {/* Bok */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-10 max-w-lg text-center">
        <Image
          src={book.image}
          alt={book.title}
          width={250}
          height={350}
          className="mx-auto rounded-lg mb-4 object-cover"
        />
        <h2 className="text-2xl font-semibold">{book.title}</h2>
        <p className="text-gray-700">{book.author}</p>
        <p className="text-gray-500 text-sm">{book.pubYear}</p>
      </div>

      {/* Medlemmer */}
      <h2 className="text-xl font-semibold mb-4">🍑 Medlemmenes vurdering</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
        {faces.map((face) => {
          const rating = ratings.find((r) => r.name === face.title)?.score ?? 0;
          return (
            <div
              key={face.title}
              className="flex flex-col items-center bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition"
            >
              <Image
                src={face.image}
                alt={face.title}
                width={80}
                height={80}
                className="rounded-full mb-2"
              />
              <p className="font-semibold">{face.title}</p>
              <p className="text-xl">
                {Array.from({ length: rating }, () => "🍑").join("") ||
                  "⚪️⚪️⚪️⚪️⚪️"}
              </p>
            </div>
          );
        })}
      </div>

      {/* Gjennomsnitt */}
      <div className="text-center mb-12">
        <p className="text-lg text-gray-700">Gjennomsnittlig rating:</p>
        <p className="text-3xl">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i}>{i < Math.round(avg) ? "🍑" : "⚪️"}</span>
          ))}
        </p>
        <p className="text-gray-600 mt-1">
          {avg.toFixed(1)} / 5 rumper i snitt
        </p>
      </div>

      <Link
        href="/previous-books/naiv-super"
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
      >
        Se mer →
      </Link>
    </div>
  );
}
