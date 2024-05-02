/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Botao from "../components/itens/Botao";
import CardItems from "../components/itens/card-itens/CardsItens";

const ShoppingCard = () => {
    const navigate = useNavigate();
    const [carrinho, setCarrinho] = useState([]);
    const [showComingSoon, setShowComingSoon] = useState(true);

    useEffect(() => {
        // Esconder a mensagem de "Coming Soon" após 3 segundos
        const timer = setTimeout(() => {
            setShowComingSoon(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    const adicionarAoCarrinho = (item) => {
        // Use a função de atualização do estado para garantir que o estado anterior seja utilizado corretamente
        setCarrinho((carrinhoAnterior) => [...carrinhoAnterior, item]);
        alert(`${item.titulo} adicionado ao carrinho!`); // Ajuste para item.titulo
    };

    const handlerHome = () => {
        console.log('Clicou no botão voltar para casa');
        navigate('/home');
    };

    const produto = {
        ProdutoImg: "url_da_imagem",
        titulo: "Nome do Produto",
        descricao: "Descrição do Produto",
        valor: "Valor do Produto",
        avaliacao: 4.5
    };

    return (
        <div className="shopping-card-container">
            {showComingSoon && (
                <h1 style={{ textAlign: "center" }}>Coming Soon</h1>
            )}
            {!showComingSoon && (
                <>
                    <h2 className="shopping-card-title">Seu Carrinho de Compras</h2>
                    <div className="card-content">
                        <ul className="item-list">
                            {carrinho.map((item, index) => (
                                <li className="item" key={index}>{item.titulo}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="button-container">
                        <Botao classP={"back-to-home"} texto={'Voltar para casa'} funcao={handlerHome} />
                    </div>
                    <CardItems
                        ProdutoImg={produto.ProdutoImg}
                        titulo={produto.titulo}
                        descricao={produto.descricao}
                        valor={produto.valor}
                        avaliacao={produto.avaliacao}
                        adicionarAoCarrinho={adicionarAoCarrinho} // Verifique se esta propriedade está sendo passada corretamente
                    />
                </>
            )}
        </div>
    );
};

export default ShoppingCard;
