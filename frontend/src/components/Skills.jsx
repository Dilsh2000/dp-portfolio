import React from 'react';
import './Skills.css';
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaGithub, FaPhp, FaPython } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiJavascript, SiTypescript, SiFigma } from 'react-icons/si';

const skills = [
    { name: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
    { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" /> },
    { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
    { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
    { name: 'React', icon: <FaReact color="#61DAFB" /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss color="#06B6D4" /> },
    { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
    { name: 'Express.js', icon: <SiExpress color="#FFFFFF" /> },
    { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
    { name: 'SQL', icon: <FaDatabase color="#f29111" /> },
    { name: 'Git & GitHub', icon: <FaGithub color="#ffffff" /> },
    { name: 'PHP', icon: <FaPhp color="#777BB4" /> },
    { name: 'Python', icon: <FaPython color="#3776AB" /> },
    { name: 'Figma', icon: <SiFigma color="#F24E1E" /> },
];

const Skills = () => {
    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <h2 className="section-title text-center text-gradient mb-5">Technical Skills</h2>
                <div className="skills-grid fade-in-up">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-card glass-card">
                            <div className="skill-icon">{skill.icon}</div>
                            <h4 className="skill-name">{skill.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
