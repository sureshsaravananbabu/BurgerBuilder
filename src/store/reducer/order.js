import * as actionTypes from '../actions/actionTypes';

const initialstate={
    orders:[],
    loading:false,
    purchase:false,
    fetchloading:true
}

const reducer=(state=initialstate,action)=>{

switch(action.type){    
    case actionTypes.PURCHASE_INIT:
        return{
            ...state,            
        }
    case actionTypes.PURCHASE_BURGER_START:
        return{
            ...state,
            loading:true
        }
    case actionTypes.PURCHASE_BURGER_SUCCESS:
        // const newOrder={
        //     ...action.orderDate,
        //     id:action.orderId
        // };
        return{
             ...state,
             loading:false,
             purchase:true,
            //  orders:state.orders.concat(newOrder)
        }
    case actionTypes.FETCH_ORDER:
        const fetchedOrders=[];
        for (let key in action.Orders){
                 fetchedOrders.push({
                    ingrediant:action.Orders[key].ingrediant,
                    price:action.Orders[key].price,
                    id:key
                    })
                }
        return{
            ...state,
            orders:fetchedOrders,
            fetchloading:false
        }


    case actionTypes.PURCHASE_BURGER_FAIL:
        return{
            ...state,
            loading:false
        }
    default:
        return state;
}

}
export default reducer;