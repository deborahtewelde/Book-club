import Image from "next/image";
import { Face } from "../data/faces_interface";

interface FaceRowProps {
  faces: Face[];
}

export default function PresentFace({ faces }: FaceRowProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
      {faces.map((face, index) => (
        <div key={index} className="flex flex-col items-center">
          <Image
            src={face.image}
            alt={face.title || "Face image"}
            width={150}
            height={150}
            className="cursor-pointer hover:scale-105 hover:brightness-110 transition-transform duration-200"
          />
          <p className="mt-2 text-center">{face.title}</p>
        </div>
      ))}
    </div>
  );
}
