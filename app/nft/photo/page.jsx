import Link from "next/link";
import Photography from "../../components/elements/Photography";

export default function ArtComp() {
  return (
    <div className="sm:h-screen bg-slate-900">
      <Link href="/nft/photo">
        <h3 className="p-5 bg-dark text-light text-md font-medium">
          Trending in Photo
        </h3>
      </Link>
      <Photography />
    </div>
  );
}
