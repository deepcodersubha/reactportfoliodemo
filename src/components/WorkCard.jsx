import React from 'react'
import "./WorkCardStyles.css"
import pro1 from "../assets/project1.png";
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="projectCard">
      <img src={props.imgsrc} alt="image" className='' />
      <h2 className="projectTitle">{props.title}</h2>
      <div className="proDetails">
        <p>{props.text}</p>
      </div>
      <div className="proBtns">
        <NavLink to={props.view} className="btn">View</NavLink>
        <NavLink to={props.source} className="btn">Source</NavLink>
      </div>
    </div>
  )
}

export default WorkCard
