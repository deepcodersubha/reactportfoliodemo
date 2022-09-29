import React from 'react'
import { Link } from 'react-router-dom'
import React1 from "../assets/react1.jpg"
import React2 from "../assets/react2.webp"
import "./AboutContentStyle.css"

const AboutContent = () => {
    return (
        <div className='about'>
            <div className="left">
                <h1>Want to know Me?</h1>
                <p>I'm a React Developer. I create responsive designs using frameworks and vanilla methods as well.</p>
                <Link to="/contact">
                    <button className='btn'>Contact</button>
                </Link>
            </div>
            <div className="right">
                <div className="imgContainer">
                    <div className="imgStack top">
                        <img src={React1} alt="image1" className='img'/>
                    </div>
                    <div className="imgStack bottom">
                        <img src={React2} alt="image2" className='img'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent