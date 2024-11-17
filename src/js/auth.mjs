import { loginRequest } from "./productData.mjs";
import {getLocalStorage, setLocalStorage} from "./utils.mjs";
import jwt_decode from "jwt-decode";

const tokenKey = "so-token";
export async function login(creds, redirect = "/"){
    try {
        const token = await login(creds);
        setLocalStorage(tokenKey,token);

        window.location = redirect;
    } catch(err){
        alertMessage(err.message.message);
    }

}

export function checkLogin(){
    const token = getLocalStorage(tokenKey);
    const valid = isTokenValid(token);
     if (!valid){
        localStorage.removeItem(tokenKey);
        const location = window.location;
        console.log(location)
        window.location = `/login/index.html?redirect=${location.pathname}`;
     } else return token;
}

function isTokenValid(token){
    if(token){
        const decoded = jwt_decode(token);
        let currentDate = new Date();
        if (decoded.exp*1000 < currentDate.getTime()){
            console.log("Token expired.")
            return false;
        } else {
            return true;
        }
    }else return false;
}