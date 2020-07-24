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

  /**
   * Manual cell value edit. Takes (value, row, col).
   */
  
  setCell(val, row, col) {
    let board = this.board
    board[row][col] = val
    console.log(board)
  }

  /**
   * Toggles cell from 0 to 1 OR 1 to 0.
   */
  
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

  livingNeighbors(r, c) {
    let count = 0
    let arr = this.board
    if (!arr[r - 1] && !arr[c - 1]) {
      if (arr[r][c + 1] === 1) {
        count++
      }
      if (arr[r + 1][c] === 1) {
        count++
      }
      if (arr[r + 1][c + 1] === 1) {
        count++
      }
      return count
    }
    // upper right
    if (!arr[r - 1] && !arr[c + 1]) {
      if (arr[r][c - 1] === 1) {
        count ++
      }
      if (arr[r + 1][c] === 1) {
        count++
      }
      if (arr[r + 1][c - 1] === 1) {
        count++
      }
      return count
    }
    // middle top
    if (!arr[r - 1]) {
      if (arr[r][c - 1] === 1) {
        count++
      }
      if (arr[r][c + 1] === 1) {
        count++
      }
      if (arr[r + 1][c - 1] === 1) {
        count++
      }
      if (arr[r + 1][c] === 1) {
        count++
      }
      if (arr[r + 1][c + 1] === 1) {
        count++
      }
      return count
    }
    // bottom left
    if (!arr[r + 1] && !arr[c - 1]) {
      if (arr[r][c + 1] === 1) {
        count++
      }
      if (arr[r - 1][c] === 1) {
        count++
      }
      if (arr[r - 1][c + 1] === 1) {
        count++
      }
      return count
    }
    // bottom right
    if (!arr[r + 1] && !arr[c + 1]) {
      if (arr[r][c - 1] === 1) {
        count++
      }
      if (arr[r - 1][c] === 1) {
        count++
      }
      if (arr[r - 1][c - 1] === 1) {
        count++
      }
      return count
    }
    // bottom middle
    if (!arr[r + 1]) {
      if (arr[r][c - 1] === 1) {
        count++
      }
      if (arr[r][c + 1] === 1) {
        count++
      }
      if (arr[r - 1][c - 1] === 1) {
        count++
      }
      if (arr[r - 1][c] === 1) {
        count++
      }
      if (arr[r - 1][c + 1] === 1) {
        count++
      }
      return count
    }
    // middle left
    if (!arr[c - 1]) {
      if (arr[r][c + 1] === 1) {
        count++
      }
      if (arr[r - 1][c] === 1) {
        count++
      }
      if (arr[r - 1][c + 1] === 1) {
        count++
      }
      if (arr[r + 1][c] === 1) {
        count++
      }
      if (arr[r + 1][c + 1] === 1) {
        count++
      }
      return count
    }
    // middle right
    if (!arr[c + 1]) {
      if (arr[r][c - 1] === 1) {
        count++
      }
      if (arr[r - 1][c - 1] === 1) {
        count++
      }
      if (arr[r - 1][c] === 1) {
        count++
      }
      if (arr[r + 1][c - 1] === 1) {
        count++
      }
      if (arr[r + 1][c] === 1) {
        count++
      }
      return count
    }
    // any cell with 8 neighbors
    if (arr[r][c - 1] === 1) {
      count++
    }
    if (arr[r][c + 1] === 1) {
      count++
    }
    if (arr[r - 1][c - 1] === 1) {
      count++
    }
    if (arr[r - 1][c] === 1) {
      count++
    }
    if (arr[r - 1][c + 1] === 1) {
      count++
    }
    if (arr[r + 1][c - 1] === 1) {
      count++
    }
    if (arr[r + 1][c] === 1) {
      count++
    }
    if (arr[r + 1][c + 1] === 1) {
      count++
    }
    return count
  }

  /**
   * Given the present board, apply the rules to generate a new board
   */

  tick() {
    const newBoard = this.makeBoard();
    let board = this.board
    for (let k = 0; k < board.length; k++) {
      let row = board[k]
      for (let l = 0; l < row.length; l++) {
        let neighborCount = this.livingNeighbors(k, l)
        let cell = board[k][l]
        if (neighborCount > 3 && cell === 1) {
          newBoard[k][l] = 0
          continue
        } else if (neighborCount < 2 && cell === 1) {
          newBoard[k][l] = 0
          continue
        } else if (neighborCount === 3 && cell === 0) {
          newBoard[k][l] = 1
          continue
        } else if (neighborCount > 1 && neighborCount < 4 && cell === 1) {
          newBoard[k][l] = 1
          continue
        }
      }
    }
    this.board = newBoard;
  }
}
