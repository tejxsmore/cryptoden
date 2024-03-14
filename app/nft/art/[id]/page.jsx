"use client";
import { usePathname } from "next/navigation";
import { artStore } from "../../../../public/store/artStore";
import Card from "../../../components/NFT/Card";

export default function ArtId() {
  const path = usePathname();
  const id = Number(path.slice(9));
  const artpiece = artStore.data[id].subitems;

  return (
    <div>
      <div className="p-5 pb-0 bg-dark flex flex-wrap justify-center min-h-screen">
        {artpiece.map((art) => (
          <Card
            key={art.id}
            id={art.id}
            pid={art.pid}
            price={art.price}
            img={art.img}
          />
        ))}
      </div>
    </div>
  );
}
