/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Banner = ({ imagePath, altText }) => {
    return (
        <div className="banner">
            <img
                src={imagePath}
                alt={altText}
                style={{
                    marginTop: '20px',
                    maxWidth: '70%',
                    height: 'auto',
                    transition: 'transform 0.3s ease', /* Adiciona a transição para o efeito de transformação */
                }}
                onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }} /* Aumenta ligeiramente o tamanho da imagem ao passar o mouse sobre ela */
                onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }} /* Retorna ao tamanho original ao retirar o mouse */
            />
        </div>
    );
};

export default Banner;
