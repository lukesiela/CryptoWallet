import React from "react";
import Login from "./Login";
import { submitRegistration } from "../../lib/hooks/useRegistration";
import  useForm from "../../lib/hooks/useForm";
import {initialValues} from "./config";


function LoginWrapper(){

    const createNewUser = async ({...userNameParams}) => {
        const body = {
            api_key: "15c97b04fd8ebe0d590455aeba453c50",
            ...userNameParams,
        };
        const url = "http://127.0.0.1:5000/new-user";
        return await submitRegistration(url, body);
    };

    const {
        formData,
        handleChange,
        //errors,
    } = useForm(initialValues, createNewUser);


    return (
        <Login
            formData={formData}
            handleChange={handleChange}
            createNewUser={createNewUser}
            loginString="Register your Account Here"
        />
    )
}

export default LoginWrapper