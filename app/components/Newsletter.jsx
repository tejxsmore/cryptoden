export default function Newsletter() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = document.getElementById("email");
    console.log(email.value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-5">
      <input
        required
        id="email"
        type="email"
        placeholder="Email"
        className="w-full bg-dark border border-gray rounded-lg p-2 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-gray hover:bg-blue text-md font-medium px-5 py-2 ml-5 rounded-lg"
      >
        Submit
      </button>
    </form>
  );
}
