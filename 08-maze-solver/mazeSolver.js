var directions = [
    [-1, 0], // top
    [0, 1], // right
    [1, 0], // down
    [0, -1], // left
];
function logMaze(maze) {
    console.log(maze.join('\n'));
}
function walk(maze, wall, curr, end, seen, path) {
    // 1. base cases
    // out of bounds
    if (curr.x < 0 || curr.x >= maze[0].length ||
        curr.y < 0 || curr.y >= maze.length) {
        return false;
    }
    // wall
    if (maze[curr.y][curr.x] == wall) {
        return false;
    }
    // found the end
    if (curr.x == end.x && curr.y == end.y) {
        path.push(curr);
        return true;
    }
    // already visited
    if (seen[curr.y][curr.x]) {
        return false;
    }
    // 2. recursion
    // pre
    path.push(curr);
    seen[curr.y][curr.x] = true;
    // recurse
    for (var i = 0; i < directions.length; i++) {
        var _a = directions[i], x = _a[0], y = _a[1];
        if (walk(maze, wall, { x: curr.x + x, y: curr.y + y }, end, seen, path))
            return true;
    }
    //post
    path.pop();
}
function solve(maze, wall, start, end) {
    var seen = [];
    for (var i = 0; i < maze.length; i++) {
        seen[i] = new Array();
        for (var j = 0; j < maze[0].length; j++) {
            seen[i][j] = false;
        }
    }
    var path = [];
    walk(maze, wall, start, end, seen, path);
    return path;
}
var maze = [
    "#####E#",
    "#     #",
    "#S#####",
];
logMaze(maze);
console.log(solve(maze, '#', { x: 1, y: 2 }, { x: 5, y: 0 }));
var maze1 = [
    "###S#E#",
    "#   # #",
    "# ### #",
    "#     #",
    "#######",
];
logMaze(maze1);
console.log(solve(maze1, '#', { x: 3, y: 0 }, { x: 5, y: 0 }));
