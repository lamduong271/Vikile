import * as types from '../../constants/ActionTypes';

let initialState ={
    allStudents: null
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_ALL_STUDENTS:
            return {
                ...state,
                allStudents:action.allStudents,
            };
        case types.ADD_STUDENT:
            return {
                ...state,
                allStudents:[...state.allStudents,action.newStudent]
            }
        case types.DELETE_STUDENT:
        console.log("HÂHHAA " ,state.allStudents.filter(student => student._id!==action.id))
            return {
                ...state,
                allStudents: state.allStudents.filter(student => student._id !== action.id),
            }
        default:
            return {...state};
    }
}
export default reducer;
