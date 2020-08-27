import { AnyAction } from 'redux';

import { IReducer } from './interfaces';

import * as types from './types';
import { fillSudokuGrid } from 'utils';

const initialState: IReducer = {};

function reducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case types.CREATE_SUDOKU_GRID:
      return {
        ...state,
        grid: fillSudokuGrid(),
      };
    case types.SELECT_BLOCK_AT:
      return {
        ...state,
        selectBlock: action.coords,
      };
    default:
      return state;
  }
}

export default reducer;
