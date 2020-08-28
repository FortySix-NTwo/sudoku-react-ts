import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { register, configureStore } from 'core'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles, Theme } from 'styles'
import { Card, Content, Grid, Title, NewButton, NumberButton } from 'components'

const { store, persistor } = configureStore()

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor(store)}>
        <Content className="content">
          <Title className="title">Sudoku</Title>
          <Card className="card">
            <NewButton />
            <Grid />
            <NumberButton />
          </Card>
        </Content>
      </PersistGate>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
)

register()
