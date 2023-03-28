import React from 'react';
import './Style.css';
import { useEffect, useState } from 'react';

function Table({ valor }) {

    useEffect(() => {
        console.log(valor.length);
    }, [valor])

    return(
        <div className='div-table'>
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
                                <button>Abrir</button>
                            </td>
                        </tr>
                        ) : <tr>
                            <td>Nada</td>
                        </tr>
                    }
                </tbody>
            </table>         
        </div>
    )
}

export default Table;