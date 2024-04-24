import { UserContext } from "../context/user-context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Botao from "../components/itens/Botao";
import Cabecalho from "../components/Cabecalho.jsx"

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
        <div className="home-container">
            <Cabecalho />
            <h2>Home</h2>
            <p>Olá, {user}</p>
            <Botao texto={'Sair'} funcao={handlerSair} />
        </div>
    );
};

export default Home;