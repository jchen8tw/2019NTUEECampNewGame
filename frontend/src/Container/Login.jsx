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
    key: '坐式排球',
    text: '坐式排球',
    value: '坐式排球'
  },
  {
    key: '蒙眼對打',
    text: '蒙眼對打',
    value: '蒙眼對打'
  },
  {
    key: '球不落地',
    text: '球不落地',
    value: '球不落地'
  },
  {
    key: '抓彩帶',
    text: '抓彩帶',
    value: '抓彩帶'
  },
  {
    key: '一無是處',
    text: '一無是處',
    value: '一無是處'
  },
  {
    key: '卡片收集家',
    text: '卡片收集家',
    value: '卡片收集家'
  },
  {
    key: '非洲血統',
    text: '非洲血統',
    value: '非洲血統'
  },
  {
    key: '我全都要',
    text: '我全都要',
    value: '我全都要'
  },
  {
    key: '死神的信徒',
    text: '死神的信徒',
    value: '死神的信徒'
  },
  {
    key: '十尾狩獵',
    text: '十尾狩獵',
    value: '十尾狩獵'
  },
  {
    key: '我不入地獄誰入地獄',
    text: '我不入地獄誰入地獄',
    value: '我不入地獄誰入地獄'
  },
  {
    key: '血盟騎士之戰',
    text: '血盟騎士之戰',
    value: '血盟騎士之戰'
  },
  {
    key: '發大財',
    text: '發大財',
    value: '發大財'
  },
  {
    key: '委託人的請求',
    text: '委託人的請求',
    value: '委託人的請求'
  }
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
