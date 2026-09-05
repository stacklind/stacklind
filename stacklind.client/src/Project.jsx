import React from 'react';
import styles from './Project.module.css';

function Project({ project }) {
    if (!project) return null;

    const { id, name, description } = project;

    return (
        <article className={styles.project} aria-labelledby={`project-${id}`}>
            <h3 id={`project-${id}`} className={styles.title}>{name}</h3>
            {description && <p className={styles.description}>{description}</p>}
        </article>
    );
}

export default Project;
