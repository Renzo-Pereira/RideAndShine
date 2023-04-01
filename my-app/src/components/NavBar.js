import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <div>
            <nav>
                <ul className="menu menu-horizontal">
                    <li><Link className="nav" to="/">Inicio</Link></li>
                    <li>
                        <a href="#">Productos</a>
                        <ul class="menu-vertical">
                            <li><Link className="pruebaa" to="/remeras/:">Remeras</Link></li>
                            <li><Link to="/canguros/:">Canguros</Link></li>
                        </ul>
                    </li>
                    <li><Link className="nav" to="/contacto/:">Contacto</Link></li>
                    <li><Link className="nav" to="/tiendas/:">Tiendas</Link></li>
                    <li><a className="nav" href="#nosotros">Nosotros</a></li>
                    <CartWidget />
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;