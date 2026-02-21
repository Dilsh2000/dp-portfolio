import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    const isHome = location.pathname === '/';

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <Link to="/" className="nav-logo text-gradient">
                    Dilshan Priyadarshana
                </Link>

                {isHome && (
                    <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                        <li className="nav-item">
                            <a href="#home" onClick={toggleMenu} className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#services" onClick={toggleMenu} className="nav-link">Services</a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" onClick={toggleMenu} className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#skills" onClick={toggleMenu} className="nav-link">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a href="#projects" onClick={toggleMenu} className="nav-link">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" onClick={toggleMenu} className="nav-link">Contact</a>
                        </li>
                    </ul>
                )}

                {!isHome && (
                    <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                        <li className="nav-item">
                            <Link to="/" onClick={toggleMenu} className="nav-link">Back to Home</Link>
                        </li>
                        {location.pathname === '/admin' && (
                            <li className="nav-item">
                                <button onClick={() => {
                                    localStorage.removeItem('token');
                                    window.location.href = '/login';
                                }} className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>Logout</button>
                            </li>
                        )}
                    </ul>
                )}

                <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <ThemeToggle />
                    <div className="nav-icon" onClick={toggleMenu}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
