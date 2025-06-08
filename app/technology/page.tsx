import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Technology - Neuron Interface Project',
  description: 'Our cutting-edge neuroscience technology and solutions',
}

interface Technology {
  title: string
  description: string
}

export default function Technology() {
  const technologies: Technology[] = [
    {
      title: "Microelectrode Arrays",
      description: "Multi-channel stimulation and recording with 16 bit precision for accurate testing."
    },
    {
      title: "Closed-Loop Stimulation", 
      description: "Adaptive stimulation parameters for academic and clinical use."
    },
    {
      title: "Waveform Control",
      description: "Programmable microcontroller for custom or novel testing."
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
          
          {/* Standardized title section with circuit background */}
          <div className="text-center mb-16 circuit-pattern">
            <h1 className="holographic mb-6" data-text="TECHNOLOGY">
              TECHNOLOGY
            </h1>
          </div>

          {/* Technology Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {technologies.map((tech, index) => (
              <div key={index} className="glass-card p-8 group">
                <div className="text-center mb-6">
                  <h3 className="text-glow mb-4" style={{ color: 'var(--glow-blue)' }}>
                    {tech.title}
                  </h3>
                </div>
                <p className="text-center leading-relaxed">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>

          {/* Image section */}
          <div className="glass-card p-6 mb-12 text-center">
                <div className="inline-block">
                  <Image 
                    src="/images/MEA_image.jpg" 
                    alt="Neuron Interface Project Poster" 
                    width={600}
                    height={600}
                    className="rounded-lg border-glow"
                    style={{borderColor: 'var(--glow-blue)'}}
                    priority
                  />
                </div>
              </div>

          {/* Technical Specifications */}
          <div className="glass-card p-8 mb-16">
            <h2 className="text-center mb-8 text-glow" style={{ color: 'var(--glow-purple)' }}>
              Technical Specifications
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-glow mb-2" style={{ color: 'var(--glow-blue)' }}>
                  Available Channels
                </div>
                <div className="text-sm opacity-80">Don't remember, replace with correct number - maybe 8?</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-glow mb-2" style={{ color: 'var(--glow-blue)' }}>
                  Temporal Resolution
                </div>
                <div className="text-sm opacity-80">Also don't remember - how fast can we sample ADC/update DAC?</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-glow mb-2" style={{ color: 'var(--glow-blue)' }}>
                  Hardware Reference Manual
                </div>
                <div className="text-sm opacity-80">Once we're done building, need to create documentation and put it here</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-glow mb-2" style={{ color: 'var(--glow-blue)' }}>
                  Setup Guide
                </div>
                <div className="text-sm opacity-80">More documentation</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}