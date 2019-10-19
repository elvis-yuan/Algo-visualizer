import React from "react";

function Node(props) {
  const { isFinish, isStart } = props;
  const nodeType = isFinish ? " finish-node" : isStart ? " start-node" : "";
  return <div className={`node${nodeType}`}></div>;
}

export default Node;
