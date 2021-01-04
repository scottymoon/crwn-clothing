import { createContext, useState } from "react"
import { ProviderProps } from "../types/context"

export interface CartContextValues {
  previewCart: boolean
  toggleCart: () => void
}

export const CartContext = createContext<CartContextValues>({
  previewCart: false,
  toggleCart: () => null,
})

export const CartProvider = ({ children }: ProviderProps) => {
  const [previewCart, setPreviewCart] = useState(false)

  function toggleCart() {
    setPreviewCart(!previewCart)
  }
  return (
    <CartContext.Provider value={{ previewCart, toggleCart }}>
      {children}
    </CartContext.Provider>
  )
}
