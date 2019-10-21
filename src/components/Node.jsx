import React from "react";

function Node(props) {
  const { isFinish, isStart, row, col } = props;
  const nodeType = isFinish ? " finish-node" : isStart ? " start-node" : "";
  return <div className={`node${nodeType}`} id={`${row}-${col}`}></div>;
}

export default Node;
