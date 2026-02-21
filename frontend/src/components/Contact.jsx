import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        // NOTE: In a real app, replace with actual EmailJS keys
        emailjs.sendForm('service_pb59ezk', 'template_bcvu67w', form.current, '331kVfeqk7G1nDpBT')
            .then((result) => {
                setStatus('success');
                form.current.reset();
                setTimeout(() => setStatus(''), 3000);
            }, (error) => {
                console.error("EmailJS Error:", error);
                alert("EmailJS Error: " + (error.text || error.message || JSON.stringify(error)));
                setStatus('error');
                setTimeout(() => setStatus(''), 3000);
            });
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <h2 className="section-title text-center text-gradient mb-5">Get In Touch</h2>

                <div className="contact-content">
                    <div className="contact-info glass-card fade-in-up">
                        <h3 className="mb-4">Let's connect</h3>
                        <p className="mb-4 text-muted">Whether you have a question, a project offer, or just want to say hi, feel free to drop a message!</p>

                        <div className="info-item">
                            <div className="info-icon"><FaEnvelope /></div>
                            <span>dp2000dilshan@gmail.com</span>
                        </div>
                        <div className="info-item">
                            <div className="info-icon"><FaPhoneAlt /></div>
                            <span>+94717753205</span>
                        </div>
                        <div className="info-item">
                            <div className="info-icon"><FaMapMarkerAlt /></div>
                            <span>Sri Lanka</span>
                        </div>

                        <div className="admin-link-wrapper mt-5">
                            <a href="/login" className="admin-link">Admin Login</a>
                        </div>
                    </div>

                    <div className="contact-form-wrapper glass-card fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <form ref={form} onSubmit={sendEmail} className="contact-form">
                            <div className="form-group mb-3">
                                <input type="text" name="user_name" className="form-control" placeholder="Your Name" required />
                            </div>
                            <div className="form-group mb-3">
                                <input type="email" name="user_email" className="form-control" placeholder="Your Email" required />
                            </div>
                            <div className="form-group mb-4">
                                <textarea name="message" className="form-control" rows="5" placeholder="Your Message" required></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary w-100" disabled={status === 'sending'}>
                                {status === 'sending' ? 'Sending...' : <><FaPaperPlane style={{ marginRight: '8px' }} /> Send Message</>}
                            </button>

                            {status === 'success' && <p className="status-msg success mt-3">Message sent successfully!</p>}
                            {status === 'error' && <p className="status-msg error mt-3">Failed to send message. Please try again.</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
