import { Action } from 'redux';

import * as action from './types';

export const createGrid = (): Action => ({
  type: action.CREATE_SUDOKU_GRID,
});
