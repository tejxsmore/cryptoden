import Link from "next/link";
import Art from "../components/elements/Art";
import Gaming from "../components/elements/Gaming";
import Photography from "../components/elements/Photography";

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
    </div>
  );
}
