import React from "react";

function Node(props) {
  const {
    isFinish,
    isStart,
    row,
    col,
    onMouseDown,
    onMouseUp,
    onMouseEnter,
    isWall
  } = props;

  const nodeType = isFinish
    ? " finish-node"
    : isStart
    ? " start-node"
    : isWall
    ? " wall-node"
    : "";
  const nodeIcon = isFinish ? (
    <span>
      <i className="fas fa-flag"></i>
    </span>
  ) : isStart ? (
    <span>
      <i className="fas fa-star"></i>
    </span>
  ) : (
    ""
  );

  return (
    <div
      className={`node${nodeType}`}
      id={`${row}-${col}`}
      onMouseDown={(row, col, isFinished, isStart) =>
        onMouseDown(row, col, isFinished, isStart)
      }
      onMouseUp={(row, col) => onMouseUp(row, col)}
      onMouseEnter={(row, col) => onMouseEnter(row, col)}
    >
      {nodeIcon}
    </div>
  );
}

export default Node;
