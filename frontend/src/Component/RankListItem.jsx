import React, { Component } from "react";
import Gravatar from "./Gravatar";
import { List, GridColumn, Grid, Icon, Header } from "semantic-ui-react";
export default function(props) {
  const { teamid, rank, score } = props;
  return (
    <List.Item>
      <Grid>
        <GridColumn width={2}>
          <Gravatar rank={rank} />
        </GridColumn>
        <GridColumn width={1} />
        <GridColumn width={8} verticalAlign="middle" textAlign="left">
          <List.Header as="h1">第{teamid}小隊</List.Header>
        </GridColumn>
        <GridColumn width={5} style={{display: 'flex', flexWrap: 'nowrap', alignItems: 'center'}}>
          <Icon name="dollar" size="big" />
          <Header as="h2">{score}</Header>
        </GridColumn>
        {/* <GridColumn width={1}>
          <Icon as="i" name="dollar" size="big" />
        </GridColumn>
        <GridColumn width={2}>
          <Header as="h2">{score}</Header>
        </GridColumn> */}
      </Grid>
    </List.Item>
  );
}
