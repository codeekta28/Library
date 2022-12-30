import { loginStatus } from "./AuthType";
import { logoutStatus } from "./AuthType";

export function getLoginStatus(loginDetail){
    return {
        type:loginStatus,
        payload:loginDetail
    }
}

export function getLogoutStatus(){
    return{
        type:logoutStatus
    }
}