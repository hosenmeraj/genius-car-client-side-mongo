import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className="text-center py-5 mt-3 bg-primary">
            <p>&copy; {year}</p>
        </footer>
    );
};

export default Footer;