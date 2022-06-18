import '../../App.css';
import { Link } from "react-router-dom";

export default function LogIn(){
    console.log("hola?")
    return (
        <>
        <h1>EDGAR PON EL LOG IN PORFI</h1>
      <br />
      <ul>
        <li>
          {/* Endpoint to route to Home component */}
          <Link to="/">Home</Link>
        </li>
        <li>
          {/* Endpoint to route to About component */}
          <Link to="/about">About</Link>
        </li>
        <li>
          {/* Endpoint to route to Contact Us component */}
          <Link to="/contactus">Contact Us</Link>
        </li>
      </ul>
        </>
    );
}