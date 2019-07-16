import React, { Component } from "react";
import { Feed } from "semantic-ui-react";
export default props => {
  const { teamName, StageName, Points } = props;
  return (
    <Feed.Event>
      <Feed.Label icon="dollar" />
      <Feed.Content>
        <Feed.Date>now</Feed.Date>
        <Feed.Summary>
          <b>{teamName}</b> 在 {StageName} {Points > 0 ? "獲得" : "損失"} 了{" "}
          {Points} 分
        </Feed.Summary>
      </Feed.Content>
    </Feed.Event>
  );
};
