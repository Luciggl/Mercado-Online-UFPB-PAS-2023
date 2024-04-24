import { UserContext } from "../context/user-context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Botao from "../components/itens/Botao";

const Home = () => {
    const {user,setUser} = useContext(UserContext);
    const navigate = useNavigate();

    const handlerSair = () =>{
        setUser(null)
        navigate('/login')
    }

    return (
        <div className="home-container">
            <h2>Home</h2>
            <p>Olá, {user}</p>
            <Botao texto={'Sair'} funcao={handlerSair}/>
        </div>
    );
};

export default Home;