import { GRID, INDEX } from 'typings';

/**
 * a function to copy a 9x9 matrix
 * @param grid 9x9 matrix
 */

function copyGrid(grid: GRID): GRID {
  const copiedGrid: GRID = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  for (let row: INDEX = 0; row < 9; row++) {
    for (let col: INDEX = 0; col < 9; col++)
      copiedGrid[row][col] = grid[row][col];
  }

  return copiedGrid;
}

export default copyGrid;
