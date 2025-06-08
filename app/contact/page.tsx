// app/contact/page.tsx

export default function ContactPage() {
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

        <main className="py-16 min-h-screen relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Standardized title section with circuit background */}
            <div className="text-center mb-16 circuit-pattern">
              <h1 className="holographic mb-6" data-text="CONTACT US">
                CONTACT US
              </h1>
            </div>

            <div className="max-w-xl mx-auto text-center">
              <div className="glass-card p-8">
                <p className="text-lg mb-6">
                  For any inquiries, please reach out to us at:
                </p>
                <a
                  href="mailto:neuroninterfaceproject@gmail.com"
                  className="text-glow hover:underline text-lg"
                  style={{ color: 'var(--glow-blue)' }}
                >
                  neuroninterfaceproject@gmail.com
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }