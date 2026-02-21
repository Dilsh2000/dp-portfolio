import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="container hero-container">
                <div className="hero-content fade-in-up">
                    <h2 className="greeting">Hello, I'm</h2>
                    <h1 className="name text-gradient">Dilshan Priyadarshana</h1>
                    <h3 className="title">Full Stack Developer</h3>
                    <p className="description">
                        I craft visually stunning, highly interactive web applications using the latest web technologies.
                        My passion is to convert complex problems into simple, beautiful, and intuitive interfaces.
                    </p>
                    <div className="hero-buttons">
                        <a href="/cv.pdf" download="Dilshan_Priyadarshana_CV.pdf" className="btn btn-primary glow-primary">Download CV</a>
                        <a href="#contact" className="btn btn-outline">Let's Talk</a>
                    </div>
                </div>
                <div className="hero-image-wrapper fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <div className="hero-image-blob">
                        <img src="/assets/profile-photo.jpg" alt="Dilshan Priyadarshana portrait" className="hero-image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
