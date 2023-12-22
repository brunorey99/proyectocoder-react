import { useContext, useState } from "react";
import { FirebaseContext } from "../../context/FirebaseContext";
import { CartContext } from "../../context/CartContext";

export const Form = () => {
    const { addOrderDB } = useContext(FirebaseContext);
    const {cartItems, totalCartItems } = useContext(CartContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
  
    const handleForm = (e) => {
      e.preventDefault();
  
      addOrderDB(cartItems, {name, email}, totalCartItems);
      
      setName("");
      setEmail("");
    };
  
    return (
        <div className="d-flex flex-column w-25" onSubmit={handleForm}>
            <input type="text" value={name} placeholder="Nombre" onChange={(e) => setName(e.target.value)} />
            <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <button type="submit" className="btn btn-success">Comprar</button>
        </div>
    );
  };