import React from "react";

const Navbar = props => {
  const { calculateDijkstra, resetGrid, algoRunning } = props;
  return (
    <div className="nav-bar">
      <p className="nav-header">ALGO-VISUALIZER</p>
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
