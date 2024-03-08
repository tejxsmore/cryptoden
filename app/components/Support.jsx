"use client";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Support() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let msgData = { name, email, message };
    console.log(msgData);

    try {
      const res = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        body: JSON.stringify(msgData),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        console.log("Form submitted");
      } else {
        console.log("Oops! Something is wrong.");
      }
    } catch (e) {
      console.log(`Error : ${e}`);
    } finally {
      setSubmitted(true);
      // toast.success("Email sent");
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="flex justify-center pb-20">
      <div className="text-sm font-normal">
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <div className="w-full sm:max-w-2xl bg-modalGray border border-gray p-5 rounded-xl pb-0">
        <h3 className="pb-5 text-2xl font-bold">We are here to help you!</h3>
        <p className="pb-5">
          Cryptoden is a decentralised platform for trading and buying or
          selling NFTs. We work very hard to help our customers with upto date
          service, if you need any support from our team, feel free to mail us.
        </p>
        <form onSubmit={handleSubmit} className="mb-5 text-light">
          <div className="flex mb-5 space-x-5">
            <input
              required
              id="name"
              type="text"
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              autoComplete="off"
              className="w-full bg-dark border border-gray rounded-lg p-2 focus:outline-none"
            />
            <input
              required
              id="email"
              type="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="w-full bg-dark border border-gray rounded-lg p-2 focus:outline-none"
            />
          </div>
          <textarea
            required
            type="text"
            id="message"
            rows="10"
            placeholder="Message"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className="w-full bg-dark border border-gray rounded-lg p-2 mb-4 focus:outline-none resize-none"
          ></textarea>
          <button
            type="submit"
            // onClick={(e) => handleSubmit(e)}
            className="w-full bg-gray hover:bg-blue text-md font-medium px-5 py-2 rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
