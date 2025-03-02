import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    cart.length
      ? localStorage.setItem("cart", JSON.stringify(cart))
      : localStorage.removeItem("cart");
  }, [cart]);

  const updateCart = (updatedCart) => setCart(updatedCart);

  const addToCart = (product) =>
    updateCart(
      cart.some((item) => item.id === product.id)
        ? cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...cart, { ...product, quantity: 1 }]
    );

  const clearCart = () => updateCart([]);

  const decreaseQuantity = (productId) =>
    updateCart(
      cart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );

  const getProductQuantity = (productId) =>
    cart.find((item) => item.id === productId)?.quantity || 0;

  const getTotalPrice = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const removeFromCart = (productId) =>
    updateCart(cart.filter((item) => item.id !== productId));

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        decreaseQuantity,
        getProductQuantity,
        getTotalPrice,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};