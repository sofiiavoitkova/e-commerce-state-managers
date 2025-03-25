import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  // cart state
  const [cart, setCart] = useState([]);
  // item amount state
  const [itemAmount, setItemAmount] = useState(0);
  // total price state
  const [total, setTotal] = useState(0);

  // update item amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);

      const total = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.price * currentItem.amount;
      }, 0);

      setTotal(total);
      setItemAmount(amount);
    }
  }, [cart]);

  const addToCart = (product, id) => {
    const newCart = [];
    let found = false;

    for (let i = 0; i < cart.length; i++) {
      const item = cart[i];

      if (item.id === id) {
        found = true;
        const updatedItem = {};

        for (let key in item) {
          updatedItem[key] = item[key];
        }

        updatedItem.amount = item.amount + 1;

        newCart.push(updatedItem);
      } else {
        newCart.push(item);
      }
    }

    if (!found) {
      const newItem = {};
      for (let key in product) {
        newItem[key] = product[key];
      }
      newItem.amount = 1;

      newCart.push(newItem);
    }

    setCart(newCart);
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const increaseAmount = (id) => {
    const newCart = [];

    for (let i = 0; i < cart.length; i++) {
      const item = cart[i];

      if (item.id === id) {
        const updatedItem = {};
        for (let key in item) {
          updatedItem[key] = item[key];
        }
        updatedItem.amount = item.amount + 1;
        newCart.push(updatedItem);
      } else {
        newCart.push(item);
      }
    }

    setCart(newCart);
  };

  const decreaseAmount = (id) => {
    const newCart = [];

    for (let i = 0; i < cart.length; i++) {
      const item = cart[i];

      if (item.id === id) {
        if (item.amount > 1) {
          const updatedItem = {};
          for (let key in item) {
            updatedItem[key] = item[key];
          }
          updatedItem.amount = item.amount - 1;
          newCart.push(updatedItem);
        }
      } else {
        newCart.push(item);
      }
    }

    setCart(newCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
