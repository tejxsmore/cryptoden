"use client";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formEmail = { email };

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify(formEmail),
        headers: {
          "content-type": "application/json",
        },
      });
      console.log(response);

      if (response.ok) {
        console.log("Email submitted successfully!");
      } else {
        console.error("Failed to submit email.");
      }
    } catch (error) {
      console.error("Error submitting email:", error);
    }

    setSubmit(true);
    document.getElementById("email").value = "";
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-5">
      <input
        required
        id="email"
        type="email"
        placeholder={`${submit ? email : "Email"}`}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full bg-dark border border-gray rounded-lg p-2 focus:outline-none"
      />
      <button
        id="btn"
        type={`${submit ? "button" : "submit"}`}
        className={`${
          submit ? "bg-blue" : "bg-gray hover:bg-blue"
        } text-md font-medium px-5 py-2 ml-5 rounded-lg focus:outline-none cursor-pointer`}
      >
        {submit ? "Submitted" : "Submit"}
      </button>
    </form>
  );
}
