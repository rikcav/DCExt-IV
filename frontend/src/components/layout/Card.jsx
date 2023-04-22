import React from 'react';
import './style.css';

function Card({id, name, description, category, image, link, type}) {
    return(
        <div className='card'>
            <div className="content">
                <div className='body-card'>
                    <div className='title'>
                        <span>{name}</span>
                    </div>
                    <div className='description'>
                        <p><span style={{ color: "#274E87", fontWeight: "bold" }}>Descrição: </span>{description}</p>
                    </div>
                    <div className='category'>
                        <p><span style={{ color: "#274E87", fontWeight: "bold" }}>Categoria: </span>{category}</p>
                        
                    </div>

                    <div className='type' style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <p><span style={{ color: "#274E87", fontWeight: "bold" }}>Tipo: </span>{type}</p>
                        
                    </div>
                    <div className='link' style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <p style={{ color: "#274E87", fontWeight: "bold", margin: 0, marginRight: "10px" }}>Acesse:</p>
                        <a style={{ fontStyle: "italic" }} href={link} target='_blank'>link</a>
                        
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