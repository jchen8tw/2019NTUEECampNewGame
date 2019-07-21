import React, { Component } from "react";
import { Grid, Segment,Form ,Button, Dropdown} from "semantic-ui-react";
import {Link} from 'react-router-dom';
const StageOptions = [
  {
    key: '商店',
    text: '商店',
    value: '商店'
  },
  {
    key: '鍊金室',
    text: '鍊金室',
    value: '鍊金室'
  },
]
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
                      <Dropdown onChange={(e,data)=> this.setState({stagename: data.value})}  selection fluid options={StageOptions}/>
                      {/* <Form.Input onChange={e=> this.setState({stagename: e.target.value})}></Form.Input> */}
                    </Form.Field>
                    {this.state.stagename==''? <Button color='teal' children='Submit'/> : <Button as={Link} to={`${this.props.match.url}/${this.state.stagename}`} color='teal'>Submit</Button>}
                  </Form>
              </Segment>
          </Grid.Column>
      </Grid>
    );
  }
}
export default Login;
