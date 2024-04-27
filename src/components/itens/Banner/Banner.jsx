import React from 'react';

const Banner = ({ imagePath, altText }) => {
    return (
        <div className="banner">
            <img src={imagePath} alt={altText} />
        </div>
    );
};

export default Banner;
