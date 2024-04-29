import Cabecalho from "../components/itens/Cabecalho/Cabecalho.jsx"
import CardItems from "../components/itens/card-itens/CardsItens.jsx";
import produtos from "../components/produtos.jsx";
import NavInfo from "../components/navs/navInfo.jsx";

import './Home.css'

const Home = () => {
    
    return (
        <>
            <Cabecalho />
            <NavInfo/>
            <div className="home-container">
                {produtos.map(produto => (
                    <CardItems
                        key={produto.id}
                        ProdutoImg={produto.image}
                        titulo={produto.title}
                        descricao={produto.descricao}
                        valor={produto.valor}
                        avaliacao={produto.avaliacao}
                    />
                ))}
            </div>
        </>
    );
};

export default Home;