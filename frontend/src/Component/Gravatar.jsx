import React, { Component } from "react";
const colors = ['brown','red','orange','gold','green','lightseagreen','dodgerblue','darkblue','darkmagenta','indigo'];
export default function(props) {
  //teamid should be interger 0-2
  const rank = props.rank;
  return (
    <div
      style={{
        fontSize:'20px',
        color: "white",
        lineHeight: "60px",
        width: "60px",
        height: "60px",
        background: colors[rank-1],
        borderRadius: "50%",
        textAlign: "center",
        verticalAlign: "middle"
      }}
    >
      {rank}
    </div>
  );
}
