import { Children, createContext, useState } from "react";

import {  useContext } from 'react'; 
export const ProdutosContext = createContext();

export const ProdutosProvider = ({ children }) => {
    const [listProdutos, setProdutosLista] = useState([]);

    function addToCart(id) {
        const listProdutosCopia = [...listProdutos];

        const item = listProdutosCopia.find((produto) => produto.id === id);

        if (!item) {
            listProdutosCopia.push({ id: id, qnt: 1 });
        } else {
            item.qnt = item.qnt + 1;
        }

    }

    function removeToCart(id) {
        const listProdutosCopia = [...listProdutos];

        const item = listProdutosCopia.find((produto) => produto.id === id);

        if (item.qnt > 1) {
            item.qnt = item.qnt - 1;
            setProdutosLista(listProdutosCopia)
        } else {
            const ListaFiltrada = listProdutosCopia.filter(produto => produto.id !== id);
            setProdutosLista(ListaFiltrada);
        }
    }

    function clearCart() {
        setProdutosLista([]);
    }

    return (
        <ProdutosContext.Provider value={{ listProdutos, addToCart, removeToCart, clearCart }}>
            {children} 
        </ProdutosContext.Provider>
    );
};