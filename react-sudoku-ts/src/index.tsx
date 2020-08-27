import React from 'react'
import ReactDOM from 'react-dom'
import { unregister } from 'core'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles, Theme } from 'styles'
import { Card, Content, Grid, Title } from 'components'

ReactDOM.render(
  <>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Content className="content">
        <Title className="title">Sudoku</Title>
        <Card className="card">
          <Grid />
        </Card>
      </Content>
    </ThemeProvider>
  </>,
  document.getElementById('root')
)

unregister()
