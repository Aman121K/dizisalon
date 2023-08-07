import { LOGIN_API, USER_TYPE } from "./Constant";
export function userType(item) {
    return {
        type: USER_TYPE,
        data: item
    }
}
export function loginApi(item) {
    return {
        type: LOGIN_API,
        data: item
    }
}