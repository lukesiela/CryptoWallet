import React from "react";
import Login from "./Login";
import useForm from "../../lib/hooks/useForm";
import useRegistration from "../../lib/hooks/useRegistration";
import {initialValues} from "./config";


function LoginWrapper(){

    const { registerUser } = useRegistration();
    const registrationUrl = "http://127.0.0.1:5000/new-user";
    const {
        formData,
        handleChange,
        //errors,
    } = useForm(initialValues, registerUser);


    return (
        <Login
            formData={formData}
            handleChange={handleChange}
            createNewUser={registerUser}
            registrationUrl={registrationUrl}
            loginString="Register your Account Here"
        />
    )
}

export default LoginWrapper