import Image from "next/image";

export interface CurrentBookProps {
  title: string;
  author: string;
  pubYear: number;
  image: string;
}

export default function CurrentBook({
  title,
  author,
  pubYear,
  image,
}: CurrentBookProps) {
  return (
    <div>
      <div className=" rounded-lg shadow-md max-w-sm px-8">
        {image && (
          <Image
            src={image}
            alt={`Omslag til ${title}`}
            width={200}
            height={300}
            className="mb-4 rounded"
          />
        )}
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600">
          {author} ({pubYear})
        </p>
      </div>
    </div>
  );
}
