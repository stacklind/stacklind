import { useEffect, useState } from 'react'
import Project from './Project.jsx'

function ProjectsPage() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch('/api/Projects')
      .then(response => {
        if (!response.ok) throw new Error(response.statusText)
        return response.json()
      })
      .then(data => {
        setProjects(data)
        setError(null)
      })
      .catch(err => setError(err.message || 'Failed to load projects'))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div>Loading projects...</div>
  if (error) return <div role="alert">Error: {error}</div>

  return (
    <section>
      <h1>My Projects</h1>

      {projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        projects.map(project => <Project key={project.id} project={project} />)
      )}
    </section>
  )
}

export default ProjectsPage