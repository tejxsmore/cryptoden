import { sql } from "@vercel/postgres";
import { currentUser } from "@clerk/nextjs";
import Card from "../components/NFT/Card";

export default async function Owned() {
  const user = await currentUser();
  const userId = user?.id;

  const result = await sql`SELECT * FROM owned WHERE Userid=${userId}`;

  const nft = result.rows;
  console.log(nft);

  return (
    <div>
      {nft.length >= 1 ? (
        <div className="p-5 pb-0 bg-dark flex flex-wrap justify-center min-h-screen">
          {nft?.map((item) => (
            <Card
              key={item.id}
              id={item.id}
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
