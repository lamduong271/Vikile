import {combineReducers} from "redux";
import Authenticate from "./authenticate/authenticate";
import User from "./user/user";
import Students from './students/students';
const reducer = combineReducers({
    Authenticate,
    User,
    Students
});
export default reducer;