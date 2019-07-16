import React, { Component } from "react";
import { Grid, Segment, List, Header, Feed } from "semantic-ui-react";
import RankListItem from "../Component/RankListItem";
import Tweet from "../Component/Tweet";
const teamData = {
  2: { score: 100 },
  1: { score: 200 },
  3: { score: 300 },
  4: { score: 300 },
  5: { score: 300 },
  6: { score: 300 },
  7: { score: 300 },
  8: { score: 300 },
  9: { score: 300 },
  10: { score: 300 },
  11: { score: 300 },
  12: { score: 300 }
};
const Commissions = {
  1: { content: "f", show: true },
  2: { content: "u", show: true },
  3: { content: "c", show: true },
  4: { content: "k", show: false }
};
class Dashboard extends Component {
  render() {
    const teamRank = Object.keys(teamData).sort(
      (a, b) => teamData[a].score - teamData[b].score
    );
    console.log(teamRank);
    return (
      <Grid textAlign="center" style={{ height: "100vh", margin: "30px" }}>
        <Grid.Column width={6}>
          <Segment raised>
            <Header as="h1">Rank</Header>
            <List relaxed divided>
              {teamRank.map((teamid, rank) => (
                <RankListItem rank={rank + 1} teamid={teamid} />
              ))}
            </List>
          </Segment>
        </Grid.Column>
        <Grid.Column width={6}>
          <Grid.Row>
            <Segment raised>
              <Header as="h1">Commissions</Header>
              <List relaxed divided>
                {Object.values(Commissions).map(
                  (commision, id) =>
                    commision.show && (
                      <List.Item>
                        <List.Header as="h2">{commision.content}</List.Header>
                      </List.Item>
                    )
                )}
              </List>
            </Segment>
          </Grid.Row>
          <Grid.Row style={{ margin: "10vh 0vh" }}>
            <Segment>
              {/* <List style={{ display: "flex", flexWrap: "nowrap" }}> */}
              <Feed>
                <Tweet teamName="team1" StageName="stage1" Points={10} />
              </Feed>
              {/* </List> */}
            </Segment>
          </Grid.Row>
        </Grid.Column>
        <Grid.Row>
          <Grid.Column width={6} />
          <Grid.Column width={6} />
        </Grid.Row>
        <Grid.Row />
      </Grid>
    );
  }
}
export default Dashboard;
