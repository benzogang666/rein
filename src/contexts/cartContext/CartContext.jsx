import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.removeItem("cart");
    }
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) =>
      prevCart.some((item) => item.id === product.id)
        ? prevCart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...prevCart, { ...product, quantity: 1 }]
    );
  };

  const decreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.reduce((acc, item) => {
        if (item.id === productId) {
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, [])
    );
  };

  const getProductQuantity = (productId) =>
    cart.find((item) => item.id === productId)?.quantity || 0;

  const getTotalPrice = () =>
    cart.reduce(
      (total, item) => total + (Number(item.price) || 0) * item.quantity,
      0
    );

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const clearCart = () => setCart([]);

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