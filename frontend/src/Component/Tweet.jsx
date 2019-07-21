import React, { Component } from "react";
import { Feed } from "semantic-ui-react";
export default props => {
  const { teamName, StageName, Points, time } = props;

  const timeago = Math.abs(new Date(time) - new Date());
  console.log(timeago);
  return (
    <Feed.Event>
      <Feed.Label icon="dollar" />
      <Feed.Content>
        {/* abs => milliseconds */}
        <Feed.Date>
          {timeago < 1000
            ? "now"
            : timeago < 60000
            ? Math.round(timeago / 1000) + " seconds ago"
            : Math.round(timeago / 60000) + " minutes ago"}
        </Feed.Date>
        <Feed.Summary>
          <b>{teamName}</b> 由 {StageName} {Points > 0 ? "獲得" : "損失"} 了{" "}
          {Math.abs(Points)} 金幣
        </Feed.Summary>
      </Feed.Content>
    </Feed.Event>
  );
};
