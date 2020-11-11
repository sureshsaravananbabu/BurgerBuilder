import * as actionType from '../actions/actionTypes';
const initialState={
    ingrediant:null,
    totalprice:50,
    error:false,
    Building:false
};

const ingrediantprice={
    salad:10,
    bacon:10,
    cheese:50,
    meat:50  
}

const reducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case actionType.ADD_INGREDIANT:
            return{
                ...state,
                ingrediant:{
                    ...state.ingrediant,
                    [action.ingrediantName]:state.ingrediant[action.ingrediantName] + 1
                },
                totalprice:state.totalprice+ingrediantprice[action.ingrediantName],
                Building:true
            };
        case actionType.REMOVE_INGREDIANT:
            let build=true
            if(state.totalprice - ingrediantprice[action.ingrediantName]===50)
            {
                build=false;
            }
            console.log(build)
            return{
                ...state,
                ingrediant:{
                    ...state.ingrediant,
                    [action.ingrediantName]:state.ingrediant[action.ingrediantName] - 1
                },
                totalprice:state.totalprice - ingrediantprice[action.ingrediantName],
                Building:build

            };

        case actionType.SET_INGREDIANT:
            return{
                ...state,
                ingrediant:action.ingrediants,
                totalprice:50,
                error:false,
                Building:false
            };
        case actionType.FETCH_INGREDIANT_FAILED:
            return{
                ...state,
                error:true
            }
        default:
            {
                return state
            }

    }
};
export default  reducer