"use client";

import { useRouter } from "next/navigation";

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div className="absolute inset-0 flex h-screen w-screen flex-col items-center justify-center bg-slate-900/50">
      <div className="relative w-full max-w-sm rounded-lg bg-white p-4">
        <button
          onClick={() => router.back()}
          className="absolute right-0 top-0 mx-2 my-1"
        >
          X
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
}
