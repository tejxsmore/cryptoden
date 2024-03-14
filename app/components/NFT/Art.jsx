import { artStore } from "../../../public/store/artStore";
import BaseCard from "./BaseCard";

export default function Art() {
  const { data } = artStore;
  return (
    <div className="p-5 bg-dark">
      <div className="flex space-x-5 w-auto overflow-x-auto">
        {data.map((art) => (
          <BaseCard
            key={art.id}
            id={art.id}
            type={art.type}
            title={art.title}
            img={art.img}
            floor={art.floor}
            vol={art.vol}
            sub={art.subitems}
          />
        ))}
      </div>
    </div>
  );
}
