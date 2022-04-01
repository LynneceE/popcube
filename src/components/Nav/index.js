/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';

function Nav() {
    


    return (
        <header>
            <h2 className="myheader">my<span>Portfolio</span></h2>
            <ul>
                <li> <a href='#about'>About Me</a></li>
                <li> <a href='#portfolio' >Portfolio</a> </li>
                <li> <a href='#contact'>Contact</a> </li>
                <li> <a href='#resume'>Resume</a> </li>
            </ul>
        </header>   
    )
}

export default Nav;