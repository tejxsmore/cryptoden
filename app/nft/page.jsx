import Link from "next/link";
import Art from "../components/NFT/Art";
import Gaming from "../components/NFT/Gaming";
import Photography from "../components/NFT/Photography";
import Indie from "../components/NFT/Indie";

export default function Home() {
  return (
    <div className="bg-dark min-h-screen pt-5">
      <Link
        href="/nft/art"
        className="p-5 bg-dark text-light text-md font-medium"
      >
        Art
      </Link>
      <Art />
      <Link
        href="/nft/game"
        className="p-5 bg-dark text-light text-md font-medium"
      >
        Gaming
      </Link>
      <Gaming />
      <Link
        href="/nft/photo"
        className="p-5 bg-dark text-light text-md font-medium"
      >
        Photography
      </Link>
      <Photography />
      <p className="p-5 bg-dark text-light text-md font-medium">Indie</p>
      <Indie />
    </div>
  );
}
