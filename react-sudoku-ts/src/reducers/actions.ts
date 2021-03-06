import { Action, AnyAction } from 'redux'

import { BLOCK_COORDS, NUMBERS } from 'typings'

import * as types from './types'

export const createGrid = (): Action => ({ type: types.CREATE_SUDOKU_GRID })

export const selectBlock = (coords: BLOCK_COORDS): AnyAction => ({
  coords,
  type: types.SELECT_BLOCK_AT,
})

export const fillInBlock = (
  value: NUMBERS,
  coords: BLOCK_COORDS
): AnyAction => ({
  coords,
  type: types.FILL_IN_BLOCK,
  value,
})
