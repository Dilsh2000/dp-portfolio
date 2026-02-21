import React, { useState } from 'react';
import './AboutMe.css';
import { FaGraduationCap, FaCertificate, FaCode, FaBriefcase } from 'react-icons/fa';

const AboutMe = () => {
    const [activeTab, setActiveTab] = useState('experience');

    return (
        <section id="about" className="section about-section">
            <div className="container">
                <h2 className="section-title text-center text-gradient mb-5">About Me</h2>

                <div className="about-content">
                    <div className="about-text glass-card fade-in-up">
                        <div className="icon-wrapper"><FaCode /></div>
                        <h3>My Journey</h3>
                        <p>
                            I started my coding journey passionate about creating web applications that not only solve problems but also provide an exceptional user experience. Fast forward to today, I have built numerous scalable and performant projects using the MERN stack.
                            My goal is to continuously learn and bring innovative solutions to the digital realm.
                        </p>
                    </div>

                    <div className="tabs-container fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <div className="tab-buttons">
                            <button
                                className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
                                onClick={() => setActiveTab('experience')}
                            >
                                Experience
                            </button>
                            <button
                                className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
                                onClick={() => setActiveTab('education')}
                            >
                                Education & Certifications
                            </button>
                        </div>

                        <div className="tab-content" style={{ animationDelay: '0.3s' }}>
                            {activeTab === 'education' && (
                                <div className="about-cards fade-in-up">
                                    <div className="info-card glass-card">
                                        <FaGraduationCap className="card-icon" />
                                        <h4>Education</h4>
                                        <p className="card-desc">International Diploma in Information & Communication Technology</p>
                                        <span className="card-sub">OTHM- UK, 2025</span>
                                    </div>

                                    <div className="info-card glass-card">
                                        <FaCertificate className="card-icon" />
                                        <h4>Certifications</h4>
                                        <p className="card-desc">Full Stack Developer</p>
                                        <span className="card-sub">University of Moratuwa, 2024</span>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'experience' && (
                                <div className="experience-timeline fade-in-up">
                                    <div className="timeline-item glass-card" style={{ marginBottom: '1.5rem' }}>
                                        <div className="timeline-icon">
                                            <FaBriefcase />
                                        </div>
                                        <div className="timeline-content">
                                            <h4>Full Stack Developer</h4>
                                            <span className="timeline-date">Fuchsius | 2025 july - 2025 december</span>
                                            <p className="card-desc mt-2">
                                                Developed and maintained responsive websites for various clients. Specialized in React, Node.js, and modern web technologies to deliver high quality, reliable products.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="timeline-item glass-card">
                                        <div className="timeline-icon">
                                            <FaBriefcase />
                                        </div>
                                        <div className="timeline-content">
                                            <h4>Data Entry Operator</h4>
                                            <span className="timeline-date">National Transport Medical Institute | Jul 2024 - Jan 2025</span>
                                            <p className="card-desc mt-2">
                                                Managed and updated data efficiently, ensuring high accuracy and proper organization of company records.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
