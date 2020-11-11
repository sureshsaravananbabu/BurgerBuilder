import * as actionTypes from './actionTypes';
import instance from '../../axios-orders';

export const purchaseBurgerSuccess=(id,orderData)=>{
    return{
        type:actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId:id,
        orderData:orderData
        
    }
};

export const purchaseBurgerFail=(error)=>{
     return{
         type:actionTypes.PURCHASE_BURGER_FAIL,
         error:error 
     }
}

export const  purchaseBurgerStart=()=>{
    return{
        type:actionTypes.PURCHASE_BURGER_START

    }
}


export const purchaseBurger=(orderData,token)=>{
    console.log(orderData)
    return dispatch=>{
        dispatch(purchaseBurgerStart()) ;
        instance.post('/orders.json?auth='+ token,orderData)
        .then(response=>{
            dispatch(purchaseBurgerSuccess(response.data.name,orderData))

        })
        .catch(error=>{
            actionTypes.PURCHASE_BURGER_FAIL(error)
              
        })
  
    }
}

export const purchaseInit=()=>{
    return{
        type:actionTypes.PURCHASE_INIT
    }
}


export const setOrder=(order)=>{
    return{
        type:actionTypes.FETCH_ORDER,
        Orders:order
    }
}


export const orderInit=(token,userId)=>{
    return dispatch=>{
        const queryparam='?auth='+token +'&orderBy="userId"&equalTo="'+userId+'"';
        instance.get('/orders.json'+ queryparam )
        .then(response=>{
            dispatch(setOrder(response.data))
        })
        .catch(error=>{
            console.log(error)
        });
    }

}