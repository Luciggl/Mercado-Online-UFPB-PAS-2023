/* eslint-disable react/prop-types */
import './Info.css';

const Info = ({ icone, titulo }) => {
    return (
        <div className="container-info">
            <h1 className="icone">{icone}</h1>
            <h6 className='texto'>{titulo}</h6>
        </div>
    );
}

export default Info;

