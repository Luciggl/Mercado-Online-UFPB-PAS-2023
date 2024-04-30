/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import './CardItens.css';
import Botao from '../Botao';
import StarRating from '../starRating/StarRating';

const CardItems = ({ ProdutoImg, titulo, descricao, valor, avaliacao }) => {
    const addCart = () => {
        alert('Adicionado ao carrinho!!')
    }

    return (
        <div className="container-cardItens">
            <div className="container-img">
                <img src={ProdutoImg} alt={titulo} />
            </div>
            <div className="container-buttom">
                <h2>{titulo}</h2>
                <p>{descricao}</p>
                <div className="item-details">
                    <div className="price-and-button">
                        <h3>R$: {valor}</h3>
                        <Botao
                            classP={"add-cart-btn"}
                            texto={'+'}
                            funcao={addCart} />
                    </div>
                </div>
                <StarRating rating={avaliacao} />
            </div>
        </div>
    )
}

export default CardItems;
