import Cabecalho from "../components/itens/Cabecalho/Cabecalho.jsx"
import CardItems from "../components/itens/card-itens/CardsItens.jsx";
import AlfaceImg from "../assets/imgs/alface.png"
import PimentaImg from "../assets/imgs/pimenta.png"
import BatataImg from "../assets/imgs/batata.png"
import BerinjelaImg from "../assets/imgs/berinjela.png"
import CouveFlorImg from "../assets/imgs/colveFlor.png"
import MacaVerdeImg from "../assets/imgs/macaVerde.png"
import MangaImg from "../assets/imgs/manga.png"
import MilhoImg from "../assets/imgs/milho.png"
import PepinoImg from "../assets/imgs/pepino.png"
import PimentaoImg from "../assets/imgs/Pimentao.png"
import PimentaVerdeImg from "../assets/imgs/PimentaVerde.png"

import './Home.css'

const Home = () => {
    return (
        <>
            <Cabecalho />
            <div className="home-container">
                <CardItems ProdutoImg={PimentaImg} titulo={'Pimenta'} descricao={'Pimenta vermelha da África do Sul'} valor={3.99} avaliacao={4} />
                <CardItems ProdutoImg={AlfaceImg} titulo={'Alface'} descricao={'Alface fresca e crocante'} valor={1.99} avaliacao={5} />
                <CardItems ProdutoImg={BatataImg} titulo={'Batata'} descricao={'Batata branca de ótima qualidade'} valor={2.49} avaliacao={3} />
                <CardItems ProdutoImg={BerinjelaImg} titulo={'Berinjela'} descricao={'Berinjela roxa de tamanho médio'} valor={2.99} avaliacao={4} />
                <CardItems ProdutoImg={CouveFlorImg} titulo={'Couve-Flor'} descricao={'Couve-flor fresca e branca'} valor={3.99} avaliacao={5} />
                <CardItems ProdutoImg={MacaVerdeImg} titulo={'Maçã Verde'} descricao={'Maçã verde fresca e suculenta'} valor={0.99} avaliacao={3} />
                <CardItems ProdutoImg={MangaImg} titulo={'Manga'} descricao={'Manga madura e doce'} valor={1.49} avaliacao={4} />
                <CardItems ProdutoImg={MilhoImg} titulo={'Milho'} descricao={'Milho fresco e amarelo'} valor={0.79} avaliacao={3} />
                <CardItems ProdutoImg={PimentaVerdeImg} titulo={'Pimenta Verde'} descricao={'Pimenta verde doce'} valor={1.99} avaliacao={4} />
                <CardItems ProdutoImg={PimentaoImg} titulo={'Pimentão'} descricao={'Pimentão vermelho e suculento'} valor={2.99} avaliacao={4} />
            </div>

        </>
    );
};

export default Home;