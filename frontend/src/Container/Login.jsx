import React, { Component } from "react";
import { Grid, Segment,Form ,Button} from "semantic-ui-react";
import {Link} from 'react-router-dom';
class Login extends Component {
  constructor(props){
    super(props)
    this.state={stagename: ''}
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
                      <Form.Input onChange={e=> this.setState({stagename: e.target.value})}></Form.Input>
                    </Form.Field>
                    <Button as={Link} to={`${this.props.match.url}/${this.state.stagename}`} color='teal'>Submit</Button>
                  </Form>
              </Segment>
          </Grid.Column>
      </Grid>
    );
  }
}
export default Login;
