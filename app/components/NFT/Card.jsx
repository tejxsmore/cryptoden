import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function Card({ id, pid, price, img }) {
  return (
    <Link
      href={`/nft/item/${id}`}
      className="mb-5 sm:mx-2.5 w-full sm:w-[285px] lg:w-[340px]"
    >
      <div className="bg-modalGray rounded-xl text-white">
        <img src={img} alt={price} className="rounded-t-xl w-full" />
        <div className="flex justify-between items-center py-1">
          <h3 className="p-2.5 text-md font-medium">{price} ETH</h3>
          <button className="py-0.25 px-2.5 mr-2.5 border-whiter border-2 rounded-lg text-sm font-normal">
            #{id}
          </button>
        </div>
      </div>
    </Link>
  );
}
