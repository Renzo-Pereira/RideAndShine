import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import Carrito from "../assets/carrito.png";

const CartWidget = () => {
  const { productsAdded } = useContext(CartContext);
  const count = productsAdded.length;

  return (
    <div>
      <Link to="/cart">
        <button type="button" className="botonCarrito"> <img className="carrito" src={Carrito} alt=""/> </button>
        {count > 0 && (
          <span className="btn_personalizado">
            {count}
          </span>
        )}
      </Link>
    </div>
  );
};

export default CartWidget;