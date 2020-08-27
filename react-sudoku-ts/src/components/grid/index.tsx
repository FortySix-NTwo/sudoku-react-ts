import React, { FC, Children, useEffect, useCallback } from 'react';
import { useMouseTrap } from 'react-hook-mousetrap';
import { useDispatch } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';

import Block from './block';
import { Container, Row } from './styles';
import { createGrid } from 'reducers';
import { INDEX } from 'typings';

const Grid: FC = () => {
  const dispatch = useDispatch<Dispatch<AnyAction>>();
  const create = useCallback(() => dispatch(createGrid()), [dispatch]);

  useEffect(() => {
    create();
  }, [create]);

  function moveDown() {
    console.log('down');
  }

  function moveLeft() {
    console.log('left');
  }

  function moveRight() {
    console.log('right');
  }

  function moveUp() {
    console.log('up');
  }

  return (
    <Container className="sudoku-container">
      {Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row className="sudoku-row-container">
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
  );
};

export default Grid;
