import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";


const NavBar = () =>{
    return (
    <div className="">
                <nav>
                <ul className="menu">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/category/ColorBlanco">Blancas</Link></li>
                <li><Link to="/category/ColorAzul">Azules</Link></li>
                <li><Link to="/contacto/:">Contacto</Link></li>
                <CartWidget />
                </ul>
                
            </nav>
    </div>
    );
};

export default NavBar;