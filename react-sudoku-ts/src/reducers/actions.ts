import { Action, AnyAction } from 'redux';

import { BLOCK_COORDS } from 'typings';

import * as action from './types';

export const createGrid = (): Action => ({
  type: action.CREATE_SUDOKU_GRID,
});

export const selectBlock = (coords: BLOCK_COORDS): AnyAction => ({
  coords,
  type: action.SELECT_BLOCK_AT,
});
