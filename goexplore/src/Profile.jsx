import React from 'react';
import './Profile.css';

function Profile(){
    return (
        <div className="profile-page">
            <div className="profile-card">
                <div className="profile-picture">
                    <img 
                        src="https://imgs.search.brave.com/zbleVWffyy4PQ4KGG73ZGjuphdmY3BapVAC2r-i3ip8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saWZl/b2Z5b3V0dWJlci5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjMvMDMvTW9ua2V5/LU1hZ2ljLVlvdVR1/YmUtMTAyNHg1NzYu/anBn" 
                        alt="Profile" 
                        className="profile-img"
                    />
                </div>
                
                <h1 className="profile-name">Monkey Magic</h1>
                
                <p className="welcome-message">
                I explore the world on a budget, uncover hidden gems, and show you how to travel smart, save big, and live richly—without being rich. 
                New adventures every week!
                </p>
                
                <div className="stats-container">
                    <div className="stat-box">
                        <div className="stat-number">12</div>
                        <div className="stat-label">Trips Completed</div>
                    </div>
                    <div className="stat-box">
                        <div className="stat-number">8</div>
                        <div className="stat-label">Countries Visited</div>
                    </div>
                    <div className="stat-box">
                        <div className="stat-number">24</div>
                        <div className="stat-label">Cities Explored</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;