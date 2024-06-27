import React from 'react';
import './Boards.css';

export default function Boards() {
    const handleRegisterClick = () => {
        window.location.href = 'https://sac.iitd.ac.in/'; // Redirect to Gmail
    };
    return (
        <div className="container">
            <div className="header">
                <h1>College Boards</h1>
                <p>Explore various boards and their activities</p>
            </div>
            <div id="boards">
                <div className="board">
                    <h3>Training and Placement Board</h3>
                    <p>Details about training programs, job placements, and career guidance.</p>
                    <button className="register-button" onClick={handleRegisterClick}>Register Now</button>
                </div>
                <div className="board">
                    <h3>Arts and Culture Board</h3>
                    <p>Information on cultural events, art exhibitions, and creative workshops.</p>
                    <button className="register-button" onClick={handleRegisterClick}>Register Now</button>
                </div>
                <div className="board">
                    <h3>Science Board</h3>
                    <p>Activities related to scientific research, experiments, and seminars.</p>
                    <button className="register-button" onClick={handleRegisterClick}>Register Now</button>
                </div>
                <div className="board">
                    <h3>Coding and Development Board</h3>
                    <p>Workshops, hackathons, and projects related to coding and software development.</p>
                    <button className="register-button" onClick={handleRegisterClick}>Register Now</button>
                </div>
                <div className="board">
                    <h3>AI and ML Board</h3>
                    <p>Events and discussions on artificial intelligence and machine learning.</p>
                    <button className="register-button" onClick={handleRegisterClick}>Register Now</button>
                </div>
                <div className="board">
                    <h3>Public Relations Board</h3>
                    <p>Activities related to media relations, public image management, and communications.</p>
                    <button className="register-button" onClick={handleRegisterClick}>Register Now</button>
                </div>
            </div>
        </div>
    );
}
