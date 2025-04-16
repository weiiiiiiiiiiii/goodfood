import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartItems: [] };
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItems: (state, action) => {
            const item = action.payload;
            const book = state.cartItems.find((x) => x.ID === item.ID);
            if (!!book) {
                const cartItems = state.cartItems.map((x) =>
                    x.ID === book.ID ? item : x
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