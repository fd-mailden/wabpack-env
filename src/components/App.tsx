import React, {FC} from 'react';
import styles from './App.module.scss'
import {Link, Outlet} from "react-router-dom";
export const App:FC  = () => {
    return (
        <div >
            <Link to={'/about'}>About</Link>
            <br/>
            <Link to={'/shop'}>Shop</Link>
            <button className={styles.button}>test</button>
            <Outlet/>
        </div>
    );
};

