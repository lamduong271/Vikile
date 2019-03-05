import * as types from "../../constants/ActionTypes";
import api from '../../common/apiConnect';

//AUTHENTICATE
export const login = userInfo  => async dispatch =>{
    api.init()
    const url = '/oauth/token';
    console.log(userInfo)
    const response = await api.post(url, userInfo);
    const isSet = await api.setHeaders(response.data.access_token);
    if (isSet) {
        window.localStorage.setItem('access_token', response.data.access_token);
        dispatch(getCurrentUser(userInfo.username));
    }
    console.log(response.data)
   
};

export const logout = () => dispatch =>{
    window.localStorage.clear(); 
    dispatch(setCurrentUser(null));

};

export const getCurrentUser = username  => async dispatch =>{
    const url = `/api/users?username=${username}`;
    const response = await api.get(url);
    if(response.data.success) {
        console.log("successss")
        dispatch(setCurrentUser(response.data.message));
        window.localStorage.setItem('user', JSON.stringify(response.data.message));
    }
};

export const setCurrentUser = user =>{
    return{
        type: types.SET_CURRENT_USER,
        currentUser: user
    }
};