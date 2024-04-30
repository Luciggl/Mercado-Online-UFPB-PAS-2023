/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Banner = ({ imagePath, altText }) => {
    return (
        <div className="banner">
            <img src={imagePath} alt={altText} style={{ marginTop: '30px', maxWidth: '70%', height: 'auto' }} /> {/* Adicione os estilos diretamente à imagem */}
        </div>
    );
};

export default Banner;
