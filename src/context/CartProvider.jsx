import { useState } from "react";
import { CartContext } from "./CartContext";

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (dessert) => setCart(prev => {
    const existe = prev.find(item => item.name === dessert.name);
    if (existe) {
      return prev.map(item => 
        item.name === dessert.name
        ? { ...item, quantity: item.quantity + 1 }
        : item
      )
    }
    return [...prev, { ...dessert, quantity: 1 }];
  });


  const removeFromCart = (name) => {
    const dessert = cart.find(item => item.name === name);
    if (!dessert) return;
    if (dessert.quantity > 1) {
      setCart(prev => prev.map(item => 
        item.name === name
        ? { ...item, quantity: item.quantity - 1 }
        : item
      ));
      return;
    }
    else {
      setCart(prev => prev.filter(item => item.name !== name));
    }
  };

  const removeProduct = (name) => setCart(prev => prev.filter(item => item.name !== name));

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalPrice, clearCart, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
}