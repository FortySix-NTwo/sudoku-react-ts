import fillSudokuGrid from './'

describe('fillSudokuGrid', () => {
  it('returns a new 9x9 sudoku grid', () => {
    const grid = fillSudokuGrid()
    for (let row in grid)
      for (let col in grid[row]) {
        expect(grid[row][col]).toBeGreaterThanOrEqual(1)
        expect(grid[row][col]).toBeLessThanOrEqual(9)
      }
  })
})
