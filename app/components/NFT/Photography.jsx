import { photoStore } from "../../../public/store/photoStore";
import BaseCard from "./BaseCard";

export default function Photography() {
  const { data } = photoStore;
  return (
    <div className="p-5 bg-dark">
      <div
        className="flex space-x-5 w-auto overflow-x-auto
      overflow-y-hidden"
      >
        {data.map((photo) => (
          <BaseCard
            key={photo.id}
            id={photo.id}
            type={photo.type}
            title={photo.title}
            img={photo.img}
            floor={photo.floor}
            vol={photo.vol}
            sub={photo.subitems}
          />
        ))}
      </div>
    </div>
  );
}
