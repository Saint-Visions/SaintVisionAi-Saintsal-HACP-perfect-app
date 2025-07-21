// app/saintvision/page.tsx

"use client";

import { useContext } from "react";
import { AppContext } from "@/context"; // Replace with your actual context path
import Link from "next/link";

export default function SaintVisionPage() {
  const context = useContext(AppContext);

  // ✅ Handle case where context is unavailable during prerender
  if (!context) {
    if (typeof window === "undefined") {
      console.warn("AppContext not available during build prerender.");
      return null;
    }
    throw new Error("AppContext.Provider is missing");
  }

  const { basename } = context;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to SaintVision™</h1>
      <p className="mb-2">Basename from context: {basename}</p>
      <Link href="/" className="text-blue-500 underline">
        Go Back Home
      </Link>
    </div>
  );
}

