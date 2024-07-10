let currentPlayer = "Red";
let gameBoard = [];
let gameOver = false;

// Initialize game board
for (let i = 0; i < 7; i++) {
  gameBoard[i] = [];
  for (let j = 0; j < 6; j++) {
    gameBoard[i][j] = null;
  }
}

// Function to handle column click
function handleClick(columnId) {
  if (gameOver) return;
  let column = document.getElementById(columnId);
  let rows = column.children;
  for (let i = 5; i >= 0; i--) {
    if (rows[i].innerHTML === "") {
      rows[i].innerHTML = `<span style="background-color: ${currentPlayer === "Red"? "red" : "yellow"};"></span>`;
      gameBoard[columnId.charAt(1) - 1][i] = currentPlayer;
      checkWin();
      currentPlayer = currentPlayer === "Red"? "Yellow" : "Red";
      document.getElementById("whosturn").innerHTML = `${currentPlayer}'s Turn`;
      break;
    }
  }
}

// Function to check for a win
function checkWin() {
  // Check horizontal wins
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 4; j++) {
      if (gameBoard[j][i] === gameBoard[j + 1][i] && gameBoard[j][i] === gameBoard[j + 2][i] && gameBoard[j][i] === gameBoard[j + 3][i] && gameBoard[j][i]!== null) {
        gameOver = true;
        alert(`Player ${gameBoard[j][i]} wins!`);
        return;
      }
    }
  }
  // Check vertical wins
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 3; j++) {
      if (gameBoard[i][j] === gameBoard[i][j + 1] && gameBoard[i][j] === gameBoard[i][j + 2] && gameBoard[i][j] === gameBoard[i][j + 3] && gameBoard[i][j]!== null) {
        gameOver = true;
        alert(`Player ${gameBoard[i][j]} wins!`);
        return;
      }
    }
  }
  // Check diagonal wins
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      if (gameBoard[i][j] === gameBoard[i + 1][j + 1] && gameBoard[i][j] === gameBoard[i + 2][j + 2] && gameBoard[i][j] === gameBoard[i + 3][j + 3] && gameBoard[i][j]!== null) {
        gameOver = true;
        alert(`Player ${gameBoard[i][j]} wins!`);
        return;
      }
    }
  }
  for (let i = 0; i < 4; i++) {
    for (let j = 3; j < 6; j++) {
      if (gameBoard[i][j] === gameBoard[i + 1][j - 1] && gameBoard[i][j] === gameBoard[i + 2][j - 2] && gameBoard[i][j] === gameBoard[i + 3][j - 3] && gameBoard[i][j]!== null) {
        gameOver = true;
        alert(`Player ${gameBoard[i][j]} wins!`);
        return;
      }
    }
  }
}

// Add event listeners to columns
for (let i = 1; i <= 7; i++) {
  document.getElementById(`c${i}`).addEventListener("click", () => handleClick(`c${i}`));
}