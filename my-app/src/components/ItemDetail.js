import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import { ItemCount } from "./ItemCount";
import { useGetItemArray } from "../hooks/useGetItemArray";
import { useGetItemImg } from "../hooks/useGetItemImg";

const ItemDetail = ({ item }) => {
  const { addItem } = useContext(CartContext);
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [currentStock, setCurrentStock] = useState(item.stock);
  const maxQuantity = currentStock;
  const img = useGetItemImg(item.img);
  let imagenes = useGetItemArray(item.array[0]);
  let imagenes1 = useGetItemArray(item.array[1]);
  let imagenes2 = useGetItemArray(item.array[2]);
  let imagenes3 = useGetItemArray(item.array[3]);
  const stockL = item.stockL
  const stockS = item.stockS
  const stockM = item.stockM
  const stockXL = item.stockXL
  const [stockTalleS, setStockTalleS] = useState(false);
  const [stockTalleM, setStockTalleM] = useState(false);
  const [stockTalleL, setStockTalleL] = useState(false);
  const [stockTalleXL, setStockTalleXL] = useState(false);

  function handleCount(type) {
    if (type === "plus" && count < maxQuantity) setCount(count + 1);
    if (type === "minus" && count > 1) setCount(count - 1);
  }

  function handleAdd() {
    if (currentStock < count) alert("No hay suficiente stock de este producto");
    else {
      setCurrentStock(currentStock - count);
      addItem(item, count);
    }
  }

  function handleCheckout() {
    navigate("/cart");
  }

  const prueba = e => {
    if (stockS > 0) {
      setStockTalleS(true)
    } else {
      setStockTalleS(false)
    }
  }
  const prueba2 = e => {
    if (stockM > 0) {
      setStockTalleM(true)
    } else {
      setStockTalleM(false)
    }
  }
  const prueba3 = e => {
    if (stockL > 0) {
      setStockTalleL(true)
    } else {
      setStockTalleL(false)
    }
  }
  const prueba4 = e => {
    if (stockXL > 0) {
      setStockTalleXL(true)
    } else {
      setStockTalleXL(false)
    }
  }

  function pruebas() {
    prueba();
    prueba2();
    prueba3();
    prueba4();
  }

  return (
    <div className="DetallesPadre">
      <div className="DetallesTitulo">
        <div><h1>{item.name}</h1></div>
        <div className="Detalles">
          <div className="slider-frame">
            <ul>
              <li><img className="imgSlider" src={imagenes} alt={item.name} /></li>
              <li><img className="imgSlider" src={imagenes1} alt={item.name} /></li>
              <li><img className="imgSlider" src={imagenes2} alt={item.name} /></li>
              <li><img className="imgSlider" src={imagenes3} alt={item.name} /></li>
            </ul>
          </div>
          <div className="DetallesDescripcion">
            <p className="DetallesTexto">{item.description}</p>
            <h3>{"$" + item.price}</h3>
            <label>Slecciona talle</label>
            <input onClick={pruebas} type="checkbox" id="cbox2" value="second_checkbox"></input>

            <div className="btn-toolbar">
              <div className="me-2">
                <button className="btn btn-dark" value={"S"} id="botonTalle" disabled={!stockTalleS}>S</button>
              </div>

              <div className="me-2">
                <button className="btn btn-dark" value={"M"} id="botonTalle" disabled={!stockTalleM}>M</button>
              </div>

              <div className="me-2">
                <button className="btn btn-dark" value={"L"} id="botonTalle" disabled={!stockTalleL}>L</button>
              </div>

              <div>
                <button className="btn btn-dark" value={"XL"} id="botonTalle" disabled={!stockTalleXL}>XL</button>
              </div>

            </div>
            <p className="text-sm">Stock: {currentStock}</p>
            <p>{ }</p>

            <div>
              {currentStock > 0 ? (
                <ItemCount count={count} handleCount={handleCount} />
              ) : (
                <span>Sin stock</span>
              )}
              <div>
                <button className="btn_personalizado" onClick={handleAdd} disabled={currentStock === 0} >
                  Agregar al carrito
                </button>
                <button className="btn_personalizado" onClick={handleCheckout}>
                  Finalizar Compra
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};



export default ItemDetail;


