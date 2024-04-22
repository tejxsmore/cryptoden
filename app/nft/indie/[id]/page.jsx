/* eslint-disable @next/next/no-img-element */
"use client";
const ethers = require("ethers");
import { useState } from "react";

import useSWR from "swr";
import { usePathname } from "next/navigation";
import { FaEthereum } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Indie() {
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
  const id = path.slice(11) - 2001;

  const { data: indie } = useSWR("/api/indie", fetcher);

  const img = indie?.rows[id]?.img;
  const pid = 11;
  const recieverAddress = indie?.rows[id]?.address;
  const price = indie?.rows[id]?.price;
  const title = indie?.rows[id]?.title;
  const description = indie?.rows[id]?.description;

  const inr = data ? price * Number(data.openPrice) : price * 219815;
  let INRupee = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

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
        to: recieverAddress,
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
            <h2>
              <div className="my-10 md:mt-0 font-bold text-3xl">
                {title} #{id + 2001}
              </div>
            </h2>
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
    </div>
  );
  whitespace - nowrap;
}
