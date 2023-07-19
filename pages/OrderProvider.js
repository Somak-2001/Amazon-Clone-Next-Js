import { createContext, useContext, useReducer } from "react";
import reducer from "./OrderReducer";

const OrderContext = createContext();
const useOrder=()=>{useContext(OrderContext)};
const initialState={
    user:null,
    orderBasket: []
}

const OrderProvider = ({children}) =>{
    <OrderContext.Provider value={useReducer(reducer,initialState)}>
        { children }
    </OrderContext.Provider>
}

export {OrderProvider,useOrder}