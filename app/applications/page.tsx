import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Applications - Neuron Interface Project',
  description: 'Applications of our neuroscience technology',
}

interface Application {
  title: string
  description: string
}

export default function Applications() {
  const applications: Application[] = [
    {
      title: "Research Area 1",
      description: "Most common use of our tech."
    },
    {
      title: "Research Area 2", 
      description: "Second most common use of tech."
    },
    {
      title: "Research Area 3",
      description: "Third most common use of tech."
    }
  ]

  const implementations: Application[] = [
    {
      title: "Industry Application 1",
      description: "Most common industry application."
    },
    {
      title: "Industry Application 2", 
      description: "Second most common industry application."
    },
    {
      title: "Industry Application 3",
      description: "Third most common industry application."
    }
  ]

  return (
    <div className="min-h-screen relative">
      {/* Particle background effect */}
      <div className="particle-bg">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <section className="py-16 min-h-screen relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Main title section */}
          <div className="text-center mb-16 circuit-pattern">
            <h1 className="holographic mb-6" data-text="APPLICATIONS">
              APPLICATIONS
            </h1>
          </div>

          {/* Research Areas Grid */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-center mb-8 text-glow" style={{ color: 'var(--glow-blue)' }}>
              Research Areas
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {applications.map((app, index) => (
                <div key={index} className="glass-card p-8 group">
                  <div className="mb-4">
                    <h3 className="text-glow mb-4" style={{ color: 'var(--glow-blue)' }}>
                      {app.title}
                    </h3>
                  </div>
                  <p className="leading-relaxed">
                    {app.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Real-World Implementation Grid */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="text-center mb-8 text-glow" style={{ color: 'var(--glow-purple)' }}>
              Real-World Implementation
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {implementations.map((impl, index) => (
                <div key={index} className="glass-card p-8 group">
                  <div className="mb-4">
                    <h3 className="text-glow mb-4" style={{ color: 'var(--glow-purple)' }}>
                      {impl.title}
                    </h3>
                  </div>
                  <p className="leading-relaxed">
                    {impl.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Metrics */}
          <div className="glass-card p-8">
            <h2 className="text-center mb-8 text-glow" style={{ color: 'var(--glow-green)' }}>
              Research Impact
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-glow mb-2" style={{ color: 'var(--glow-green)' }}>
                  Fill in once we have numbers
                </div>
                <div className="text-sm opacity-80">Research Papers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-glow mb-2" style={{ color: 'var(--glow-blue)' }}>
                  Fill in once we have numbers
                </div>
                <div className="text-sm opacity-80">Institutions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-glow mb-2" style={{ color: 'var(--glow-purple)' }}>
                  Fill in once we have numbers
                </div>
                <div className="text-sm opacity-80">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-glow mb-2" style={{ color: 'var(--glow-green)' }}>
                  Fill in once we have numbers
                </div>
                <div className="text-sm opacity-80">Experiments</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}