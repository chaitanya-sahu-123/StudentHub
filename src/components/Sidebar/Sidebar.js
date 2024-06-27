import React from 'react';
import './Sidebar.css';
import { Public, AccountCircle, Announcement, Group, Dashboard } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar-container">
                <div className="sidebar-options">
                    <div className="sidebar-option">
                        <NavLink to="/">Home</NavLink>
                    </div>
                    <div className="sidebar-option">
                        <NavLink to="#">PUBLIC</NavLink>
                        <div className="link">
                            <div className="link-tag">
                                <Public />
                                <NavLink to="/questions">Questions</NavLink>
                            </div>
                            <div className="tags">
                                <NavLink to="/tags" className="mt-1 mb-1">Tags</NavLink>
                            </div>
                            <div className="link-tag">
                                <AccountCircle />
                                <NavLink to="/profile">Profile</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-option">
                        <NavLink to="#">MORE</NavLink>
                        <div className="link">
                            <div className="link-tag">
                                <Announcement />
                                <NavLink to="/announcements">Announcements</NavLink>
                            </div>
                            <div className="link-tag">
                                <Group />
                                <NavLink to="/clubs">Clubs</NavLink>
                            </div>
                            <div className="link-tag">
                                <Dashboard />
                                <NavLink to="/boards">Boards</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
