import React from 'react';
import './Style.css';

function Table() {
    return(
        <div>
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
                    <tr>
                        <td>aaaaaaaaaaaaa</td>
                        <td>aaaaaaaaaaaaaaaaa</td>
                        <td>ssssssssssssss</td>
                        <td>ssssssssssssssssssss</td>
                        <td>
                            <button>Abrir</button>
                        </td>
                    </tr>
                </tbody>
            </table>         
        </div>
    )
}

export default Table;