import {REGISTER_USER, LOGIN_USER} from '../actions/types';

const initialState = {
    user: { }
}
export default function(state = initialState, action){
    console.log('from reducer!');
    switch(action.type){
        case REGISTER_USER:
            return {...state,
                user: action.payload
                }
        
        case LOGIN_USER:
            return {...state,
                user: action.payload
                }   
        default:
            return state;    
    }
}