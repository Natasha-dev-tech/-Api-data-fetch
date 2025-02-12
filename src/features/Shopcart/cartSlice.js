import { createSlice } from "@reduxjs/toolkit";

const initialState={
     items:[] ,// final cart items
     tempItems:[],//temporary items for updates
     totalPrice:0
}
const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state,action){
            const existingItem=state.items.find(item=>item.id==action.payload.id)
            if (existingItem) {
                existingItem.quantity+=1
            }else{
                state.items.push({...action.payload,quantity:1})
            }
           
           state.tempItems=[...state.items];
           state.totalPrice=state.items.reduce((sum,item)=>sum+item.price*item.quantity,0)
          
        },
        
        updateTempQuantity(state,action){
              const tempItem = state.tempItems.find(item=>item.id===action.payload.id);
              if (tempItem) {
              tempItem.quantity=action.payload.quantity
              }
              
        },
        applyTempUpdate(state, action) {
            const { id, quantity } = action.payload; // Extract quantity from payload
          
            const cartItem = state.items.find((item) => item.id === id);
            if (cartItem) {
              cartItem.quantity = quantity; // Directly update Redux state (immer handles immutability)
            }
          
            // Ensure tempItems also get updated
            state.tempItems = state.items.map((item) => ({ ...item })); 
          
            // Recalculate total price
            state.totalPrice = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
          },
          
        removeFromCart(state,action){
              state.items=state.items.filter(item=>item.id!==action.payload);
              state.tempItems=[...state.items]
              state.tempItems = state.items.map((item) => ({ ...item })); 
          
              // Recalculate total price
              state.totalPrice = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        }
    }
})
export const{addToCart,removeFromCart,updateTempQuantity,applyTempUpdate}=cartSlice.actions;//d structure//these are action creater
export default cartSlice.reducer;