import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('cart')) || [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const { id, name, price, image_url, type } = action.payload;
      const existingItem = state.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ id, name, price, image_url, quantity: 1, type });
      }
      localStorage.setItem('cart', JSON.stringify(state));
    },
    updateItemQuantity: (state, action) => {
      const { id, delta } = action.payload;
      const item = state.find(item => item.id === id);
      if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
          const newState = state.filter(i => i.id !== id);
          localStorage.setItem('cart', JSON.stringify(newState));
          return newState;
        }
      }
      localStorage.setItem('cart', JSON.stringify(state));
    },
    removeItemFromCart: (state, action) => {
      const newState = state.filter(item => item.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(newState));
      return newState;
    },
    clearCart: () => {
      localStorage.removeItem('cart');
      return [];
    }
  }
});

export const { addItemToCart, updateItemQuantity, removeItemFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
