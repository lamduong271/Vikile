import * as types from "../../constants/ActionTypes";
import api from '../../common/apiConnect';

//AUTHENTICATE
export const login = userInfo  => async dispatch =>{
    api.init()
    const url = '/oauth/token';
    console.log(userInfo)
    const response = await api.post(url, userInfo);
    console.log("response"+response)
    const isSet = await api.setHeaders(response.data.access_token);
    if (isSet) {
        window.localStorage.setItem('access_token', response.data.access_token);
    }
    console.log(response.data)
  dispatch({
    type: types.LOGIN,
    userInfo
  }) ;
};