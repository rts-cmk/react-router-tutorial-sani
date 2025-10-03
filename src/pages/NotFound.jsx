// src/pages/NotFound.jsx
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section>
      <h1>404 – Siden findes ikke</h1>
      <p>Ups! Den URL findes ikke.</p>
      <p>
        Gå tilbage til <Link to="/">forsiden</Link>.
      </p>
    </section>
  )
}
