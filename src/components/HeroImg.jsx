import "./HeroImgStyle.css";
import React from 'react'
import IntroImg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom";

const HeroImg = () => {
    return (
        <div className="hero">

            <div className="mask">
                <img src={IntroImg} alt="IntroImg" className="intro-img" />
            </div>

            <div className="content">
                <p>HI, I'M A FREELANCER.</p>
                <h1>Front End Developer</h1>
                <div>
                    <Link to="/project" className="btn">Projects</Link>
                    <Link to="/contact" className="btn-light">Contact</Link>
                </div>    
            </div>

            
        </div>
    )
}

export default HeroImg
