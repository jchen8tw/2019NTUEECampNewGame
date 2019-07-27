import React, { Component } from "react";
import { Grid, Segment, Header, List } from "semantic-ui-react";
class CommissionBoard extends Component {
  render() {
    const { Commissions } = this.props;
    const ShowCommissions = Object.keys(Commissions).filter(
      commission => Commissions[commission].show
    );
    if (ShowCommissions.length > 10) {
      return (
        <Segment raised>
          <Header as="h1">Commissions</Header>
          <List relaxed divided>
            <Grid divided>
              <Grid.Column computer={8} mobile={16}>
                {ShowCommissions.slice(0, 10).map(commission => (
                  <Segment vertical>
                    <List.Item>
                      <List.Header as="h5">{commission}</List.Header>
                    </List.Item>
                  </Segment>
                ))}
              </Grid.Column>
              <Grid.Column computer={8} mobile={16}>
                {ShowCommissions.slice(10).map(commission => (
                  <Segment vertical>
                    <List.Item>
                      <List.Header as="h5">{commission}</List.Header>
                    </List.Item>
                  </Segment>
                ))}
              </Grid.Column>
            </Grid>
          </List>
        </Segment>
      );
    } else {
      return (
        <Segment raised>
          <Header as="h1">Commissions</Header>
          <List relaxed divided>
            <Grid divided>
              <Grid.Column>
                {ShowCommissions.map(commission => (
                  <Segment vertical>
                    <List.Item>
                      <List.Header as="h5">{commission}</List.Header>
                    </List.Item>
                  </Segment>
                ))}
              </Grid.Column>
            </Grid>
          </List>
        </Segment>
      );
    }
  }
}
export default CommissionBoard;
