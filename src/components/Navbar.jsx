import React from 'react'

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">NovaStack</div>
      <nav>
        <a href="#features">Features</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <button className="cta-btn">Get Started</button>
    </header>
  )
}

export default Navbar
