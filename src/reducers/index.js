import {combineReducers} from "redux";
import Authenticate from "./authenticate/authenticate";
import User from "./user/user";
import Students from './students/students';
import Teachers from './teacher/teacher';;

const reducer = combineReducers({
    Authenticate,
    User,
    Students,
    Teachers
});
export default reducer;