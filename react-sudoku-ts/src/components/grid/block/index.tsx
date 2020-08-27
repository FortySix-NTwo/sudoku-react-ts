import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';

import { IReducer, selectBlock } from 'reducers';
import { Container } from './styles';
import { N, INDEX } from 'typings';

interface IProps {
  colIndex: INDEX;
  rowIndex: INDEX;
}

interface IState {
  isActive: boolean;
  value: N;
}

const Block: FC<IProps> = ({ rowIndex, colIndex }) => {
  const state = useSelector<IReducer, IState>(
    ({ gameGrid, selectedBlock }) => ({
      isActive: selectedBlock
        ? selectedBlock[0] === rowIndex && selectedBlock[1] === colIndex
        : false,
      value: gameGrid ? gameGrid[rowIndex][colIndex] : 0,
    })
  );

  const dispatch = useDispatch<Dispatch<AnyAction>>();

  function handleSelected() {
    if (!state.isActive) dispatch(selectBlock([rowIndex, colIndex]));
  }

  return (
    <Container
      active={state.isActive}
      className={`block-${rowIndex}-${colIndex}`}
      onClick={handleSelected}
    >
      {state.value === 0 ? '' : state.value}
    </Container>
  );
};

export default Block;
