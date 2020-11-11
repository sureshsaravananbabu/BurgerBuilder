import * as actionType from '../actions/actionTypes';

const initialstate={

    token:null,
    userid:null,
    error:null,
    loading:false,
    authredirect:"/"
}

const reducer=(state=initialstate,action)=>{
    switch(action.type){
        case actionType.AUTH_START:
            return{
                ...state,
                error:null,
                loading:true
            }
        case actionType.AUTH_SUCCESS:
            return{
                ...state,
                token:action.idToken,
                userid:action.userId,
                error:null,
                loading:false
            }

        case actionType.AUTH_FAIL:
            return{
                ...state,
                error:action.error,
                loading:false
            }

        case actionType.AUTH_LOGOUT:
            return{
                ...state,
                token:null,
                userId:null
            }

        case actionType.SET_AUTH_REDIRECT_PATH:
            return{
                ...state,
                authredirect:action.path
            }
        default: 
                return state;

    }

}

export default reducer