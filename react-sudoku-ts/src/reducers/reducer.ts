import { AnyAction } from 'redux';

import { GRID } from 'typings';
import {
  fillSudokuGrid,
  removeNumbers,
  copiedGrid,
  compareColRow,
} from 'utils';

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

    case types.FILL_IN_BLOCK:
      if (state.gameGrid && state.solvedGrid) {
        if (
          state.solvedGrid[action.coords[0]][action.coords[1]] !== action.value
        ) {
          alert('Incorrect Option');
          return state;
        }
        state.gameGrid[action.coords[0]][action.coords[1]] = action.value;
        if (compareColRow(state.gameGrid, state.solvedGrid))
          alert('Completed Congratulations');
        return { ...state, gameGrid: [...state.gameGrid] as GRID };
      }
      return state;
    default:
      return state;
  }
}

export default reducer;
