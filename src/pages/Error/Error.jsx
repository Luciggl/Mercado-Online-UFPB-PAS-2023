import { useNavigate } from "react-router-dom";
import Botao from "../../components/itens/Botao";
import Cabecalho from "../../components/itens/Cabecalho/Cabecalho";
import './Error.css'

const Error = () => {
    const navigate = useNavigate();

    const handlerHome = () => {
        navigate('/home')
    }
    return (
        <>
            <Cabecalho />
            <section className="page_404">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 ">
                            <div className="col-sm-10 col-sm-offset-1  text-center">
                                <div className="four_zero_four_bg">
                                    <h1 className="text-center ">404</h1>


                                </div>

                                <div className="contant_box_404">
                                    <h3 className="h2">
                                        Parece que você está perdido
                                    </h3>

                                    <p>A página que você procura não está disponível!</p>

                                    <Botao classP={'link_404'} texto={'Voltar para o inicio'} funcao={handlerHome} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Error;