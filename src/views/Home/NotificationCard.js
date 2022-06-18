import './Home.css';
import React,{useState} from 'react';
import {Link} from 'react-router-dom';

export default function NotificationCard(props){
    return(
    <>
        <div className="card">
            <div className="container">
                <p>{props.nombre} solicita acompanamiento en su ruta</p>
                <p>Tiempo Aproximado: {props.tiempo}</p>
                <p>Origen: {props.origen}</p>
                <p>Destino: {props.destino}</p>
                
                <Link to="/aceptoViaje">
                    <button className="botonNoti aceptar">
                        Aceptar
                    </button>
                </Link>
                <button className="botonNoti rechazar">Rechazar</button>
                </div>
            </div>

    </>
    );
}