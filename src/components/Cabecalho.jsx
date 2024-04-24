import Pesquisa from './Pesquisa';
import logo from '../assets/imgs/logo.png';
import Botao from './itens/Botao';
import './Cabecalho.css'
import { useNavigate } from 'react-router-dom';

const Cabecalho = () => {
    const navigate = useNavigate();
    const handlerLogin = () => {
        navigate('/login')
    }
    return (
        <nav className='container-logo'>
            <div className="logoPesquisa">
                <img src={logo} />
                <Pesquisa />
            </div>
            <Botao classP={'button'} texto={'Login'} funcao={handlerLogin} />
        </nav>
    )
}

export default Cabecalho;