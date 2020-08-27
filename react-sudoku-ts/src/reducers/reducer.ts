import { AnyAction } from 'redux';

import { fillSudokuGrid, removeNumbers, copiedGrid } from 'utils';

import { IReducer } from './interfaces';
import * as types from './types';

const initialState: IReducer = {};

function reducer(state = initialState, action: AnyAction): IReducer {
  switch (action.type) {
    case types.CREATE_SUDOKU_GRID:
      const solvedGrid = fillSudokuGrid();
      const gridCopy = copiedGrid(solvedGrid);
      const puzzleGrid = removeNumbers(gridCopy);
      const gameGrid = copiedGrid(puzzleGrid);
      return {
        ...state,
        puzzleGrid,
        solvedGrid,
        gameGrid,
      };

    case types.SELECT_BLOCK_AT:
      return { ...state, selectedBlock: action.coords };

    default:
      return state;
  }
}

export default reducer;
