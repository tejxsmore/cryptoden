"use client";

export default function Support() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;

    console.log(`${name} (${email}) : ${subject}`);
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
        <form onSubmit={handleSubmit} className="mb-5 text-light">
          <div className="flex mb-5 space-x-5">
            <input
              required
              id="name"
              type="text"
              placeholder="Name"
              className="w-full bg-dark border border-gray rounded-lg p-2 focus:outline-none"
            />
            <input
              required
              id="email"
              type="email"
              placeholder="Email"
              className="w-full bg-dark border border-gray rounded-lg p-2 focus:outline-none"
            />
          </div>
          <textarea
            required
            id="subject"
            rows="10"
            placeholder="Subject"
            className="w-full bg-dark border border-gray rounded-lg p-2 mb-4 focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-gray hover:bg-blue text-md font-medium px-5 py-2 rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
