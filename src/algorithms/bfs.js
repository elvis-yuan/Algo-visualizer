//start node has a distance of 0 all other nodes are set to infinity
export function dijkstra(grid, startNode, finishNode) {
    const visitedNodeOrder = [];
    startNode.distance = 0;
    const unvisitedNodes = getNodes(grid);
    while (!!unvisitedNodes.length) {
        sortNodesByDistance(unvisitedNodes);
        const closestNode = unvisitedNodes.shift();
        if (closestNode.isWall) continue;
        if (closestNode.distance === Infinity) return visitedNodeOrder;
        closestNode.visited = true;
        visitedNodeOrder.push(closestNode);
        if (closestNode === finishNode) return visitedNodeOrder;
        updateUnvisitedNeighbors(closestNode, grid);
    }
}

function getNodes(grid) {
    const nodes = [];
    for (let row of grid) {
        for (let node of row) {
            nodes.push(node);
        }
    }
    return nodes;
}

//return all unvisited nodes in order of closest distance
function sortNodesByDistance(unvisitedNodes) {
    unvisitedNodes.sort((currentNode, nextNode) => currentNode.distance - nextNode.distance)
}

//increment each neighboring node by 1 and set their previous node to current node
function updateUnvisitedNeighbors(node, grid) {
    const unvisitedNeighborNodes = unvisitedNeighbors(node, grid);
    for (let neighbor of unvisitedNeighborNodes) {
        neighbor.distance = node.distance + 1;
        neighbor.previousNode = node;
    }
}


//find all neighboring nodes from given node
//return only those that have not been visited
function unvisitedNeighbors(node, grid) {
    const neighbors = [];
    const {
        col,
        row
    } = node;

    if (row > 0) neighbors.push(grid[row - 1][col]);
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
    if (col > 0) neighbors.push(grid[row][col - 1])
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);

    return neighbors.filter(neighbor => !neighbor.visited);
}

export function shortestPath(finishNode) {
    const shortestPathNodes = [];
    let currentNode = finishNode;
    while (currentNode !== null) {
        shortestPathNodes.push(currentNode);
        currentNode = currentNode.previousNode;
    }

    return shortestPathNodes.reverse();
}