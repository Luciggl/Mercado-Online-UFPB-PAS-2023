import Pesquisa from './itens/Pesquisa';
import logo from '../assets/imgs/logo.png';
import Botao from './itens/Botao';
import './Cabecalho.css'
// import { useNavigate } from 'react-router-dom';

const Cabecalho = () => {
    // const navigate = useNavigate();
    const handlerLogin = () => {
        { alert('vc clicou em login') }
        // navigate('/login')
    }
    return (
        <nav className='container-logo'>
            <div className="logoPesquisa">
                <img src={logo} />
                <Pesquisa />
            </div>
            <Botao texto={'Login'} funcao={handlerLogin} />
        </nav>
    )
}

export default Cabecalho;