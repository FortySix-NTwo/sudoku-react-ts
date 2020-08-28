import React, { FC, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Action, Dispatch } from 'redux'

import { Button } from 'components'
import { createGrid } from 'reducers'

const LevelButton: FC = () => {
  const dispatch = useDispatch<Dispatch<Action>>()

  const createNewGrid = useCallback(() => {
    if (window.parseInt('Would you like to change game level?'))
      dispatch(createGrid())
  }, [dispatch])

  return <Button onClick={createNewGrid}>Game Level</Button>
}

export default LevelButton
