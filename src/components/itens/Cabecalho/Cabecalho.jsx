import Pesquisa from '../../Pesquisa';
import logo from '../../../assets/imgs/logo.png';
import Botao from '../Botao';
import './Cabecalho.css'
import { ShoppingBagIcon, MenuIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../context/user-context';
import NavLink from '../../navs/navLinks';

const Cabecalho = () => {
    const navigate = useNavigate();
    //navegar para pagina de login
    const handlerLogin = () => {
        navigate('/login')
    }
    //navegar para pagina de carrinho
    const handlerCarrinho = () => {
        navigate('/shop')
    }
    //navegar para pagina de erro
    const handlerError = () => {
        navigate('/error')
    }
    const { user } = useContext(UserContext)
    return (
        <>
            <nav className='container-logo'>
                <div className="logoPesquisa">
                    <MenuIcon />
                    <a href="/home"><img src={logo} /></a>
                </div>
                <div>
                    <Pesquisa />
                </div>
                <Botao classP={'button'} texto={user ? <ShoppingBagIcon /> : 'Login'} funcao={user ? handlerCarrinho : handlerLogin} />
            </nav>
            <div>
                <br />
                <NavLink />
            </div>
        </>
    )
}

export default Cabecalho;