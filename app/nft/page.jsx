import Link from "next/link";
import Art from "../components/elements/Art";
import Gaming from "../components/elements/Gaming";
import Photography from "../components/elements/Photography";

export default function Home() {
  return (
    <div>
      <Link href="/nft/art">
        <h3 className="p-5 bg-dark text-light text-md font-medium">
          Trending in Art
        </h3>
      </Link>
      <Art />
      <Link href="/nft/game">
        <h3 className="p-5 bg-dark text-light text-md font-medium">
          Trending in Gaming
        </h3>
      </Link>
      <Gaming />
      <Link href="/nft/photo">
        <h3 className="p-5 bg-dark text-light text-md font-medium">
          Trending in Photography
        </h3>
      </Link>
      <Photography />
    </div>
  );
}
