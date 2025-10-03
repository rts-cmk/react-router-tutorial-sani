// src/pages/Contact.jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact() {
  const [name, setName] = useState('')
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    // Her kan du fx sende data til en API, og bagefter navigere:
    navigate('/', { replace: false })
  }

  return (
    <section>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Dit navn:
          <input value={name} onChange={e => setName(e.target.value)} />
        </label>
        <button type="submit">Send</button>
      </form>
    </section>
  )
}
