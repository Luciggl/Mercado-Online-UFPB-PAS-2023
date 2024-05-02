/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import './Pagination.css'; // Importe o arquivo de estilos CSS para a paginação

const Pagination = ({ produtosPorPagina, totalProdutos, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProdutos / produtosPorPagina); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <button onClick={() => paginate(number)} className='page-link'>
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
