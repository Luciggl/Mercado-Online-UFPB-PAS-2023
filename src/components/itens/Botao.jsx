const Botao = ({classP, texto, funcao}) => {
    return (
        <button className={classP} onClick={funcao}>
            {texto}
        </button>
    )
}

export default Botao;