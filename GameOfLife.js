class GameOfLife {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = this.makeBoard();
  }

  /**
   * Returns a 2D Array
   */

  makeBoard(height, width) {
    height = this.height
    width = this.width
    let arr = []
    for (let i = 0; i < height; i++) {
      let row = []
      for (let j = 0; j < width; j++) {
        row.push(0)
      }
      arr.push(row)
    }
    return arr
  }

  getCell(row, col) {
    let board = this.board
    let cell = board[row][col]
    return cell
  }

  setCell(val, row, col) {
    let board = this.board
    board[row][col] = val
    console.log(board)
  }

  // 1 = 'alive' 0 = 'dead'
  toggleCell(row, col) {
    let board = this.board
    if (board[row][col] === 0) {
      board[row][col] = 1
    } else {
      board[row][col] = 0
    }
  }

  /**
   * Return the amount of living neighbors around a given coordinate.
   */

  livingNeighbors(row, col) {
    // TODO: Return the count of living neighbors.
  }

  /**
   * Given the present board, apply the rules to generate a new board
   */

  tick() {
    const newBoard = this.makeBoard();
    // TODO: Here is where you want to loop through all the cells
    // on the existing board and determine, based on it's neighbors,
    // whether the cell should be dead or alive in the new board
    // (the next iteration of the game)
    //
    // You need to:
    // 1. Count alive neighbors for all cells
    // 2. Set the next state of all cells in newBoard,
    // based on their current alive neighbors
    this.board = newBoard;
  }
}
