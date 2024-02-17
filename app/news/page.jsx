import React from "react";

export default async function News() {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=cryptocurrency&apiKey=d829471bf6a544f484c80a39eef483d5`,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Not found");
    }
    const data = await res.json();
    return (
      <div className="bg-dark text-light min-h-screen p-5">
        <h2 className="text-md font-medium pb-5">Crypto news</h2>
        <div className="">
          {data.articles.slice(0, 10).map((item) => (
            <a key={item.url} href={item.url}>
              <div className="bg-modalGray border border-gray rounded-lg p-5 mt-1">
                <h3 className="text-md font-md pb-2">{item.title}</h3>
                <p className="text-sm font-normal">{item.content}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  } catch (err) {
    console.error(`Error : ${err.message}`);
  }
}
