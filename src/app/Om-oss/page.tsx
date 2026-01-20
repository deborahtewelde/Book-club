// app/blog/Om_oss.tsx
import MembersList from "../components/membersList";
import PresentFace from "../components/PresentFace";

export default function omOss() {
  return (
    <div>
      <h1 className="p-5">
        Vi er en nyoppstartet bokklubb! Nedenfor finner du medlemmene våre.
      </h1>
      {/*<h2 className="p-4">Her er våre me</h2>*/}
      <MembersList />
    </div>
  );
}
