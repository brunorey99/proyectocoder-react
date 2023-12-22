import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList";
import { FirebaseContext } from "../../context/FirebaseContext";
import { seedProducts } from "../../utils/seedProducts";

export const ItemListContainer = () => {
  const { category } = useParams();
  const { getProductsDB, products, isLoading } = useContext(FirebaseContext);

  useEffect(() => {
    // seedProducts()
    getProductsDB(category)
  }, [category])

  return (
    <>
      {isLoading ?
        <h2>Cargando...</h2> :
        <ItemList products={products} />}
    </>
  )
}
