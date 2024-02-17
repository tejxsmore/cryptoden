import Link from "next/link";
import Gaming from "../../components/elements/Gaming";

export default function ArtComp() {
  return (
    <div className="sm:h-screen bg-slate-900">
      <Link href="/nft/game">
        <h3 className="p-5 bg-dark text-light text-md font-medium">
          Trending in Gaming
        </h3>
      </Link>
      <Gaming />
    </div>
  );
}
