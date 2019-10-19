import React, { useState, useRef, useEffect } from "react";
import Node from "./Node";
import "./pathfinder.css";

function Pathfinder(props) {
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    const nodes = [];
    for (let row = 0; row < 20; row++) {
      let currentRow = [];
      for (let col = 0; col < 50; col++) {
        currentRow.push(
          <Node
            key={row + col}
            isStart={row === 10 && col === 5}
            isFinish={row === 10 && col === 45}
          />
        );
      }
      nodes.push(currentRow);
    }
    setGrid(nodes);
  }, []);

  const renderRows =
    grid.length > 0
      ? grid.map((row, idx) => {
          return (
            <div className="row" key={idx}>
              {row}
            </div>
          );
        })
      : null;

  return <div className="grid">{renderRows}</div>;
}

export default Pathfinder;
