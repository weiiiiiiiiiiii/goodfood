import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartItems: [] };
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItems: (state, action) => {
            const item = action.payload;
            const food = state.cartItems.find((x) => x.id === item.id);
            if (!!food) {
                const cartItems = state.cartItems.map((x) =>
                    x.id === food.id ? item : x
                );
                state.cartItems = cartItems;
            }
            else {
                state.cartItems = [...state.cartItems, item];
            }

        },
        removeCartItems: (state, action) => {
            state.cartItems = state.cartItems.filter((x) => x.id !== action.payload);
          },
    },
});

export const selectCartItems = (state) => state.cart.cartItems;
export const { addCartItems,  removeCartItems } = cartSlice.actions;
export default cartSlice.reducer;