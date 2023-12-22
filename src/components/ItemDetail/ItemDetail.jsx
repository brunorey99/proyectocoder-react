import { useContext } from "react";
import { useCount } from "../../hooks/useCount";
import { CartContext } from "../../context/CartContext";

export const ItemDetail = ({ description, name, img, price, stock, id }) => {

  const { addItem } = useContext(CartContext)
  const { increment, decrement, count } = useCount(0, stock)

  return (
    <div className="border m-2">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <img src={img} alt="" />
          <p className="card-text"> {description} </p>
          <p>Precio: {price} </p>
          <div className="d-flex">
            <button className="btn btn-dark" onClick={increment}>+</button>
            <h2 className="mx-2"> {count} </h2>
            <button className="btn btn-dark" onClick={decrement}>-</button>
          </div>
          <button className="mt-2 btn btn-dark" onClick={() => addItem({ id, name, price }, count)}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};