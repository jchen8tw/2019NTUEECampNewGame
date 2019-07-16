import React, { Component } from "react";
import { Grid, Segment,Form } from "semantic-ui-react";
{/* <p>{this.props.match.params.stagename}</p> */}
class Login extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
          <Grid.Column style={{ maxWidth: 450 }}>
              <Segment>
                  <Form>
                  <Form.Field>
                      <label>關卡名稱</label>
                      <Form.Input></Form.Input>
                    </Form.Field>
                    <Form.Field>
                      <label>SecretPass</label>
                      <Form.Input></Form.Input>
                    </Form.Field>
                    <Form.Button color='teal'>Submit</Form.Button>
                  </Form>
              </Segment>
          </Grid.Column>
      </Grid>
    );
  }
}
export default Login;
