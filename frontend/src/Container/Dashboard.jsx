import React, { Component } from "react";
import { Grid, Segment, List, Header, Feed } from "semantic-ui-react";
import RankListItem from "../Component/RankListItem";
import Tweet from "../Component/Tweet";
import { connect } from "react-redux";
// const teamData = {
//   2: { score: 100 },
//   1: { score: 200 },
//   3: { score: 500 },
//   4: { score: 300 },
//   5: { score: 400 },
//   6: { score: 300 },
//   7: { score: 300 },
//   8: { score: 700 },
//   9: { score: 900 },
//   10: { score: 300 }
// };
// const Commissions = {
//   f: {show: true},
//   u: {show: true },
//   c: {show: true },
//   k: {show: false }
// };
const mapStateToProps = state => {
  return { Commissions: state.Commissions,teamData: state.teamData,Tweets: state.Tweets };
};
class Dashboard extends Component {
  render() {
    const { Commissions,teamData,Tweets } = this.props;
    const teamRank = Object.keys(teamData).sort(
      (a, b) => teamData[b].score - teamData[a].score
    );
    //console.log(teamRank);
    return (
      <Grid textAlign="center" style={{ height: "100vh" }}>
        <Grid.Column width={6}>
          <Segment raised>
            <Header as="h1">Rank</Header>
            <List relaxed divided>
              {teamRank.map((teamid, rank) => (
                <RankListItem
                  rank={rank + 1}
                  teamid={teamid}
                  score={teamData[teamid].score}
                />
              ))}
            </List>
          </Segment>
        </Grid.Column>
        <Grid.Column width={6}>
          <Grid.Row>
            <Segment raised>
              <Header as="h1">Commissions</Header>
              <List relaxed divided>
                {Object.keys(Commissions).map(
                  commission =>
                    Commissions[commission].show && (
                      <List.Item>
                        <List.Header as="h2">{commission}</List.Header>
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
                {Tweets.map(tweet => <Tweet {...tweet} />)}
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
const connectedDashboard = connect(mapStateToProps)(Dashboard);
export default connectedDashboard;
