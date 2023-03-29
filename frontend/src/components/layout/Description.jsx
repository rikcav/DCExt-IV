import React from 'react';
import './style.css';

function About(props) {
    const circleClass = `circle ${props.circleColor}`;
  return (
    <div>
     <div className='desc'>{props.description}</div>
      <div className='circle-container'>
        <div className={circleClass}>
          <img src={props.imageUrl} alt={props.imageAltText}/>
        </div>
        <div className='desc2'>{props.description2}</div>
      </div>
      </div>
  );
}

export default About;
