import React from "react";
import { Grid } from "semantic-ui-react";
import Form from "../../components/Form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import "./Login.scss";

function Login({
  loginString,
  createNewUser,
  formData,
  handleChange,
  registrationUrl,
}) {
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
              onChange={(_, { value }) => handleChange("first_name", value)}
            />
            <Input
              label="Last Name"
              value={last_name}
              onChange={(_, { value }) => handleChange("last_name", value)}
            />
            <Input
              label="Email"
              value={email}
              onChange={(_, { value }) => handleChange("email", value)}
            />
            <Input
              label="Username"
              value={user_name}
              onChange={(_, { value }) => handleChange("user_name", value)}
            />
            <Input
              label="Password"
              value={password}
              onChange={(_, { value }) => handleChange("password", value)}
            />
            <Button onClick={() => createNewUser(registrationUrl, formData)}>
              Register Now!
            </Button>
          </Form>
        </div>
      </Grid.Column>
    </Grid>
  );
}

export default Login;
