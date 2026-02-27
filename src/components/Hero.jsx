import React, { useState } from 'react'
import CVI from './CVI'

function Hero() {
  const [showCVI, setShowCVI] = useState(false)

  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Build smarter. Scale faster.</h1>
        <p>
          NovaStack is a next-gen platform for modern digital infrastructure,
          AI-powered workflows, and seamless integration.
        </p>
        <div className="hero-actions">
          <button onClick={() => setShowCVI(true)}>Start AI Tour</button>
          <button className="secondary-btn">View Docs</button>
        </div>
      </div>

      <div className="avatar-placeholder" style={{ position: 'relative' }}>
        {showCVI ? (
          <>
            <button
              onClick={() => setShowCVI(false)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                padding: '0.4rem 0.8rem',
                backgroundColor: '#ef4444',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                zIndex: 2,
              }}
            >
              Close
            </button>
            <CVI />
          </>
        ) : (
          <p>AI Avatar Placeholder</p>
        )}
      </div>
    </section>
  )
}

export default Hero
