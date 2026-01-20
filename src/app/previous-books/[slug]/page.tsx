import Image from "next/image";
import Link from "next/link";

export default function BookDetailPage() {
  const book = {
    title: "Naiv. Super.",
    author: "Erlend Loe",
    image: "/naiv_super.jpg",
    summary:
      "En morsom og eksistensiell roman om en ung mann som mister trua på alt og prøver å finne mening.",
  };

  return (
    <div className="p-6 max-w-3xl mx-auto text-center">
      <Link href="/previous-books" className="text-blue-600 hover:underline">
        ← Tilbake
      </Link>

      <Image
        src={book.image}
        alt={book.title}
        width={250}
        height={350}
        className="mx-auto rounded-lg shadow-lg my-6"
      />
      <h1 className="text-3xl font-bold">{book.title}</h1>
      <p className="text-gray-700 mb-4">{book.author}</p>
      <p className="text-gray-600 italic">{book.summary}</p>
    </div>
  );
}

