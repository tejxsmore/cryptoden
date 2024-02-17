import Art from "../../components/elements/Art";
import Link from "next/link";

export default function ArtComp() {
  return (
    <div className="sm:h-screen bg-slate-900">
      <Link href="/nft/art">
        <h3 className="p-5 bg-dark text-light text-md font-medium">
          Trending in Art
        </h3>
      </Link>
      <Art />
    </div>
  );
}
