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
        <h1 className="p-5 items-center text-md text-light font-medium">
          Market{" "}
          <span className="px-5 text-sm font-normal">{data.length} assets</span>
        </h1>
        <div className="pb-5">
          {data.slice(0, 20).map((coin, i, data) => (
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
