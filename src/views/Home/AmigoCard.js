import './Home.css';

export default function AmigoCard(props){
    return(
    <>
    <div className="card">
        <div className="container">
            <h4><b>Tu amigue: {props.elJSON.user.name} solicita acompañamiento en su ruta de 20 minutos</b></h4>
            <button className="botonNoti aceptar">Aceptar</button>
            <button className="botonNoti rechazar">Rechazar</button>
        </div>
    </div>
    </>
    );
}