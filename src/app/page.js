'use client'


import Login from "./Home/page";
import Navbar from "./navbar/page";

export default function Home() {
  const handleClick = (data = "Ram") => alert("hello...! " + data)
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
     <Navbar />
      <main className="flex w-full max-w-3xl mx-auto flex-col items-center justify-between py-12 px-6 bg-white dark:bg-black">
        <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-6xl">
          Welcome to <a href="https://nextjs.org" className="underline">Next.js!</a>
        </h1>

        <div className="space-y-2 mt-6">
          <div>Alice</div>
          <div>Bob</div>
          <div>Charlie</div>
        </div>

        <div className="flex gap-3 mt-6">
          <button className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded" onClick={() => alert("hello...!")}>Click me..!</button>
          <button className="bg-green-400 hover:bg-green-600 text-white px-4 py-2 rounded" onClick={() => handleClick()}>Click me..!</button>
          <button className="bg-orange-500 hover:bg-orange-700 text-white px-4 py-2 rounded" onClick={() => handleClick("Shyam")}>Click me..!</button>
        </div>

        <Login />
      </main>
    </div>
  )
}
