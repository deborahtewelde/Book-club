"use client";

import Image from "next/image";
import Link from "next/link";

const books = [
  {
    title: "Kun til navlen",
    author: "Linea Maja Ernst",
    pubYear: 2024,
    image: "/kun_til_navlen.svg",
    slug: "kun_til_navlen",
  },
  {
      title: "Naiv. Super.",
    author: "Erlend Loe",
    pubYear: 1996,
    image: "/naiv_super.jpg",
    slug: "naiv-super", }
];

export default function PreviousBooksPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Tidligere bøker</h1>
      <p className="text-center mb-8 text-gray-600">
        Trykk på en bok for å se hva medlemmene syntes!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book) => (
          <Link
            key={book.title}
            href={`/previous-books/${book.slug}`}
            className="flex flex-col items-center bg-white rounded-2xl shadow-lg p-4 hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={book.image}
              alt={book.title}
              width={200}
              height={300}
              className="rounded-lg mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-center">{book.title}</h3>
            <p className="text-gray-700">{book.author}</p>
            <p className="text-gray-500 text-sm">{book.pubYear}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
