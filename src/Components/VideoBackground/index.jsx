import React from 'react';
import "./style.css"
import NavbarEl from '../NavbarEl';
import "../../app.css"

const VideoBackground = () => {
    return (
        <header className='header'>
            <div className="video-background">
                <video autoPlay loop muted>
                    <source src="/imgs/final-header-video.mp4" type="video/mp4" />
                </video>
                <div className='navbar-container'>
                    <NavbarEl />
                </div>
                <div className='text-center beige-text scroll-text'>
                    <p>Scroll for more</p>
                    <i className="fa-solid fa-angles-down fa-bounce fa-2xl"></i>
                </div>
            </div>
        </header>

    );
};

export default VideoBackground;