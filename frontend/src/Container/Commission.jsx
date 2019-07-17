import React, { Component } from "react";
import { Grid, Segment, Header, List, Button } from "semantic-ui-react";
import {connect} from 'react-redux';
// const Commissions = {
//   f: {show: true},
//   u: {show: true },
//   c: {show: true },
//   k: {show: false }
// };
const mapStateToProps  = state =>{
  return {Commissions : state.Commissions};
}
const mapDispatchToProps = dispatch =>{
  //TODO commission
  return {}
}
class Commission extends Component {
  render() {
    const {Commissions} = this.props;
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: "400px" }}>
          <Segment>
            <Header as="h1">Commissions</Header>
            <List relaxed divided>
              {Object.keys(Commissions).map(commission => (
                <List.Item>
                  <Grid>
                    <Grid.Column width={11} textAlign='left'>
                      {" "}
                      <List.Header as="h2" >{commission}</List.Header>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Button fluid color={(Commissions[commission].show) ? "red" : "green"}>{(Commissions[commission].show) ? "隱藏" : "解鎖"}</Button>
                    </Grid.Column>
                  </Grid>
                </List.Item>
              ))}
            </List>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
const connectedCommission = connect(mapStateToProps)(Commission);
export default connectedCommission;
