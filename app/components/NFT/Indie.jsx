/* eslint-disable @next/next/no-img-element */
import { sql } from "@vercel/postgres";
import Link from "next/link";

export default async function Indie() {
  const result = await sql`SELECT * FROM mint`;
  const nft = result.rows;
  console.log(nft);

  return (
    <div className="m-5 space-x-5 overflow-x-auto overflow-y-hidden whitespace-nowrap">
      {nft.map(({ id, title, img, address, price, description }) => (
        <Link
          key={id + 2000}
          href={`/nft/indie/${id + 2000}`}
          className="inline-block w-56 sm:w-80"
        >
          <div className="bg-modalGray rounded-xl text-white">
            <img src={img} alt={price} className="rounded-t-xl w-56 sm:w-80 " />
            <div className="flex justify-between items-center py-1">
              <h3 className="p-2.5 text-md font-medium">{price} ETH</h3>
              <button className="py-0.25 px-2.5 mr-2.5 border-whiter border-2 rounded-lg text-sm font-normal">
                #{id + 2000}
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
