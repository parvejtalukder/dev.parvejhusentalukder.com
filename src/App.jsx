import { useState, useEffect } from 'react'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [time, setTime] = useState(new Date())

  // Live clock
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* HERO SECTION */}
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="Parvej" />
        </div>

        <div className="intro">
          <h1>
            Hi, I'm <span>Parvej Husen Talukder</span> 👋
          </h1>

          <h2>MERN Stack Developer</h2>

          <p className="tagline">
            I build modern, smooth & interactive web experiences.
          </p>

          {/* DATE & TIME */}
          <div className="datetime">
            <p>📅 {time.toLocaleDateString()}</p>
            <p>⏰ {time.toLocaleTimeString()}</p>
          </div>
        </div>

        {/* INTERACTION BUTTON */}
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          🚀 Clicked {count} times
        </button>
      </section>

      {/* DIVIDER */}
      <div className="ticks"></div>

      {/* NEXT SECTION */}
      <section id="next-steps">
        <div id="about">
          <h2>About Me</h2>
          <p>
            Passionate developer focused on creating smooth UI, animations,
            and scalable full-stack applications using modern technologies.
          </p>
        </div>

        <div id="connect">
          <h2>Connect</h2>
          <ul>
            <li>
              <a href="https://github.com/" target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/" target="_blank">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#">
                Portfolio (Coming Soon)
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>

      {/* EXTRA SPACE FOR SCROLL ANIMATIONS */}
      <section id="spacer"></section>
    </>
  )
}

export default App