export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Particle Background */}
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

      {/* Hero Section */}
      <section className="relative py-24 circuit-pattern overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 
              className="holographic mb-8 leading-tight"
              data-text="NEURON INTERFACE PROJECT"
            >
              NEURON INTERFACE PROJECT
            </h1>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-glow">
              Reliable, Cost Effective In Vitro Neural Stimulation
            </h2>
            
            <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-8 text-gray-300 leading-relaxed">
              Expanding access to neuroscience research with technologies built for 
              <span className="text-glow text-blue-400"> precision</span>,
              <span className="text-glow text-purple-400"> versatility</span>, and
              <span className="text-glow text-green-400"> ease of use</span>.
            </p>

            {/* Sci-fi action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="sci-fi-button">
                See Our Solutions
              </button>
              <button className="sci-fi-button" style={{borderColor: 'var(--glow-purple)'}}>
                View Research
              </button>
              <button className="sci-fi-button" style={{borderColor: 'var(--glow-green)'}}>
                Request a Quote
              </button>
            </div>
          </div>
          
        </div>

        {/* Circuit pattern overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-br from-transparent via-blue-500/5 to-purple-500/5"></div>
        </div>
      </section>

      {/* Additional tech features section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-3 text-blue-400">MEA Technology</h3>
              <p className="text-gray-300">Advanced microelectrode arrays designed for neural stimulation and response recording.</p>
            </div>

            <div className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-3 text-purple-400">Accessible Solutions</h3>
              <p className="text-gray-300">Accessible systems that align with your research needs and budget constraints.</p>
            </div>

            <div className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-3 text-green-400">Intuitive Interface</h3>
              <p className="text-gray-300">Programmable MEA interface allows user-made customized tests for research and commercial purposes.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}