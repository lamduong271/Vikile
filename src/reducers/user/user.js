import * as types from '../../constants/ActionTypes';

let initialState ={
    currentUser: null
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN:
        console.log(action)
            return {
                ...state,
                isAuthenticated:true,
                user: action.userInfo
            };
        default:
            return {...state};
    }
}
export default reducer;
