import { createSlice,current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState : {
    items : []
  },
  reducers: {
    addItem : (state,action) =>{ //Mutating the state over here 

      //Redux Toolkit - We have to mutate the state
      //Redux Toolkit - It uses immer.js bhehind the scene
       state.items.push(action.payload);
    },
    removeItem : (state) => {
      state.items.pop();
    },
    clearCart : (state) =>{
      state.items = [];
      //This will not work because we not modifying the state we are just adding a refrence to it.
      // state = [];
    }
  }
})

export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;