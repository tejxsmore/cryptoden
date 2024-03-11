"use client";
import { useChat } from "ai/react";
// ${m.role === "user" ? "text-3xl font-bold" : "text-md font-normal"}

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="bg-dark flex justify-center pb-20">
      <div className="w-full sm:max-w-2xl p-5 bg-modalGray border border-gray rounded-xl overflow-y-auto ">
        <h3 className="pb-5 text-2xl font-bold">Ask anything to our AI</h3>

        <ul className={``}>
          {messages.map((m, index) => (
            <li
              key={index}
              className={`pb-5 ${
                m.role === "user" ? "text-lg font-semibold" : "text-md"
              }`}
            >
              {/* {m.role === "user" ? "User: " : "AI: "} */}
              {m.content}
            </li>
          ))}
        </ul>

        <form onSubmit={handleSubmit} className="flex space-x-5">
          <input
            id="input"
            value={input}
            placeholder="Typing..."
            onChange={handleInputChange}
            className="p-2 rounded-lg text-light bg-dark border border-gray w-full focus:outline-none"
          />
          <button
            type="submit"
            className="bg-gray hover:bg-blue p-2 rounded-lg"
          >
            Ask
          </button>
        </form>
      </div>
    </div>
  );
}
