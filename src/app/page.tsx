export default function Home() {
  return (
    <div className="p-64 bg-slate-900 text-slate-100 h-screen ">
      <h1 className="font-bold text-5xl flex items-center gap-3 before:w-1 before:h-4 before:bg-sky-500 before:flex">
        Hello Tailwind!...
      </h1>
      <h2 className="font-bold text-xl text-sky-500">My app!</h2>
      <p>Bora codar 🎉</p>
      <button disabled className="bg-sky-500 px-4 py-2 rounded-md font-semibold mt-4 enabled:hover:bg-sky-600 disabled:opacity-60 disabled:cursor-not-allowed">Sign in</button>
    </div>
  );
}
