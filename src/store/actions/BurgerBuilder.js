import * as actionTypes from './actionTypes'
import instance from '../../axios-orders';

export const addIngrediant=(name)=>{
    return{
        type:actionTypes.ADD_INGREDIANT,
        ingrediantName:name
    }
}


export const removeIngrediant=(name)=>{
    return{
        type:actionTypes.REMOVE_INGREDIANT,
        ingrediantName:name
    }
}

export const setIngrediant=(ingrediant)=>{
    return{
        type:actionTypes.SET_INGREDIANT,
        ingrediants:ingrediant

    };
}

export const fetchingrediantfail=()=>{
     return{
         type:actionTypes.FETCH_INGREDIANT_FAILED   
     }
}
export const initIngrediant= ()=>{
    return dispatch=>{
        instance.get('https://react-my-burger-7cadc.firebaseio.com/ingrediant.json')
        .then(response=>{
            dispatch(setIngrediant(response.data ))
        })
        .catch(error=>{
            dispatch(fetchingrediantfail())
        });

    };
}