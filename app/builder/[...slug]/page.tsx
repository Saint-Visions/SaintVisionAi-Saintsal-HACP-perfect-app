export async function generateStaticParams() {
  // Return empty array for static export - no dynamic builder routes for now
  return []
}

function BuilderPageClient() {
  return (
    <div className="min-h-screen bg-charcoal-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 saintvision-gradient-text">Builder Content</h1>
        <p className="text-white/80">Builder.io content pages coming soon.</p>
      </div>
    </div>
  )
}

export default function BuilderPage() {
  return <BuilderPageClient />
}
