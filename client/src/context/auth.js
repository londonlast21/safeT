  
import React, { useReducer, createContext } from 'react';
import jwtDecode from 'jwt-decode';

const initialState = {
    user: null
};

if(localStorage.getItem('jwtToken')) {
    const decodedToken = jwtDecode(localStorage.getItem('jwtToken'));

    if(decodedToken.exp * 1000 < Date.now()){
        localStorage.removeItem('jwtToken')
    } else {
        initialState.user = decodedToken;
    }

};

const AuthContext = createContext({
    user: null,
    login: (userData) => {},
    logout: () => {}
});

function authReducer(state, action){
    switch(action.type){
        case 'LOGIN':
            return{
                ...state,
                user: action.payload
            }
        case 'LOGOUT':
            return{
                ...state,
                user: null
            }
        default:
            return state;
    }
}


export { AuthContext };