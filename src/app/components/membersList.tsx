import { faces } from "../data/faces";
import PresentFace from "./PresentFace";

export default function MembersList() {
  console.log("faces:", faces);
  return (
    <div>
      <PresentFace faces={faces} />
    </div>
  );
}
