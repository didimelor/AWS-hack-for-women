import './Header.css'
import React from "react";
import {Link} from "react-router-dom";

export default function Header(){
    return(
        <>
        <div className="outerHeaderWrapper">
            <div className="headerWrapper">
                <nav>
                <ul>
                    <li>
                    <Link to="/">Inicio</Link>
                    </li>
                    <li>
                    <Link to="/profile">Perfil</Link>
                    </li>
                </ul>
                </nav>
            </div>
        </div>
        </>
    );
}