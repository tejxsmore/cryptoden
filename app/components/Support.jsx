import * as React from "react";

export default function Support() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(document.getElementById("email").value);
  };

  return (
    <div className="flex justify-center pb-20">
      <div className="w-full sm:max-w-2xl bg-modalGray border border-gray p-5 rounded-xl pb-0">
        <h3 className="pb-5 text-2xl font-bold">We are here to help you!</h3>
        <p className="pb-5">
          Cryptoden is a decentralised platform for trading and buying or
          selling NFTs. We work very hard to help our customers with upto date
          service, if you need any support from our team, feel free to mail us.
        </p>
        <form onSubmit={handleSubmit} className="flex mb-5">
          <input
            required
            id="email"
            type="email"
            placeholder="Email"
            className="w-full bg-dark border border-gray rounded-lg p-2 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-gray hover:bg-blue text-md font-medium px-5 py-2 ml-5 rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
