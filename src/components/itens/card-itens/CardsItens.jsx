import './CardItens.css'
import Botao from '../Botao';
import StarRating from '../starRating/StarRating';

const CardItems = ({ ProdutoImg, titulo, descricao,
    valor, avaliacao }) => {
    const addCart = () => {
        console.log("add to cart")
    }
    return (
        <div className="container-cardItens">
            <img src={ProdutoImg} />
            <h2>{titulo}</h2>
            <p>{descricao}</p>
            <div className="item-details">
                <div className="price-and-button">
                    <h3>R$: {valor}</h3>
                    <Botao
                        classP={"add-cart-btn"}
                        texto={'+'}
                        funcao={addCart} />
                </div>
            </div>
            <h2><StarRating rating={avaliacao}/></h2>
        </div>
    )
}

export default CardItems;