import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminDashboard.css';
import { FaTrash, FaEdit, FaPlus } from 'react-icons/fa';

const AdminDashboard = () => {
    const [projects, setProjects] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        imageUrl: '',
        technologies: '',
        liveLink: '',
        githubLink: ''
    });
    const [editingId, setEditingId] = useState(null);

    const token = localStorage.getItem('token');
    const headers = { Authorization: `Bearer ${token}` };

    const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

    const fetchProjects = async () => {
        try {
            const res = await axios.get(`${API_URL}/api/projects`);
            setProjects(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            ...formData,
            technologies: formData.technologies.split(',').map(tech => tech.trim())
        };

        try {
            if (editingId) {
                await axios.put(`${API_URL}/api/projects/${editingId}`, payload, { headers });
            } else {
                await axios.post(`${API_URL}/api/projects`, payload, { headers });
            }
            setFormData({ title: '', description: '', imageUrl: '', technologies: '', liveLink: '', githubLink: '' });
            setEditingId(null);
            fetchProjects();
        } catch (err) {
            console.error('Error saving project', err);
            alert('Failed to save project. Make sure your session is valid.');
        }
    };

    const handleEdit = (project) => {
        setEditingId(project._id);
        setFormData({
            title: project.title,
            description: project.description,
            imageUrl: project.imageUrl,
            technologies: project.technologies.join(', '),
            liveLink: project.liveLink || '',
            githubLink: project.githubLink || ''
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this project?')) {
            try {
                await axios.delete(`${API_URL}/api/projects/${id}`, { headers });
                fetchProjects();
            } catch (err) {
                console.error('Error deleting project', err);
            }
        }
    };

    return (
        <div className="admin-dashboard">
            <div className="container" style={{ paddingTop: '100px', paddingBottom: '60px' }}>
                <h1 className="text-gradient mb-4">Admin Dashboard</h1>

                <div className="admin-grid">
                    <div className="admin-form-section glass-card">
                        <h3 className="mb-4">{editingId ? 'Edit Project' : 'Add New Project'}</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group mb-3">
                                <input type="text" name="title" className="form-control" placeholder="Project Title" value={formData.title} onChange={handleChange} required />
                            </div>
                            <div className="form-group mb-3">
                                <input type="text" name="imageUrl" className="form-control" placeholder="Image URL" value={formData.imageUrl} onChange={handleChange} required />
                            </div>
                            <div className="form-group mb-3">
                                <input type="text" name="technologies" className="form-control" placeholder="Technologies (comma separated)" value={formData.technologies} onChange={handleChange} required />
                            </div>
                            <div className="form-group mb-3">
                                <input type="text" name="liveLink" className="form-control" placeholder="Live Link (optional)" value={formData.liveLink} onChange={handleChange} />
                            </div>
                            <div className="form-group mb-3">
                                <input type="text" name="githubLink" className="form-control" placeholder="GitHub Link (optional)" value={formData.githubLink} onChange={handleChange} />
                            </div>
                            <div className="form-group mb-4">
                                <textarea name="description" className="form-control" rows="4" placeholder="Description" value={formData.description} onChange={handleChange} required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">
                                {editingId ? <><FaEdit /> Update Project</> : <><FaPlus /> Add Project</>}
                            </button>
                            {editingId && (
                                <button type="button" className="btn btn-outline w-100 mt-2" onClick={() => { setEditingId(null); setFormData({ title: '', description: '', imageUrl: '', technologies: '', liveLink: '', githubLink: '' }); }}>
                                    Cancel Edit
                                </button>
                            )}
                        </form>
                    </div>

                    <div className="admin-list-section">
                        <h3 className="mb-4">Project List ({projects.length})</h3>
                        <div className="project-list">
                            {projects.map(project => (
                                <div key={project._id} className="admin-project-item glass-card mb-3">
                                    <div>
                                        <h4 className="text-primary">{project.title}</h4>
                                        <span className="text-muted" style={{ fontSize: '0.8rem' }}>{new Date(project.createdAt).toLocaleDateString()}</span>
                                    </div>
                                    <div className="admin-project-actions">
                                        <button onClick={() => handleEdit(project)} className="action-btn edit-btn" title="Edit"><FaEdit /></button>
                                        <button onClick={() => handleDelete(project._id)} className="action-btn delete-btn" title="Delete"><FaTrash /></button>
                                    </div>
                                </div>
                            ))}
                            {projects.length === 0 && <p className="text-muted text-center">No projects found.</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
