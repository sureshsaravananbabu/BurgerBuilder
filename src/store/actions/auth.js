import * as actionTypes from './actionTypes'
import axios from 'axios'
export const authStart=()=>{
    return{
        type:actionTypes.AUTH_START
    };
}

export const authSuccess=(token,userid)=>{
    return{
        type:actionTypes.AUTH_SUCCESS,
        idToken:token,
        userId:userid
    };
}

export const authFail=(error)=>{
    return{
        type:actionTypes.AUTH_FAIL,
        error:error
    };
}

export const logout=()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('expirationDate')
    localStorage.removeItem('userid')
    return{
        type:actionTypes.AUTH_LOGOUT
    }
}
export  const checkAuthTimeout=(expirationTime)=>{
    return dispatch=>{
        setTimeout(()=>{
            dispatch(logout())
        },expirationTime*1000)

    }
}
export const auth =(email,password,isSignup)=>{
    return dispatch=>{
        dispatch(authStart());
        const authData={
            email:email,
            password:password,
            returnSecureToken:true
        }
        let url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCIm6Xr7iNUOkSZl4c8wWJhDdlgG6Lvkew'
        if(isSignup){
              url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCIm6Xr7iNUOkSZl4c8wWJhDdlgG6Lvkew'
        }
        axios.post(url,authData)
        .then(response=>{
            console.log(response)
            const exp=new Date(new Date().getTime()+response.data.expiresIn*1000)
            localStorage.setItem('token',response.data.idToken);
            localStorage.setItem('expirationDate',exp);
            localStorage.setItem('userid',response.data.localId);
            dispatch(authSuccess(response.data.idToken,response.data.localId));
            dispatch(checkAuthTimeout(response.data.expiresIn))
        })
        .catch(err=>{
            console.log(err)
            dispatch(authFail(err.response.data.error))
        })
    }
}

export const setAuthRedirectPath=(path)=>{
    return{
        type:actionTypes.SET_AUTH_REDIRECT_PATH,
        path:path
    }
}


export const authCheckstate=()=>{
    return dispatch=>{
        const token=localStorage.getItem('token')
        const id=localStorage.getItem('userid')
        
        if(!token){
            dispatch(logout())
        }
        else{
            const exp =new Date(localStorage.getItem('expirationDate'))
            if(exp<new Date())
            {
            dispatch(logout())
            }else{
            dispatch(authSuccess(token,id))
            dispatch(checkAuthTimeout((exp.getTime()-new Date().getTime())/1000))
            }
        }
    }
}


 