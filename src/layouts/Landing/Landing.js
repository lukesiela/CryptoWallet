import React from "react";
import { Grid } from "semantic-ui-react";

function Landing() {
  return (
    <Grid celled>
      <Grid.Row>
        <Grid.Column width={16}>
          <div style={{ backgroundColor: "red" }}>TOP TOP TEXT</div>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={3}>
          <div style={{ backgroundColor: "orange" }}>LEFT TEXT</div>
        </Grid.Column>
        <Grid.Column width={8}>
          <Grid.Row>
            <div style={{ backgroundColor: "purple" }}>LEFT TEXT</div>
          </Grid.Row>
          <Grid.Row>
            <div style={{ backgroundColor: "deepskyblue" }}>LEFT TEXT</div>
          </Grid.Row>
        </Grid.Column>
        <Grid.Column width={3}>
          <div style={{ backgroundColor: "green" }}>RIGHT TEXT</div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Landing;
