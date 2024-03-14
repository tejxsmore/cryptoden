"use client";
import Chat from "../components/Help/Chat";
import Support from "../components/Help/Support";
import Faq from "../components/Help/Faq";

export const runtime = "edge";

export default function Help() {
  return (
    <div className="bg-dark p-5 min-h-screen">
      <Chat />
      <Support />
      <Faq />
    </div>
  );
}
