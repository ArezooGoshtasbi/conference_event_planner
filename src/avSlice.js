import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    addOns: [
        {
            image: "/Images/Projector.jpg",
            name: "Projector",
            cost: 200, 
            quantity: 0
        },
        {
            image: "/Images/Speakers.jpg",
            name: "Speaker",
            cost: 35, 
            quantity: 0
        },
        {
            image: "/Images/Microphone.jpg",
            name: "Microphones",
            cost: 45, 
            quantity: 0
        },
        {
            image: "/Images/Whiteboard.png",
            name: "Whiteboards",
            cost: 80, 
            quantity: 0
        },
        {
            image: "/Images/Signs.jpg",
            name: "Signage",
            cost: 80,
            quantity: 0
          }
    ]
}

export const avSlice = createSlice({
  name: "av",
  initialState,

  reducers: {
    incrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if (item) {
            item.quantity++;
        }
    },
    decrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if (item && item.quantity > 0) {
            item.quantity--;
        }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
