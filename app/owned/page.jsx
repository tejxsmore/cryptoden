import { sql } from "@vercel/postgres";
import Card from "../components/NFT/Card";

export default async function Owned() {
  const result = await sql`SELECT * FROM owned`;
  const nft = result.rows;
  console.log(nft);

  return (
    <div>
      {nft.length >= 1 ? (
        <div className="p-5 pb-0 bg-dark flex flex-wrap justify-center min-h-screen">
          {nft?.map((item) => (
            <Card
              key={item.id}
              id={Number(item.id) + 1001}
              pid={item.pid}
              img={item.img}
              price={item.price}
            />
          ))}
        </div>
      ) : (
        <div className="bg-dark text-light flex justify-center items-center min-h-screen p-5">
          <a
            href="/nft"
            className="px-5 py-2 bg-modalGray border border-gray rounded-lg"
          >
            {`Buy your first NFT right now`}
          </a>
        </div>
      )}
    </div>
  );
}
