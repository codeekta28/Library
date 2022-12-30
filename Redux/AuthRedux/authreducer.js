import { loginStatus } from "./AuthType"
import { logoutStatus } from "./AuthType"
const initialState={
    loginStatus:false,
    token:"",
    userName:"",
}

const authreducer=(state=initialState,action)=>{
    if(action.type === loginStatus){
        return {
            loginStatus:true,
            token:action.payload.token,
            userName:action.payload.userName,
        }
    }else if(action.type===logoutStatus){
        return{
            loginStatus:false,
            token:"",
        }
    }
return state
}
export default authreducer;