/* eslint-disable @next/next/no-img-element */
import { capStore } from "../../../public/store/capStore";

import React from "react";

export default function Cap() {
  return (
    <div className="flex bg-dark text-light p-5 pr-0 overflow-x-auto">
      {capStore.map((coin) => (
        <a
          key={coin.asset}
          href={coin.href}
          className="border border-gray bg-modalGray mr-5 rounded-lg transition-transform hover:scale-105 delay-125"
        >
          <div className="w-[130px] flex p-2.5">
            <div className="pr-2.5">
              <img src={coin.logo} alt={coin.asset} className="w-5 h-5" />
            </div>
            <div>
              <p className="text-md font-medium">{coin.fullName}</p>
              <p className="text-sm font-normal text-gray">{coin.asset}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
