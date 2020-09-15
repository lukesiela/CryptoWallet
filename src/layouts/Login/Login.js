import React from "react";
import { Grid } from "semantic-ui-react";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import "./Login.scss";

function Login({loginString, createNewUser, formData}) {
    const { first_name, last_name, user_name, password, email } = formData;
    return (
        <Grid columns={1}>
            <Grid.Column width={8}>
                <div className="MainLoginContent">
                    {loginString}
                    <Form>
                        <Input
                            label="First Name"
                            value={first_name}
                        />
                        <Input
                            label="Last Name"
                            value={last_name}
                        />
                        <Input
                            label="Email"
                            value={email}
                        />
                        <Input
                            label="Username"
                            value={user_name}
                        />
                        <Input
                            label="Password"
                            value={password}
                        />
                        <Button onClick={() => createNewUser(formData)}>
                            Register Now!
                        </Button>
                    </Form>
                </div>
            </Grid.Column>
        </Grid>
    )
}

export default Login;