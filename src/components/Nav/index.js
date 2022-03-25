import React from 'react';

function Nav() {
    return (
        <header>
            <a href='#' class="myheader">my<span>Portfolio</span></a>
            <ul>
                <li> <a href='#'>About Me</a> </li>
                <li> <a href='#'>Portfolio</a> </li>
                <li> <a href='#'>Contact</a> </li>
                <li> <a href='#'>Resume</a> </li>
            </ul>
        </header>   
    )
}

export default Nav;