import { Routes, Route, Link } from 'react-router-dom'
import Home from './Home.jsx'
import ProjectsPage from './ProjectsPage.jsx'

function App() {
  return (
    <div>
      <header>
        <h1>Stacklind</h1>
        <nav>
          <Link to="/">Home</Link>
          {' | '}
          <Link to="/projects">My Projects</Link>
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