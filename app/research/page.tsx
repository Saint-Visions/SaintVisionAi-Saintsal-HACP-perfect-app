import Link from "next/link";

export const metadata = {
  title: "Research & Development – SaintVisionAI",
  description: "Redirecting to SaintVision Technologies Research Division...",
};

export default function ResearchPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-charcoal-900 text-white p-8">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl font-bold mb-4 saintvision-gradient-text">SVT Research Division</h1>
        <p className="text-lg text-white/80 mb-6">
          Redirecting to our advanced AI research portal:{" "}
          <span className="text-gold-300 font-semibold">saintvisiontech.com</span>
        </p>
        <Link
          href="https://saintvisiontech.com"
          className="inline-block bg-gold-500 hover:bg-gold-600 text-white font-semibold py-3 px-6 rounded-xl transition"
        >
          Visit SVT Research Now →
        </Link>
      </div>
    </div>
  );
}

