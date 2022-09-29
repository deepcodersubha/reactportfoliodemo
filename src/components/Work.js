import React from 'react'
import "./WorkCardStyles.css"
import WorkCard from './WorkCard';
import WorkCardData from './workCardData';
const Work = () => {
    return (
        <div className='workContainer'>
            <h1 className="projectHeading">Projects</h1>
            <div className="projectContainer">
                {WorkCardData.map((val, ind) => {
                    return (
                        <WorkCard 
                        key={ind}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        text={val.text}
                        view={val.view}
                        source={val.source}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Work;
