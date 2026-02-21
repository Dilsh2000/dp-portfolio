import React from 'react';
import './Services.css';
import { FaCode, FaPaintBrush, FaMobileAlt, FaServer } from 'react-icons/fa';

const services = [
    {
        title: 'Web Development',
        icon: <FaCode />,
        description: 'Building modern, performant, and scalable web applications using React, Node.js, and other modern technologies.'
    },
    {
        title: 'Backend Development',
        icon: <FaServer />,
        description: 'Creating robust and secure server-side logic, RESTful APIs, and database management solutions.'
    },
    {
        title: 'UI/UX Design',
        icon: <FaPaintBrush />,
        description: 'Designing intuitive and visually appealing user interfaces using Figma to ensure an optimal user experience.'
    },
    {
        title: 'Responsive Design',
        icon: <FaMobileAlt />,
        description: 'Developing websites that look great and function perfectly on any device, from desktops to smartphones.'
    }
];

const Services = () => {
    return (
        <section id="services" className="section services-section">
            <div className="container">
                <h2 className="section-title text-center text-gradient mb-5">What I Do</h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card glass-card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
