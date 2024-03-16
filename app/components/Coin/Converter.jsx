import { MdOutlineSwapVert } from "react-icons/md";
import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers/react";
import { LuExternalLink } from "react-icons/lu";

export default function Converter({ coin, price }) {
  const { address, isConnected } = useWeb3ModalAccount();

  const handleSubmit = (e) => {
    e.preventDefault();
    const number = document.getElementById("number");
    const ogPrice = (Number(number.value) * price) / 5767264;
    document.getElementById("state").value = ogPrice.toFixed(3);
  };

  const { open } = useWeb3Modal();
  return (
    <div className="lg:w-1/2">
      <h2 className="py-5 text-md font-medium">Converter</h2>

      <form
        onSubmit={handleSubmit}
        className="p-5 border border-gray bg-modalGray rounded-lg"
      >
        <div className="flex space-x-5">
          <input
            type="number"
            id="number"
            className="w-4/5 p-2 font-semibold border border-gray bg-dark text-light rounded-lg focus:outline-none"
          />
          <button className="border border-gray bg-dark text-white w-1/5 rounded-lg">
            {coin.toUpperCase()}
          </button>
        </div>
        <div className="w-full text-center py-5">
          <button
            type="submit"
            value="submit"
            className="text-2xl p-1 bg-dark border border-gray rounded-full"
          >
            <MdOutlineSwapVert />
          </button>
        </div>
        <div className="flex space-x-5">
          <input
            type="number"
            id="state"
            className="w-4/5 p-2 font-semibold border border-gray bg-dark text-light rounded-lg focus:outline-none"
          />
          <button className="border border-gray bg-dark text-white w-1/5 rounded-lg">
            BTC
          </button>
        </div>
        <div className="pt-5">
          <button
            className={`border border-blue text-white w-full p-2 rounded-lg ${
              isConnected
                ? "bg-blue"
                : "hover:bg-blue hover:border-blue bg-gray border-gray"
            }`}
            onClick={() => open()}
          >
            {isConnected
              ? `Wallet connected 🎉 (${address.slice(0, 7)}...)`
              : "Connect wallet"}
          </button>
        </div>
      </form>
      <a
        href="/news"
        className="bg-modalGray border border-gray p-2 w-full rounded-lg mt-5 flex items-center justify-center"
      >
        Crypto News
        <span className="font-light ml-2">
          <LuExternalLink />
        </span>
      </a>
    </div>
  );
}
