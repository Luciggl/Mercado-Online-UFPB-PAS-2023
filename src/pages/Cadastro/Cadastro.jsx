import { useState } from "react";
import CampoTexto from "../../components/itens/CampoTexto";
import Botao from "../../components/itens/Botao";
import { useNavigate } from "react-router-dom";
import './cadastro.css'

const Cadastro = () => {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [endereco, setEndereco] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleCadastro = () => {
        if (!nome.trim()) {
            setError("Por favor, insira um nome.");
            return;
        }

        if (!sobrenome.trim()) {
            setError("Por favor, insira um sobrenome.");
            return;
        }

        if (!email.trim()) {
            setError("Por favor, insira um email.");
            return;
        }

        if (!endereco.trim()) {
            setError("Por favor, insira um endereço.");
            return;
        }

        if (!senha.trim()) {
            setError("Por favor, insira uma senha.");
            return;
        }

        if (senha.length < 8) {
            setError("A senha deve conter pelo menos 8 caracteres.");
            return;
        }

        if (senha !== confirmarSenha) {
            setError("As senhas não coincidem.");
            return;
        }
        navigate('/login');
    }
    const handlerLogin = () => {
        navigate('/login')
    }
    return (
        <div className="cadastro-container">
            <h2>Cadastro</h2>
            <CampoTexto tipo={"text"} textoExibir={"Nome"} valor={nome} funcao={setNome} />
            <CampoTexto tipo={"text"} textoExibir={"Sobrenome"} valor={sobrenome} funcao={setSobrenome} />
            <CampoTexto tipo={"email"} textoExibir={"Email"} valor={email} funcao={setEmail} />
            <CampoTexto tipo={"text"} textoExibir={"Endereço"} valor={endereco} funcao={setEndereco} />
            <CampoTexto tipo={"password"} textoExibir={"Senha"} valor={senha} funcao={setSenha} />
            <CampoTexto tipo={"password"} textoExibir={"Confirmar Senha"} valor={confirmarSenha} funcao={setConfirmarSenha} />
            {error && <div className="error">{error}</div>}
            <Botao texto={'Cadastrar'} funcao={handleCadastro} />
            <Botao texto={'Login'} funcao={handlerLogin} />
        </div>
    );
};

export default Cadastro;
