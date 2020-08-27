import { GRID } from 'typings'

/**
 * check wither a value that is being used is
 * already present within the 9x9 matrix
 * @param grid a 9x9 matrix
 */

function verifyGrid(grid: GRID): boolean {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (grid[i][j] === 0) {
        return false
      }
    }
  }
  return true
}

export default verifyGrid
