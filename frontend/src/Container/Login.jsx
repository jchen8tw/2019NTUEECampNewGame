import React, { Component } from "react";
import { Grid, Segment, Form, Button, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";
const TypeOptions = [
  {
    key: "一般關卡",
    text: "一般關卡",
    value: 0
  },
  {
    key: "委託",
    text: "委託",
    value: 1
  }
]
const StageOptions = [
  {
    key: "商店",
    text: "商店",
    value: "商店"
  },
  {
    key: "交易所",
    text: "交易所",
    value: "交易所"
  },
  {
    key: "競標",
    text: "競標",
    value: "競標"
  },
  {
    key: "坐式排球",
    text: "坐式排球",
    value: "坐式排球"
  },
  {
    key: "蒙眼對打",
    text: "蒙眼對打",
    value: "蒙眼對打"
  },
  {
    key: "球不落地",
    text: "球不落地",
    value: "球不落地"
  },
  {
    key: "抓彩帶",
    text: "抓彩帶",
    value: "抓彩帶"
  }
];
const CommissionOptions = [
  {
    key: "一無是處",
    text: "一無是處",
    value: "一無是處"
  },
  {
    key: "卡片收集家",
    text: "卡片收集家",
    value: "卡片收集家"
  },
  {
    key: "非洲血統",
    text: "非洲血統",
    value: "非洲血統"
  },
  {
    key: "我全都要",
    text: "我全都要",
    value: "我全都要"
  },
  {
    key: "死神的信徒",
    text: "死神的信徒",
    value: "死神的信徒"
  },
  {
    key: "十尾狩獵",
    text: "十尾狩獵",
    value: "十尾狩獵"
  },
  {
    key: "我不入地獄誰入地獄",
    text: "我不入地獄誰入地獄",
    value: "我不入地獄誰入地獄"
  },
  {
    key: "矛盾大對決",
    text: "矛盾大對決",
    value: "矛盾大對決"
  },
  {
    key: "發大財",
    text: "發大財",
    value: "發大財"
  },
  {
    key: "委託人的請求",
    text: "委託人的請求",
    value: "委託人的請求"
  },
  {
    key: "三隻小豬怕.jpg",
    text: "三隻小豬怕.jpg",
    value: "三隻小豬怕.jpg"
  },
  {
    key: "一葉知秋",
    text: "一葉知秋",
    value: "一葉知秋"
  },
  {
    key: "事不過三",
    text: "事不過三",
    value: "事不過三"
  },
  {
    key: "大錯特錯",
    text: "大錯特錯",
    value: "大錯特錯"
  },
  {
    key: "你累了嗎",
    text: "你累了嗎",
    value: "你累了嗎"
  },
  {
    key: "下沉氣流",
    text: "下沉氣流",
    value: "下沉氣流"
  },
  {
    key: "懶驢打滾",
    text: "懶驢打滾",
    value: "懶驢打滾"
  },
  {
    key: "傾家蕩產",
    text: "傾家蕩產",
    value: "傾家蕩產"
  },
  {
    key: "首領討伐",
    text: "首領討伐",
    value: "首領討伐"
  },
  {
    key: "Treasure",
    text: "Treasure",
    value: "Treasure"
  }
]
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { stagename: "", type: 0 };
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
                
                <Grid container centered>
                  <Grid.Row>
                  <label>類型</label>
                    <Dropdown
                      onChange={(e, data) =>
                        this.setState({ type: data.value })
                      }
                      selection
                      fluid
                      options={TypeOptions}
                    />
                  </Grid.Row>
                  <Grid.Row>
                  <label>關卡名稱</label>
                    <Dropdown
                      onChange={(e, data) =>
                        this.setState({ stagename: data.value })
                      }
                      selection
                      fluid
                      options={(this.state.type === 0) ? StageOptions : CommissionOptions}
                    />
                  </Grid.Row>
                </Grid>

                {/* <Form.Input onChange={e=> this.setState({stagename: e.target.value})}></Form.Input> */}
              </Form.Field>
              {this.state.stagename == "" ? (
                <Button color="teal" children="Submit" />
              ) : (
                <Button
                  as={Link}
                  to={`${this.props.match.url}/${this.state.stagename}`}
                  color="teal"
                >
                  Submit
                </Button>
              )}
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
export default Login;
