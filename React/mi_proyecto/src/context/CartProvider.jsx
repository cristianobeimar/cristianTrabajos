import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevState) => {
      const existingProdut = prevState.find((item) => item.id === product.id);
      if (existingProdut) {
        return prevState.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevState, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const decrementCart = (product) => {
    setCart((prevState) => {
      const existingProduct = prevState.find((item) => item.id === product.id);
      if (existingProduct) {
        if (existingProduct.quantity === 1) {
          //retira o quita el prodcuro de l carrito si la cantidad es uno
          return prevState.filter((item) => item.id !== product.id);
        } else {
          // disminuye la cantida del productos del carrito uno a uno
          return prevState.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
        }
      }
      return prevState;
    });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, decrementCart }}
    >
      {children}
    </CartContext.Provider>
  );
};