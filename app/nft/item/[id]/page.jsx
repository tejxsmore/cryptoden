/* eslint-disable @next/next/no-img-element */
"use client";
const ethers = require("ethers");

import Link from "next/link";
import useSWR from "swr";
import { usePathname } from "next/navigation";
import { FaEthereum } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

import { itemstore } from "../../../../public/store/itemstore";
import { artStore } from "../../../../public/store/artStore";
import { gameStore } from "../../../../public/store/gameStore";
import { photoStore } from "../../../../public/store/photoStore";
import { useState } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Item() {
  const { address, isConnected } = useWeb3ModalAccount();
  const [time, setTime] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
  });
  const { data } = useSWR(
    `https://api.wazirx.com/sapi/v1/ticker/24hr?symbol=ethinr`,
    fetcher
  );

  const path = usePathname();
  const id = path.slice(10) - 1001;

  const img = itemstore[id].img;
  const price = itemstore[id].price;
  const pid = itemstore[id].pid - 1;

  let title = "";
  let link = "";
  let description = "";
  let subitems = "";

  const inr = data ? price * Number(data.openPrice) : price * 219815;

  let INRupee = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

  if (id <= 95) {
    title = artStore.data[pid].title;
    description = artStore.data[pid].description;
    link = `/nft/art/${pid}`;
    subitems = artStore.data[pid].subitems;
  } else if (id <= 191) {
    title = gameStore.data[pid].title;
    description = gameStore.data[pid].description;
    link = `/nft/game/${pid}`;
    subitems = gameStore.data[pid].subitems;
  } else {
    title = photoStore.data[pid].title;
    description = photoStore.data[pid].description;
    link = `/nft/photo/${pid}`;
    subitems = photoStore.data[pid].subitems;
  }

  let countDownDate = new Date("Jan 5, 2103 20:00:00").getTime();
  var x = setInterval(function () {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setTime({
      seconds: seconds,
      minutes: minutes,
      hours: hours,
    });

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);

  const handleBuy = async () => {
    if (!isConnected) {
      toast.error("Wallet not connected");
      console.log("Wallet not connected");
      return;
    }

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

      // Insufficient balance
      const wei = price * 1000000;
      const weiPrice = BigInt(wei) * 1000000000000n;
      const balance = await provider.getBalance(address);
      if (isConnected && balance < weiPrice) {
        toast.error("Insufficient funds");
        console.log("Insufficient funds");
        return;
      }

      await window.ethereum.request({ method: "eth_requestAccounts" });
      const transactionResponse = await signer.sendTransaction({
        to: "0xC588503530301B75a9E4B6F787C62dF943130767",
        value: ethers.parseEther(price.toString()),
      });

      const nft = { id, pid, img, price };
      const response = await fetch("/api/owned", {
        method: "POST",
        body: JSON.stringify(nft),
        headers: {
          "content-type": "application/json",
        },
      });
      console.log(response);

      console.log(`Title : ${title} #${id + 1001}`);
      console.log(`Successfully bought an NFT worth ${price} ETH`);
      toast.success(`Transaction Successful`);
    } catch (err) {
      toast.error("Transaction rejected");
      console.log(`${err}`);
    }
  };

  const makeOffer = async () => {
    console.log("Offer made");
  };

  return (
    <div>
      <div className="p-5 bg-dark text-light pt-5">
        <div className="md:flex">
          <div className="md:mr-5 rounded-2xl md:w-1/3">
            <div className="bg-modalGray  rounded-t-2xl p-2.5">
              <FaEthereum className="text-light text-xl" />
            </div>

            <img src={img} alt={price} className="rounded-b-2xl w-full" />
          </div>
          <div className="w-full md:w-2/3">
            <Link href={link}>
              <div className="my-10 md:mt-0 font-bold text-3xl">
                {title} #{id + 1001}
              </div>
            </Link>
            <div className="bg-modalGray border border-b-0 border-gray rounded-t-2xl px-5 py-5">
              <p className="text-md">
                Sale ends in{" "}
                <span className="pl-2.5 text-xl font-bold">{time.hours}</span> h{" "}
                <span className="text-xl font-bold">{time.minutes}</span> m{" "}
                <span className="text-xl font-bold">{time.seconds}</span> s
              </p>
            </div>
            <div className="bg-modalGray p-5 border border-gray rounded-b-2xl">
              <p className="pb-5 text-md ">Current price</p>
              <div className="sm:flex w-full sm:space-x-5 text-2xl font-bold">
                <div className="bg-dark p-5 rounded-xl sm:w-1/2 w-full sm:mb-0 mb-5">
                  {price} ETH
                </div>
                <div className="bg-dark p-5 rounded-xl sm:w-1/2 w-full">
                  {INRupee.format(Number(inr).toFixed(2))}
                </div>
              </div>
              <div className="mt-5 w-full text-2xl font-bold">
                <div
                  onClick={handleBuy}
                  className="bg-blue hover:opacity-90 p-5 rounded-xl text-center font-bold cursor-pointer w-full "
                >
                  Buy Now
                </div>
                {/* <div
                  onClick={makeOffer}
                  className="bg-blue hover:opacity-90 p-5 rounded-xl text-center font-bold cursor-pointer sm:w-1/2 w-full sm:mb-0 mb-5"
                >
                  Make an offer
                </div> */}
              </div>
            </div>
            <Toaster
              position="top-center"
              reverseOrder={false}
              toastOptions={{
                // Define default options
                className: "text-sm",
                duration: 5000,
                style: {
                  background: "#191919",
                  color: "#F4F4F4",
                },
              }}
            />
            <div className="text-light mt-5 p-5 bg-modalGray border border-gray rounded-2xl text-md">
              <p className="pb-4">By {title},</p>
              <p className="text-justify text-md">{description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 pt-0 bg-dark">
        <div className="bg-dark border border-gray rounded-2xl">
          <p className="p-5 bg-modalGray border-b border-gray rounded-t-2xl">
            More from this collection
          </p>
          <div className="m-5 space-x-5 overflow-x-auto overflow-y-hidden whitespace-nowrap">
            {subitems.map((nft) => (
              <a
                href={`/nft/item/${nft.id}`}
                key={nft.id}
                className="inline-block w-56 sm:w-80 bg-modalGray rounded-xl"
              >
                <img src={nft.img} alt={nft.id} className="rounded-t-xl" />
                <div
                  className="py-1 flex justify-between items-center
                 rounded-b-xl text-light"
                >
                  <p className="p-2.5 text-md font-medium">{nft.price} ETH</p>
                  <button className="py-0.25 px-2.5 mr-2.5 border-whiter border-2 rounded-lg text-sm font-normal">
                    #{nft.id}
                  </button>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  whitespace - nowrap;
}
