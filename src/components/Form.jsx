import "./FormStyle.css"

import React from 'react'

const Form = () => {
    return (
        <div className="form">

            <form action="">

                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" />
                
                <label htmlFor="name">Email</label>
                <input type="email" id="email" />

                <label htmlFor="msg">Message</label>
                <textarea id="msg" rows="6" placeholder="Type Your Message Here" />

                <button className="btn">Submit</button>
            </form>

        </div>
    )
}

export default Form
