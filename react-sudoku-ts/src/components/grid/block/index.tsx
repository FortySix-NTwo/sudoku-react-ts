import React, { FC } from 'react';

import { Container } from './styles';

interface IProps {
  colIndex: number;
  rowIndex: number;
}

const Block: FC<IProps> = ({ rowIndex, colIndex }) => {
  return <Container className={`block-${rowIndex}-${colIndex}`}></Container>;
};

export default Block;
