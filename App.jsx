import { useState } from 'react'

function App() {
  const [currentHour, setCurrentHour] = useState(new Date().getHours())

  // Conditional rendering: show a greeting according to the selected hour.
  const greeting = currentHour < 12 ? 'Good Morning' : 'Good Evening'
  const greetingIcon = currentHour < 12 ? '☀️' : '🌙'

  function updateToCurrentTime() {
    setCurrentHour(new Date().getHours())
  }

  return (
    <main className="page">
      <section className="greeting-card">
        <div className="icon" aria-hidden="true">{greetingIcon}</div>
        <p className="eyebrow">REACT CONDITIONAL RENDERING</p>
        <h1>{greeting}!</h1>
        <p className="description">
          {currentHour < 12
            ? 'Wishing you a bright and wonderful day.'
            : 'Hope you have a peaceful and relaxing evening.'}
        </p>
        <div className="time">Current hour: {String(currentHour).padStart(2, '0')}:00</div>
        <button onClick={updateToCurrentTime}>Refresh greeting</button>
      </section>
      <footer>Built with React + Vite</footer>
    </main>
  )
}

export default App
