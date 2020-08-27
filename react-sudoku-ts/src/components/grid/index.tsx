import React, { FC, Children } from 'react'

import { default as Block } from './block'
import { Container, Row } from './styles'

const Grid: FC = () => {
  //TODO:

  return (
    <Container className="grid-container">
      {Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row className="grid-row-container">
            {Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <Block colIndex={colIndex} rowIndex={rowIndex} />
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  )
}

export default Grid