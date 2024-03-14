import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Depth({ coin }) {
  const { data, error, isLoading } = useSWR(
    `https://api.wazirx.com/sapi/v1/depth?symbol=${coin}&limit=20`,
    fetcher
  );

  if (error)
    return (
      <div className="bg-dark text-light min-h-screen p-5">
        <p>Market depth could not be fetched</p>
      </div>
    );
  if (isLoading)
    return <div className="bg-dark text-light min-h-screen p-5">Loading</div>;
  return (
    <div className="bg-dark text-light lg:w-1/2 pb-5">
      <h3 className="py-5 text-md font-medium">
        Order book <span className="text-gray text-sm font-normal"> (20) </span>
      </h3>
      <div className="flex px-5 py-2  bg-gray border border-b-0 border-gray rounded-t-lg text-sm">
        <div className="flex justify-between w-1/2 pr-2.5">
          <p>Volume</p>
          <p>Buy price</p>
        </div>
        <div className="flex justify-between w-1/2 pl-2.5">
          <p>Sell price</p>
          <p>Volume</p>
        </div>
      </div>
      <div className="flex bg-modalGray border border-gray rounded-b-lg text-sm font-light">
        <div className="border-r border-gray w-1/2 ">
          {data.bids.map((item) => (
            <div
              id="buy"
              key={item[0]}
              className="border-b border-gray pl-5 pr-2.5 py-1"
            >
              <div className="flex justify-between">
                <p>{item[1]}</p>
                <p className="font-normal text-green">{item[0]}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-1/2 ">
          {data.asks.map((item) => (
            <div
              id="sell"
              key={item[0]}
              className="border-b border-gray pr-5 pl-2.5 py-1"
            >
              <div className="flex justify-between">
                <p className="font-normal text-red">{item[0]}</p>
                <p>{item[1]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
