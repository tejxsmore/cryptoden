export default function Info({ coin, open, last }) {
  let INRupee = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

  return (
    <div className="py-5 flex justify-between">
      <p className="text-2xl font-bold">
        {coin.toUpperCase()}{" "}
        <span className="text-lg font-medium text-gray"> / INR</span>
      </p>
      <p className="text-2xl font-bold">{INRupee.format(open)}</p>
    </div>
  );
}
