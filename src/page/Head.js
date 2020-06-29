import React from 'react';
import {Link} from "react-router-dom";

const Head = props => {
    const imgLogo = 'https://logodix.com/logo/2003843.jpg';

    const links = props.navItems.map((nI, ind) => {
        if (nI.toLowerCase() === 'home') {
            return <Link key={ind} to={'/'}>{nI}</Link>
        } else {
            return <Link key={ind} to={`/${nI.toLowerCase()}`}>{nI}</Link>
        }
    });

    return (
        <header>
            <img src={imgLogo} alt="logo" style={{width: '150px'}}/>
            <nav>
                {links}
            </nav>
        </header>
    );
};

export default Head;
