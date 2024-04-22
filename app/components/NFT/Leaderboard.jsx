/* eslint-disable @next/next/no-img-element */
import { artStore } from "../../../public/store/artStore";
import { gameStore } from "../../../public/store/gameStore";
import { photoStore } from "../../../public/store/photoStore";

export default function Leaderboard({ item }) {
  const { data } =
    item === "art" ? artStore : item === "game" ? gameStore : photoStore;
  return (
    <div className="bg-dark px-5 py-2.5">
      {data.slice(0, 5).map((dataItem, acc) => (
        <a key={dataItem.id} href={`/nft/${item}/${dataItem.id - 1}`}>
          <div className="flex items-center bg-modalGray w-full rounded-lg mb-2.5 md:justify-between">
            <div className="flex items-center w-full md:w-1/2 ">
              {/* <p className="ml-2.5 p-2.5 bg-dark w-10 text-center rounded-md text-sm font-normal">
                {acc + 1}
              </p> */}
              <img
                src={dataItem.img}
                alt="nft"
                className="w-10 ml-2.5 rounded-md"
              />
              <h3 className="p-5">{dataItem.title}</h3>
            </div>
            <div className="hidden md:block ">
              <p className="p-5">
                {dataItem.vol} ETH{" "}
                <span className="bg-dark px-2.5 p-1.5 ml-2.5 text-xs rounded-md">
                  Volume
                </span>
              </p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
