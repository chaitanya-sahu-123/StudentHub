import React from 'react';
import './Announcements.css';

const Announcements = () => {
    const announcements = [
        {
            title: "Upcoming Hackathon",
            description: "Join us for an exciting 24 hour hackathon event on July 15th. Explore new technologies and win exciting prizes!",
            date: "July 15, 2024"
        },
        {
            title: "Webinar on AI in Healthcare",
            description: "Learn about the impact of AI in healthcare. Experts from the industry will share their insights and experiences.",
            date: "July 5, 2024"
        },
        {
            title: "Career Fair 2024",
            description: "Participate in our annual career fair where top companies will be looking for talented individuals like you.",
            date: "August 10, 2024"
        },
        {
            title: "Workshop on Digital Marketing",
            description: "Master the art of digital marketing. Join our workshop to learn strategies for effective online campaigns.",
            date: "July 20, 2024"
        },
        {
            title: "Coding Bootcamp",
            description: "Enhance your coding skills with our intensive bootcamp. Prepare for real-world challenges and career growth.",
            date: "July 25, 2024"
        },
        {
            title: "Tech Conference 2024",
            description: "Save the date for our annual tech conference. Network with industry leaders and explore the latest trends.",
            date: "September 5, 2024"
        },
        {
            title: "Panel Discussion on Entrepreneurship",
            description: "Join our panel discussion featuring successful entrepreneurs. Gain insights into starting and scaling businesses.",
            date: "July 15, 2024"
        },
        {
            title: "Seminar on Blockchain Technology",
            description: "Discover the potential of blockchain technology. Our seminar will cover its applications across various industries.",
            date: "August 1, 2024"
        },
        {
            title: "Virtual Reality Workshop",
            description: "Immerse yourself in the world of virtual reality. Experience hands-on demos and learn about VR technologies.",
            date: "July 30, 2024"
        },
        {
            title: "Data Science Summit",
            description: "Attend our data science summit to explore data-driven solutions and innovations. Don't miss out!",
            date: "August 15, 2024"
        }
        // Add more announcements as needed
    ];

    const handleRegisterClick = (event) => {
        // Replace with your actual registration URL
        window.open("https://unstop.com", "_blank");
    };

    return (
        <div className="container">
            <div className="header">
                <h1>Announcements</h1>
                <p>Stay updated with our latest events and workshops</p>
            </div>
            <div id="announcements">
                {announcements.map((announcement, index) => (
                    <div className="announcement" key={index}>
                        <h3>{announcement.title}</h3>
                        <p>{announcement.description}</p>
                        <p><strong>Date:</strong> {announcement.date}</p>
                        <button className="register-button" onClick={handleRegisterClick}>
                            Register Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Announcements;
