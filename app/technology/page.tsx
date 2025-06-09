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

          {/* Technology Grid - improved mobile layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {technologies.map((tech, index) => (
              <div key={index} className="glass-card p-6 sm:p-8 group">
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

          {/* Responsive Image section */}
          <div className="glass-card p-4 sm:p-6 mb-12 text-center">
            <div className="relative w-full max-w-2xl mx-auto">
              <Image 
                src="/images/MEA_image.jpg" 
                alt="Microelectrode Array Technology" 
                width={600}
                height={600}
                className="w-full h-auto rounded-lg object-contain"
                style={{
                  maxHeight: '70vh'
                }}
                sizes="(max-width: 640px) 95vw, (max-width: 768px) 85vw, (max-width: 1024px) 75vw, 600px"
                priority
              />
            </div>
          </div>

          {/* Technical Specifications - improved mobile layout */}
          <div className="glass-card p-6 sm:p-8 mb-16">
            <h2 className="text-center mb-8 text-glow" style={{ color: 'var(--glow-purple)' }}>
              Technical Specifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-glow mb-2" style={{ color: 'var(--glow-blue)' }}>
                  Available Channels
                </div>
                <div className="text-sm opacity-80">Don't remember, replace with correct number - maybe 8?</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-glow mb-2" style={{ color: 'var(--glow-blue)' }}>
                  Temporal Resolution
                </div>
                <div className="text-sm opacity-80">Also don't remember - how fast can we sample ADC/update DAC?</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-glow mb-2" style={{ color: 'var(--glow-blue)' }}>
                  Hardware Reference Manual
                </div>
                <div className="text-sm opacity-80">Once we're done building, need to create documentation and put it here</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-glow mb-2" style={{ color: 'var(--glow-blue)' }}>
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