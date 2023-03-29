export const ItemCount = ({ count, handleCount }) => {
    return (
      <div>
        <button
          onClick={() => handleCount("minus")}
          className="btn_personalizado"
        >
          -
        </button>
        <span
          id="counter"
          className="btn_personalizado"
        >
          {count}
        </span>
        <button
          onClick={() => handleCount("plus")}
          className="btn_personalizado"
        >
          +
        </button>
      </div>
    );
  };