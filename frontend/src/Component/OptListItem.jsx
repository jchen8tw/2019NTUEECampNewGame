import React, { Component } from "react";
import { List,Segment,Grid,Button,Header } from "semantic-ui-react";
const OptlistItem =  props => {
const { teamid,addpoints,deleteopt } = props;
  return (
    <List.Item>
      <List.Content>
        <Segment>
          <Grid>
            <Grid.Column width={5} verticalAlign="middle">
              <Header>team: {teamid}</Header>
            </Grid.Column>
            <Grid.Column width={6} verticalAlign="middle">
              <Header>score: {addpoints}</Header>
            </Grid.Column>
            <Grid.Column width={5} verticalAlign="middle">
              <Button onClick={deleteopt} compact color="red">
                X
              </Button>
            </Grid.Column>
          </Grid>
        </Segment>
      </List.Content>
    </List.Item>
  );
};
export default OptlistItem;