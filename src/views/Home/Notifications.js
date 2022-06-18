import NotificationCard from './NotificationCard.js'

export default function Notifications(){

    return(
        <>
        <div className="gridNotifications">
            <NotificationCard nombre={"Lisette"} tiempo={"20min"} origen={"Calle Bugambilia 92"} destino={"Auditorio Nacional"}/>
            <NotificationCard nombre={"Diana"} tiempo={"10min"} origen={"Calle Agua 102"} destino={"Tec"}/>
            <NotificationCard nombre={"Mariana"} tiempo={"40min"} />
            <NotificationCard nombre={"Monica"} tiempo={"23min"} />
            <NotificationCard nombre={"Alexa"} tiempo={"38min"} origen={"Teatro"} destino={"Casa"}/>
        </div>
        </>
    );
    

}