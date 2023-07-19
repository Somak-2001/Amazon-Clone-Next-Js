import { useContext, useReducer, createContext } from "react";
import reducer from './Cartreducer';

export const StateContext = createContext();

export const initialState = {
    basket: [],
    // totalPrice: 0,
    user: null,
};


export const StateProvider = ({ children }) => {    

    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StateContext.Provider>
    )
};

// export const useStateValue = () => useContext(StateContext);
