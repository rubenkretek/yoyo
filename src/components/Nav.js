import React from 'react';

//Images
import Logo from '../img/logo.svg';

const Nav = () => {
    return (
        <nav className="navigation">
            <img src={Logo} alt="Little Loft Logo" />
        </nav>
    )
}

export default Nav;