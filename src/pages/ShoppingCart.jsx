import { useNavigate } from "react-router-dom";
import Botao from "../components/itens/Botao";

const ShoppingCard = () => {
    const navigate = useNavigate();
    const handlerHome = () => {
        console.log('clicoi')
        navigate('/home')
    }
    return (
        <div>
            <Botao classP={"back-to-home"} texto={'back to home'} funcao={handlerHome} />
        </div>
    )
}

export default ShoppingCard;