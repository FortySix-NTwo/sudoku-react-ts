import { BLOCK_COORDS, GRID } from 'typings';

export interface IReducer {
  puzzleGrid?: GRID;
  solvedGrid?: GRID;
  gameGrid?: GRID;
  selectedBlock?: BLOCK_COORDS;
}
