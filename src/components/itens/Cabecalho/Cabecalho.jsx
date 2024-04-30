import { useState, useEffect } from 'react';
import { ShoppingBagIcon, MenuIcon, MapPin, CircleUser } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../context/user-context';
import NavLink from '../../navs/navLinks';
import Pesquisa from '../../Pesquisa';
import logo from '../../../assets/imgs/logo.png';
import Botao from '../Botao';
import './Cabecalho.css';


const Cabecalho = () => {
    const [userLocation, setUserLocation] = useState(null);
    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    useEffect(() => {
        // Verifica se o navegador suporta geolocalização
        if ("geolocation" in navigator) {
            // Obtém a posição atual do usuário
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    // Chama a função para obter o nome do local a partir das coordenadas
                    getLocationName(position.coords.latitude, position.coords.longitude);
                },
                (error) => {
                    console.error("Erro ao obter a localização:", error);
                }
            );
        } else {
            console.log("Geolocalização não é suportada pelo navegador.");
        }
    }, []);

    // Função para obter o nome do local a partir das coordenadas de latitude e longitude
    const getLocationName = (latitude, longitude) => {
        // Chamada para a API de geocodificação reversa (substitua pela sua própria chave de API)
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=393e8068768e44f4ac99cc3eb219f95d`)
            .then(response => response.json())
            .then(data => {
                const location = data.results[0]?.formatted;
                setUserLocation(location);
            })
            .catch(error => {
                console.error('Erro ao obter o nome do local:', error);
            });
    };



    // Navegar para a página de login
    const handlerLogin = () => {
        navigate('/login');
    };

    // Navegar para a página do carrinho
    const handlerCarrinho = () => {
        navigate('/shop');
    };



    // Navegar para a página de erro
    const handlerError = () => {
        navigate('/error');
    };

    const estaLogado = () => {
        if (!user) {
            return (
                <Botao classP={'button'} texto={'Login'} funcao={handlerLogin} />

            )
        } else {
            return (
                <div className='buttons'>
                    <Botao classP={'button'} texto={<ShoppingBagIcon />} funcao={handlerCarrinho} />
                    <Botao classP={'button-perfil'} texto={<CircleUser />} funcao={handlerError} />
                </div>
            )
        }
    }

    return (
        <>
            <div className="locate">
                {userLocation && <p><MapPin size={16} /> {userLocation}</p>}
            </div>
            <nav className='container-logo'>
                {/* Se houver uma localização definida, exibe o nome do local */}
                <div className="logoPesquisa">
                    <MenuIcon />
                    <a href="/home"><img src={logo} alt="Logo" /></a>
                </div>
                <div>
                    <Pesquisa />
                </div>
                {estaLogado()}
            </nav>
            <div>
                <br />
                <NavLink />
            </div>
        </>
    );
};


export default Cabecalho;
