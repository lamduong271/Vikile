import * as types from "../../constants/ActionTypes";
import api from '../../common/apiConnect';

export const getStudents = () => async dispatch =>{
    const url = '/api/students/';
    const response = await api.get(url);
    if(response.data.success) {
        dispatch(setAllStudents(response.data.message));
    }
};

export const setStudent = (id) => async dispatch =>{
    const url = `/api/students/${id}`;
    const response = await api.get(url);
    if(response.data.success) {
        dispatch({
            type: types.ADD_STUDENT,
            newStudent: response.data.message
        });
    }
};

export const addStudent = (studentInfo) => async dispatch =>{
    const url = '/api/students/';
    const response = await api.post(url,studentInfo);
    if(response.data.success) {
        dispatch(setStudent(response.data.message._id));
    }
};

export const deleteStudent = (id) => async dispatch =>{
    const url = `/api/students/${id}`;
    const response = await api.delete(url);
    if(response.data.success) {
        dispatch({
            type: types.DELETE_STUDENT,
            id
        });
    }
};

export const setAllStudents = allStudents =>{
    return{
        type: types.SET_ALL_STUDENTS,
        allStudents
    }
};

