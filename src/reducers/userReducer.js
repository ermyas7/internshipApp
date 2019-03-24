import {ADD_USER} from '../actions/types';
const initialState = {
    user: {
        name: '',
        email: '',
        _id: '',
        password: ''
    }
}
export default function(state = initialState, action){
    switch(action.type){
        case ADD_USER:
        return {...state,
            user: action.payload
            }
        default:
            return state;    
    }
}