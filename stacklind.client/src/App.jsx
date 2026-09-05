import { useEffect, useState } from 'react';

function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/api/Projects')
            .then(response => response.text())
            .then(data => setProjects(JSON.parse(data)));
    }, []);

    return (
        <div>
            <h1>My Projects</h1>

            {projects.map(project => (
                <div key={project.id}>
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    );
}

export default App;