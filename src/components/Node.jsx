import React from "react";

function Node(props) {
  const {
    isFinish,
    isStart,
    row,
    col,
    onMouseDown,
    onMouseUp,
    onMouseEnter
  } = props;
  const nodeType = isFinish ? " finish-node" : isStart ? " start-node" : "";
  return (
    <div
      className={`node${nodeType}`}
      id={`${row}-${col}`}
      onMouseDown={(row, col, isFinished, isStart) =>
        onMouseDown(row, col, isFinished, isStart)
      }
      onMouseUp={(row, col) => onMouseUp(row, col)}
      onMouseEnter={(row, col) => onMouseEnter(row, col)}
    />
  );
}

export default Node;
