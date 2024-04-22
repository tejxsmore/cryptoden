import Link from "next/link";
import Leaderboard from "../../components/NFT/Leaderboard";
import Art from "../../components/NFT/Art";

export default function ArtComp() {
  return (
    <div className="pt-5 min-h-screen bg-dark">
      <Leaderboard item="art" />
      <Link
        href="/nft/art"
        className="p-5 bg-dark text-light text-md font-medium"
      >
        Trending in Art
      </Link>
      <Art />
    </div>
  );
}
