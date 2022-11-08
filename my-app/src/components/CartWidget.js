import Carrito from "../assets/carrito.png"

const CartWidget = () =>{
    return (
    <button className="botonCarro">
        <img className="carrito" src={Carrito} alt=""/>
    </button>
    );
};

export default CartWidget;  