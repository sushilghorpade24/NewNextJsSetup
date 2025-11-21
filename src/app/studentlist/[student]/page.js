"use client"

import Link from "next/link";

export default function Student({ params }) {

  // access route param like /student/101
  const { id } = params;
  console.log("Student ID:", id);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">  
      <h1 className="text-3xl font-bold mb-6 text-zinc-900 dark:text-zinc-100">
        Student Profile
      </h1>

      <div className="mb-6 text-lg">
        <span className="font-semibold text-zinc-800">Selected Student ID:</span>{" "}
        <span className="text-indigo-600">{id}</span>
      </div>

      <p className="text-zinc-700 dark:text-zinc-300 mb-4">
        This page displays detailed information about the selected student,
        including academic performance, personal details, and other related data.
      </p>

      <Link
        href="/studentlist"
        className="text-indigo-600 hover:underline"
      >
        ← Back to Student List
      </Link>
    </div>
  );
}
