import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Item }  from "../components/Item";
import { Layout } from "../components/Layout";
import { Loading } from "../components/Loading";
import { TrashWidget } from "../components/TrashWidget";
import { CartContext } from "../context/cartContext";
import empty from "../assets/LogoNegroTrasparente.png";


import {
  addDoc,
  collection,
  doc,
  getFirestore,
  updateDoc,
  serverTimestamp
} from "firebase/firestore";

const CartView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [updatingProducts, setUpdatingProducts] = useState(false);
  const navigate = useNavigate();
  const [OrdenN, setOrdenN] = useState("");
  const { productsAdded: items, clear, totalAmount } = useContext(CartContext);

  const getTotalByProduct = (quantity, price) => {
    return quantity * price;
  };

  const handleFinalizePurchase = () => {
    setIsLoading(true);

    const total = items
      .map((product) =>
        getTotalByProduct(product.quantityAdded, product.item.price)
      )
      .reduce((previousValue, currentValue) => previousValue + currentValue);

      const order = {
        Comprador: { Cliente: document.getElementById('validationCustom01').value, Celular: document.getElementById('validationCustom02').value, Email: document.getElementById('validationCustom03').value, },
        items,
        total,
        Fecha:serverTimestamp(),
      };
    const db = getFirestore();
    const ordersCollection = collection(db, "Pedidos");

    addDoc(ordersCollection, order).then(Orden => setOrdenN(Orden.id))
      .then(() => {
        setUpdatingProducts(true);
      })
      .catch((err) => console.error({ err }))
      .finally(() => {});
  };

  useEffect(() => {
    if (updatingProducts) {
      const db = getFirestore();

      items.forEach((element) => {
        const itemRef = doc(db, "items", element.item.id);
        const dataToUpdate = {
          stock: element.item.stock - element.quantityAdded,
        };
        updateDoc(itemRef, dataToUpdate)
          .then(() => {
            clear();
            setIsLoading(false);
            navigate("/contacto/:");
            alert('Compra finalizada Su numero de pedido es '+ OrdenN);
          })
          .catch((err) => console.error(err));
      });
    }
  }, [updatingProducts]);

  return (
    <Layout>
      <div>
        {items.length === 0 ? (
          <div className="CarritoVacio">
            <img src={empty} alt="Empty Cart" />
            <h1>No has agregado productos</h1>
          </div>
        ) : (
          <div>
            <div>
              {items.map((product) => {
                const quantityAdded = product.quantityAdded;

                return (
                  <div className="BotonBorrar">
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
                <div className="total">
                  <span>Total a pagar: ${totalAmount}</span>
                  <form className="row g-3 needs-validation">
  <div className="col-md-4">
    <label  className="form-label">Nombre</label>
    <input type="text" className="form-control" id="validationCustom01" required></input>
  </div>
  <div className="col-md-4">
    <label  className="form-label">Celular</label>
    <input type="text" className="form-control" id="validationCustom02" required></input>
  </div>
  <div className="col-md-4">
    <label  className="form-label">Email</label>
    <input type="text" className="form-control" id="validationCustom03" required></input>
  </div>
  <div className="col-12">
  </div>
</form>
                  <button
                    onClick={handleFinalizePurchase}
                    className="boton_personalizado"
                  >
                    Finalizar Compra
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartView;