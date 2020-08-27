import { NUMBERS, SQUARE } from 'typings';

interface IInput {
  square: SQUARE;
  value: NUMBERS;
}
/**
 * verify if values reside within square
 * @param input 9X9 Sudoku Grid
 */
function isInSquare({ square, value }: IInput): boolean {
  return [...square[0], ...square[1], ...square[2]].includes(value);
}

export default isInSquare;
