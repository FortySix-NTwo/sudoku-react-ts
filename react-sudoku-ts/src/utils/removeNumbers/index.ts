import { GRID } from 'typings';
import { randomIndexGenerator, copiedGrid, solveGrid } from 'utils';
import global from 'global';

/**
 * remove numbers from grid in order to create
 * game logic for sudoku puzzle
 * @param grid 9x9 matrix
 * @param attempts number of attempts to solve
 */

function removeNumbers(grid: GRID, attempts = global.attempts): GRID {
  while (attempts > 0) {
    let row = randomIndexGenerator();
    let col = randomIndexGenerator();

    while (grid[row][col] === 0) {
      row = randomIndexGenerator();
      col = randomIndexGenerator();
    }

    const currentValues = grid[row][col];

    grid[row][col] = 0;

    const copiedValues = copiedGrid(grid);

    global.counter = 0;
    solveGrid(copiedValues);

    if (global.counter !== 1) {
      grid[row][col] = currentValues;
      attempts--;
    }
  }
  return grid;
}

export default removeNumbers;
