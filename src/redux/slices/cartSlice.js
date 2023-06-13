import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  currentQuantity: null,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const productPrice = Number(action.payload.price);
      const findProduct = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity += 1;
      state.totalPrice += productPrice;
    },
    deleteProductToCart: (state, action) => {
      const id = action.payload.id;
      const filteredProduct = state.items.filter(
        (product) => product.id !== id
      );
      state.items = filteredProduct;
    },

    decrementQuantity: (state, action) => {
      const productPrice = Number(action.payload.price);
      const fileredItem = state.items.filter(
        (product) => product.id === action.payload.id
      );
      fileredItem[0].quantity -= 1;
      state.currentQuantity = fileredItem[0].quantity;
      state.totalQuantity -= 1;
      state.totalPrice -= productPrice;
    },
    deleteAllProductToCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
    },
  },
});

export const {
  decrementQuantity,
  addProductToCart,
  deleteProductToCart,
  deleteAllProductToCart,
} = cartSlice.actions;

export default cartSlice.reducer;
