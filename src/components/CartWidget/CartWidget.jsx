import { BsCart2 } from "react-icons/bs";

export const CartWidget = () => {
  return (
    <div className="d-flex">
      <BsCart2 color="white" fontSize={24}/>
      <p className="m-0" style={{color: "white"}}>1</p>
    </div>
  )
}
