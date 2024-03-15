import CoinCard from "./CoinCard";

export default async function Ticker() {
  try {
    const res = await fetch("https://api.wazirx.com/sapi/v1/tickers/24hr", {
      cache: "no-store",
      headers: {
        api_key: process.env.API_KEY,
        secret_key: process.env.SECRET_KEY,
      },
    });
    if (!res.ok) {
      throw new Error("Data fetch unsuccessful");
    }
    const data = await res.json();
    return (
      <div className="bg-dark">
        <div className="px-5 text-md font-normal">
          <div className="flex justify-between py-5">
            <p className="">
              Assets{" "}
              <span className="text-sm font-normal text-gray">
                ({data.length})
              </span>
            </p>
            <p className="hidden md:block">24h Low</p>
            <p className="hidden md:block">24h High</p>
            <p className="pr-2 pl-10">
              Price{" "}
              <span className="text-sm font-normal text-gray pl-4">Change</span>
            </p>
          </div>
        </div>
        <div className="">
          {data.map((coin, i, data) => (
            <CoinCard
              key={coin.symbol}
              len={data.length}
              asset={coin.baseAsset}
              symbol={coin.symbol}
              open={coin.openPrice}
              last={coin.lastPrice}
              low={coin.lowPrice}
              high={coin.highPrice}
            />
          ))}
        </div>
      </div>
    );
  } catch (err) {
    console.error(`Error : ${err}`);
  }
}
