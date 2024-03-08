import { gameStore } from "../../../public/store/gameStore";
import BaseCard from "./BaseCard";

export default function Gaming() {
  const { data } = gameStore;
  return (
    <div className="p-5 bg-dark">
      <div className="flex space-x-5 w-auto overflow-x-auto">
        {data.map((game) => (
          <BaseCard
            key={game.id}
            id={game.id}
            type={game.type}
            title={game.title}
            img={game.img}
            floor={game.floor}
            vol={game.vol}
            sub={game.subitems}
          />
        ))}
      </div>
    </div>
  );
}
