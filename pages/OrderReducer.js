

const OrderReducer = (state,action) => {
   switch(action.type){
    case 'ADD_ORDER':
        return{
            state,
            orderBasket : [...orderBasket,action.item],
        }

    case 'REMOVE_ORDER':
        return{
            state,
            orderBasket:[]
        }
   }
}

export default OrderReducer;
