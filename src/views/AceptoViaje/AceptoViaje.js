import Header from '../Header/Header.js';
import {Link} from 'react-router-dom';
import Alert from '../Home/Alert.js'

export default function AceptoViaje(props){
    return(
        <>
        <Header />
        <h1> Ahora acompañas a Lis</h1>
        < Alert />
        <Link to="/">
            <button className="botonNoti aceptar">Terminar viaje</button>
        </Link>
        </>
    );
}