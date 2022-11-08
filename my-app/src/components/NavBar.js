import CartWidget from "./CartWidget";

const NavBar = () =>{
    return (
    <div className="">
                <nav>
                <ul className="menu">
                <li><a href="#Inicio">Inicio</a></li>
                <li><a href="#Catalogo">Catalogo</a></li>
                <li><a href="#Nosotros">Nosotros</a></li>
                <li><a href="#Contacto">Contacto</a></li>
                <CartWidget />
                </ul>
                
            </nav>
    </div>
    );
};

export default NavBar;