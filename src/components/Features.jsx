import React from 'react'

function Features() {
  const features = [
    '⚡ Real-time Processing',
    '🤖 AI-Driven Insights',
    '🔒 Secure by Design',
    '☁️ Cloud Native'
  ];

  return (
    <section id="features" className="features">
      <h2>Key Features</h2>
      <div className="feature-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            {feature}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
