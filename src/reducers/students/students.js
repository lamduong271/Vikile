import * as types from '../../constants/ActionTypes';

let initialState ={
    allStudents: null
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_ALL_STUDENTS:
        console.log(action)
            return {
                ...state,
                allStudents:action.allStudents,
            };
        default:
            return {...state};
    }
}
export default reducer;
