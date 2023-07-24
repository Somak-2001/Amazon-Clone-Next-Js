import { useContext, useReducer, createContext } from "react";
import reducer from '../Cartreducer.js';

export const StateContext = createContext();

export const initialState = {
    basket: [],
    // totalPrice: 0,
    user: null,
};


const StateProvider = ({ children }) => {    

    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    )
};

export default StateProvider;
// export const useStateValue = () => useContext(StateContext);
