"use client";
import useSWR from "swr";
import { usePathname } from "next/navigation";

import Chart from "../../components/Coin/Chart";
import Info from "../../components/Coin/Info";
import Converter from "../../components/Coin/Converter";
import Depth from "../../components/Coin/Depth";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App() {
  const path = usePathname();
  const coin = path.slice(6);

  const { data, error, isLoading } = useSWR(
    `https://api.wazirx.com/sapi/v1/ticker/24hr?symbol=${coin}`,
    fetcher
  );

  if (error)
    return (
      <div className="bg-dark text-light flex justify-center items-center min-h-screen p-5">
        <a
          href="/"
          className="px-5 py-2 bg-modalGray border border-red rounded-lg"
        >
          Something went wrong!
        </a>
      </div>
    );
  if (isLoading)
    return (
      <div className="bg-dark text-light flex justify-center items-center min-h-screen p-5">
        <div className="px-5 py-2 bg-modalGray border border-gray rounded-lg">
          Loading...
        </div>
      </div>
    );
  return (
    <div className="bg-dark text-light p-5 pb-0 min-h-screen">
      <div className="flex justify-between border border-gray bg-modalGray px-4 py-2 rounded-lg">
        <p className="flex flex-col text-sm font-normal text-gray text-center">
          Volume ({data.baseAsset.toUpperCase()})
          <span className="text-md font-medium text-light pt-1">
            {Number(data.volume) > 10000
              ? `${Number(Number(data.volume) / 1000).toFixed(1)}K`
              : Number(data.volume).toFixed(1)}
          </span>
        </p>
        <p className="flex flex-col text-sm font-normal text-gray text-center">
          24h Low (INR)
          <span className="text-md font-medium text-light pt-1">
            {Number(data.lowPrice) > 10000
              ? `${Number(Number(data.lowPrice) / 1000).toFixed(1)}K`
              : Number(data.lowPrice).toFixed(1)}
          </span>
        </p>
        <p className="flex flex-col text-sm font-normal text-gray text-center">
          24h High (INR)
          <span className="text-md font-medium text-light pt-1">
            {data.highPrice > 10000
              ? `${Number(Number(data.highPrice) / 1000).toFixed(1)}K`
              : Number(data.highPrice).toFixed(1)}
          </span>
        </p>
      </div>
      <Info coin={data.baseAsset} open={data.openPrice} last={data.lastPrice} />
      <Chart coin={coin} />
      <div className="lg:flex lg:space-x-5">
        <Converter coin={data.baseAsset} price={data.openPrice} />
        <Depth coin={coin} />
      </div>
      {/* <div className="sticky bottom-0 flex bg-dark space-x-5 py-5">
        <button className="bg-green w-1/2 rounded-lg py-2.5">Buy</button>
        <button className="bg-red w-1/2 rounded-lg py-2.5">Sell</button>
      </div> */}
    </div>
  );
}
