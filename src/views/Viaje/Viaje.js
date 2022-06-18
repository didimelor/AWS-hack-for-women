import InputImage from "./InputImage.js";
import Header from "../Header/Header.js"
import './Viaje.css'
import '../Home/Home.css'
import {Link} from "react-router-dom";
import Notifications from "../Home/Notifications.js";

export default function Viaje(props){
    return (
        <>
        <Header />
        <div className="viajeWrapper">
            <h1>Haz comenzado tu Viaje</h1>
            <h2>Tu acompañante es: Edgar Rostro</h2>
            <Link to="/uploadImage">
                <button type="button">
                    Sube Imagenes de tu recorrido
                </button>
            </Link>

        </div>
        </>
    );
}