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
      state.totalQuantity += 1;
      state.totalPrice += newItem.price;


    },
    removeItemFromCart(state, action) {
      const itemId = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === itemId);
      if (itemIndex >= 0) {
        state.totalPrice -= state.items[itemIndex].price * state.items[itemIndex].quantity;
        state.totalQuantity -= state.items[itemIndex].quantity;
        state.items.splice(itemIndex, 1);
      }
    },
     incrementItemQuantity (state, action) {
      const itemId  = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === itemId);
      if (itemIndex >= 0) {
        const item = state.items[itemIndex];
        item.quantity += 1;
        state.totalPrice += item.price;
        state.totalQuantity += 1;
      }
    },
    
   decrementItemQuantity(state, action){
      const  itemId  = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === itemId);
    
      if (itemIndex >= 0) {
        const item = state.items[itemIndex];
        if (item.quantity > 1) {
          item.quantity -= 1;
          state.totalPrice -= item.price;
          state.totalQuantity -= 1;
        }
        else
        {
          state.totalPrice -= item.price;
          state.totalQuantity -= 1;
          state.items.splice(itemIndex, 1);
        }
      
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
      state.totalPrice=0;
    },

  
  },
});
export const {
  addItemToCart,
  removeItemFromCart,
  updateItemQuantity,
  clearCart,
decrementItemQuantity,
incrementItemQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
