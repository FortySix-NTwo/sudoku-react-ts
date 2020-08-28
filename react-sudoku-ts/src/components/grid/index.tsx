import React, { FC, Children, useEffect, useCallback } from 'react'
import useMousetrap from 'react-hook-mousetrap'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch, AnyAction } from 'redux'

import { createGrid, IReducer, selectBlock, fillInBlock } from 'reducers'
import { INDEX, BLOCK_COORDS, NUMBERS, N } from 'typings'

import Block from './block'
import { Container, Row } from './styles'

interface IState {
  selectedBlock?: BLOCK_COORDS
  selectedValue: N
}

const Grid: FC = () => {
  const state = useSelector<IReducer, IState>(
    ({ selectedBlock, gameGrid }) => ({
      selectedBlock,
      selectedValue:
        gameGrid && selectedBlock
          ? gameGrid[selectedBlock[0]][selectedBlock[1]]
          : 0,
    })
  )

  const dispatch = useDispatch<Dispatch<AnyAction>>()
  const create = useCallback(() => dispatch(createGrid()), [dispatch])

  useEffect(() => {
    create()
  }, [create])

  const fillBlock = useCallback(
    (n: NUMBERS) => {
      if (state.selectedBlock && state.selectedValue === 0)
        dispatch(fillInBlock(n, state.selectedBlock))
    },
    [dispatch, state.selectedBlock, state.selectedValue]
  )

  function moveDown() {
    if (state.selectedBlock && state.selectedBlock[0] < 8)
      dispatch(
        selectBlock([
          (state.selectedBlock[0] + 1) as INDEX,
          state.selectedBlock[1],
        ])
      )
  }

  function moveLeft() {
    if (state.selectedBlock && state.selectedBlock[1] > 0)
      dispatch(
        selectBlock([
          state.selectedBlock[0],
          (state.selectedBlock[1] - 1) as INDEX,
        ])
      )
  }

  function moveRight() {
    if (state.selectedBlock && state.selectedBlock[1] < 8)
      dispatch(
        selectBlock([
          state.selectedBlock[0],
          (state.selectedBlock[1] + 1) as INDEX,
        ])
      )
  }

  function moveUp() {
    if (state.selectedBlock && state.selectedBlock[0] > 0)
      dispatch(
        selectBlock([
          (state.selectedBlock[0] - 1) as INDEX,
          state.selectedBlock[1],
        ])
      )
  }

  useMousetrap('1', () => fillBlock(1))
  useMousetrap('2', () => fillBlock(2))
  useMousetrap('3', () => fillBlock(3))
  useMousetrap('4', () => fillBlock(4))
  useMousetrap('5', () => fillBlock(5))
  useMousetrap('6', () => fillBlock(6))
  useMousetrap('7', () => fillBlock(7))
  useMousetrap('8', () => fillBlock(8))
  useMousetrap('9', () => fillBlock(9))

  useMousetrap('down', moveDown)
  useMousetrap('left', moveLeft)
  useMousetrap('right', moveRight)
  useMousetrap('up', moveUp)

  return (
    <Container className="grid-container">
      {Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row className="grid-row-container">
            {Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <Block
                  colIndex={colIndex as INDEX}
                  rowIndex={rowIndex as INDEX}
                />
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  )
}

export default Grid
