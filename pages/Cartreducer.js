
const Cartreducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
                // totalPrice: state.totalPrice + action.item.price,
            };
        case 'REMOVE_FROM_BASKET':
            // return{
            //     ...state,
            //     basket:[...state.basket].filter(i=> i.id!== action.id),
            // }; --- Coz it's removing the every item of this id from basket
            let newBasket = [...state.basket];
            console.log(action.id);
            // let resultprice= state.totalPrice - action.price;
            const index = state.basket.findIndex((item) => item.id === action.id);
            // const index=state.basket.indexOf(action);
            console.log(index);
            if (index >= 0) {
                newBasket.splice(index, 1);
            }
            else {
                console.warn(`Item with id : ${action.id} not found in Basket`);
            }
            return {
                ...state,
                basket: newBasket,
                // totalPrice: resultprice,
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
        default:
            return state;
    }
}

export default Cartreducer;