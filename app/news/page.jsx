/* eslint-disable @next/next/no-img-element */
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
      <div className="bg-dark text-light min-h-screen p-5 pt-2.5">
        <div className="flex justify-center">
          <div className="max-w-2xl">
            {data.articles.slice(0, 20).map((item) => (
              <a key={item.url} href={item.url} target="_blank">
                <div className="bg-modalGray border border-gray rounded-xl p-5 mt-2.5 sm:flex">
                  <img
                    src={item.urlToImage}
                    alt="Image"
                    className="rounded-lg w-full mb-5 sm:mb-0 sm:max-w-xs"
                  />
                  <div className="sm:w-2/3 sm:ml-5">
                    <h3 className="text-md font-medium pb-5">{item.title}</h3>
                    <p className="text-sm font-normal">{item.content}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  } catch (err) {
    console.error(`Error : ${err.message}`);
  }
}
