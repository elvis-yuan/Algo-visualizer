import React from "react";

function Node(props) {
  const { isFinish, isStart, row, col, onMouseDown, onMouseUp } = props;
  const nodeType = isFinish ? " finish-node" : isStart ? " start-node" : "";
  return (
    <div
      className={`node${nodeType}`}
      id={`${row}-${col}`}
      onMouseDown={(row, col, isStart, isFinish) =>
        onMouseDown(row, col, isStart, isFinish)
      }
      onMouseUp={(row, col, isStart, isFinish) =>
        onMouseUp(row, col, isStart, isFinish)
      }
    ></div>
  );
}

export default Node;
