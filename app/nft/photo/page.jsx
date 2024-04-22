import Link from "next/link";
import Leaderboard from "../../components/NFT/Leaderboard";
import Photography from "../../components/NFT/Photography";

export default function PhotoComp() {
  return (
    <div className="pt-5 min-h-screen bg-dark">
      <Leaderboard item="photo" />
      <Link
        href="/nft/photo"
        className="p-5 bg-dark text-light text-md font-medium"
      >
        Trending in Photography
      </Link>
      <Photography />
    </div>
  );
}
