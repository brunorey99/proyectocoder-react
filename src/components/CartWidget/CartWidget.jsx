import { BsCart2 } from "react-icons/bs";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

export const CartWidget = () => {

  const { totalQuantity } = useContext(CartContext);

  return (
    <div className="d-flex">
      <BsCart2 color="white" fontSize={24}/>
      <p className="m-0" style={{color: "white"}}>{totalQuantity}</p>
    </div>
  )
}
