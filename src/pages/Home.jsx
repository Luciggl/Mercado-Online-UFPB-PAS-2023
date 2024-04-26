import { UserContext } from "../context/user-context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Botao from "../components/itens/Botao";
import Cabecalho from "../components/itens/Cabecalho/Cabecalho.jsx"
import CardItems from "../components/itens/card-itens/CardsItens.jsx";
import imagemP from "../assets/imgs/logo.png"
import './Home.css'

const Home = () => {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handlerSair = () => {
        const result = window.confirm('Você realmente deseja sair?')
        if (result) {
            setUser(null)
            navigate('/login')
        }
    }

    return (
        <>
            <Cabecalho />
            <div className="home-container">
                <CardItems ProdutoImg={imagemP} titulo={'test'} descricao={'sla isso é uma descrição'} valor={12.50} avaliacao={2} />
                <h2>Home</h2>
                <p>Olá, {user}</p>
                <Botao texto={'Sair'} funcao={handlerSair} />
            </div>
        </>
    );
};

export default Home;