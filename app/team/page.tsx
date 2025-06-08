import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Team - Neuron Interface Project',
  description: 'Meet our team of neuroscience experts',
}

export default function Team() {
  const teamMembers = [
    {
      name: "Nikhil Iyer",
      title: "TBD",
      about: "TBD",
      linkedin: "https://www.linkedin.com/in/nikhil-iyer-05a365273/"
    },
    {
      name: "Levi Krogh",
      title: "TBD",
      about: "TBD",
      linkedin: "https://www.linkedin.com/in/levi-krogh/"
    },
    {
      name: "Khidir Kotaria",
      title: "TBD",
      about: "TBD",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Alexander Wan",
      title: "TBD",
      about: "TBD",
      linkedin: "https://www.linkedin.com/in/alexander-wan-436309313/"
    },
    {
      name: "Ethan Chung",
      title: "TBD",
      about: "TBD",
      linkedin: "https://www.linkedin.com/in/ethan-chung-b5830a317/"
    },
    {
      name: "Kevin Vo",
      title: "TBD",
      about: "TBD",
      linkedin: "https://www.linkedin.com/in/kevinvo06/"
    },
    {
      name: "Raymond Zhao",
      title: "TBD",
      about: "TBD",
      linkedin: "https://www.linkedin.com/in/raymond-zhao-8919732a9/"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Standardized title section with circuit background */}
          <div className="max-w-3xl mx-auto text-center mb-16 circuit-pattern">
            <h1 className="holographic mb-6" data-text="OUR TEAM">
              OUR TEAM
            </h1>
            <p className="text-lg text-gray-300">
              Meet the brilliant minds behind Neuron Interface Project. 
              Our diverse team combines expertise in neuroscience and engineering
              to push the boundaries of customizable MEA technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="glass-card p-8 hover:transform transition-all duration-300 group"
              >
                {/* Member Info */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2 holographic" data-text={member.name}>
                    {member.name}
                  </h3>
                  <p className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-4">
                    {member.title}
                  </p>
                </div>

                {/* About Section */}
                <div className="mb-6">
                  <h4 className="text-purple-400 font-semibold mb-3 text-sm uppercase tracking-wide">
                    About Me
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {member.about}
                  </p>
                </div>

                {/* LinkedIn Link */}
                <div className="flex justify-center">
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sci-fi-button text-xs px-6 py-2 inline-flex items-center gap-2 group-hover:border-purple-400 transition-colors"
                  >
                    <svg 
                      className="w-4 h-4" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    Connect
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">Join Our Mission</h2>
              <p className="text-gray-300 mb-6">
                Interested in contributing to groundbreaking neuroscience or engineering research? 
                We're always looking for talented individuals to join our team.
              </p>
              <button className="sci-fi-button">
                View Open Positions
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}