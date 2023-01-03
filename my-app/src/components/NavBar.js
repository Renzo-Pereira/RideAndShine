import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";


const NavBar = () =>{
    return (
    <div>
                <nav>
                <ul className="menu">
                <li><Link className="nav" to="/">Inicio</Link></li>
                <li><Link className="nav" to="/contacto/:">Contacto</Link></li>
                <li><a className="nav" href="#nosotros">Nosotros</a></li>
                <CartWidget />
                </ul>
            </nav>
    </div>
    );
};

export default NavBar;