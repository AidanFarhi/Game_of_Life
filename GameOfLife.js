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

    //  now we make an array of our valid neighbors and their coordinates
    //  this will be an array of neighbor objects and their respective positions
    //  and values

    let filtered = []
    for (let posish in neighbors) {
      let position = neighbors[posish]
      let push = true
      for (let item in position) {
        // this is an array
        let pos = item.pos   
        if (pos[0] === 'undefined' || pos[1] === 'undefined') {
          push = false
        }
      }
      if (push) {
        filtered.push(posish)
      }
    }
    // this should give the count of alive neighbors
    return filtered.length
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
