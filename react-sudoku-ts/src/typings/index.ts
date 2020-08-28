export type GRID = [ROW, ROW, ROW, ROW, ROW, ROW, ROW, ROW, ROW]

export type SQUARE = [SQUARE_ROW, SQUARE_ROW, SQUARE_ROW]

export type SQUARE_ROW = [N, N, N]

export type ROW = [N, N, N, N, N, N, N, N, N]

export type BLOCK_COORDS = [INDEX, INDEX]

export type N = 0 | NUMBERS

export type INDEX = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export type NUMBERS = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

export type GAME_LEVEL = [EASY, NORMAL, HARD]

export type LEVEL = 1 | 5 | 10

export type EASY = 1

export type NORMAL = 5

export type HARD = 10
