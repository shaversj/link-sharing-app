"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

enum Error {
  InvalidCredentials = "InvalidCredentials",
}

const errorMap = {
  [Error.InvalidCredentials]: (
    <p>
      The email or password you entered is incorrect. Please try to{" "}
      <Link href="/login">
        <span className={"font-bold text-purple"}>login</span> again.
      </Link>
      .
    </p>
  ),
};

export default function AuthErrorPage() {
  const search = useSearchParams();
  const error = search.get("error") as Error;

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div className="border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 block max-w-sm rounded-lg border bg-white p-6 text-center shadow">
        <h5 className="text-gray-900 mb-2 flex flex-row items-center justify-center gap-2 text-xl font-bold tracking-tight dark:text-dark-gray">Something went wrong</h5>
        <div className="text-gray-700 dark:text-gray-400 font-normal">{errorMap[error] || "Please contact us if this error persists."}</div>
      </div>
    </div>
  );
}
