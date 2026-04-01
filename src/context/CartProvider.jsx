import { useState } from "react";
import { CartContext } from "./CartContext";

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (dessert) => setCart(prev => {
    const existe = prev.find(item => item.id === dessert.id);
    if (existe) {
      return prev.map(item => {
        item.id === dessert.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
      })
    }
    return [...prev, { ...dessert, quantity: 1 }];
  });

  const decreaseQuantity = (id) => setCart(prev => {
    prev.map(item => {
      item.id === id
      ? {...item, quantity: item.quantity - 1}
      : item
    })
    .filter(item => item.quantity > 0)
  })

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, decreaseQuantity, removeFromCart, totalPrice, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}