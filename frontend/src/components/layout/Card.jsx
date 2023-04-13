import React from 'react';
import './style.css';

function Card({id, name, description, category, image, link,}) {
    return(
        <div className='card'>
            <div className="content">
                <div className='body-card'>
                    <div className='title'>
                        <span>{name}</span>
                    </div>
                    <div className='description'>
                        <p>{description}</p>
                    </div>
                    <div className='category'>
                        <span>{category}</span>
                    </div>
                    <div className='link'>
                        <a href={link} target='_blank'>Saiba mais!</a>
                    </div>
                </div>
                <div className='image'>
                    <img src={image}/>
                </div>
            </div>
        </div>
    )
}

export default Card