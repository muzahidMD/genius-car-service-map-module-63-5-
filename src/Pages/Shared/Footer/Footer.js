import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer>
            <p className='mx-auto d-inline'><small>copyright @ {year}</small></p>
        </footer>
    );
};

export default Footer;