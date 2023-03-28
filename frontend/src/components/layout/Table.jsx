import React from 'react';
import './Style.css';
import { useState } from 'react';
import Modal from '../layout/Modal';

function Table({ valor }) {

    const [openModal, setOpenModal] = useState(false);

    return(
        <div className='div-table'>
            {openModal ? <Modal closeModal={setOpenModal}/>
                : <div>
                    <table className="table">
                <thead>
                    <tr>
                        <th>Tipo</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Categoria</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        valor?.length ? valor.map((data, index) =>
                        <tr key={index}>
                            <td>{data.tipo}</td>
                            <td>{data.nome}</td>
                            <td>{data.descricao}</td>
                            <td>{data.categoria}</td>
                            <td>
                                <button onClick={() => {
                                    setOpenModal(true);
                                }}>Abrir</button>
                            </td>
                        </tr>
                        ) : <tr>
                            <td>Nada</td>
                        </tr>
                    }
                </tbody>
            </table>  
                </div>
            }   
        </div>
    )
}

export default Table;