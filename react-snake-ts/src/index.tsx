import React from 'react'
import ReactDOM from 'react-dom'
import { unregister } from './core'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles, Theme } from './styles'
import { Content, Title, Card } from './components'

ReactDOM.render(
  <>
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Content className="content">
        <Title className="title">Snake</Title>
        <Card className="card">Card</Card>
      </Content>
    </ThemeProvider>
  </>,
  document.getElementById('root')
)

unregister()
