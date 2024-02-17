export default function Info({ coin, open, last }) {
  let INRupee = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

  return (
    <div className="flex justify-between pt-5">
      <p className="text-2xl font-bold">
        {coin.toUpperCase()}{" "}
        <span className="text-lg font-medium text-gray"> / INR</span>
      </p>
      <p className="text-2xl font-bold">{INRupee.format(open)}</p>
    </div>
  );
}
