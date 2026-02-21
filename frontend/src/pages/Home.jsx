import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Hero from '../components/Hero';
import Services from '../components/Services';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <div>
            <Hero />
            <Services />
            <AboutMe />
            <Skills />
            <Projects />
            <Contact />
            <footer className="text-center" style={{ padding: '2rem', borderTop: '1px solid var(--glass-border)', color: 'var(--text-muted)' }}>
                <p>&copy; {new Date().getFullYear()} Dilshan Priyadarshana. All rights reserved.</p>
                <div className="social-links" style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
                    <a href="https://github.com/Dilsh2000" target="_blank" rel="noopener noreferrer" className="social-icon" style={{ color: 'var(--text-muted)', fontSize: '1.5rem' }}>
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/dilshan-priyadharshana/" target="_blank" rel="noopener noreferrer" className="social-icon" style={{ color: 'var(--text-muted)', fontSize: '1.5rem' }}>
                        <FaLinkedin />
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Home;

