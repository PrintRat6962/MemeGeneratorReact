import React from 'react';
import troll from '../images/Logo.png'

export default function Header() {
    return(
        <header>
            <img src={troll} alt='meme logo'></img>
            <p>React Course - Project 3</p>
        </header>
    )
}