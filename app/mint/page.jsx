/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { FaEthereum } from "react-icons/fa";
import Confetti from "react-confetti";

export default function Mint() {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [modal, setModal] = useState(false);
  const [submit, setSubmit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setModal(true);
  };

  const confirmSubmit = async (e) => {
    e.preventDefault();
    const nftData = { title, img, address, price, description };
    try {
      const response = await fetch("/api/mint", {
        method: "POST",
        body: JSON.stringify(nftData),
        headers: {
          "content-type": "application/json",
        },
      });
      console.log(response);

      if (response.ok) {
        console.log("NFT created successfully!");
      } else {
        console.error("Failed to create NFT.");
      }
    } catch (error) {
      console.error("Error creating NFT:", error);
    }
    setSubmit(true);
  };

  return (
    <div
      className={`${
        modal ? "mb-80 md:mb-0 lg:mb-0" : "mb-0"
      } p-5 bg-dark flex justify-center min-h-screen`}
    >
      {submit && (
        <Confetti
          numberOfPieces={500}
          recycle={false}
          className="w-full h-full"
        />
      )}
      <form
        onSubmit={handleSubmit}
        className={`${
          modal ? "opacity-0" : "opacity-1"
        } w-full sm:max-w-2xl p-5 bg-modalGray border border-gray rounded-xl h-full flex flex-col space-y-5`}
      >
        <h3 className="text-2xl font-bold">Create your NFT</h3>
        <input
          required
          id="title"
          type="text"
          minLength={5}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 rounded-lg text-light bg-dark border border-gray w-full focus:outline-none"
        />
        <input
          required
          id="img"
          type="text"
          minLength={5}
          placeholder="Image address"
          onChange={(e) => setImg(e.target.value)}
          className="p-2 rounded-lg text-light bg-dark border border-gray w-full focus:outline-none"
        />
        <input
          required
          id="address"
          type="text"
          minLength={5}
          placeholder="Crypto wallet address"
          onChange={(e) => setAddress(e.target.value)}
          className="p-2 rounded-lg text-light bg-dark border border-gray w-full focus:outline-none"
        />
        <input
          required
          type="number"
          id="price"
          placeholder="Price in ETH"
          onChange={(e) => setPrice(e.target.value)}
          className="p-2 rounded-lg text-light bg-dark border border-gray w-full focus:outline-none"
        />
        <textarea
          required
          type="text"
          id="description"
          minLength={20}
          columns="15"
          rows="8"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          className="w-full bg-dark border border-gray rounded-lg p-2 mb-4 focus:outline-none resize-none"
        />
        <button
          type="submit"
          className={`w-full text-md font-medium px-5 py-2 rounded-lg bg-gray hover:bg-blue`}
        >
          Submit
        </button>
      </form>
      {modal && (
        <div className="absolute p-5 pt-0 z-10">
          <form
            onSubmit={confirmSubmit}
            className="p-5 w-full sm:max-w-2xl rounded-xl text-light space-y-5 bg-dark border border-gray"
          >
            <h3 className="text-2xl font-bold">Your NFT would look like</h3>
            <div className="sm:flex sm:space-x-5 space-y-5 sm:space-y-0">
              <div className="sm:w-1/2">
                <div className="bg-modalGray rounded-t-lg p-2.5">
                  <FaEthereum className="text-light text-lg" />
                </div>

                <img src={img} alt={price} className="rounded-b-lg w-full" />
              </div>
              <div className="sm:w-1/2 flex flex-col space-y-5">
                <h3 className="text-2xl font-bold">{title}</h3>
                <h4 className="bg-modalGray border border-gray p-2 rounded-lg font-semibold">
                  {Math.trunc(price)} ETH
                </h4>
                <p className="bg-modalGray border border-gray p-2 h-full rounded-lg">
                  {description.slice(0, 200)}...
                </p>
              </div>
            </div>
            <button
              type={submit ? "button" : "submit"}
              className="bg-blue w-full p-2 rounded-lg"
            >
              {submit ? "NFT Created 🎉" : "Create NFT"}
            </button>
            <button
              onClick={() => setModal(false)}
              className={`${
                submit ? "hidden" : ""
              } bg-dark border border-red w-full p-2 rounded-lg`}
            >
              Edit NFT
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
