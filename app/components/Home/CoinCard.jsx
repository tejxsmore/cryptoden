import { FaRegStar } from "react-icons/fa";

export default function CoinCard({ symbol, asset, open, last, low, high }) {
  let INRupee = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });
  const change = ((last - open) / last) * 100;

  return (
    <div
      id="card"
      className="flex items-center justify-between py-5 mx-5 bg-dark text-light border-b-[0.5px] border-gray"
    >
      <div className="text-md font-medium flex items-center sm:w-1/4">
        <span className="text-sm mr-2.5">
          <FaRegStar />
        </span>
        <a href={`/coin/${symbol}`}>
          {asset.toUpperCase()}{" "}
          <span className="text-sm font-normal text-gray pl-1.5">/ INR</span>
        </a>
      </div>

      <a href={`/coin/${symbol}`} className="hidden md:block sm:w-1/4">
        {INRupee.format(low)}
      </a>
      <a href={`/coin/${symbol}`} className="hidden md:block sm:w-1/4">
        {INRupee.format(high)}
      </a>

      <a href={`/coin/${symbol}`} className="flex">
        <p className="mr-5 text-md font-medium">{INRupee.format(open)}</p>
        <button
          className={`${
            change > 0 ? "bg-green" : "bg-red"
          } w-[55px] rounded-sm px-1 py-0.5 text-xs font-normal`}
        >
          {change.toFixed(2)} %
        </button>
      </a>
    </div>
  );
}
