import React from "react";
import {Dropdown} from 'react-bootstrap'

const Navbar = props => {
  const { calculateDijkstra, resetGrid, algoRunning } = props;
  return (
    <div className="nav-bar">
      <p className="nav-header">ALGO-VISUALIZER</p>
      <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Select Algorithm
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Dijkstra</Dropdown.Item>
    <Dropdown.Item href="#/action-2">BFS</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
      <span className="start-button" onClick={calculateDijkstra}>
        <p>Visualize Dijkstra's Algorithm</p>
      </span>
      {algoRunning ? null : (
        <span className="reset-button" onClick={resetGrid}>
          Reset
        </span>
      )}
    </div>
  );
};

export default Navbar;
