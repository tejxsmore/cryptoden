/* eslint-disable @next/next/no-img-element */
"use client";
const ethers = require("ethers");

import Link from "next/link";
import useSWR from "swr";
import { usePathname } from "next/navigation";
import { FaEthereum } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers/react";

import { itemstore } from "@/public/store/itemstore";
import { artStore } from "@/public/store/artStore";
import { gameStore } from "@/public/store/gameStore";
import { photoStore } from "@/public/store/photoStore";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Item() {
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const { data } = useSWR(
    `https://api.wazirx.com/sapi/v1/ticker/24hr?symbol=ethinr`,
    fetcher
  );

  const path = usePathname();
  const id = path.slice(10) - 1001;
  const img = itemstore[id].img;
  const price = itemstore[id].price;
  const inr = data ? price * Number(data.openPrice) : price * 219815;
  const pid = itemstore[id].pid - 1;
  let title = "";
  let link = "";
  let description = "";

  let INRupee = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

  if (id < 95) {
    title = artStore.data[pid].title;
    description = artStore.data[pid].description;
    link = `/nft/art/${pid}`;
  } else if (id < 191) {
    title = gameStore.data[pid].title;
    description = gameStore.data[pid].description;
    link = `/nft/game/${pid}`;
  } else {
    title = photoStore.data[pid].title;
    description = photoStore.data[pid].description;
    link = `/nft/photo/${pid}`;
  }

  const handleBuy = async () => {
    console.log(
      `From : ${address}, \nTo : "0xC588503530301B75a9E4B6F787C62dF943130767", \namount: ${price} ETH`
    );

    try {
      let signer = null;
      let provider;

      if (window.ethereum == null) {
        console.log("MetaMask not installed; using read-only defaults");
        provider = ethers.getDefaultProvider();
      } else {
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
      }

      await window.ethereum.request({ method: "eth_requestAccounts" });
      const transactionResponse = await signer.sendTransaction({
        to: "0xC588503530301B75a9E4B6F787C62dF943130767",
        value: ethers.parseEther(price.toString()),
      });
      toast.success(`Transaction Successful`);
    } catch (err) {
      if (!isConnected) {
        toast.error("Wallet not connected");
      } else {
        toast.error("Insufficient funds");
      }
      console.log(`${err}`);
    }
  };

  return (
    <div>
      <div className="p-5 bg-dark text-white text-2xl sm:py-12">
        <div className="sm:flex">
          <div className="sm:mr-10 rounded-xl sm:w-1/2 sm:mb-14">
            <div className="bg-modalGray  rounded-t-xl p-2.5">
              <FaEthereum className="text-light text-xl" />
            </div>

            <img src={img} alt={price} className="rounded-b-xl" />
          </div>
          <div className="w-full">
            <Link href={link}>
              <div className="py-10 sm:pt-0 font-bold text-4xl">
                {title} #{id + 1001}
              </div>
            </Link>
            <div className="sm:flex w-full sm:space-x-5 font-bold">
              <div className="bg-modalGray p-5 rounded-xl sm:w-1/2 w-full sm:mb-0 mb-4">
                {price} ETH
              </div>
              <div className="bg-modalGray p-5 rounded-xl sm:w-1/2 w-full">
                {INRupee.format(Number(inr).toFixed(2))}
              </div>
            </div>
            <div
              onClick={handleBuy}
              className="bg-blue hover:opacity-90 p-5 rounded-xl mt-5 text-center font-bold cursor-pointer"
            >
              Buy Now
            </div>
            <div className="text-sm font-normal">
              <Toaster position="top-center" reverseOrder={false} />
            </div>
            <div className="text-white py-10 rounded-xl font-md text-lg">
              <p className="pb-4">By {title},</p>
              <p className="text-justify">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
