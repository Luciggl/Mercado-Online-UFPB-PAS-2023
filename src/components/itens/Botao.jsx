const Botao = ({texto, funcao}) => {
    return (
        <button className="button" onClick={funcao}>
            {texto}
        </button>
    )
}

export default Botao;