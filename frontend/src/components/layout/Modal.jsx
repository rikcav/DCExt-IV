import React from 'react';
import './Style.css';

function Modal({ closeModal }) {
    return (
        <div className='modalBackground'>
            <div className='modalBox'>
                <span>Titulo</span>
                <p>Descrição</p>
                <span>Categoria</span>
                <span>Link</span>
                <button onClick={() => closeModal(false)}>FECHAR</button>
            </div>
        </div>
    )
}

export default Modal;