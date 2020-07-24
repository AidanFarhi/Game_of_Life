const width = 25;
const height = 20; 
/**
 * Create a Game of Life instance
 */
const gol = new GameOfLife(width, height);

/**
 * create a table and append to the DOM
 */

// Actual table cells
const tds = [];

// <table> element
const table = document.createElement('tbody');
// build a table row <tr>
for (let h = 0; h < height; h++) {
  const tr = document.createElement('tr');
  // build a table column <td>
  for (let w = 0; w < width; w++) {
    const td = document.createElement('td');
    // We'll put the coordinates on the cell
    // Element itself (using dataset),
    // letting us fetch it in a click listener later.
    td.dataset.row = h;
    td.dataset.col = w;
    tds.push(td);
    tr.append(td);
  }
  table.append(tr);
}
document.getElementById('board').append(table);

/**
 * Draws every cell from the gol instance into an actual, visible DOM element
 */

const paint = () => {
  let rows = Array.from(document.getElementsByTagName('tr'))
  rows.forEach(element => {
    let tdArray = Array.from(element.getElementsByTagName('td'))
    tdArray.forEach(td => {
      let cell = td
      let row = td.dataset.row
      let col = td.dataset.col
      let cellState = gol.getCell(row, col)
      if (cellState === 1) {
        cell.classList.add('alive')
      } else {
        cell.classList.remove('alive')
      }
    })
  });
};

paint()

/**
 * Event Listeners
 */

document.getElementById('board').addEventListener('click', (click) => {
  if (click.target.matches('td')) {
    let cell = click.target
    let row = cell.dataset.row
    let col = cell.dataset.col
    let status = gol.getCell(row, col)
    if (status === 1) {
      gol.setCell(0, row, col)
    } else {
      gol.setCell(1, row, col)
    }
  }
  paint()
});

document.getElementById('step_btn').addEventListener('click', (click) => {
  if (click.target.matches('#step_btn')) {
    console.log('hit')
    gol.tick()
    paint()
  }
});

let play = false
document.getElementById('play_btn').addEventListener('click', (click) => {
  if (click.target.matches('#play_btn') && !play) {
    play = true
    setInterval(() => {
      gol.tick()
      paint()
    }, 700);
  }
});

function getOneOrZero() {
  return Math.floor(Math.random() * Math.floor(2));
}

document.getElementById('random_btn').addEventListener('click', (click) => {
  if (click.target.matches('#random_btn')) {
    let rows = Array.from(document.getElementsByTagName('tr'))
    rows.forEach(element => {
      let tdArray = Array.from(element.getElementsByTagName('td'))
      tdArray.forEach(td => {
        let value = getOneOrZero()
        let row = td.dataset.row
        let col = td.dataset.col
        gol.setCell(value, row, col)
      })
    });
  }
  paint()
});

document.getElementById('clear_btn').addEventListener('click', (click) => {
  // TODO: Clear the board and paint
  if (click.target.matches('#clear_btn')) {
    let rows = Array.from(document.getElementsByTagName('tr'))
    rows.forEach(element => {
      let tdArray = Array.from(element.getElementsByTagName('td'))
      tdArray.forEach(td => {
        let row = td.dataset.row
        let col = td.dataset.col
        gol.setCell(0, row, col)
      })
    });
  }
  paint()
});
