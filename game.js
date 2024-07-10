document.addEventListener('DOMContentLoaded', () => {
  const columns = document.querySelectorAll('.column');
  const whosTurn = document.getElementById('whosturn');
  let currentPlayer = 'Red';
  let gameBoard = [];

  // Initialize game board
  for (let i = 0; i < 7; i++) {
    gameBoard.push([]);
    for (let j = 0; j < 6; j++) {
      gameBoard[i].push(null);
    }
  }

  columns.forEach((column, columnIndex) => {
    column.addEventListener('click', () => {
      const cells = column.querySelectorAll('p');
      for (let i = cells.length - 1; i >= 0; i--) {
        if (!cells[i].style.backgroundColor) {
          cells[i].style.backgroundColor = currentPlayer.toLowerCase();
          gameBoard[columnIndex][i] = currentPlayer.toLowerCase();
          currentPlayer = currentPlayer === 'Red' ? 'Yellow' : 'Red';
          whosTurn.textContent = `${currentPlayer}'s Turn`;

          // Check for winner after placing a new dot
          if (checkWinner(gameBoard)) {
            announceWinner(currentPlayer === 'Red' ? 'Yellow' : 'Red');
            endGame();
          }
          break;
        }
      }
    });
  });

  // Function to check for winner
  function checkWinner(board) {
    // Check horizontal wins
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 4; j++) {
        if (board[j][i] === board[j + 1][i] && board[j][i] === board[j + 2][i] && board[j][i] === board[j + 3][i] && board[j][i] !== null) {
          return true;
        }
      }
    }

    // Check vertical wins
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === board[i][j + 1] && board[i][j] === board[i][j + 2] && board[i][j] === board[i][j + 3] && board[i][j] !== null) {
          return true;
        }
      }
    }

    // Check diagonal wins (top left to bottom right)
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 4; j++) {
        if (board[j][i] === board[j + 1][i + 1] && board[j][i] === board[j + 2][i + 2] && board[j][i] === board[j + 3][i + 3] && board[j][i] !== null) {
          return true;
        }
      }
    }

    // Check diagonal wins (bottom left to top right)
    for (let i = 0; i < 3; i++) {
      for (let j = 3; j < 7; j++) {
        if (board[j][i] === board[j - 1][i + 1] && board[j][i] === board[j - 2][i + 2] && board[j][i] === board[j - 3][i + 3] && board[j][i] !== null) {
          return true;
        }
      }
    }

    return false;
  }

  // Function to announce winner
  function announceWinner(winner) {
    alert(`${winner} Wins!`);
  }

  // Function to handle end game (e.g., disable clicks, display message)
  function endGame() {
    columns.forEach(column => column.removeEventListener('click', () => {}));
    alert('Game Over!');
  }
});