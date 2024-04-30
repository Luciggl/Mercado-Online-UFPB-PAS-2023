/* eslint-disable react/prop-types */
const CampoTexto = ({ tipo, textoExibir, valor, funcao }) => {
    return (
        <input
            type={tipo}
            placeholder={textoExibir}
            value={valor}
            onChange={(e) => funcao(e.target.value)}
        />
    )
}

export default CampoTexto;