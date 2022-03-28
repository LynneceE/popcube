/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';

function Nav(props) {
    
    const {
        portfolioSelected,
        setPortfolioSelected,
        contactSelected,
        setContactSelected,
        aboutSelected,
        setAboutselected

    } = props;

    return (
        <header>
            <h2 class="myheader">my<span>Portfolio</span></h2>
            <ul>
                <li> <a href='#about' onClick={() => setContactSelected(false)}>About Me</a></li>
                <li> <a href='#portfolio' >Portfolio</a> </li>
                <li> <a href='#contact'>Contact</a> </li>
                <li> <a href='#resume'>Resume</a> </li>
            </ul>
        </header>   
    )
}

export default Nav;