import logo from "../assets/logoAliceblueTrasparente.png";

function Header() {
        return (
            <header>
            <img className="logo" src={logo} alt=""/>
            <h1 className="titulo">RIDE AND SHINE</h1>
            <h6 className="subtitulo">INDUSTRIA URUGUAYA</h6>
        </header>
        )
    }

    export default Header;