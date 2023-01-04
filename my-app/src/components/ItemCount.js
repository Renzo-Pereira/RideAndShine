export const ItemCount = ({ count, handleCount }) => {
    return (
      <div>
        <button
          onClick={() => handleCount("minus")}
          className="boton_personalizado"
        >
          -
        </button>
        <span
          id="counter"
          className="boton_personalizado"
        >
          {count}
        </span>
        <button
          onClick={() => handleCount("plus")}
          className="boton_personalizado"
        >
          +
        </button>
      </div>
    );
  };