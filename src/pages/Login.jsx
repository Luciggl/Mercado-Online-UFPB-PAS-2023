import { useContext, useState } from "react";
import Botao from "../components/itens/Botao";
import CampoTexto from "../components/itens/CampoTexto";
import { UserContext } from "../context/user-context";
// import { useNavigate } from "react-router-dom";
import './login.css'

const Login = () => {
    const { setUser } = useContext(UserContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();


    const handlerLogin = () => {
        if (!username.trim()) {
            setError("Por favor, insira um nome de usuário.");
            return;
        }

        if (!password.trim()) {
            setError("Por favor, insira uma senha.");
            return;
        }

        if (password.length < 8){
            setError("A senha deve conter pelo menos 8 caracteres.");
            return;
        }

        setUser(username);
        // navigate('/home')
    }
    return (
        <div className="login-container">
            <h2>Login</h2>
            <CampoTexto tipo={"text"} textoExibir={"Username"} valor={username} funcao={setUsername} />
            <CampoTexto tipo={"password"} textoExibir={"password"} valor={password} funcao={setPassword} />
            {error && <div className="error">{error}</div>}
            <Botao texto={'Login'} funcao={handlerLogin} />
        </div>
    );
};

export default Login;