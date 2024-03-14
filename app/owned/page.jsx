async function getData() {
  try {
    const res = await fetch("http://localhost:3000/api/nft");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    console.log(data);
    return data;
  } catch (e) {
    console.log("Error : ", e);
  }
}

export default async function Owned() {
  const data = await getData();

  return (
    <div className="bg-dark text-light flex justify-center items-center min-h-screen p-5">
      <a
        href="/nft"
        className="px-5 py-2 bg-modalGray border border-gray rounded-lg"
      >
        {`Buy your first NFT right now`}
      </a>
      {/* {data?.map((item) => (
        <div key={item.id}>
          <p>Id : {item.id}</p>
          <p>Title : {item.title}</p>
          <p>Image : {item.img}</p>
          <p>Price : {item.price} ETH</p>
        </div>
      ))} */}
    </div>
  );
}
