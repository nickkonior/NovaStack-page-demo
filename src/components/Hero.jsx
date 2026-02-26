import React from 'react'

function Hero() {
  const handleStartTour = () => {
    alert(
      "👋 Hi! I'm the NovaStack AI guide.\n\n" +
      "In the full version, an AI avatar would appear here and explain the website in real time."
    );
  };

  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Build smarter. Scale faster.</h1>
        <p>
          NovaStack is a next-gen platform for modern digital infrastructure,
          AI-powered workflows, and seamless integration.
        </p>
        <div className="hero-actions">
          <button onClick={handleStartTour}>Start AI Tour</button>
          <button className="secondary-btn">View Docs</button>
        </div>
      </div>

      <div className="avatar-placeholder">
        <p>AI Avatar Placeholder</p>
      </div>
    </section>
  )
}

export default Hero
