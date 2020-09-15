import { post } from "../Api";

export const submitRegistration = (url = "http://127.0.0.1:5000/new-user", body) => {
    return post(url, body).then(response => response.json()).catch(error => console.log(error));
}
