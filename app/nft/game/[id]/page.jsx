"use client";
import { usePathname } from "next/navigation";
import { gameStore } from "../../../../public/store/gameStore";
import Card from "../../../components/NFT/Card";

export default function GameId() {
  const path = usePathname();
  const id = Number(path.slice(10));
  const gamepiece = gameStore.data[id].subitems;

  return (
    <div>
      <div className="p-5 pb-0 bg-dark flex flex-wrap justify-center min-h-screen">
        {gamepiece.map((game) => (
          <Card
            key={game.id}
            id={game.id}
            pid={game.pid}
            price={game.price}
            img={game.img}
          />
        ))}
      </div>
    </div>
  );
}
