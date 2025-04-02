import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
    totalQuantity: 0, 
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === newItem.id
      );

      if (existingItemIndex >= 0) {
        state.items[existingItemIndex].quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
      state.totalAmount += newItem.price;
      state.totalQuantity += newItem.quantity;
    },
    removeItemFromCart(state, action) {
      const itemId = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === itemId);

      if (itemIndex >= 0) {
        state.totalAmount -= state.items[itemIndex].price * state.items[itemIndex].quantity;
        state.totalQuantity -= state.items[itemIndex].quantity;
        state.items.splice(itemIndex, 1);
      }
    },
    updateItemQuantity(state, action) {
      const { itemId, quantity } = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === itemId);

      if (itemIndex >= 0) {
        const item = state.items[itemIndex];
        const difference = quantity - item.quantity;
        item.quantity = quantity;
        state.totalAmount += item.price * difference;
        state.totalQuantity -= item.quantity;
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;
    },

  
  },
});
export const {
  addItemToCart,
  removeItemFromCart,
  updateItemQuantity,
  clearCart,
  selectTotalItems,
} = cartSlice.actions;
export default cartSlice.reducer;
