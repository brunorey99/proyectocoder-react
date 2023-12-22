import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Form } from "../Form/Form"


export const Cart = () => {
    const { cartItems, totalCartItems, removeItem } = useContext(CartContext)
    return (
        <div>
            <table class="table table-dark">
              <thead>
                <tr>
                  <th scope="col">Producto</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Subtotal</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.subTotal}</td>
                <td><button className="btn btn-danger" onClick={() => removeItem(item.id)}>Eliminar</button></td>
                </tr>
              ))};
              </tbody>
            </table>
        <h3>Total del carrito: {totalCartItems}</h3>
        <Form />
    </div>
    )
}
