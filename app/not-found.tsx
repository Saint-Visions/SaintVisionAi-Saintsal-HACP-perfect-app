'use client'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-charcoal-900 text-white">
      <div className="text-center max-w-md">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F065997bd13e4442e888a08652fcd61ba%2F863b231460314ff6a606ebae2dd4912a?format=webp&width=800"
          alt="SaintVisionAI Logo"
          className="w-16 h-16 object-contain mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold mb-4 text-gold-300">404</h1>
        <p className="text-xl text-white/80 mb-6">Oops! Page not found</p>
        <p className="text-white/60 text-sm mb-6">
          The page you're looking for doesn't exist.
        </p>
        <a 
          href="/" 
          className="inline-block bg-gold-500 hover:bg-gold-600 text-charcoal-900 font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Go Home
        </a>
      </div>
    </div>
  )
}
