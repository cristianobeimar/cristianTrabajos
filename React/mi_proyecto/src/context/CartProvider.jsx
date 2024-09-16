import { useContext, useState } from "react";
import { createContext } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) ?? []
  );

  //esta funcion hace que agrege productos al carro
  const addToCart = (product) => {
    const existingProdut = cart.find((item) => item.id === product.id);
    // condición ? expr1 : expr2
    const newProduct = existingProdut
      ? cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      : [...cart, { ...product, quantity: 1 }];

    localStorage.setItem("cart", JSON.stringify(newProduct));
    setCart(newProduct);
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
const useCartContext = () => useContext(CartContext);
export default useCartContext;
