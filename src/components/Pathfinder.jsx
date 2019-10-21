import React, { useState, useEffect } from "react";
import Node from "./Node";
import { dijkstra, shortestPath } from "../algorithms/dijkstra.js";

import "./pathfinder.css";

const Pathfinder = props => {
  const [grid, setGrid] = useState([]);
  const [algoRunning, setRunning] = useState(true);
  const [algoFinished, setFinished] = useState(true);

  const START_NODE = { row: 10, col: 9 };
  const FINISH_NODE = { row: 10, col: 40 };

  useEffect(() => {
    createGrid();
  }, []);

  // const changeStartLocation = (row, col) => {
  //   START_NODE.row = row;
  //   START_NODE.col = col;
  // };

  // const changeFinishLocation = (row, col) => {
  //   FINISH_NODE.row = row;
  //   FINISH_NODE.col = col;
  // };

  const createNode = (row, col) => {
    return {
      col,
      row,
      isStart: row === START_NODE.row && col === START_NODE.col,
      isFinish: row === FINISH_NODE.row && col === FINISH_NODE.col,
      distance: Infinity,
      visited: false,
      isWall: false,
      previousNode: null
    };
  };

  const createGrid = () => {
    const nodes = [];
    for (let row = 0; row < 20; row++) {
      let currentRow = [];
      for (let col = 0; col < 50; col++) {
        currentRow.push(createNode(row, col));
      }
      nodes.push(currentRow);
    }
    setGrid(nodes);
  };

  const resetGrid = () => {
    setGrid([]);
    setRunning(true);
    setTimeout(() => createGrid(), 0);
  };

  const calculateDijkstra = () => {
    setRunning(true);
    const startNode = grid[START_NODE.row][START_NODE.col];
    const finishNode = grid[FINISH_NODE.row][FINISH_NODE.col];
    const visitedNodePath = dijkstra(grid, startNode, finishNode);
    const nodesShortestPath = shortestPath(finishNode);
    animateDijkstra(visitedNodePath, nodesShortestPath);
  };

  const animateDijkstra = (visitedNodePath, nodesShortestPath) => {
    for (let i = 0; i <= visitedNodePath.length; i++) {
      if (i === visitedNodePath.length) {
        setTimeout(() => {
          animateShortestPath(nodesShortestPath);
        }, 12 * i);
        return;
      }
      setTimeout(() => {
        const { row, col } = visitedNodePath[i];
        document.getElementById(`${row}-${col}`).classList.add("visited-node");
      }, 12 * i);
    }
  };

  const animateShortestPath = nodesShortestPath => {
    for (let i = 0; i < nodesShortestPath.length; i++) {
      const { row, col } = nodesShortestPath[i];
      document.getElementById(`${row}-${col}`).classList.add("shortest-path");
      setRunning(false);
    }
  };

  // const handleMouseDown = (row, col, isStart, isFinish) => {
  //   debugger;
  //   if (isStart || isFinish) setMouseDown(true);
  //   console.log("mouse is down");
  // };

  // const handleClick = () => {
  //   console.log("testing");
  // };

  // const handleMouseUp = (row, col, isStart, isFinish) => {
  //   if (isMouseDown) {
  //     if (isStart) changeStartLocation(row, col);
  //     if (isFinish) changeFinishLocation(row, col);
  //     setMouseDown(false);
  //   }
  // };

  // const handleMouseEnter = (row, col, isStart, isFinish) => {
  //   if (isMouseDown) {
  //   }
  // };

  const Nodes =
    grid.length > 0
      ? grid.map((row, rowIdx) => {
          return row.map((node, nodeIdx) => {
            const { row, col, isFinish, isStart, isWall } = node;
            return (
              <Node
                // onClick={handleClick}
                // onMouseDown={() => handleMouseDown(row, col, isStart, isFinish)}
                // onMouseUp={() => handleMouseUp(row, col, isStart, isFinish)}
                // onMouseEnter={() =>
                //   handleMouseEnter(row, col, isStart, isFinish)
                // }
                key={nodeIdx}
                row={row}
                col={col}
                isFinish={isFinish}
                isStart={isStart}
                isWall={isWall}
                // isMouseDown={isMouseDown}
              />
            );
          });
        })
      : null;

  const renderRows = Nodes
    ? Nodes.map((row, idx) => {
        return (
          <div className="row" key={idx}>
            {row}
          </div>
        );
      })
    : null;

  return (
    <>
      <div className="nav-bar">
        <span className="start-button" onClick={calculateDijkstra}>
          Visualize Dijkstra's Algorithm
        </span>
      </div>
      <div className="grid">{renderRows}</div>
      {algoRunning ? null : <span onClick={resetGrid}>Reset</span>}
    </>
  );
};

export default Pathfinder;
