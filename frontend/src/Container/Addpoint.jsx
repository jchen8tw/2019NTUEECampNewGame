import React, { Component } from "react";
import { Segment, Grid, Form, Label, List, Header } from "semantic-ui-react";
import OptListItem from "../Component/OptListItem";
import { connect } from "react-redux";
import { submit_operation, delete_operation, get_data } from "../redux/actions";
import uuid from "uuid/v4";
import io from "socket.io-client";
// const operation = {
//   "b2d48c20-520f-42e5-9774-fa7e07a3805b": { teamid: 1, addpoints: 10 },
//   'e1f8180b-a65d-4456-b915-25dc26dfd97e': {teamid: 2, addpoints:-10 }
// };
const mapStateToProps = state => {
  return { operation: state.Operations };
};
const mapDispatchToProps = dispatch => {
  return {
    submit_operation: data => dispatch(submit_operation(data)),
    deleteopt: data => dispatch(delete_operation(data)),
    get_data: data => dispatch(get_data(data))
  };
};
class Operations extends Component {
  constructor(props) {
    super(props);
    this.teaminput = React.createRef();
    this.addpointsinput = React.createRef();
  }
  componentWillMount() {
    const ws = io("/");
    this.ws = ws;
    fetch("/api")
      .then(res => res.json())
      .then(res => this.props.get_data(res));
    ws.on("operation_updated", () => {
      fetch("/api")
        .then(res => res.json())
        .then(res => this.props.get_data(res));
    });
  }
  handle_submit = () => {
    if (
      isNaN(parseInt(this.teaminput.current.value)) ||
      parseInt(this.teaminput.current.value) > 10 ||
      parseInt(this.teaminput.current.value) < 1
    ) {
      this.setState(() => ({ teamid: "", addpoints: "" }));
      this.teaminput.current.value = "";
      this.addpointsinput.current.value = "";
      return;
    } else if (isNaN(parseInt(this.addpointsinput.current.value))) {
      this.setState(() => ({ teamid: "", addpoints: "" }));
      this.teaminput.current.value = "";
      this.addpointsinput.current.value = "";
      return;
    }
    // this.props.submit_operation({
    //   uuid: uuid(),
    //   teamid: parseInt(this.teaminput.current.value),
    //   addpoints: parseInt(this.addpointsinput.current.value),
    //   stagename: this.props.match.params.stagename
    // });
    if (!!this.ws) {
      this.ws.emit("submit_operation", {
        uuid: uuid(),
        teamid: parseInt(this.teaminput.current.value),
        addpoints: parseInt(this.addpointsinput.current.value),
        stagename: this.props.match.params.stagename
      });
    }
    this.setState(() => ({ teamid: "", addpoints: "" }));
    this.teaminput.current.value = "";
    this.addpointsinput.current.value = "";
  };
  render() {
    const { operation } = this.props;
    if (!operation) {
      return <p> loading</p>;
    }
    let stage = operation[`${this.props.match.params.stagename}`];
    if (!stage) {
      //if there is no corresponding operations
      stage = {};
    }
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: "400px" }}>
          <Segment>
            <Header as="h1">{this.props.match.params.stagename}</Header>
          </Segment>
          <Segment>
            <Form>
              <Form.Field>
                <label>第幾小隊</label>
                <Form.Input>
                  <input ref={this.teaminput} />
                </Form.Input>
                <Label basic color="red" pointing>
                  請輸入小隊的！！！數字！！！編號
                </Label>
              </Form.Field>
              <Form.Field>
                <label>加/減幾金幣</label>
                <Form.Input>
                  <input ref={this.addpointsinput} />
                </Form.Input>
                <Label basic color="red" pointing>
                  請用 - 來扣分, ex: -10
                </Label>
              </Form.Field>
              <Form.Button onClick={this.handle_submit} color="blue">
                Submit
              </Form.Button>
            </Form>
          </Segment>
          <List>
            {Object.keys(stage).map(opt => (
              <OptListItem
                {...stage[opt]}
                key={opt}
                deleteopt={() =>
                  this.ws.emit('delete_operation',{
                    stagename: this.props.match.params.stagename,
                    teamid: stage[opt].teamid,
                    addpoints: stage[opt].addpoints,
                    uuid: opt
                  })
                }
              />
            ))}
          </List>

          {/* team:{operation[opt].teamid} */}
          {/* score:{operation[opt].addpoints} */}
        </Grid.Column>
      </Grid>
    );
    // return <p>{this.props.match.params.stagename}</p>
  }
}
const connectedOperations = connect(
  mapStateToProps,
  mapDispatchToProps
)(Operations);
export default connectedOperations;
