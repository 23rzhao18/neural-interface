import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About - Neuron Interface Project',
  description: 'Learn about Neuron Interface Project and our mission',
}

export default function About() {
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            {/* Standardized title section with circuit background */}
            <div className="text-center mb-16 circuit-pattern">
              <h1 className="holographic mb-6" data-text="ABOUT US">
                ABOUT US
              </h1>
              <div className="w-24 h-1 bg-tech mx-auto rounded-full neon-glow"></div>
            </div>

            {/* Main content in glass card */}
            <div className="glass-card p-8 mb-12">
              <div className="text-center mb-8">
                <h2 className="text-glow mb-6">Neuron Interface Project</h2>
                <p className="text-xl leading-relaxed mb-6">
                  NIP develops <span className="holographic" data-text="cost-effective">cost-effective</span> and 
                  <span className="text-glow" style={{color: 'var(--glow-green)'}}> novel devices</span> for 
                  in vitro neural stimulation and recording.
                </p>
                <p className="text-lg leading-relaxed">
                  Our systems combine high-resolution microelectrode arrays, closed-loop control, 
                  and intuitive software interfaces for cutting-edge neuroscience research.
                </p>
              </div>
            </div>

            {/* Image section */}
            <div className="glass-card p-6 mb-12 text-center">
              <div className="inline-block">
                <Image 
                  src="/images/NIP_Posterfinal.jpg" 
                  alt="Neuron Interface Project Poster" 
                  width={600}
                  height={1000}
                  className="rounded-lg border-glow"
                  style={{borderColor: 'var(--glow-blue)'}}
                  priority
                />
              </div>
            </div>

            {/* Feature cards grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="glass-card p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary border-glow rounded-lg"></div>
                <h3 className="mb-4">Neural Innovation</h3>
                <p className="text-sm">
                  Advanced microelectrode arrays designed for precise neural interface applications.
                </p>
              </div>

              <div className="glass-card p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-tech border-glow rounded-lg"></div>
                <h3 className="mb-4">Closed-Loop Control</h3>
                <p className="text-sm">
                  Real-time stimulation and recording systems with intelligent feedback mechanisms.
                </p>
              </div>

              <div className="glass-card p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-secondary border-glow rounded-lg"></div>
                <h3 className="mb-4">Intuitive Software</h3>
                <p className="text-sm">
                  User-friendly interfaces that make complex neuroscience research easy.
                </p>
              </div>
            </div>

            {/* Mission statement */}
            <div className="glass-card text-center">
              <h2 className="h1" style={{color: 'var(--glow-purple)'}}>Our Mission</h2>
              <p className="text-lg leading-relaxed mb-6">
                To democratize neuroscience research by providing accessible, high-quality neural interface technologies 
                that accelerate scientific discovery and medical breakthroughs.
              </p>
              <button className="sci-fi-button">
                Learn More About Our Technology
              </button>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}