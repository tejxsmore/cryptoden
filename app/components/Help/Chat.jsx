"use client";

import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  const handleClear = () => {
    messages.length = 0;
  };

  return (
    <div className="bg-dark flex justify-center pb-20">
      <div className="w-full sm:max-w-2xl p-5 bg-modalGray border border-gray rounded-xl overflow-y-auto">
        <h3 className="pb-5 text-2xl font-bold">Cryptoden AI</h3>

        {messages.map((m) => (
          <div
            key={m.id}
            className={`pb-5 ${
              m.role === "user" ? "text-lg font-semibold" : "text-md"
            }`}
          >
            {/* {m.role === "user" ? "User: " : "AI: "} */}
            {m.content}
          </div>
        ))}

        <form onSubmit={handleSubmit} className="flex space-x-5">
          <input
            required
            value={input}
            placeholder="What is NFT?"
            onChange={handleInputChange}
            className="p-2 rounded-lg text-light bg-dark border border-gray w-full focus:outline-none"
          />
          <button
            type="submit"
            className={`${
              input == "" ? "bg-gray" : "bg-blue"
            } bg-gray hover:bg-blue p-2 px-4 rounded-lg`}
          >
            Ask
          </button>
        </form>
      </div>
    </div>
  );
}
