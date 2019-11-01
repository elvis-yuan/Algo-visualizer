import React, { useState, useEffect } from "react";
import Node from "./Node";
import { dijkstra, shortestPath } from "../algorithms/dijkstra.js";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

import "./pathfinder.css";

const Pathfinder = props => {
  const [grid, setGrid] = useState([]);
  const [algoRunning, setRunning] = useState(true);
  const [algoFinished, setFinished] = useState(false);
  const [isMouseDown, setMouseDown] = useState({ node: null, isDown: false });

  const [START_NODE, setSTART_NODE] = useState({ row: 10, col: 9 });
  const [FINISH_NODE, setFINISH_NODE] = useState({ row: 10, col: 40 });

  useEffect(() => {
    createGrid();
  }, [START_NODE, FINISH_NODE]);

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
    setFinished(false);
    setTimeout(() => createGrid(), 0);
  };

  const calculateDijkstra = () => {
    if (!algoFinished) {
      setRunning(true);
      setFinished(true);
      const startNode = grid[START_NODE.row][START_NODE.col];
      const finishNode = grid[FINISH_NODE.row][FINISH_NODE.col];
      const visitedNodePath = dijkstra(grid, startNode, finishNode);
      const nodesShortestPath = shortestPath(finishNode);
      animateDijkstra(visitedNodePath, nodesShortestPath);
    }
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

  const toggleWalls = (row, col) => {
    const node = grid[row][col];
    let newNode = { ...node };
    const newGrid = grid.slice();
    if (!node.isStart && !node.isFinish) {
      newNode.isWall = !node.isWall;
    }
    newGrid[row][col] = newNode;
    return newGrid;
  };

  const handleMouseDown = (row, col, isStart, isFinish, isWall) => {
    if (!algoFinished) {
      if (isStart) {
        setMouseDown({ node: "start", isDown: true });
      } else if (isFinish) {
        setMouseDown({ node: "finish", isDown: true });
      } else {
        const newGrid = toggleWalls(row, col);
        setGrid(newGrid);
        setMouseDown({ node: "wall", isDown: true });
      }
    }
  };

  const handleMouseUp = (row, col) => {
    setMouseDown({ node: null, isDown: false });
  };

  const handleMouseEnter = (row, col) => {
    if (isMouseDown.isDown) {
      switch (isMouseDown.node) {
        case "start":
          setSTART_NODE({ row, col });
          break;
        case "finish":
          setFINISH_NODE({ row, col });
          break;
        case "wall":
          const newGrid = toggleWalls(row, col);
          setGrid(newGrid);
          break;
        default:
          break;
      }
    }
  };

  const Nodes =
    grid.length > 0
      ? grid.map((row) => {
          return row.map((node, nodeIdx) => {
            const { row, col, isFinish, isStart, isWall } = node;
            return (
              <Node
                onMouseDown={() => handleMouseDown(row, col, isStart, isFinish)}
                onMouseUp={() => handleMouseUp(row, col)}
                onMouseEnter={() => handleMouseEnter(row, col)}
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
      <Navbar
        calculateDijkstra={calculateDijkstra}
        resetGrid={resetGrid}
        algoRunning={algoRunning}
      />
      <div className="grid">{renderRows}</div>
      <Footer />
    </>
  );
};

export default Pathfinder;
