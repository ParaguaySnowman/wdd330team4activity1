import { loginRequest } from "./productData.mjs";

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

function checkLogin(){
    
}

function isTokenValid(){

}