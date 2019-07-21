import React, { Component } from "react";
import { Grid, Segment, List, Header, Feed, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import RankListItem from "../Component/RankListItem";
import Tweet from "../Component/Tweet";
import { connect } from "react-redux";
import io from "socket.io-client";
import { get_data } from "../redux/actions";
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
// const mapStateToProps = state => {
//   return {
//     Commissions: state.Commissions,
//     teamData: state.teamData,
//     Tweets: state.Tweets
//   };
// };
// const mapDispatchToProps = dispatch => {
//   return { get_data: data => dispatch(get_data(data)) };
// };
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Commissions: null,
      teamData: null,
      Tweets: null
    };
  }
  componentWillMount() {
    const ws = io.connect("/");
    ws.emit("get_dashboard");
    ws.on("dashboard_got", data => {
      this.setState(() => data);
    });
    ws.on("score_update", data => {
      this.setState(() => data);
    });
    ws.on("commission_display_updated", data => {
      this.setState(state => {
        let newState = JSON.parse(JSON.stringify(state));
        newState.Commissions[data].show = !newState.Commissions[data].show;
        return newState;
      });
    });
    ws.on("tweets_updated", data => {
      this.setState(state => {
        let newState = JSON.parse(JSON.stringify(state));
        newState.Tweets.push({
          teamName: data.teamName,
          StageName: data.StageName,
          Points: data.Points,
          time: data.time
        });
        if (newState.Tweets.length > 4) {
          newState.Tweets.shift();
        }
        return newState;
      });
    });

    // fetch("/api")
    //   .then(res => res.json())
    //   .then(res => {
    //     this.props.get_data(res);
    //   });
    // ws.on("operation_updated", data => {
    //   console.log("updated");
    //   fetch("/api")
    //     .then(res => res.json())
    //     .then(res => {
    //       this.props.get_data(res);
    //     });
    // });
  }
  render() {
    const { Commissions, teamData, Tweets } = this.state;
    if (!Commissions || !teamData || !Tweets) {
      return <p>loading</p>;
    }
    let tweets = Tweets.map(tweet => <Tweet {...tweet} />);
    tweets = tweets.reverse();
    const teamRank = Object.keys(teamData).sort(
      (a, b) => teamData[b].score - teamData[a].score
    );
    //console.log(teamRank);

    return (
      <Grid textAlign="center" style={{ height: "100vh" }}>
        <Grid.Column mobile={16} computer={6}>
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
          <Segment>
            <Button fluid color="facebook" as={Link} to="/login">
              Login
            </Button>
          </Segment>
          <Segment>
            <Button fluid color="google plus" as={Link} to="/commission">
              Commission
            </Button>
          </Segment>
        </Grid.Column>
        <Grid.Column mobile={16} computer={6}>
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
          <Grid.Row style={{ margin: "1em 0em" }}>
            <Segment>
              {/* <List style={{ display: "flex", flexWrap: "nowrap" }}> */}
              <Feed>{tweets}</Feed>
              {/* </List> */}
            </Segment>
          </Grid.Row>
        </Grid.Column>
        <Grid.Row>
          <Grid.Column mobile={16} computer={6} />
          <Grid.Column mobile={16} computer={6} />
        </Grid.Row>
        <Grid.Row />
      </Grid>
    );
  }
}
// const connectedDashboard = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Dashboard);
export default Dashboard;
