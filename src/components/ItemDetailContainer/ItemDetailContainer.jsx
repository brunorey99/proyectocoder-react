import { useEffect, useState } from "react"
import { getProductById } from "../../asyncMock";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProductById(id)
      .then(resp => { setItem(resp), setIsLoading(false) })
      .catch(error => console.log(error));

  }, [])
  return (
    <>
      {isLoading ?
        <h2>Cargando producto...</h2> :
        <div className="d-flex justify-content-center">
          {item && <ItemDetail {...item} />}
        </div>}
    </>
  )
}
