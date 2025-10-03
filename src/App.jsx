// src/App.jsx
import { NavLink, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <div className="container">
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : undefined}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : undefined}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : undefined}>Contact</NavLink>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}
