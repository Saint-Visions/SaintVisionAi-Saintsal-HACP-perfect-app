export async function generateStaticParams() {
  // Return empty array for static export - no dynamic agent routes for now
  return []
}

export default function ConsoleAgentPage() {
  return (
    <div className="min-h-screen bg-charcoal-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 saintvision-gradient-text">Agent Console</h1>
        <p className="text-white/80">Agent console access coming soon.</p>
      </div>
    </div>
  )
}
