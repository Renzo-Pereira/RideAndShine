import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import  Item  from "../components/Item";
import { Layout } from "../components/Layout";
import { Loading } from "../components/Loading";
import { TrashWidget } from "../components/TrashWidget";
import { CartContext } from "../context/cartContext";
import empty from "../assets/LogoNegroTrasparente.png";


const CartView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { productsAdded, clear } = useContext(CartContext);

  const handleFinalizePurchase = () => {
    setIsLoading(true);
    setTimeout(() => {
      clear();
      setIsLoading(false);
      alert("Compra finalizada");
      navigate("/");
    }, 2000);
  };

  return (
    <Layout>
      <div>
        {productsAdded.length === 0 ? (
          <div className="Empty">
            <img src={empty} alt="Empty Cart" />
            <h1>No has agregado productos</h1>
          </div>
        ) : (
          <div>
            <div>
              {productsAdded.map((product) => {
                const quantityAdded = product.quantityAdded;

                return (
                  <div className="ItemCarrito">
                    <Item
                      product={product.item}
                      quantityAdded={quantityAdded}
                    />
                    <TrashWidget itemId={product.item.id} />
                  </div>
                );
              })}
            </div>
            <div className="Item">
              {isLoading ? (
                <Loading size="50px" />
              ) : (
                <button className="boton_personalizado" onClick={handleFinalizePurchase}>
                  Finalizar Compra
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartView;