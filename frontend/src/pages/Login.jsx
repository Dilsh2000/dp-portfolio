import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
        try {
            const res = await axios.post(`${API_URL}/api/auth/login`, { username, password });
            localStorage.setItem('token', res.data.token);
            navigate('/admin');
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed');
        }
    };

    return (
        <div className="login-container">
            <div className="login-card glass-card fade-in-up">
                <h2 className="text-gradient mb-4 text-center">Admin Access</h2>
                {error && <p className="error-text text-center mb-3">{error}</p>}
                <form onSubmit={handleLogin}>
                    <div className="form-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group mb-4">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                </form>
                <div className="text-center mt-4">
                    <a href="/" className="back-link">Return to Portfolio</a>
                </div>
            </div>
        </div>
    );
};

export default Login;
