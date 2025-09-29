import { createSlice } from "@reduxjs/toolkit";
import itemsSlice from "./itemSlice";

const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addToBag: (state, action) => {
      console.log("Action payload in addToBag", action.payload);
      state.push(action.payload);
    },
    removeFromBag: (state, action) => {
      return state.filter((itemId) => itemId !== action.payload);
    },
  },
});
export const bagActions = bagSlice.actions;
export default bagSlice;
