import React, { Component } from "react";
import Gravatar from "./Gravatar";
import { List,GridColumn,Grid} from "semantic-ui-react";
export default function(props) {
    const {teamid,rank} = props;
  return (
    <List.Item>
      <Grid>
        <GridColumn width={2}>
          <Gravatar rank={rank} />
        </GridColumn>
        <GridColumn width={14} verticalAlign="middle" textAlign="left">
          <List.Header as="h1">Team{teamid}</List.Header>
        </GridColumn>
      </Grid>
    </List.Item>
  );
}
