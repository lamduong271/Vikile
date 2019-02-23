import * as types from '../../constants/ActionTypes';
import {isEmpty} from 'lodash';

let initialState ={
    isAuthenticated:false,
    user:null
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated:!isEmpty(action.currentUser),
                user: action.currentUser
            };
        default:
            return {...state};
    }
}
export default reducer;
