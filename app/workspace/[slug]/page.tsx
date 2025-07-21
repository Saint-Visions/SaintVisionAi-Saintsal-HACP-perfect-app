export async function generateStaticParams() {
  // Return empty array for static export - no dynamic workspace routes for now
  return []
}

export default function WorkspacePage() {
  return (
    <div className="min-h-screen bg-charcoal-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 saintvision-gradient-text">Workspace</h1>
        <p className="text-white/80">Workspace features coming soon.</p>
      </div>
    </div>
  )
}
