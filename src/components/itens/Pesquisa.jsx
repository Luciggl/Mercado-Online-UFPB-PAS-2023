import { useState } from "react";
import Botao from "./Botao";
import CampoTexto from "./CampoTexto";

const Pesquisa = () => {
    const [pesquisaTexto, setPesquisaTexto] = useState('');
    const [error, setError] = useState('')

    const handlerSearch = () => {
        if (!pesquisaTexto.trim()) {
            setError("Por favor, insira o nome do produto desejado");
            return
        } else {
            setError('')
        }
    }
    return (
        <div>
            <CampoTexto tipo={'text'} textoExibir={'Search'} valor={pesquisaTexto} funcao={setPesquisaTexto} />
            <Botao texto={'Search'} funcao={handlerSearch} />
            {error && <div className="error">{error}</div>}
        </div>
    )
}

export default Pesquisa;