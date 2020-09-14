import React from "react";
import Login from "./Login";
import { post } from "../../lib/Api"

const createNewUser = async ({...userNameParams}) => {
    const body = {
        api_key: "15c97b04fd8ebe0d590455aeba453c50",
        ...userNameParams,
    };
    const url = "http://127.0.0.1:5000/";
    return await post(url, body);
};

function LoginWrapper(){
    return (
        <Login
            createNewUser={createNewUser}
            loginString="Register your Account Here"
        />
    )
}

export default LoginWrapper