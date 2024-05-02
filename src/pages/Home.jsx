/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Cabecalho from "../components/itens/Cabecalho/Cabecalho.jsx"
import CardItems from "../components/itens/card-itens/CardsItens.jsx";
import produtos from "../components/produtos.jsx";
import NavInfo from "../components/navs/navInfo.jsx";
import Banner from "../components/itens/Banner.jsx"
import Pagination from "../pages/Pagination.jsx" // Importe o componente de paginação

import './Home.css'

const Home = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [produtosPorPagina] = useState(5); // Defina o número de produtos por página

    // Obtenha os índices dos produtos a serem exibidos na página atual
    const indexOfLastProduto = currentPage * produtosPorPagina;
    const indexOfFirstProduto = indexOfLastProduto - produtosPorPagina;
    const produtosAtuais = produtos.slice(indexOfFirstProduto, indexOfLastProduto);

    // Altere de página
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <>
            <Cabecalho />
            <Banner
                imagePath1="src/assets/imgs/BannerPromo.png"
                altText1="Promo Banner"
                imagePath2="src/assets/imgs/image.png"
                altText2="Image"
            />

            <NavInfo />
            <div className="home-container">
                {produtosAtuais.map(produto => (
                    <CardItems
                        key={produto.id}
                        ProdutoImg={produto.image}
                        titulo={produto.title}
                        descricao={produto.descricao}
                        valor={produto.valor}
                        avaliacao={produto.avaliacao}
                    />
                ))}
            </div>
            <Pagination
                produtosPorPagina={produtosPorPagina}
                totalProdutos={produtos.length}
                paginate={paginate}
            />
        </>
    );
};

export default Home;
