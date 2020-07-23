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

  // set 1 for alive 0 for dead
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
    // make a count of neighbors and get an array of
    // the position of the neighbor

    // arr[i][i] // self
    // arr[i][i + 1] // right
    // arr[i][i - 1] // left
    // arr[i - 1][i] // top
    // arr[i - 1][i - 1] // top left
    // arr[i - 1][i + 1] // top right
    // arr[i + 1][i] // bottom
    // arr[i + 1][i + 1] // bottom right
    // arr[i + 1][i - 1] // bottom left

    let neighbors = {
      right: {
        pos: [row, col + 1],
        val: this.board[row][col + 1]
      },
      left: {
        pos: [row, col - 1],
        val: this.board[row][col - 1]
      },
      top: {
        pos: [row - 1, col],
        val: this.board[row - 1][col]
      },
      bottom: {
        pos: [row + 1, col],
        val: this.board[row + 1][col]
      },
      topRight: {
        pos: [row - 1, col + 1],
        val: this.board[row - 1][col + 1]
      },
      bottomRight: {
        pos: [row + 1, col + 1],
        val: this.board[row + 1][col + 1]
      },
      topLeft: {
        pos: [row - 1, col - 1],
        val: this.board[row - 1][col - 1]
      },
      bottomLeft: {
        pos: [row + 1, col - 1],
        val: this.board[row + 1][col - 1]
      }
    }

    //  now we make an array of our valid neighbors
    //  this will be an array of neighbor objects and their respective positions
    //  and values

    let alive = 0
    for (let posish in neighbors) {
      let position = neighbors[posish]
      for (let item in position) {
        // this is an array
        let state = item.value  
        if (state === 1) {
          alive++
        }
      }
    }
    // this should give the count of alive neighbors
    return alive
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
    let board = this.board
    for (let k = 0; k < board.length; k++) {
      let row = board[k]
      for (let l = 0; l = row.length; l++) {
        let col = row[l]
        let neighborCount = livingNeighbors(row, col)
        if (neighborCount > 3) {
          newBoard[row][col] = 0
        } else if (neighborCount < 2) {
          newBoard[row][col] = 0
        } else if (neighborCount > 1 && neighborCount < 4) {
          newBoard[row][col] = 1
        }
      }
    }
    //
    // You need to:
    // 1. Count alive neighbors for all cells
    // 2. Set the next state of all cells in newBoard,
    // based on their current alive neighbors
    this.board = newBoard;
  }
}
