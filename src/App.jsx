import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import { NavBar } from "./components/NavBar/NavBar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CartContextProvider } from "./context/CartContext"
import { Cart } from "./components/Cart/Cart"
import { FirebaseContextProvider } from "./context/FirebaseContext"

export const App = () => {
  return (
    <BrowserRouter>
    <FirebaseContextProvider>
      <CartContextProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartContextProvider>
    </FirebaseContextProvider>
    
    </BrowserRouter>
  )
}

