"use client";

import React from "react";

export default function BuilderPage() {
  return (
    <div className="min-h-screen bg-charcoal-900 text-white flex items-center justify-center">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold mb-4 text-gold-300">SaintVisionAI Builder</h1>
        <p className="text-white/80 mb-6">
          Content management is integrated with the main homepage.
        </p>
        <a
          href="/"
          className="inline-block bg-gold-500 hover:bg-gold-600 text-charcoal-900 font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Go to Homepage
        </a>
      </div>
    </div>
  );
}
