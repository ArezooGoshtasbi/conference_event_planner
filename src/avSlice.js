import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    addOns: [
        {
            id: 1,
            name: "Projector",
            cost: 100, 
            image: "/Images/Projector.jpg",
            quantity: 0
        },
        {
            id: 2,
            name: "Speakers",
            cost: 75, 
            image: "/Images/Speakers.jpg",
            quantity: 0
        },
        {
            id: 3,
            name: "Microphone",
            cost: 50, 
            image: "/Images/Microphone.jpg",
            quantity: 0
        },
        {
            id: 4,
            name: "Whiteboard",
            cost: 30, 
            image: "/Images/Whiteboard.png",
            quantity: 0
        },
        {
            id: 5,
            name: "Signage",
            cost: 20,
            image: "/Images/Signs.jpg",
            quantity: 0
          }
    ]
}

export const avSlice = createSlice({
  name: "av",
  initialState,

  reducers: {
    incrementAvQuantity: (state, action) => {
        const index = action.payload;
        const item = state.addOns[index];
        if (item) {
            item.quantity += 1;
        }
    },
    decrementAvQuantity: (state, action) => {
        const index = action.payload;
        const item = state.addOns[index];
        if (item && item.quantity > 0) {
            item.quantity -= 1;
        }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
