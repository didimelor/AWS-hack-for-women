import '../../App.css';
import Active from './Active';
import Header from '../Header/Header';
import './Home.css';
import Maps from '../Viaje/maps.js';
import Notifications from './Notifications';
import Amigos from './Amigos';

import {Link} from "react-router-dom";

export default function Home(props){
    return (
        <>
        < Header />
        <div className="home-wrapper">
            <div className='saludo'>
                Hola {props.theUser.attributes.name}
            </div>
            <div className='activeWrapper'>< Active /></div>
            <div className='botonIniciaViaje'>
                <Link to="/viaje">
                        <button className='botonNoti botonViaje'>Iniciar Viaje</button>
                </Link>
            </div>
            
            <div id='mapaViaje'>
                <Maps/>
            </div>
            <div className='notifications'>
                < Notifications />
            </div>
            <div className='amigos'>Amigos</div>
        </div>
        </>
    )
}