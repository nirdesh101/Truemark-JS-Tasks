// Get the maze container element
const mazeContainer = document.getElementById("maze");

//Create a 2D array to represent the maze
const mazeArray = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 0 ,0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 3, 1],
  [1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 0 ,0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 0, 0, 0, 1, 0, 1 ,1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1 ,0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1],
  [1, 0, 1, 0, 0, 0, 1 ,0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1 ,0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 1 ,0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1 ,0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 0, 0, 0, 0, 0, 0 ,0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1 ,1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1],
];

// Define the player's starting position
let playerPosition = [1, 1];

// Define the key's position
const keyPosition = [3, 17];
let hasKey = false;

// Remove the wall and key at the player's starting position
mazeArray[playerPosition[0]][playerPosition[1]] = 0;
mazeArray[keyPosition[0]][keyPosition[1]] = 0;

// Create the maze
function createMaze() {
  // Loop through each row and column in the mazeArray
  for (let i = 0; i < mazeArray.length; i++) {
    for (let j = 0; j < mazeArray[i].length; j++) {
      // Create a new div element to represent the maze cell
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.row = i;
      cell.dataset.col = j;

      // Set the cell's class based on the value in the mazeArray
      if (mazeArray[i][j] === 1) {
        cell.classList.add("wall");
      } else if (mazeArray[i][j] === 2) {
        cell.classList.add("end");
      }

      // Append the cell to the maze container
      mazeContainer.appendChild(cell);
    }
  }

  // Set the player's position in the maze
  const playerCell = document.querySelector(`[data-row="${playerPosition[0]}"][data-col="${playerPosition[1]}"]`);
  playerCell.classList.add("player");
}

// Move the player in the maze
function movePlayer(direction) {
  // Get the player's current position
  const [row, col] = playerPosition;

  // Determine the new position based on the direction
  let newRow = row;
  let newCol = col;
  switch (direction) {
    case "ArrowUp":
        newRow = row - 1;
        break;
        case "ArrowRight":
        newCol = col + 1;
        break;
        case "ArrowDown":
        newRow = row + 1;
        break;
        case "ArrowLeft":
        newCol = col - 1;
        break;
        default:
        return;
        }
        
        // Check if the new position is within the bounds of the maze
        if (newRow < 0 || newRow >= mazeArray.length || newCol < 0 || newCol >= mazeArray[0].length) {
        return;
        }
        
        // Check if the new position is a wall
        if (mazeArray[newRow][newCol] === 1) {
        return;
        }
        
        // Get the new cell and remove the player class from the old cell
        const newCell = document.querySelector(`[data-row="${newRow}"][data-col="${newCol}"]`);
        const oldCell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
        oldCell.classList.remove("player");
        
        // Update the player's position and add the player class to the new cell
        playerPosition = [newRow, newCol];
        newCell.classList.add("player");
        
        // Check if the player has picked up the key
        if (newRow === keyPosition[0] && newCol === keyPosition[1]) {
        hasKey = true;
        newCell.classList.remove("key");
        alert("You have picked up the key!");
        }
        
        // Check if the player has reached the end of the maze
        if (mazeArray[newRow][newCol] === 2) {
        if (hasKey) {
        alert("Congratulations, you have escaped the maze!");
        } else {
        alert("You need to find the key before you can escape!");
        }
        location.reload()
        }
        }
        
        // Add an event listener to the window object to listen for keydown events
        window.addEventListener("keydown", (event) => {
        movePlayer(event.key);
        });

        createMaze();