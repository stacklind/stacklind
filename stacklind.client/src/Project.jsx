import React from 'react';

function Project({ project }) {
    if (!project) return null;

    const { id, name, description } = project;

    return (
        <article className="project-card" aria-labelledby={`project-${id}`}>
            <h2 id={`project-${id}`}>{name}</h2>
            <p>{description}</p>    
        </article>
    );
}

export default Project;