import React, { useState, useEffect } from "react";
import Node from "./Node";
import { dijkstra, shortestPath } from "../algorithms/dijkstra.js";

import "./pathfinder.css";

function Pathfinder(props) {
  const [grid, setGrid] = useState([]);

  const START_NODE = { row: 10, col: 9 };
  const FINISH_NODE = { row: 10, col: 40 };

  useEffect(() => {
    createGrid();
  }, []);

  function createNode(row, col) {
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
  }

  function createGrid() {
    const nodes = [];
    for (let row = 0; row < 20; row++) {
      let currentRow = [];
      for (let col = 0; col < 50; col++) {
        currentRow.push(createNode(row, col));
      }
      nodes.push(currentRow);
    }
    setGrid(nodes);
  }

  function calculateDijkstra() {
    const startNode = grid[START_NODE.row][START_NODE.col];
    const finishNode = grid[FINISH_NODE.row][FINISH_NODE.col];
    const visitedNodePath = dijkstra(grid, startNode, finishNode);
    const nodesShortestPath = shortestPath(finishNode);
    animateDijkstra(visitedNodePath, nodesShortestPath);
  }

  function animateDijkstra(visitedNodePath, nodesShortestPath) {
    for (let i = 0; i <= visitedNodePath.length; i++) {
      if (i === visitedNodePath.length) {
        animateShortestPath(nodesShortestPath);
        return;
      }
      const { row, col } = visitedNodePath[i];
      document.getElementById(`${row}-${col}`).classList.add("visited-node");
    }
  }

  function animateShortestPath(nodesShortestPath) {
    for (let i = 0; i < nodesShortestPath.length; i++) {
      const { row, col } = nodesShortestPath[i];
      document.getElementById(`${row}-${col}`).classList.add("shortest-path");
    }
  }

  const Nodes =
    grid.length > 0
      ? grid.map((row, rowIdx) => {
          return row.map((node, nodeIdx) => {
            const { row, col, isFinish, isStart, isWall } = node;
            return (
              <Node
                key={nodeIdx}
                row={row}
                col={col}
                isFinish={isFinish}
                isStart={isStart}
                isWall={isWall}
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
      <span onClick={calculateDijkstra}>Visualize Dijkstra's Algorithm</span>
      <div className="grid">{renderRows}</div>
    </>
  );
}

export default Pathfinder;
