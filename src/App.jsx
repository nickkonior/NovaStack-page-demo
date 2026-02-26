import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Load the external widget script
    const script = document.createElement('script');
    script.src = 'https://katinabot.com/api/public/widget.js?key=cb_15VRfzdh6igV6ZZyXXqkfkZnvZrXzk9Q';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
      </main>
      <Footer />
    </>
  )
}

export default App
