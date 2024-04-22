"use client";
import { usePathname } from "next/navigation";
import { photoStore } from "../../../../public/store/photoStore";
import Card from "../../../components/NFT/Card";

export default function PhotoId() {
  const path = usePathname();
  const id = Number(path.slice(11));
  const photopiece = photoStore.data[id].subitems;

  return (
    <div className="p-5 pb-0 bg-dark flex flex-wrap justify-center min-h-screen">
      {photopiece.map((photo) => (
        <Card
          key={photo.id}
          id={photo.id}
          pid={photo.pid}
          price={photo.price}
          img={photo.img}
        />
      ))}
    </div>
  );
}
