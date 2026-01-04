export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="h-10 bg-secondary rounded-lg w-48 mb-2 animate-pulse" />
          <div className="h-4 bg-secondary rounded-lg w-96 animate-pulse" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="md:col-span-2 h-12 bg-secondary rounded-lg animate-pulse" />
          <div className="h-12 bg-secondary rounded-lg animate-pulse" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-card border-2 border-primary rounded-lg overflow-hidden">
              <div className="h-48 bg-secondary animate-pulse" />
              <div className="p-6 space-y-3">
                <div className="h-6 bg-secondary rounded-lg animate-pulse w-32" />
                <div className="h-4 bg-secondary rounded-lg animate-pulse w-24" />
                <div className="h-4 bg-secondary rounded-lg animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
