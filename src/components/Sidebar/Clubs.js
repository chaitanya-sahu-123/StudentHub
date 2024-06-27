import React from 'react';
import './Clubs.css';

const Clubs = () => {
    const clubs = [
        {
            name: "Programming Club",
            head: "John Doe",
            contact: "john.doe@example.com"
        },
        {
            name: "Design Club",
            head: "Jane Smith",
            contact: "jane.smith@example.com"
        },
        {
            name: "Sports Club",
            head: "Mike Johnson",
            contact: "mike.johnson@example.com"
        },
        {
            name: "Literature Club",
            head: "Emily Brown",
            contact: "emily.brown@example.com"
        },
        {
            name: "Photography Club",
            head: "Michael Lee",
            contact: "michael.lee@example.com"
        },
        {
            name: "Debate Club",
            head: "Sophia Martinez",
            contact: "sophia.martinez@example.com"
        },
        {
            name: "Music Club",
            head: "Daniel Wilson",
            contact: "daniel.wilson@example.com"
        },
        
        {
            name: "Environmental Club",
            head: "Andrew Taylor",
            contact: "andrew.taylor@example.com"
        },
        {
            name: "Chess Club",
            head: "Ethan Scott",
            contact: "ethan.scott@example.com"
        }
        // Add more clubs as needed
    ];

    return (
        <div className="container">
            <div className="header">
                <h1>Clubs</h1>
                <p>Explore and connect with college clubs</p>
            </div>
            <div id="clubs">
                {clubs.map((club, index) => (
                    <div className="club" key={index}>
                        <h3>{club.name}</h3>
                        <p><strong>Club Head:</strong> {club.head}</p>
                        <p><strong>Contact:</strong> {club.contact}</p>
                        {/* <a href="https://www.ecell.in/mainpage/home" className='learn-more-btn'>Learn More</a> */}
                        <a href="https://www.ecell.in/mainpage/home" className="learn-more-btn" target="_blank" rel="noopener noreferrer">Learn More</a>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Clubs;
