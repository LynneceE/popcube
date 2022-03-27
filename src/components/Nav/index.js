import React from 'react';

function Nav() {
    return (
        <header>
            <a href='#' class="myheader">my<span>Portfolio</span></a>
            <ul>
                <li> <a href='#about'>About Me</a> </li>
                <li> <a href='#portfolio'>Portfolio</a> </li>
                <li> <a href='#contact'>Contact</a> </li>
                <li> <a href='#resume'>Resume</a> </li>
            </ul>
        </header>   
    )
}

export default Nav;