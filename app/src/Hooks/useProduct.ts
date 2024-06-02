import { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useStoreProducts } from "../stores/productsStore"

export const useProduct = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const product = useStoreProducts((state) => state.getProductById(Number(id)))
  const setProduct = useStoreProducts((state) => state.setProduct)

  useEffect(() => {
    if (product) {
      setProduct(product)
    } else {
      navigate("/404")
    }
  }, [id, navigate, product, setProduct])

  return product
}
