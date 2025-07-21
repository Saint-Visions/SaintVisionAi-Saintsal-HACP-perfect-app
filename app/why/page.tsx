'use client';

import { useContext } from 'react';
import { AppContext } from '@/app/context'; // adjust path if different

export default function WhyPage() {
  const context = useContext(AppContext);

  if (!context) {
    if (typeof window === 'undefined') return null; // SSR fallback
    throw new Error('AppContext is missing');
  }

  const { basename } = context;

  return (
    <div className="p-8 text-white">
      <h1 className="text-4xl font-bold mb-4">Why SaintSal™?</h1>
      <p className="text-white/80 text-lg">
        This isn’t just ChatGPT. This is faith-forged intelligence built for legacy, leadership, and laser execution.
      </p>
    </div>
  );
}

