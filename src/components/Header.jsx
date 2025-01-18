import React from 'react';
import styles from './Header.module.css';

import Logo from '../img/Logo.png';

console.log(Logo);


export function Header() {
    return(
        <Header className = {styles.header}>
            <img src = {Logo} alt= "logo do todo-list" />
        </Header>
    );
}