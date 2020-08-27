import { AnyAction } from 'redux';

import { fillSudokuGrid } from 'utils';

import { IReducer } from './interfaces';
import * as types from './types';

const initialState: IReducer = {};

function reducer(state = initialState, action: AnyAction): IReducer {
  switch (action.type) {
    case types.CREATE_SUDOKU_GRID:
      return {
        ...state,
        grid: fillSudokuGrid(),
      };

    case types.SELECT_BLOCK_AT:
      return { ...state, selectedBlock: action.coords };

    default:
      return state;
  }
}

export default reducer;
