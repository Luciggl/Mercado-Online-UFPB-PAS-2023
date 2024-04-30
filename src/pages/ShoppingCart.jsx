import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Botao from "../components/itens/Botao";
import CardItems from "../components/itens/card-itens/CardsItens";

const ShoppingCard = () => {
    const navigate = useNavigate();
    const [carrinho, setCarrinho] = useState([]);

    const adicionarAoCarrinho = (item) => {
        setCarrinho([...carrinho, item]);
        alert(`${item.title} adicionado ao carrinho!`);
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
            <h2 className="shopping-card-title">Seu Carrinho de Compras</h2>
            <div className="card-content">
                <ul className="item-list">
                    {carrinho.map((item, index) => (
                        <li className="item" key={index}>{item.title}</li>
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
                adicionarAoCarrinho={adicionarAoCarrinho} // Esta é a propriedade que deve ser passada corretamente
            />
        </div>
    );
};

export default ShoppingCard;
