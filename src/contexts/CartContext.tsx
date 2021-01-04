/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from "react"
import { ProviderProps } from "../types/context"
import { Product } from "../types/shop"
import { UserContext } from "./UserContext"

export interface CartContextValues {
  addToCart: (item: Product) => void
  cartItems: Product[]
  previewCart: boolean
  toggleCart: () => void
}

export const CartContext = createContext<CartContextValues>({
  addToCart: () => null,
  cartItems: [],
  previewCart: false,
  toggleCart: () => null,
})

export const CartProvider = ({ children }: ProviderProps) => {
  const { signedIn, userRef } = useContext(UserContext)
  const [previewCart, setPreviewCart] = useState(false)
  const [cartItems, setCartItems] = useState<Product[]>([])
  const cartRef = userRef?.collection("cart")

  useEffect(() => {
    cartRef?.onSnapshot((snap) => {
      const items = snap.docs.map((doc) => doc.data() as Product)
      setCartItems(items)
    })
  }, [signedIn])

  function addToCart(item: Product) {
    const items = [...cartItems, item]
    setCartItems(items)
  }

  function toggleCart() {
    setPreviewCart(!previewCart)
  }

  return (
    <CartContext.Provider
      value={{ addToCart, cartItems, previewCart, toggleCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
