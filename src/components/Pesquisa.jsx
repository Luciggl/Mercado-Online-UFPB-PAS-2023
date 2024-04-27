import { useState } from "react";
import Botao from "./itens/Botao";
import "./Pesquisa.css";

const Pesquisa = () => {
    const [pesquisaTexto, setPesquisaTexto] = useState('');
    const [error, setError] = useState('');

    const handlerSearch = () => {
        if (!pesquisaTexto.trim()) {
            setError("Por favor, insira o nome do produto desejado");
        } else setError('');
    };

    return (
        <div className="container">
            <div className="pesquisa-container">
                <input
                    type="text"
                    placeholder="Pesquise Aqui"
                    value={pesquisaTexto}
                    onChange={(e) => setPesquisaTexto(e.target.value)}
                    className="pesquisa-input"
                />
                <Botao
                    classP={'pesquisa-button'}
                    texto={'Pesquisar'}
                    funcao={handlerSearch}
                />
            </div>
            {error && <div className="error">{error}</div>}
        </div>
    );
};

export default Pesquisa;
