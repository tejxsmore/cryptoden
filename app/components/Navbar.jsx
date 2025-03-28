"use client";
import { UserButton } from "@clerk/nextjs";
import { IoWallet } from "react-icons/io5";
import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers/react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

function Navbar() {
  const { open, close } = useWeb3Modal();
  const [openMenu, setOpenMenu] = useState(false);
  const { address, chainId, isConnected } = useWeb3ModalAccount();

  return (
    <div className="flex justify-between bg-dark text-light">
      <div className="p-5 flex items-center">
        <div
          onClick={() => setOpenMenu(!openMenu)}
          id="openModal"
          className="md:hidden mr-5 text-3xl cursor-pointer"
        >
          {!openMenu ? <IoMenu /> : <IoClose />}
        </div>
        <a href="/" className="text-2xl font-bold">
          Cryptoden
        </a>
      </div>

      {openMenu && (
        <div className="flex flex-col p-5 pt-7 absolute top-16 space-y-2.5 w-full bg-dark text-light text-md font-medium h-screen z-50">
          <a
            href="/nft"
            className="bg-modalGray p-5 rounded-xl border border-gray"
          >
            NFT
          </a>           <a
            href="/owned"
            className="bg-modalGray p-5 rounded-xl border border-gray"
          >
            Owned
          </a>
          <a
            href="/mint"
            className="bg-modalGray p-5 rounded-xl border border-gray"
          >
            Mint
          </a>
          <a
            href="/news"
            className="bg-modalGray p-5 rounded-xl border border-gray"
          >
            News
          </a>
          <a
            href="/help"
            className="bg-modalGray p-5 rounded-xl border border-gray"
          >
            Help
          </a>
        </div>
      )}

      <div className="hidden md:block p-5 space-x-10 text-lg font-medium">
        <a href="/nft">NFT</a>
        <a href="/owned">Owned</a>
        <a href="/mint">Mint</a>
        <a href="/news">News</a>
        <a href="/help">Help</a>
      </div>

      <div className="p-5 pt-0 flex items-center space-x-5">
        <button
          onClick={() => open()}
          className={`sm:ml-12 mt-5 text-2xl ${
            isConnected ? "text-blue" : "text-light"
          }`}
        >
          <IoWallet />
        </button>
        <button className="mt-2.5">
          <UserButton afterSignOutUrl="/" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
