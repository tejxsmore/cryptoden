import Link from "next/link";
import Leaderboard from "../../components/elements/Leaderboard";
import Gaming from "../../components/elements/Gaming";

export default function ArtComp() {
  return (
    <div className="pt-5 min-h-screen bg-dark">
      <Leaderboard item="game" />
      <Link
        href="/nft/game"
        className="p-5 bg-dark text-light text-md font-medium"
      >
        Trending in Gaming
      </Link>
      <Gaming />
    </div>
  );
}
