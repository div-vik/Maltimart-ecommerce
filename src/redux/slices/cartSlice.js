import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    totalAmount:0,
    totalQuantity:0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // This will check whether a particular item is present or not in the application, if yes then it will updates its quantity otherwise add that newItem in application database.
        addItem:(state, action)=>{
            // chechking whether item is present or not through item id and updating total quantity.
            const newItem = action.payload
            const existingItem = state.cartItems.find(
                (item)=> item.id === newItem.id
            );
            state.totalQuantity++

            // add new item as it is not present in application database.
            if(!existingItem){
                state.cartItems.push({
                    id: newItem.id,
                    productName: newItem.productName,
                    imgUrl: newItem.imgUrl,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            }

            // update the quantity & total price of the particular item as it is present inside the databse.
            else{
                existingItem.quantity++
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price)
            }

            // update total amount
            state.totalAmount = state.cartItems.reduce((total, item)=> total + Number(item.price) * Number(item.quantity),0);
        },

        deleteItem:(state, action)=>{
            const id = action.payload;
            const existingItem = state.cartItems.find((item)=> item.id === id)
    
            if(existingItem){
                state.cartItems = state.cartItems.filter((item)=> item.id !== id)
                state.totalQuantity = state.totalQuantity - existingItem.quantity;
            }
    
            state.totalAmount = state.cartItems.reduce((total, item)=> total + Number(item.price) * Number(item.quantity),0);
        },
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;