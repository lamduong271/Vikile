import * as types from "../../constants/ActionTypes";
import api from '../../common/apiConnect';

export const getStudents = () => async dispatch =>{
    const url = '/api/students/';
    const response = await api.get(url);
    console.log("response ", response)
    if(response.data.success) {
        dispatch(setAllStudents(response.data.message));
    }
};

export const setAllStudents = allStudents =>{
    return{
        type: types.SET_ALL_STUDENTS,
        allStudents
    }
};