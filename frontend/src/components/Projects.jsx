import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
                const res = await axios.get(`${API_URL}/api/projects`);
                setProjects(res.data);
            } catch (err) {
                console.error('Error fetching projects:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 className="section-title text-center text-gradient mb-5">Featured Projects</h2>

                {loading ? (
                    <div className="text-center">Loading projects...</div>
                ) : projects.length === 0 ? (
                    <div className="text-center">No projects available. Check back soon!</div>
                ) : (
                    <div className="projects-grid">
                        {projects.map((project) => (
                            <div key={project._id} className="project-card glass-card fade-in-up">
                                <div className="project-img-wrapper">
                                    <img src={project.imageUrl} alt={project.title} className="project-img" />
                                </div>
                                <div className="project-info">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-desc">{project.description}</p>
                                    <div className="tech-stack">
                                        {project.technologies.map((tech, i) => (
                                            <span key={i} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                    <div className="project-links">
                                        {project.githubLink && (
                                            <a href={project.githubLink} target="_blank" rel="noreferrer" className="project-link">
                                                <FaGithub /> GitHub
                                            </a>
                                        )}
                                        {project.liveLink && (
                                            <a href={project.liveLink} target="_blank" rel="noreferrer" className="project-link">
                                                <FaExternalLinkAlt /> Live Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
