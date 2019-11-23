function createMaze(x, y) {
    let totalCells = x * y;

    let cells = [];
    let unvisited = [];

    for (let i = 0; i < y; i++) {

        cells[i] = [];

        unvisited[i] = [];

        for (let j = 0; j < x; j++) {
            cells[i][j] = [0, 0, 0, 0];
            unvisited[i][j] = true;
        }
    }

    let currentCell = [0, 0];
    // TODO CHeck this
    let path = [currentCell];

    unvisited[currentCell[0]][currentCell[1]] = false;
    let visited = 1;

    while (visited < totalCells) {
        let potential = [[currentCell[0] - 1, currentCell[1], 0, 2],      // top
            [currentCell[0], currentCell[1] + 1, 1, 3],               // right
            [currentCell[0] + 1, currentCell[1], 2, 0],               // bottom
            [currentCell[0], currentCell[1] - 1, 3, 1]];              // left

        let neighbors = [];

        for (let l = 0; l < 4; l++) {

            if (potential[l][0] > -1 &&     // Is the y value of the neighbor inside the maze?
                potential[l][0] < y &&      // Is the y value of the neighbor inside the maze?
                potential[l][1] > -1 &&     // Is the x value of the neighbor inside the maze?
                potential[l][1] < x &&      // Is the x value of the neighbor inside the maze?
                unvisited[potential[l][0]][potential[l][1]]) // Has the neighbor already been visited?

            {
                neighbors.push(potential[l]);
            }
        }
        if (neighbors.length) {

            let next = neighbors[Math.floor(Math.random() * neighbors.length)];
            cells[currentCell[0]][currentCell[1]][next[2]] = 1;

            cells[next[0]][next[1]][next[3]] = 1;
            unvisited[next[0]][next[1]] = false;

            visited++;
            currentCell = [next[0], next[1]];
            path.push(currentCell);

        } else {
            currentCell = path.pop();
        }
    }
    return cells;
}


let maze = createMaze(4, 4);

console.log(maze);
