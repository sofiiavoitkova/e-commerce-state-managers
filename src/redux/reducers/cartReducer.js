const initialState = {
  cart: [],
  itemAmount: 0,
  total: 0,
};

const updateTotals = (cart) => {
  const itemAmount = cart.reduce((sum, item) => sum + item.amount, 0);
  const total = cart.reduce((sum, item) => sum + item.amount * item.price, 0);
  return { itemAmount, total };
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { product, id } = action.payload;
      const existing = state.cart.find((item) => item.id === id);
      let newCart;

      if (existing) {
        newCart = state.cart.map((item) =>
          item.id === id ? { ...item, amount: item.amount + 1 } : item
        );
      } else {
        newCart = [...state.cart, { ...product, amount: 1 }];
      }

      const { itemAmount, total } = updateTotals(newCart);
      return { ...state, cart: newCart, itemAmount, total };
    }

    case REMOVE_FROM_CART: {
      const newCart = state.cart.filter((item) => item.id !== action.payload);
      const { itemAmount, total } = updateTotals(newCart);
      return { ...state, cart: newCart, itemAmount, total };
    }

    case INCREASE_AMOUNT: {
      const newCart = state.cart.map((item) =>
        item.id === action.payload ? { ...item, amount: item.amount + 1 } : item
      );
      const { itemAmount, total } = updateTotals(newCart);
      return { ...state, cart: newCart, itemAmount, total };
    }

    case DECREASE_AMOUNT: {
      const newCart = state.cart.map((item) =>
        item.id === action.payload && item.amount > 1
          ? { ...item, amount: item.amount - 1 }
          : item
      );
      const { itemAmount, total } = updateTotals(newCart);
      return { ...state, cart: newCart, itemAmount, total };
    }

    case CLEAR_CART:
      return { cart: [], itemAmount: 0, total: 0 };

    default:
      return state;
  }
};

export default cartReducer;
