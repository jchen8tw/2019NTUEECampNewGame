import React, { Component } from "react";
import { Grid, Segment, Header, List, Button } from "semantic-ui-react";
import io from 'socket.io-client';
//import {connect} from 'react-redux';
// const Commissions = {
//   f: {show: true},
//   u: {show: true },
//   c: {show: true },
//   k: {show: false }
// };
// const mapStateToProps  = state =>{
//   return {Commissions : state.Commissions};
// }
// const mapDispatchToProps = dispatch =>{
//   //TODO commission
//   return {}
// }
class Commission extends Component {
  constructor(props){
    super(props);
    this.state = {
      Commissions: {}
    }
  }
  componentWillMount(){
    const ws = io.connect('/');
    this.ws = ws;
    ws.emit('get_commissions');
    ws.on('commissions_got',data=>{
      this.setState(()=>(data));
    })
    ws.on('commission_display_updated',data=>{
      this.setState(state=>{
        let newState = JSON.parse(JSON.stringify(state));
        newState.Commissions[data].show = !newState.Commissions[data].show
        return newState;
      })
    })
  }
  render() {
    const {Commissions} = this.state;
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
                      {/* emits the commission name */}
                        <Button fluid onClick={()=> this.ws.emit('update_commission_display',commission)} color={(Commissions[commission].show) ? "red" : "green"}>{(Commissions[commission].show) ? "隱藏" : "解鎖"}</Button>
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
// const connectedCommission = connect(mapStateToProps)(Commission);
export default Commission;
