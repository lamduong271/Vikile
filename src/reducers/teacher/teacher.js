import * as types from '../../constants/ActionTypes';

let initialState ={
    allTeachers: null
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_ALL_TEACHERS:
            return {
                ...state,
                allTeachers:action.allTeachers,
            };
        default:
            return {...state};
    }
}
export default reducer;
