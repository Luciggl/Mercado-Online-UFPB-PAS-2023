/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './CardItens.css';
import Botao from '../Botao';
import StarRating from '../starRating/StarRating';

const CardItems = ({ ProdutoImg, titulo, descricao, valor, avaliacao, adicionarAoCarrinho }) => {
    const [showDialog, setShowDialog] = useState(false);

    const addCart = () => {
        adicionarAoCarrinho(titulo); // Chama a função adicionarAoCarrinho com o título do produto
        console.log('Produto adicionado ao carrinho:', titulo); // Adiciona este console.log para verificar se a função é chamada
        setShowDialog(true); // Mostra a caixa de diálogo quando o produto é adicionado ao carrinho
        setTimeout(() => setShowDialog(false), 2000); // Fecha a caixa de diálogo após 2 segundos
    };

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
            {showDialog && (
                <div className="dialog">
                    Produto adicionado ao carrinho!
                </div>
            )}
        </div>
    );
}

export default CardItems;
