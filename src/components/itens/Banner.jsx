/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Banner = ({ imagePath1, altText1, imagePath2, altText2 }) => {
    return (
        <div className="banner">
            <div>
                <img
                    src={imagePath2}
                    alt={altText2}
                    style={{
                        marginTop: '20px',
                        maxWidth: '70%',
                        height: 'auto',
                        transition: 'transform 0.3s ease',
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
                    onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                />
            </div>
            <div>
                <img
                    src={imagePath1}
                    alt={altText1}
                    style={{
                        marginTop: '20px',
                        maxWidth: '70%',
                        height: 'auto',
                        transition: 'transform 0.3s ease',
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.1)'; }}
                    onMouseOut={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
                />
            </div>
        </div>
    );
};

export default Banner;
