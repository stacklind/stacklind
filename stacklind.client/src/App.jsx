import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home.jsx'
import ProjectsPage from './ProjectsPage.jsx'

function App() {
  return (
    <div>
      <header className="site-header">
        <div className="brand">
          <h1>Stacklind</h1>
        </div>

        <nav className="site-nav" aria-label="Main navigation">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
