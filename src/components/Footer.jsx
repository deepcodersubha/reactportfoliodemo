import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'
import './FooterStyle.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footerContainer">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: '2rem' }} />
                        <div>
                            <p>
                                00/01 Weber's Street
                            </p>
                            <p>Designia</p>
                        </div>
                    </div>

                    <div className="phone">
                        <h4> <FaPhone size={20} style={{ color: "#fff", marginRight: '2rem' }} />
                            000110110001
                        </h4>
                    </div>

                    <div className="email">
                        <h4> <FaMailBulk size={20} style={{ color: "#fff", marginRight: '2rem' }} />
                            coder@info.com
                        </h4>
                    </div>


                </div>

                <div className="right">
                    <h4>About This Coder</h4>
                    <p>My name is Coder. I love making websites and creating new designs.</p>
                    <div className="social">

                        <FaFacebook size={30} style={{ color: "#fff", marginRight: '1rem' }} />

                        <FaTwitter size={30} style={{ color: "#fff", marginRight: '1rem' }} />

                        <FaLinkedin size={30} style={{ color: "#fff", marginRight: '1rem' }} />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
