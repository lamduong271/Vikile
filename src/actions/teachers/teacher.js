import * as types from "../../constants/ActionTypes";
import api from '../../common/apiConnect';

export const getAllTeachers = () => async dispatch =>{
    const url = '/api/users/';
    const response = await api.get(url);
    if(response.data.success) {
        dispatch(setAllTeachers(response.data.message));
    }
};

export const setAllTeachers = allTeachers =>{
    return{
        type: types.SET_ALL_TEACHERS,
        allTeachers
    }
};