import { useState } from "react";
import Botao from "./itens/Botao";
import CampoTexto from "./itens/CampoTexto";
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
                <CampoTexto
                    tipo={'text'}
                    textoExibir={'Search'}
                    valor={pesquisaTexto}
                    funcao={setPesquisaTexto}
                    className="pesquisa-input"
                />
                <Botao
                    classP={'pesquisa-button'}
                    texto={'Search'}
                    funcao={handlerSearch}
                />
            </div>
                {error && <div className="error">{error}</div>}
        </div>
    );
};

export default Pesquisa;
