import { useContext, useEffect, useState } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { FirebaseContext } from "../../context/FirebaseContext";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const { getProductById, product, isLoading } = useContext(FirebaseContext)

  useEffect(() => {
    getProductById(id)
    console.log(product)

  }, [])
  return (
    <>
      {isLoading ?
        <h2>Cargando producto...</h2> :
        <div className="d-flex justify-content-center">
          {product && <ItemDetail {...product} />}
        </div>}
    </>
  )
}
