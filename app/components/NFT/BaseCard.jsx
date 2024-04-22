/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function ArtCard({ id, type, title, img, floor, vol }) {
  return (
    <Link href={`/nft/${type}/${id - 1}`}>
      <div className="rounded-xl bg-modalGray text-white w-56 h-auto sm:w-80">
        <img src={img} alt={title} className="rounded-t-xl sm:h-80 w-full" />
        <div className="flex items-center">
          <h2 className="p-2.5 text-lg font-semibold">{title}</h2>
          <img src="/img/check.png" alt="check" className="w-4 h-4" />
        </div>
        <div className="flex p-2.5 pt-0 justify-between pb-2">
          <p className="text-md font-medium">
            <span className="block text-sm font-normal text-gray">Floor</span>
            {floor} ETH
          </p>
          <p className="text-md font-medium">
            <span className="block text-sm font-normal text-gray text-right">
              Volume
            </span>
            {vol} ETH
          </p>
        </div>
      </div>
    </Link>
  );
}
